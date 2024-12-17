let reviewContainer = document.getElementById("review-container");

const reviews = [
  {
    id: 1,
    reviewHead: "Sofia Howartz",
    likes: 4,
    img:
      "",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    reviewHead: "Nicolas smith",
    likes: 2,
    img:
      "../assets/images/toaster.png",
    text:
      "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
  },
  {
    id: 3,
    reviewHead: "Rowlans Rage",
    likes: 5,
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 4,
    reviewHead: "Mmesoma Schultz",
    likes: 1,
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 5,
    reviewHead: "Victor Wisdom",
    likes: 5,
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 6,
    reviewHead: "Great Fisher",
    likes: 4,
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      " Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 7,
    reviewHead: "Joy Christopher",
    likes: 5,
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      " Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry. I'm baby meggings twee health goth +1.",
  },
  {
    id: 8,
    reviewHead: "Sampson Goliath",
    likes: 1,
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 9,
    reviewHead: "David Delilah",
    likes: 5,
    img:
      "",
    text:
      "humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman ",
  },
];



const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const eyeIcon = document.querySelector('.fa-eye');  // Select the first eye icon
const eyeSlashIcon = document.querySelector('.fa-eye-slash'); // Select the first eye-slash icon


eyeIcon.addEventListener('click', () => {
  // console.log("clicked");
  passwordInput.type = 'text'; // Show password
  confirmPasswordInput.type = 'text';
  eyeIcon.classList.add('hidden');
  eyeSlashIcon.classList.remove('hidden');
});


eyeSlashIcon.addEventListener('click', () => {
    passwordInput.type = 'password'; // Hide password
    confirmPasswordInput.type = 'password';
    eyeIcon.classList.remove('hidden');
    eyeSlashIcon.classList.add('hidden');

  });


// Duplicate the above code for the confirm password field
const confirmPasswordEyeIcon = document.querySelector('#confirm-password + .fa-eye');
const confirmPasswordEyeSlashIcon = document.getElementById('eye-slash-icon');
// console.log(confirmPasswordEyeSlashIcon);

confirmPasswordEyeIcon.addEventListener('click', () => {
  confirmPasswordInput.type = 'text';
  confirmPasswordEyeIcon.style.display = 'none';
  confirmPasswordEyeSlashIcon.style.display = 'inline-block'; // or block
});

confirmPasswordEyeSlashIcon.addEventListener('click', () => {
  // console.log("hide!")
  confirmPasswordInput.type = 'password';
  confirmPasswordEyeIcon.style.display = 'inline-block'; // or block
  confirmPasswordEyeSlashIcon.style.display = 'none';
});





function displayLikes(noOfLikes) {
  let stars = ''; // Start with an empty string
  for (let n = 0; n < noOfLikes; n++) {
    stars += '&#9733;'; // Add a star for each like
  }
  return stars; //Return the start string
}

reviews.map((item) => {
  const stars = displayLikes(item.likes); // Get the stars for this review

  reviewContainer.innerHTML += `
    <div class="review">
              <div class="review-img-container">
                <img src=${item.img}} alt="" class="review-img">
              </div>
              <div>
                <h5 class="review-head">${item.reviewHead}}</h5>
                <p class="review-text">${item.text}</p>
              
                <span class="text-2xl font-bold">${stars}</span>
                <div class="likes-reply-container">
                  <span>like</span>
                  <span>reply</span>
                </div>
              </div>
            </div>
  `
})

