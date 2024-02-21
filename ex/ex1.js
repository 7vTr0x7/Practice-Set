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

// Calculate and print the average rating of all the sporting goods.
//  Calculate and print the total price of all Electronic items which are in stock.
//  Calculate and print an array of item names where price is less than 20000 and  rating is more than 4.

function getAverageRatingOfSportingGoods() {
  let total = 0;
  let sportsProductCount = 0;
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === "Sporting Goods") {
      total += products[i].rating;
      sportsProductCount += 1;
    }
  }

  const average = total / sportsProductCount;
  return average;
}

const averageRatingOfSportingGoods = getAverageRatingOfSportingGoods();

console.log("------------- --------------- ---------------");
console.log("Average Rating of Sporting Goods:", averageRatingOfSportingGoods);
console.log("------------- --------------- ---------------");

function calculateTotalPriceOfElectronicItems() {
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === "Electronics" && products[i].stocked) {
      totalPrice += products[i].price;
    }
  }
  return totalPrice;
}

const totalPriceOfElectronicItems = calculateTotalPriceOfElectronicItems();

console.log(
  "Total Price OF Electronic Products Which Are In Stock:\n",
  totalPriceOfElectronicItems
);
console.log("------------- --------------- ---------------");

function getItemNames() {
  let productName = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].price < 20000 && products[i].rating > 4) {
      productName.push(products[i].name);
    }
  }

  return productName;
}

const itemsName = getItemNames();
console.log(
  "Item With price less than 20K and rating more than 4:\n",
  itemsName
);
