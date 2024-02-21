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

function getHighestRatedProduct() {
  let furnishingProduct = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === "Furnishing") {
      furnishingProduct.push(products[i]);
    }
  }

  let product = furnishingProduct[0];
  for (let i = 1; i < furnishingProduct.length; i++) {
    if (furnishingProduct[i].rating > product.rating) {
      product = furnishingProduct[i];
    }
  }

  return product;
}

const highestRatedProduct = getHighestRatedProduct();
console.log(highestRatedProduct);

function getProductsInStock() {
  let productCount = 0;
  for (let i = 0; i < products.length; i++) {
    if (products[i].stocked) {
      productCount += 1;
    }
  }

  return productCount;
}

const productCount = getProductsInStock();
console.log(productCount);

function getProductWithLowestPrice() {
  let product = products[0];
  for (let i = 0; i < products.length; i++) {
    if (products[i].price < product.price) {
      product = products[i];
    }
  }

  return product;
}

console.log(getProductWithLowestPrice());

function getAverageRating() {
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

console.log(getAverageRating());

function calculateTotalPriceOfEleProduct() {
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === "Electronics") {
      totalPrice += products[i].price;
    }
  }
  return totalPrice;
}

const totalPriceOfElectronicProducts = calculateTotalPriceOfEleProduct();
console.log(totalPriceOfElectronicProducts);

function getProductWithRatingMoreThan4() {
  let count = 0;
  for (let i = 0; i < products.length; i++) {
    if (products[i].rating > 4) {
      count += 1;
    }
  }

  return count;
}

console.log(getProductWithRatingMoreThan4());

function getNameOfMostExpensiveProduct() {
  let product = products[0];
  for (let i = 0; i < products.length; i++) {
    if (products[i].price > product.price) {
      product = products[i];
    }
  }

  return product.name;
}

const NameOfMostExpensiveProduct = getNameOfMostExpensiveProduct();

console.log(NameOfMostExpensiveProduct);
