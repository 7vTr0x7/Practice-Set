let newProducts = [
  {
    type: "Jacket",
    price: 1200,
    available: true,
    brand: "Nike",
    rating: 4.2,
  },
  {
    type: "Dress",
    price: 800,
    available: true,
    brand: "Adidas",
    rating: 4.6,
  },
  {
    type: "T-Shirt",
    price: 150,
    available: false,
    brand: "Puma",
    rating: 3.8,
  },
  {
    type: "Perfume",
    price: 2500,
    available: true,
    brand: "Calvin Klein",
    rating: 4.7,
  },
  {
    type: "Lipstick",
    price: 1500,
    available: false,
    brand: "MAC",
    rating: 4.3,
  },
  {
    type: "Sofa",
    price: 5000,
    available: true,
    brand: "IKEA",
    rating: 4.8,
  },
  {
    type: "Curtains",
    price: 800,
    available: true,
    brand: "Target",
    rating: 4,
  },
  {
    type: "Cushion",
    price: 120,
    available: false,
    brand: "H&M",
    rating: 3.5,
  },
];

function calculateAverageRating() {
  let totalRating = 0;
  let productCount = 0;
  for (let i = 0; i < newProducts.length; i++) {
    if (newProducts[i].brand === "Adidas" && newProducts[i].available) {
      totalRating += newProducts[i].rating;
      productCount += 1;
    }
  }

  let averageRating = totalRating / productCount;
  return averageRating;
}

const averageRating = calculateAverageRating();
console.log("---------- ------------- -------------");
console.log(
  "Average Rating Of All Items Of Adidas which are Available:\n",
  averageRating
);
console.log("---------- ------------- -------------");
