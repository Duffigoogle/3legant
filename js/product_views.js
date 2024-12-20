// Sample product data (replace with your actual data)
const products = [
  // ... your product objects
]; // Your array of product objects

// Get references to the grid container, view buttons, and sort dropdown
const productGrid = document.getElementById('product-grid');
const grid3x3Btn = document.getElementById('grid-3x3');
const grid4x4Btn = document.getElementById('grid-4x4');
const grid2x2Btn = document.getElementById('grid-2x2');
const listViewBtn = document.getElementById('list-view');
const sortSelect = document.getElementById('sort-select');

const categoryCheckboxes = document.querySelectorAll('.category-item input[type="checkbox"]');
// This variable likely holds a NodeList of checkbox elements. A NodeList is a collection of DOM elements, often returned by methods like querySelectorAll. Each element in this NodeList represents a checkbox for selecting a product category.

categoryCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    filterProducts();
  });
});


function filterProducts() {
  const selectedCategories = Array.from(categoryCheckboxes)
    // Array.from(categoryCheckboxes): This converts the NodeList into a regular JavaScript array. This is essential because NodeList objects don't have access to array methods like filter and map directly.
    // This code snippet retrieves the values of all checked category checkboxes and stores them in an array called selectedCategories
    .filter(checkbox => checkbox.checked)
    // .filter(checkbox => checkbox.checked): The .filter() method creates a new array containing only the elements that pass a given condition. In this case, the condition is checkbox.checked. This means only checkboxes that have the checked property set to true (i.e., they are checked) will be included in the new array.
    .map(checkbox => checkbox.value);
  // .map(checkbox => checkbox.value): The .map() method creates a new array by applying a function to each element of an existing array. Here, it takes each checked checkbox (from the result of the filter operation) and extracts its value attribute, adding it to the new array.

  let filteredProducts = [];
  if (selectedCategories.includes('all')) {
    filteredProducts = products; // Show all products
  }


  else if (selectedCategories.length === 0) { // If no categories are selected, show all products.
    filteredProducts = products;
  }


  else {
    filteredProducts = products.filter(product => selectedCategories.includes(product.category));

  }
  displayProducts(filteredProducts, currentView);

}

// ... (your displayProducts function from previous responses)
let currentView = 'grid-4x4'; // Keep track of the currently selected view.



// Function to render the product grid
function displayProducts(products, view) {
  productGrid.innerHTML = ''; // Clear the grid

  products.forEach(product => {
    let productHTML = '';

    if (view === 'list') {  // List view
      productHTML = `
              <div class="flex items-center border-b border-gray-200 py-4">
                  <img src="${product.image}" alt="${product.name}" class="w-24 h-24 mr-4">
                  <div>
                      <h3 class="text-lg font-medium">${product.name}</h3>
                      <p class="text-gray-600">$${product.price}</p>
                      <p>${product.description}</p> <button>Add to Cart</button> </div> 
              </div> 
              <div class="" id=${product.id}>
                <div class="h-[450px] bg-cover bg-center bg-no-repeat flex flex-col justify-between p-4" style="background-image: url(${product.image})">
                  <div class="">
                    <div class="flex justify-between items-center">
                      <p class="py-1 px-4 bg-white text-[#141718] rounded-md">
                        HOT
                      </p>
                      <i class="fa-regular fa-heart fa-2x p-2 bg-white rounded-3xl shadow-xl shadow-white"></i>
                    </div>
                  </div>
                  <button class="w-full bg-black text-white text-center rounded-lg py-3">
                    Add to cart
                  </button> 
                </div>
                <div class="py-2">
                  <span class="text-2xl font-bold">&#9733;</span>
                  <span class="text-2xl font-bold">&#9733;</span>
                  <span class="text-2xl font-bold">&#9733;</span>
                  <span class="text-2xl font-bold">&#9733;</span>
                  <span class="text-2xl font-bold">&#9733;</span>
                  <p class="text-[#141718] font-normal text-xl py-1">
                    ${product.name}
                  </p>
                  <p class="text-[#121212] text-md font-[Inter] font-bold">
                    $${product.price}
                    <span class="pl-4 text-[#6C7275] line-through">$400.00</span>
                  </p>
                </div>
              </div>
            `;
    } else { // Grid view
      productHTML = `
              <div class="product-card">
                  <img src="${product.image}" alt="${product.name}">
                  <h3>${product.name}</h3>
                  <p>$${product.price}</p> <button>Add to Cart</button>
              </div>
          `;
    }

    productGrid.innerHTML += productHTML;
  });

  applyGridLayout(view);
}

function applyGridLayout(view) {
  if (view === 'grid-3x3') {
    productGrid.classList = 'grid grid-cols-3 gap-4'; // Tailwind classes for 3x3 grid
  } else if (view === 'grid-4x4') {
    productGrid.classList = 'grid grid-cols-4 gap-4'; // Tailwind classes for 4x4 grid
  } else if (view === 'grid-2x2') {
    productGrid.classList = 'grid grid-cols-2 gap-4'; // Tailwind classes for 2x2 grid
  }
  else if (view === 'list') {
    productGrid.classList = 'grid grid-cols-1 gap-4'; // Or no grid classes if you prefer
  };
};


// Initial display (default view)
displayProducts(products, 'grid-4x4'); // Default to 4x4 grid



// Event listeners for view buttons
grid3x3Btn.addEventListener('click', () => displayProducts(products, 'grid-3x3'));
grid4x4Btn.addEventListener('click', () => displayProducts(products, 'grid-4x4'));
grid2x2Btn.addEventListener('click', () => displayProducts(products, 'grid-2x2'));
listViewBtn.addEventListener('click', () => displayProducts(products, 'list'));

