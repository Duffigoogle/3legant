const furnitureProducts = [
  {
    id: 1,
    img: "../assets/chair.png",
    rating: 3,
    productName: "Loafer seat",
    price: 450,
    oldPrice: 600
  },
  {
    id: 2,
    img: "../assets/chair.png",
    rating: 3,
    productName: "Seate floor",
    price: 150,
    oldPrice: 300
  },
] 

const companyName = companies.map(function(company) {
  return {
    Name: company.name,
    Categories: company.categories
  }
})

console.log(companyName);

const tableContainer = document.getElementById("table-container");
// companies.map((company) => {
//   tableContainer.innerHTML += `  
//     <tr>
//       <td>${company.name}</td>
//       <td>${company.categories}</td>
//       <td>${company.start}</td>
//       <td>${company.end}</td>
//     </tr>
//   `
// })


companies.filter(function(company) {
  return company.category === "retail";
}).map((company) => {
  tableContainer.innerHTML += `  
    <tr>
      <td>${company.name}</td>
      <td>${company.categories}</td>
      <td>${company.start}</td>
      <td>${company.end}</td>
    </tr>
  `
})