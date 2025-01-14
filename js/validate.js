
// Get the form element
const form = document.querySelector('form');

// Add an event listener for the 'submit' event
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get all the input fields
  const firstName = document.getElementById('first_name');
  const lastName = document.getElementById('last_name');
  const phone = document.getElementById('phone');
  const email = document.getElementById('email');
  const address = document.getElementById('address');
  const country = document.getElementById('country');
  const city = document.getElementById('city');
  const state = document.getElementById('state');
  const zipCode = document.getElementById('zip_code');
  const cardNumber = document.getElementById('card_number');
  const expirationDate = document.getElementById('expiration_date');
  const cvv = document.getElementById('cvv');

  // Perform validation checks
  let isValid = true;

  // First name
  if (firstName.value.trim() === '') {
    showError(firstName, 'First name is required');
    isValid = false;
  } else {
    clearError(firstName);
  }


  // Last name
  if (lastName.value.trim() === '') {
    showError(lastName, 'Last name is required');
    isValid = false;
  } else {
    clearError(lastName);
  }


  //Phone number validation
  if (phone.value.trim() === '') {
    showError(phone, 'Phone number is required');
    isValid = false;
  } else if (!/^\d{10}$/.test(phone.value.trim())) { //checks for only 10 digits
    showError(phone, 'Invalid phone number format');
    isValid = false;
  }
  else {
    clearError(phone);
  }

  // Email validation
  if (email.value.trim() === '') {
    showError(email, 'Email is required');
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
    showError(email, 'Invalid email format');
    isValid = false;
  } else {
    clearError(email);
  }

  //Address
  if (address.value.trim() === '') {
    showError(address, 'Address is required');
    isValid = false;
  } else {
    clearError(address);
  }

  //Country
  if (country.value.trim() === '') {
    showError(country, 'Country is required');
    isValid = false;
  } else {
    clearError(country);
  }

  //City
  if (city.value.trim() === '') {
    showError(city, 'City is required');
    isValid = false;
  } else {
    clearError(city);
  }


  //State
  if (state.value.trim() === '') {
    showError(state, 'State is required');
    isValid = false;
  } else {
    clearError(state);
  }


  //Zip Code
  if (zipCode.value.trim() === '') {
    showError(zipCode, 'Zip Code is required');
    isValid = false;
  } else {
    clearError(zipCode);
  }



  //Card Number
  if (cardNumber.value.trim() === '') {
    showError(cardNumber, 'Card number is required');
    isValid = false;
  } else if (!/^\d{16}$/.test(cardNumber.value.trim())) { //Checks for 16 digits
    showError(cardNumber, 'Invalid card number format');
    isValid = false;
  }
  else {
    clearError(cardNumber);
  }



  //Expiration date
  if (expirationDate.value.trim() === '') {
    showError(expirationDate, 'Expiration date is required');
    isValid = false;
  } else {
    clearError(expirationDate);
  }



  //CVV
  if (cvv.value.trim() === '') {
    showError(cvv, 'CVV is required');
    isValid = false;
  } else if (!/^\d{3,4}$/.test(cvv.value.trim())) {// Checks for 3 or 4 digits
    showError(cvv, 'Invalid cvv format')
    isValid = false;
  }
  else {
    clearError(cvv);
  }



  // If all validations pass, submit the form
  if (isValid) {
    form.submit(); // or perform any other action
    alert("Form submitted successfully!");
  }
});


// Function to display error messages
function showError(input, message) {
  const errorSpan = input.nextElementSibling;

  if (errorSpan && errorSpan.classList.contains('error-message')) {
    errorSpan.textContent = message;
  } else {
    const errorSpan = document.createElement('span');
    errorSpan.classList.add('error-message');
    errorSpan.textContent = message;

    input.parentNode.insertBefore(errorSpan, input.nextSibling);
  }
  input.classList.add('error-border');

}

// Function to clear error messages
function clearError(input) {
  const errorSpan = input.nextElementSibling;
  if (errorSpan && errorSpan.classList.contains('error-message')) {
    errorSpan.textContent = '';
  }
  input.classList.remove('error-border');

};


const paymentMethods = document.querySelectorAll('input[name="payment_method"]');
const cardDetails = document.getElementById('card_details'); // Add this ID to the card details container
const displayPaymentMethod = document.getElementById('display_payment_method');


paymentMethods.forEach(method => {
    method.addEventListener('change', () => {
        if (method.id === 'card_credit' && method.checked) {
            cardDetails.style.display = 'block'; // Show card details
            displayPaymentMethod.innerHTML = method.id.toUpperCase();
        } else if(method.id === 'paypal' && method.checked){
          displayPaymentMethod.innerHTML = method.id.toUpperCase();
          cardDetails.style.display = 'none';  // Hide card details
        } else {
            cardDetails.style.display = 'none';  // Hide card details
        }
    });
});