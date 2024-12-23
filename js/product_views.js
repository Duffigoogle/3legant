let products = []; // Initialize as an empty array
// Your array of product objects

let currentView = 'grid-3x3'; // Set a default view; 'grid-4x4', 'grid-3x3', 'grid-2x2', 'list' 
const cardContainer = document.getElementById("card-container");

// Get references to the grid container, view buttons, and sort dropdown
const productGrid = document.getElementById('product-grid');
const grid3x3Btn = document.getElementById('grid-3x3');
const grid4x4Btn = document.getElementById('grid-4x4');
const grid2x2Btn = document.getElementById('grid-2x2');
const listViewBtn = document.getElementById('list-view');
const sortSelect = document.getElementById('sort-select');
const filterHeading = document.getElementById('filter-heading');
const categoryHeading = document.getElementById('category-heading');
const asideMenu = document.getElementById('aside_menu');


const categoryCheckboxes = document.querySelectorAll('.category-item input[type="checkbox"]');
// This variable likely holds a NodeList of checkbox elements. A NodeList is a collection of DOM elements, often returned by methods like querySelectorAll. Each element in this NodeList represents a checkbox for selecting a product category.


function displayLikes(noOfLikes) {
  let rating = Math.round(noOfLikes);
  let stars = ''; // Start with an empty string
  for (let n = 0; n < rating; n++) {
    stars += '&#9733;'; // Add a star for each like
  }
  return stars; //Return the start string
};


function filterProducts() {
  const selectedCategories = Array.from(categoryCheckboxes)
    // Array.from(categoryCheckboxes): This converts the NodeList into a regular JavaScript array. This is essential because NodeList objects don't have access to array methods like filter and map directly.
    // This code snippet retrieves the values of all checked category checkboxes and stores them in an array called selectedCategories
    .filter(checkbox => checkbox.checked)
    // .filter(checkbox => checkbox.checked): The .filter() method creates a new array containing only the elements that pass a given condition. In this case, the condition is checkbox.checked. This means only checkboxes that have the checked property set to true (i.e., they are checked) will be included in the new array.
    .map(checkbox => checkbox.value);
  // .map(checkbox => checkbox.value): The .map() method creates a new array by applying a function to each element of an existing array. Here, it takes each checked checkbox (from the result of the filter operation) and extracts its value attribute, adding it to the new array.

  let filteredProducts = [];
  if (selectedCategories.includes('all') || selectedCategories.length === 0) {
    // If no categories are selected, show all products.
    filteredProducts = products; // Show all products
  }  else {
    filteredProducts = products.filter(product => selectedCategories.includes(product.category));

  }
  displayProducts(filteredProducts, currentView);

}


// Function to render the product grid OR list
function displayProducts(productsToDisplay, view) {
  productGrid.innerHTML = ''; // Clear the grid
  
  // Check if productsToDisplay is actually an array and not empty:
  if (!Array.isArray(productsToDisplay) || productsToDisplay.length === 0) {
    productGrid.innerHTML = '<p>No products to display.</p>'; // Or handle it differently
    // console.log(!Array.isArray(productsToDisplay));
    // console.log(productsToDisplay.length === 0);
    // console.log(!Array.isArray(productsToDisplay) || productsToDisplay.length === 0)
    return; // Important: Stop the function execution here
  };


  productsToDisplay.forEach(product => {
    const stars = displayLikes(product.rating); // Get the stars for this review
    let productHTML = '';

    if (view === 'list') {  // List view
      productHTML = `
              <div class="flex items-center border-b border-gray-200 py-4">
                  <img src="${product.image}" alt="${product.name}" class="w-24 h-24 mr-4">
                  <div>
                      <h3 class="text-lg font-medium">${product.name}</h3>
                      <p class="text-gray-600">$${product.price}</p>
                      <p>${product.description}</p> 
                      <button class="px-8 bg-black text-white text-center rounded-lg py-3 cursor-pointer shadow-md">Add to Cart</button> 
                    </div> 
              </div> 
            `;
    } else { // Grid view
      productHTML = `
            <div id="card-container" class="">
              <div class="border h-[450px] bg-cover bg-center bg-no-repeat flex flex-col justify-between p-4"
                style="background-image: url(${product.image});">
                <div class="">
                  <div class="flex justify-between items-center">
                      <p class="py-1 px-4 bg-white text-[#141718] rounded-md">NEW</p>
                        <!-- <i
                          class="fa-regular fa-heart fa-2x p-2 bg-white rounded-3xl shadow-xl shadow-white"
                        ></i> -->
                  </div>
                </div>
                    <!-- <button
                      class="w-full bg-black text-white text-center rounded-lg py-3"
                    >Add to cart</button> -->
              </div>
              <div class="py-2 flex flex-col justify-around">
                <span class="text-2xl font-bold">${stars}</span>
                <p class="text-[#141718] font-normal text-xl py-1">${product.name}</p>
                <p class="text-[#121212] text-md font-[Inter] font-bold">
                  $${product.price}
                  <span class="pl-4 text-[#6C7275] line-through">$13.00</span>
                </p>
                <p class="">${product.description}</p>
                <button class="w-full bg-black text-white text-center rounded-lg py-3 cursor-pointer shadow-md">
                  Add to cart
                </button>
                <button class="w-full bg-white text-black text-center rounded-lg py-2 flex items-center justify-center gap-2 shadow-md cursor-pointer text-md mt-4">
                  <i class="fa-regular fa-heart fa-2x"></i> Wishlist
                </button>
              </div>
            </div>
          `;
    }

    productGrid.innerHTML += productHTML;
  });

  applyGridLayout(view); // apply default view
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
};

console.log(asideMenu)

function applyGridLayout(view) {
  if (view === 'grid-3x3') {
    productGrid.classList = 'grid grid-cols-3 gap-4'; // Tailwind classes for 3x3 grid
  } else if (view === 'grid-4x4') {
    productGrid.classList = 'grid grid-cols-4 gap-4'; // Tailwind classes for 4x4 grid
    asideMenu.classList.remove("hidden");
  } else if (view === 'grid-2x2') {
    productGrid.classList = 'grid grid-cols-2 gap-4'; // Tailwind classes for 2x2 grid
    cardContainer.classList.add("grid grid-cols-2 gap-2");
    asideMenu.classList.add("hidden");
  }
  else if (view === 'list') {
    productGrid.classList = 'grid grid-cols-1 gap-4'; // Or no grid classes if you prefer
    asideMenu.classList.add("hidden");

  };

  // if (view === 'grid-3x3') {
  //   asideMenu.classList.remove("hidden");
  // } else { // Hide asideMenu for all other views
  //   asideMenu.classList.add("hidden");
  // };
}

// Fetch the shop.json file
fetch('../products/shop.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    console.log(data.products);
    // Update the products array with fetched data
    products = data.products; // Assign the fetched data to products. NO push


    // Display products using the current view or a default
    displayProducts(products, currentView);
    console.log("DEFAULT VIEW : ", currentView, products);
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
      displayProducts(products, currentView);
      updateViewButtonStyles(grid3x3Btn); 
    });

    grid4x4Btn.addEventListener('click', () => {
      currentView = 'grid-4x4';
      displayProducts(products, currentView);
      updateViewButtonStyles(grid4x4Btn); 
    });

    grid2x2Btn.addEventListener('click', () => {
      currentView = 'grid-2x2';
      displayProducts(products, currentView);
      updateViewButtonStyles(grid2x2Btn); 
    });

    listViewBtn.addEventListener('click', () => {
      currentView = 'list';
      displayProducts(products, currentView);
      updateViewButtonStyles(listViewBtn); 
    });

    sortSelect.addEventListener('change', () => {
      // Get the selected sorting option
      const selectedOption = sortSelect.value;

      let sortedProducts = [...products]; //create a copy to avoid directly modify original products.

      switch (selectedOption) {
        case 'price-low-to-high':
          sortedProducts.sort((a, b) => a.price - b.price);
          break;

        case 'price-high-to-low':
          sortedProducts.sort((a, b) => b.price - a.price);
          break;

        case 'name-a-to-z':
          sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
          break;

        case 'name-z-to-a':
          sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
          break;
        // Add more cases for other sorting options
        default:
          sortedProducts = [...products]; // show all products
      }
      displayProducts(sortedProducts, currentView); // re-render the sorted products

    });

  })
  .catch(error => {
    console.error('Error loading shop.json:', error);
    // Handle the error, e.g., display an error message to the user
    productGrid.innerHTML = '<p>Error loading products. Please try again later.</p>';

  });

  
  // Error Handling: Includes a .catch block to handle potential errors during the fetch process, providing a better user experience. It logs the error to the console and displays an error message in the product grid.
  // Default View: Sets a default view (grid-4x4) so products are displayed even if currentViewisn't set initially.
  // Simplified Fetch: Uses a relative path for shop.json and combines the status check with the JSON parsing.
  // Sorting: Adds sorting functionality based on the selected sort option using switch statement. It's important to create a copy of the products array using spread syntax [...products] or products.slice() before sorting to prevent modifying the original order of products.
  // Filtering: Adds filtering functionality to display products according to checked categories using the filterProducts() method which filters product based on selected categories. It also handles the cases when "all" is selected or no category is selected.
  // Event Listeners after Fetch: Moved the event listeners for the view buttons inside the .then block after the fetch. This is crucial. The event listeners need the products data to be available. If they are added before the fetch completes, they won't work correctly.
  // Updated Event Listeners for Filtering: Ensures filtering event listeners are correctly added to update the product display whenever checkboxes change by calling filterProducts() inside the change event listeners.