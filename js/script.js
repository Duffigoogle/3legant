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

//
// CART SCRIPTS


// counter

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
    }
  });

  plusButton.addEventListener('click', () => {
    input.value = parseInt(input.value) + 1;
    // Call a function to update cart totals, etc.
    updateCart(); 
  });
});




function updateCart () {
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


  // Update cart summary
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
      console.log("express");
      shippingCost = parseFloat(shippingPrice.replace('+$', ''));
      shippingCost += 15.00;
    }
    else if(shippingPrice.startsWith('%')){
      console.log("express");
      shippingCost = parseFloat(shippingPrice.replace('%', ''));
      let pickUpPercent = 21/100;
      percentIncrease = subtotal * pickUpPercent;
      shippingCost += subtotal * percentIncrease;
    }
    else {
      shippingCost = parseFloat(shippingPrice.replace('$', ''));
    }

  }

  total = subtotal + shippingCost;
  totalSummary.textContent = '$' + total.toFixed(2);

};


// Change Tabs and Display Corresponding Section

// const steps = document.querySelectorAll('.steps-section > div');
const displaySections = document.querySelectorAll(".main > .page");
console.log(displaySections);
const tabButtons = document.querySelectorAll('.steps-section > button'); 
console.log(tabButtons);
// Select the tab buttons


// Hide all steps initially except the first one
displaySections.forEach((sectionPage, index) => {
  if (index > 0) {
    sectionPage.style.display = 'none';
    // step.classList.add('bg-red-300');
  }
});



// Add click event listeners to tab buttons
tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Hide all steps
    displaySections.forEach(sectionPage => {
      sectionPage.style.display = 'none';
    });

    // Show the selected step
    displaySections[index].style.display = 'block';

    // Update active tab styling (optional - but good UX)
    tabButtons.forEach(btn => {
      btn.classList.remove('active-tab');  // Remove 'active' class from all tabs
    });
    button.classList.add('active-tab'); // Add 'active' class to the clicked tab
  });
});
