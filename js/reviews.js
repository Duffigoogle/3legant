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
]


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
