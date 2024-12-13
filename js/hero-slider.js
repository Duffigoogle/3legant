const carouselSlide = document.querySelector('.carousel-slide');
const slides = Array.from(carouselSlide.children);
let counter = 0;
const imageWidth = 1400; // Match container width
const maxSlides = slides.length;

carouselSlide.style.width = `${maxSlides * imageWidth}px`; // Set carousel width

// Indicator elements (assuming you have these in your HTML)
const indicatorsContainer = document.querySelector('.carousel-indicators'); // Select the container for indicators

function createIndicators() {  //Creates indicator elements
    for (let i=0; i<maxSlides; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        indicator.addEventListener('click', ()=>{
            counter=i;
            carouselSlide.style.transform = `translateX(-${counter * imageWidth}px)`;
            updateIndicators();
        });
        indicatorsContainer.appendChild(indicator);
    };
};

function updateIndicators() { //Updates the active class for indicators
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === counter);
    });
};

function nextSlide() {
  counter = (counter + 1) % maxSlides; // Using modulo for efficient looping
  carouselSlide.style.transform = `translateX(-${counter * imageWidth}px)`;
  updateIndicators(); // Update indicators after slide change
}


setInterval(nextSlide, 3000); // Change 3000 (3 seconds) to adjust interval

createIndicators(); // Call this to create indicators initially
updateIndicators(); // And make sure the first indicator is active


