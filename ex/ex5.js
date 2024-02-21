let products = [
  {
    category: "Sporting Goods",
    price: 500,
    stocked: true,
    name: "Football",
    rating: 4,
  },
  {
    category: "Sporting Goods",
    price: 800,
    stocked: true,
    name: "Baseball",
    rating: 4.5,
  },
  {
    category: "Sporting Goods",
    price: 1500,
    stocked: false,
    name: "Basketball",
    rating: 3,
  },
  {
    category: "Sporting Goods",
    price: 25000,
    stocked: false,
    name: "7pc Cricket Kit",
    rating: 3.8,
  },
  {
    category: "Electronics",
    price: 90000,
    stocked: true,
    name: "iPod Touch",
    rating: 4,
  },
  {
    category: "Electronics",
    price: 39999,
    stocked: false,
    name: "iPhone 5",
    rating: 4.4,
  },
  {
    category: "Electronics",
    price: 19999,
    stocked: true,
    name: "Nexus 7",
    rating: 3.5,
  },
  {
    category: "Furnishing",
    price: 21000,
    stocked: true,
    name: "Carpet",
    rating: 3.9,
  },
  {
    category: "Furnishing",
    price: 999,
    stocked: true,
    name: "Flower Vase",
    rating: 3.2,
  },
  {
    category: "Furnishing",
    price: 1200,
    stocked: false,
    name: "Side Table Lamp",
    rating: 4.5,
  },
];

// What is the highest-rated product in the "Furnishing" category?
// How many products are currently in stock?
// Which product has the lowest price?
// What is the average rating of products in the "Electronics" category?

function getHighestRatedProduct() {
  let product = [];

  for (let i = 0; i < products.length; i++) {
    if (products[i].category === "Furnishing") {
      product.push(products[i]);
    }
  }

  let highestRatedProduct = product[0];
  for (let i = 0; i < product.length; i++) {
    if (product[i].rating > highestRatedProduct.rating) {
      highestRatedProduct = product[i];
    }
  }

  return highestRatedProduct;
}

const highestRatedProduct = getHighestRatedProduct();
console.log("---- ------------- ----------------");
console.log("Highest Rated Product:\n", highestRatedProduct);
console.log("---- ------------- ----------------");

function getProductsInStock() {
  let count = 0;
  for (let i = 0; i < products.length; i++) {
    if (products[i].stocked) {
      count += 1;
    }
  }

  return count;
}

const countOfProductsInStock = getProductsInStock();

console.log("Products in Stock:\n", countOfProductsInStock);
console.log("---- ------------- ----------------");

function getProductWithLowestPrice() {
  let product = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].price < product.price) {
      product = products[i];
    }
  }

  return product;
}

const productWithLowestPrice = getProductWithLowestPrice();
console.log("Product With Lowest Price:\n", productWithLowestPrice);
console.log("---- ------------- ----------------");

function calculateAverageRatingOfProduct() {
  let totalRating = 0;
  let productCount = 0;
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === "Electronics") {
      totalRating += products[i].rating;
      productCount += 1;
    }
  }

  const averageRating = totalRating / productCount;
  return averageRating;
}

const averageRatingOfProducts = calculateAverageRatingOfProduct();

console.log(
  "Average Rating Of Electronic Products:\n",
  averageRatingOfProducts
);
