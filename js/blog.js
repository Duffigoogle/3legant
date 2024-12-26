let blogs = []; // Initialize as an empty array
// Your array of product objects

let currentView = 'grid-3x3'; // Set a default view; 'grid-4x4', 'grid-3x3', 'grid-2x2', 'list' 
const blogCardContainer = document.getElementById("blog-card-container");

// Select the buttons
const allBlogButton = document.getElementById('all_blogs');
const featuredButton = document.getElementById('featured');

// Get references to the grid container, view buttons, and sort dropdown
const blogGrid = document.getElementById('blog-container');
const grid3x3Btn = document.getElementById('grid-3x3');
const grid4x4Btn = document.getElementById('grid-4x4');
const grid2x2Btn = document.getElementById('grid-2x2');
const listViewBtn = document.getElementById('list-view');
const sortSelect = document.getElementById('sort-select');
const filterHeading = document.getElementById('filter-heading');
const categoryHeading = document.getElementById('category-heading');



const categoryCheckboxes = document.querySelectorAll('.category-item input[type="checkbox"]');
// This variable likely holds a NodeList of checkbox elements. A NodeList is a collection of DOM elements, often returned by methods like querySelectorAll. Each element in this NodeList represents a checkbox for selecting a product category.


function filterProducts() {
  const selectedCategories = Array.from(categoryCheckboxes)
    // Array.from(categoryCheckboxes): This converts the NodeList into a regular JavaScript array. This is essential because NodeList objects don't have access to array methods like filter and map directly.
    // This code snippet retrieves the values of all checked category checkboxes and stores them in an array called selectedCategories
    .filter(checkbox => checkbox.checked)
    // .filter(checkbox => checkbox.checked): The .filter() method creates a new array containing only the elements that pass a given condition. In this case, the condition is checkbox.checked. This means only checkboxes that have the checked property set to true (i.e., they are checked) will be included in the new array.
    .map(checkbox => checkbox.value);
  // .map(checkbox => checkbox.value): The .map() method creates a new array by applying a function to each element of an existing array. Here, it takes each checked checkbox (from the result of the filter operation) and extracts its value attribute, adding it to the new array.

  let filteredBlogs = [];
  if (selectedCategories.includes('all') || selectedCategories.length === 0) {
    // If no categories are selected, show all products.
    filteredBlogs = blogs; // Show all products
  }  else {
    filteredBlogs = blogs.filter(blog => selectedCategories.includes(blog.category));

  }
  displayProducts(filteredBlogs, currentView);

}

// Function to handle button clicks and update active state
function handleBlogButtonClick(event) {
  // Remove 'active' class from both buttons
  allBlogButton.classList.remove('active');
  featuredButton.classList.remove('active');

  // Add 'active' class to the clicked button
  event.target.classList.add('text-black');

  // Here you would add logic to filter blog posts based on the active button
  //  For example, fetching different data or filtering existing data.
}


// Add click listeners to the buttons
if (allBlogButton) {
    allBlogButton.addEventListener('click', handleBlogButtonClick);
} else {
    console.warn("All blog button not found");
}
if (featuredButton) {
  featuredButton.addEventListener('click', handleBlogButtonClick);
} else {
    console.warn("All Featured button not found");
}


// Initial setup: make "All Blog" active by default
if (allBlogButton) {
    allBlogButton.classList = "text-black font-bold underline underline-offset-8";  
    // allBlogButton.classList.add("text-black");
    // allBlogButton.classList.add("font-bold");
    // allBlogButton.classList.add("underline");
    // allBlogButton.classList.add("underline-offset-8");
} 


// Function to render the product grid OR list
function displayProducts(blogsToDisplay, view) {
  blogGrid.innerHTML = ''; // Clear the grid
  
  // Check if productsToDisplay is actually an array and not empty:
  if (!Array.isArray(blogsToDisplay) || blogsToDisplay.length === 0) {
    blogGrid.innerHTML = '<p>No blogs to display.</p>'; // Or handle it differently
    // console.log(!Array.isArray(productsToDisplay));
    // console.log(productsToDisplay.length === 0);
    // console.log(!Array.isArray(productsToDisplay) || productsToDisplay.length === 0)
    return; // Important: Stop the function execution here
  };


  blogsToDisplay.forEach(blog => {
    let blogHTML = '';

    if (view === 'list') {  // List view
      blogHTML = `
             <a href="#" class="cursor-pointer hover:shadow-md border">
                <div id="blog-card-container " class="flex items-center border-b border-gray-200 py-4">
                  <img src="${blog.image}" alt="${blog.title}" class="w-24 h-24 mr-4">
                  <div class="">
                      <h3 class="text-lg font-medium font-[Poppins] ">${blog.title}</h3>
                      <p class="text-sm font-[Inter] py-3 text-[#6C7275]">${blog.date}</p>
                  </div> 
                </div> 
             </a>
            `;
    } else { // Grid view
      blogHTML = `
            <a href="#" class="cursor-pointer rounded-2xl overflow-hidden hover:shadow-md">
              <div id="blog-card-container" class="">
                <img src="${blog.image}" alt="${blog.title}" class="w-full">
                <div class="py-4 px-2">
                  <h3 class="text-xl font-medium font-[Poppins] leading-[28px] w-4/5">${blog.title}</h3>
                  <p class="text-sm text-[#6C7275] font-[Inter] py-3">${blog.date}</p>
                </div>
              </div>
            </a>
          `;
    }

    blogGrid.innerHTML += blogHTML;
  });

  applyGridLayout(view); // apply default view
  updateViewButtonStyles(grid3x3Btn); // update default view button styles
};

function updateViewButtonStyles(activeButton) {
  const viewButtons = [grid3x3Btn, grid4x4Btn, grid2x2Btn, listViewBtn];
  viewButtons.forEach((button) => {
    button.classList.remove("active-view");  // Remove only "active-view"
    button.classList.remove("bg-[#377dff]"); // Remove background color class
    button.classList.remove("text-white");  // Remove text color class
    console.log("Remove,:", button)
  });
  activeButton.classList.add("active-view"); // Add active-view class
  activeButton.classList.add("bg-[#377dff]"); // Add background color class
  activeButton.classList.add("text-white");   // Add text color class
  activeButton.classList.add("p-2");   // Add padding
};


function applyGridLayout(view) {
  if (view === 'grid-3x3') {
    blogGrid.classList = 'grid grid-cols-3 gap-8'; // Tailwind classes for 3x3 grid
  } else if (view === 'grid-4x4') {
    blogGrid.classList = 'grid grid-cols-4 gap-14'; // Tailwind classes for 4x4 grid
  } else if (view === 'grid-2x2') {
    blogGrid.classList = 'grid grid-cols-2 gap-20'; // Tailwind classes for 2x2 grid
  }
  else if (view === 'list') {
    blogGrid.classList = 'grid grid-cols-1 gap-8'; // Or no grid classes if you prefer

  };
}

// Fetch the shop.json file
fetch('../products/blog.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    console.log(data.articles);
    // Update the products array with fetched data
    blogs = data.articles; // Assign the fetched data to products. NO push


    // Display products using the current view or a default
    displayProducts(blogs, currentView);
    console.log("DEFAULT VIEW : ", currentView, blogs);
    // updateViewButtonStyles(grid3x3Btn); // Or whichever button corresponds to your 'currentView' default


    // Convert NodeList to Array using Array.from()
    const categoryCheckboxArray = Array.from(categoryCheckboxes); 
    //Add event listeners to filter by category
    categoryCheckboxArray.forEach(checkbox => {
      checkbox.addEventListener('change', filterProducts); // Call filterProducts function whenever checkboxes change
     });


    // Now after fetching, add event listeners
    // Ensure the displayProducts function is defined before this
    grid3x3Btn.addEventListener('click', () => {
      currentView = 'grid-3x3';
      displayProducts(blogs, currentView);
      updateViewButtonStyles(grid3x3Btn); 
    });

    grid4x4Btn.addEventListener('click', () => {
      currentView = 'grid-4x4';
      displayProducts(blogs, currentView);
      updateViewButtonStyles(grid4x4Btn); 
    });

    grid2x2Btn.addEventListener('click', () => {
      currentView = 'grid-2x2';
      displayProducts(blogs, currentView);
      updateViewButtonStyles(grid2x2Btn); 
    });

    listViewBtn.addEventListener('click', () => {
      currentView = 'list';
      displayProducts(blogs, currentView);
      updateViewButtonStyles(listViewBtn); 
    });

    sortSelect.addEventListener('change', () => {
      // Get the selected sorting option
      const selectedOption = sortSelect.value;

      let sortedBlogs = [...blogs]; //create a copy to avoid directly modify original products.

      switch (selectedOption) {
        case 'price-low-to-high':
          sortedBlogs.sort((a, b) => a.price - b.price);
          break;

        case 'price-high-to-low':
          sortedBlogs.sort((a, b) => b.price - a.price);
          break;

        case 'title-a-to-z':
          sortedBlogs.sort((a, b) => a.title.localeCompare(b.title));
          break;

        case 'title-z-to-a':
          sortedBlogs.sort((a, b) => b.title.localeCompare(a.title));
          break;
        // Add more cases for other sorting options
        default:
          sortedBlogs = [...blogs]; // show all products
      }
      displayProducts(sortedBlogs, currentView); // re-render the sorted products

    });

  })
  .catch(error => {
    console.error('Error loading blog.json:', error);
    // Handle the error, e.g., display an error message to the user
    blogGrid.innerHTML = '<p>Error loading blogs. Please try again later.</p>';

  });

  
  // Error Handling: Includes a .catch block to handle potential errors during the fetch process, providing a better user experience. It logs the error to the console and displays an error message in the product grid.
  // Default View: Sets a default view (grid-4x4) so products are displayed even if currentViewisn't set initially.
  // Simplified Fetch: Uses a relative path for shop.json and combines the status check with the JSON parsing.
  // Sorting: Adds sorting functionality based on the selected sort option using switch statement. It's important to create a copy of the products array using spread syntax [...products] or products.slice() before sorting to prevent modifying the original order of products.
  // Filtering: Adds filtering functionality to display products according to checked categories using the filterProducts() method which filters product based on selected categories. It also handles the cases when "all" is selected or no category is selected.
  // Event Listeners after Fetch: Moved the event listeners for the view buttons inside the .then block after the fetch. This is crucial. The event listeners need the products data to be available. If they are added before the fetch completes, they won't work correctly.
  // Updated Event Listeners for Filtering: Ensures filtering event listeners are correctly added to update the product display whenever checkboxes change by calling filterProducts() inside the change event listeners.