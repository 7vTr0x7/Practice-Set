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
  {
    category: "Books",
    price: 1500,
    stocked: true,
    name: "The Great Gatsby",
    rating: 4.8,
  },
  {
    category: "Books",
    price: 2500,
    stocked: true,
    name: "To Kill a Mockingbird",
    rating: 4.9,
  },
];

// Calculate and print the average rating of all books.
// Calculate and print the total price of all items in the 'Furnishing' category which are in stock.
// Calculate and print an array of item names where the category is 'Electronics' and the rating is greater than 4.
// Calculate and print the average price of all items with a rating of 4.5 or higher.

function calculateAverageRatingOfAllBooks() {
  let totalRating = 0;
  let bookCount = 0;
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === "Books") {
      totalRating += products[i].rating;
      bookCount += 1;
    }
  }

  const averageRating = totalRating / bookCount;
  return averageRating;
}

const averageRatingOfAllBooks = calculateAverageRatingOfAllBooks();

console.log("------- ------------ ---------------");
console.log("Average Rating OF All Books:\n", averageRatingOfAllBooks);
console.log("------- ------------ ---------------");

function calculateTotalPriceOfFurnishing() {
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === "Furnishing" && products[i].stocked) {
      totalPrice += products[i].price;
    }
  }

  return totalPrice;
}

const totalPriceOfFurnishing = calculateTotalPriceOfFurnishing();

console.log(
  "Total Price of Furnishing category which Are In Stock:\n",
  totalPriceOfFurnishing
);
console.log("------- ------------ ---------------");

function getArrayOfNames() {
  let itemsName = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === "Electronics" && products[i].rating > 4) {
      itemsName.push(products[i].name);
    }
  }
  return itemsName;
}

const arrayOfItemName = getArrayOfNames();

console.log("Array OF Items Name:\n", arrayOfItemName);
console.log("------- ------------ ---------------");

function calculateAveragePrice() {
  let totalPrice = 0;
  let itemsCount = 0;
  for (let i = 0; i < products.length; i++) {
    if (products[i].rating >= 4.5) {
      totalPrice += products[i].price;
      itemsCount += 1;
    }
  }
  console.log("price ", totalPrice);

  const averagePrice = totalPrice / itemsCount;
  return averagePrice;
}

const averagePriceOfAllItems = calculateAveragePrice();

console.log(
  "Average Price Of All Products With Rating 4.5 Or more: \n",
  averagePriceOfAllItems
);
