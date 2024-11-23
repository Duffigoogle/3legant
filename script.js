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
})
