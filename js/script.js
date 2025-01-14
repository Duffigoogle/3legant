const inputElem = document.getElementById("search-bar");
let searchButton = document.querySelector(".search-btn");
let closeIcon = document.getElementById("close-icon");
let userIcon = document.getElementById("user-icon");
let bagIcon = document.getElementById("bag-icon");
let navBar = document.getElementById("nav-menu");
let hamMenuIcon = document.getElementById("ham-menu");



// function showSearch() {
//   inputElem.classList.remove("hidden");
//   searchButton.classList.add("hidden");
// }

// function hideSearch() {
//   inputElem.classList.add("hidden");
//   searchButton.classList.remove("hidden");
// }

// inputElem.addEventListener("focus", showSearch);
// inputElem.addEventListener("blur", hideSearch);


function showMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("");
  menu.classList.remove("hidden");
}

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("left-[0%]");
  closeIcon.classList.toggle("hidden");
  // bagIcon.classList.toggle("hidden");
  // userIcon.classList.toggle("hidden");
  // searchButton.classList.toggle("hidden");
  hamMenuIcon.classList.toggle("hidden");
});


closeIcon.addEventListener("click", () => {
  closeIcon.classList.toggle("hidden");
  hamMenuIcon.classList.toggle("hidden");
  navBar.classList.toggle("left-[0%]");
})


let dropdownElem = document.querySelector(".shop");
let dropdownBox = document.querySelector(".drop-down");
let chevronElem = document.querySelector(".fa-chevron-down");


// dropdownElem.addEventListener("click", () => {
//   dropdownBox.classList.toggle("hidden");
// })

dropdownElem.addEventListener("mouseover", () => {
  dropdownBox.style.display = "block";
  dropdownBox.style.backgroundColor = "#377DFF";
  chevronElem.style.transform = "rotate(180deg)";
})

dropdownElem.addEventListener("mouseout", () => {
  dropdownBox.style.display = "";
  chevronElem.style.transform = "rotate(0deg)";
});



// functionality for slider in the accessories page - New Arrival section
const slider = document.querySelector(".slider");
// const indicatorsContainer = document.querySelector(".slider-indicators");
const cardWith = 280; //Adjust according to your card with + margins (260px + 20px)
let currentPosition = 0;
let currentSlide = 0; // Track the current slide
// createIndicators();


const slideLeft = () => {
  if (currentSlide > 0) {
    currentSlide--;
    currentPosition = -currentSlide * cardWith;
    updateSliderPosition();
  }
};

const slideRight = () => {
  const maxSlide = slider.scrollWidth / cardWith - 1; // Calculate last possible slide index
  if (currentSlide < maxSlide) {
    currentSlide++;
    currentPosition = -currentSlide * cardWith;
    updateSliderPosition();
  }
};


const updateSliderPosition = () => {
  slider.style.transform = `translateX(${currentPosition}px)`;
  updateIndicators(); // Update indicators *after* position change

};

function updateIndicators() {
  const indicators = indicatorsContainer.querySelectorAll('.indicator'); // Select all indicators within the container

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentSlide);
  });
};

// // Create indicators dynamically:
// function createIndicators() {
//   console.log(slider);
//   const numSlides = Math.ceil(slider.scrollWidth / cardWith);
//   for (let n = 0; n < numSlides; n++) {
//     const indicator = document.createElement("div");
//     indicator.classList.add("indicator");

//     indicator.addEventListener("click", () => {
//       currentSlide = i;
//       currentPosition = -currentSlide * cardWith; // Correctly calculate position
//       updateSliderPosition(); // Update slider after updating currentSlide
//     });

//     indicatorsContainer.appendChild(indicator);
//   }
//   updateIndicators(); // Initialize indicators on first load
// };


// document.addEventListener('DOMContentLoaded', createIndicators());

// // const productCard = document.querySelector(".product-card");
// const productCards = document.querySelectorAll(".slider > div");
// console.log(productCard);

// // Add click event listeners to tab buttons
// productCards.forEach((card, index) => {
//   card.addEventListener('onmouseover', () => {
//     // Hide all steps
//     displaySections.forEach(addCartElem => {
//       addCartElem.style.display = 'none';
//     });

//     // Show the selected step
//     displaySections[index].style.display = 'block';

//     // Update active tab styling (optional - but good UX)
//     tabButtons.forEach(btn => {
//       btn.classList.remove('active-tab');  // Remove 'active' class from all tabs
//     });
//     button.classList.add('active-tab'); // Add 'active' class to the clicked tab
//   });
// });

/**********************************/
// CART & ORDER SECTIONS SCRIPTS
/**********************************/

// Find all quantity inputs
const quantityInputs = document.querySelectorAll('tbody input[type="number"]');
console.log(quantityInputs);
updateCart(); 


quantityInputs.forEach(input => {
  // Find the parent container for the buttons and input
  const parent = input.parentElement;

  // Find the minus and plus buttons within the *parent*
  const minusButton = parent.querySelector('.minus-btn');
  const plusButton = parent.querySelector('.plus-btn');

  // Add event listeners to the buttons
  minusButton.addEventListener('click', () => {
    // console.log("clicked");
    // console.log(input.value);
    let currentValue = parseInt(input.value);
    if (currentValue > 1) { // Prevent quantity from going below 1
      input.value = currentValue - 1;
      // Call a function to update cart totals, etc.
      updateCart(); 
      // Call updateOrderSummary whenever cart quantities or shipping is updated.
      updateOrderSummary(); // Update order summary on quantity change
    }
  });

  plusButton.addEventListener('click', () => {
    input.value = parseInt(input.value) + 1;
    // Call a function to update cart totals, etc.
    updateCart(); 
  });
});



// cart update funtion to update shoping cart resources
function updateCart() {
  const cartItems = document.querySelectorAll('tbody tr');
  let subtotal = 0;
  let total = 0;


  cartItems.forEach(item => {
    const quantityInput = item.querySelector('input[type="number"]');
    const priceElement = item.querySelector('.price');
    const subtotalElement = item.querySelector('.subtotal');

    const quantity = parseInt(quantityInput.value);
    const price = parseFloat(priceElement.textContent.replace('$', '')); // Remove '$' and convert to number

    const itemSubtotal = quantity * price;
    subtotalElement.textContent = '$' + itemSubtotal.toFixed(2); // Format as currency
    subtotal += itemSubtotal;
  });



  /****************************************/
  // Update cart summary
  /****************************************/

  // Replace with your actual selector
  const subTotalSummary = document.querySelector('.sub-total-summary');

  // Replace with your actual selector
  const totalSummary = document.querySelector('.total-summary');

  // Format as currency
  subTotalSummary.textContent = '$' + subtotal.toFixed(2);

  // Calculate and update total based on selected shipping method (example logic)
  const shippingMethod = document.querySelector('input[name="payment"]:checked');
  let shippingCost = 0;
  if (shippingMethod) {
    const shippingPrice = shippingMethod.parentElement.nextElementSibling.textContent;
    console.log(shippingPrice);
    if (shippingPrice.startsWith('+')) {
      console.log("express!");
      shippingCost = parseFloat(shippingPrice.replace('+$', ''));
    }
    else if(shippingPrice.startsWith('%')){
      console.log("pickUp1");
      shippingCost = parseFloat(shippingPrice.replace('%', ''));
      let pickUpPercent = 21/100;
      shippingCost = subtotal * pickUpPercent;
    }
    else {
      shippingCost = parseFloat(shippingPrice.replace('$', ''));
      console.log("free shipping!");
    }

  }

  //   shippingMethods.forEach(method => {  // Iterate to find checked and get value
  //     if (method.checked) {
  //         const shippingPrice = method.parentElement.nextElementSibling.textContent;
          
  //         if (shippingPrice.startsWith('+')) {
  //             shippingCost = parseFloat(shippingPrice.replace('+$', ''));
  //         } else if (shippingPrice.startsWith('%')) {
  //           shippingCost = parseFloat(shippingPrice.replace('%', ''));
  //           let percentage = 21/100
  //             shippingCost = subtotal * percentage ; // Correct percentage calculation
  //         } else {
  //             shippingCost = parseFloat(shippingPrice.replace('$', ''));
  //         }
  //     }
  // });

  total = subtotal + shippingCost;
  totalSummary.textContent = '$' + total.toFixed(2);

};

// Add event listeners to shipping method radio buttons to recalculate total of cart and order on change:
const shippingMethods = document.querySelectorAll('input[name="payment"]');
shippingMethods.forEach(method => {
  method.addEventListener('change', () => {  // Update both cart and order summary
      updateCart();
      updateOrderSummary(); // Call updateOrderSummary here as well
  });
});



/****************/
// Change Tabs and Display Corresponding Section
/****************/

// const steps = document.querySelectorAll('.steps-section > div');
const displaySections = document.querySelectorAll(".main > .page");
console.log(displaySections);
const tabButtons = document.querySelectorAll('.steps-section > button'); 
console.log(tabButtons);


// Grab all the buttons that we need to transition between the different sections
const shoppingCartTabButton = document.getElementById("shopping-cart-top-tab-btn");
const checkoutButton = document.getElementById('checkout-btn');
const placeOrderButton = document.getElementById('place-order-btn');
const purchaseHistoryButton = document.getElementById('purchase-history-btn');
const cartButtons = [shoppingCartTabButton, checkoutButton, placeOrderButton];


// Hide all steps/sections initially except the first one
displaySections.forEach((sectionPage, index) => {
  if (index > 0) {
    sectionPage.style.display = 'none';
    // step.classList.add('bg-red-300');
  }
});


// Add click event listeners to tab buttons
cartButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Hide all steps/sections
    displaySections.forEach(sectionPage => {
      sectionPage.style.display = 'none';
    });

    // Show the selected step/section
    displaySections[index].style.display = 'block';
    displaySections[index].scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling

    // Update active tab styling
    tabButtons.forEach(tabBtn => {   // Iterate over tabButtons
      tabBtn.classList.remove('active-tab');  // Remove 'active' class from all tabs
    });
    tabButtons[index].classList.add('active-tab'); // Add 'active-tab' to the corresponding tabButton
  });
});


  /****************************************/
  // Update order summary
  /****************************************/

  function updateOrderSummary() {
    const cartItems = document.querySelectorAll('tbody tr'); // Get cart items
    console.log(cartItems);
    const orderSummaryTbody = document.querySelector('#order_summary tbody'); // Get order summary tbody
    orderSummaryTbody.innerHTML = ''; // Clear existing order summary items

    let orderSubtotal = 0;

    cartItems.forEach(item => {
      const clonedRow = item.cloneNode(true); // Clone the entire row
      
      // Update subtotal calculation (using potentially updated values)
      const quantity = parseInt(clonedRow.querySelector('input[type="number"]').value);  //Get from cloned row
      const price = parseFloat(clonedRow.querySelector('.price').textContent.replace('$', ''));
      
      clonedRow.querySelector('.price').style.display = 'none';
      const itemSubtotal = quantity * price;
      clonedRow.querySelector('.subtotal').textContent = '$' + itemSubtotal.toFixed(2);
      orderSubtotal += itemSubtotal;

      // const productNameElem = clonedRow.querySelector('.product-name');
      // const productName = productNameElem ? productNameElem.textContent : ''; // Handle null

      // const productImageElem = clonedRow.querySelector('.product-img');
      // const productImage = productImageElem ? productImageElem.src : ''; // Handle null;
      // const productImage_altText = productImageElem ? productImageElem.alt : ''; // Handle null;
        
    
      
      // **** Update Plus/Minus Button Event Listeners in Cloned Row ****
      const minusButton = clonedRow.querySelector('.minus-btn');
      const plusButton = clonedRow.querySelector('.plus-btn');
      const quantityInput = clonedRow.querySelector('input[type="number"]');
      
      minusButton.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
            updateCart();         // Update cart totals
            updateOrderSummary();  // Update order summary
        }
    });

    plusButton.addEventListener('click', () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
        updateCart();         // Update cart totals
        updateOrderSummary();  // Update order summary
    });

    //Append the *cloned* row to the order summary:
    orderSummaryTbody.appendChild(clonedRow); 
      

        // // Create a new row for the order summary
        // const newRow = document.createElement('tr');
        // newRow.classList.add('border-b-2', 'border-[#E8ECEF]');
        // newRow.innerHTML = `
        //      <td class="flex items-center gap-2">
        //             <img
        //               src="${productImage}"
        //               alt="${productImage_altText}"
        //             />
        //             <div>
        //               <h6 class="text-base font-semibold text-[#141718]">
        //               ${productName}
        //               </h6>
        //               <p class="text-[#6C7275]">color: black</p>
        //               <div
        //               class="border w-min flex items-center justify-center gap-2 rounded-lg overflow-hidden shadow-sm"
        //             >
        //               <button class="minus-btn px-2 py-1 cursor-pointer text-xl">
        //                 -
        //               </button>
        //               <input
        //                 type="number"
        //                 name="quantity"
        //                 id="quantity"
        //                 value=${quantity}
        //                 min="1"
        //                 class="outline-none border-none text-center w-10 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-lg"
        //               />
        //               <button class="plus-btn px-2 cursor-pointer text-xl">
        //                 +
        //               </button>
        //             </div>
        //             </div>
        //           </td>
        //           <td class="price text-lg flex hidden">$${price.toFixed(2)}</td>
        //           <td class="subtotal text-right text-lg font-bold">
        //             $${itemSubtotal.toFixed(2)}
        //           </td>
        //           <td>
        //             <button
        //             class="text-sm flex items-center gap-2 cursor-pointer"
        //           >
        //             <i class="fa-solid fa-xmark"></i>
        //           </button>
        //           </td>
        // `;
        // orderSummaryTbody.appendChild(newRow);

        orderSubtotal += itemSubtotal;
    });



     // Update Order Summary Totals
    const subTotalSummary = document.querySelector('#order_summary .sub-total-summary');
    const shippingSummary = document.querySelector('#order_summary .shipping_summary');
    const totalSummary = document.querySelector('#order_summary .total-summary');


    subTotalSummary.textContent = '$' + orderSubtotal.toFixed(2);

    // Calculate and update total based on selected shipping method 
    const shippingMethod = document.querySelector('input[name="payment"]:checked');
    let shippingCost = 0;
    if (shippingMethod) {
      const shippingPrice = shippingMethod.parentElement.nextElementSibling.textContent;
      if (shippingPrice.startsWith('+')) {
        shippingCost = parseFloat(shippingPrice.replace('+$', ''));
      }
       else if(shippingPrice.startsWith('%')){
        shippingCost = parseFloat(shippingPrice.replace('%', ''));
        let pickUpPercent = 21/100;
         shippingCost = orderSubtotal * pickUpPercent;
      }
      else {
        shippingCost = parseFloat(shippingPrice.replace('$', ''));
      }
    }


      shippingSummary.textContent = '$' + shippingCost.toFixed(2);

    const orderTotal = orderSubtotal + shippingCost;
    totalSummary.textContent = '$' + orderTotal.toFixed(2);


}

// Call updateOrderSummary initially and whenever the cart updates
updateOrderSummary();


