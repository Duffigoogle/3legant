//
// COUNTDOWN SCRIPT
//

// COUNTDOWN SCRIPT
let countdownDaysElem = document.getElementById("days");
let countdownHoursElem = document.getElementById("hours");
let countdownMinutesElem = document.getElementById("minutes");
let countdownSecondsElem = document.getElementById("seconds");
let countdownElement = document.getElementById("countdown");


const targetDate = new Date('2025-12-01T00:00:00Z').getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // countdownElement.innerHTML = `${days}d ${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
  countdownDaysElem.innerHTML = `${days} `;
  countdownHoursElem.innerHTML = `${hours.toString().padStart(2, '0')}`;
  countdownMinutesElem.innerHTML = `${minutes.toString().padStart(2, '0')}`;
  countdownSecondsElem.innerHTML = `${seconds.toString().padStart(2, '0')}`;

  if (timeLeft <= 0) {
    clearInterval(intervalId);
    countdownElement.innerHTML = 'Countdown ended!';
  }
};


const intervalId = setInterval(updateCountdown, 1000);
updateCountdown();