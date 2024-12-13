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

// Create indicators dynamically:
function createIndicators() {
  console.log(slider);
  const numSlides = Math.ceil(slider.scrollWidth / cardWith);
  for (let n = 0; n < numSlides; n++) {
    const indicator = document.createElement("div");
    indicator.classList.add("indicator");

    indicator.addEventListener("click", () => {
      currentSlide = i;
      currentPosition = -currentSlide * cardWith; // Correctly calculate position
      updateSliderPosition(); // Update slider after updating currentSlide
    });

    indicatorsContainer.appendChild(indicator);
  }
  updateIndicators(); // Initialize indicators on first load
};


document.addEventListener('DOMContentLoaded', createIndicators());


// COUNTDOWN SCRIPT
const targetDate = new Date('2025-01-01T00:00:00Z').getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // countdownElement.innerHTML = `${days}d ${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
    countdownDaysElem.innerHTML = `${days}d `;
    countdownHoursElem.innerHTML = `${hours.toString().padStart(2, '0')}h`;
    countdownMinutesElem.innerHTML = `${minutes.toString().padStart(2, '0')}m`;
    countdownSecondsElem.innerHTML = `${seconds.toString().padStart(2, '0')}s`;

    if (timeLeft <= 0) {
        clearInterval(intervalId);
        countdownElement.innerHTML = 'Countdown ended!';
    }
};