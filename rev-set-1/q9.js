const customerData = [
  {
    customerName: "Eva",
    age: 31,
    address: "789 Lane",
    city: "X",
    totalPurchases: 7,
  },
  {
    customerName: "Frank",
    age: 29,
    address: "456 Street",
    city: "Z",
    totalPurchases: 8,
  },
  {
    customerName: "Grace",
    age: 38,
    address: "123 Avenue",
    city: "Y",
    totalPurchases: 12,
  },
  {
    customerName: "Henry",
    age: 35,
    address: "222 Road",
    city: "X",
    totalPurchases: 6,
  },
  {
    customerName: "Isabel",
    age: 42,
    address: "111 Boulevard",
    city: "Y",
    totalPurchases: 10,
  },
  {
    customerName: "Jack",
    age: 33,
    address: "333 Drive",
    city: "Z",
    totalPurchases: 10,
  },
];

function getTotalPurchaseFromCityZ() {
  let totalPurchases = 0;
  for (let i = 0; i < customerData.length; i++) {
    if (customerData[i].city === "Z") {
      totalPurchases += customerData[i].totalPurchases;
    }
  }
  return totalPurchases;
}

const totalPurchasesFromCityZ = getTotalPurchaseFromCityZ();
console.log("------------- ------------- ---------------");
console.log("Total Purchase From City Z:", totalPurchasesFromCityZ);
console.log("------------- ------------- ---------------");

function calculateAverageAgeOfCustomersOfState() {
  let totalOfAge = 0;
  for (let i = 0; i < customerData.length; i++) {
    totalOfAge += customerData[i].age;
  }

  const average = totalOfAge / customerData.length;
  return average;
}

const averageAgeOfCustomersOfState = calculateAverageAgeOfCustomersOfState();

console.log("Average Age Of Customers Of State:", averageAgeOfCustomersOfState);

console.log("------------- ------------- ---------------");

function getTotalPurchaseFromXAndY() {
  let totalPurchases = 0;
  for (let i = 0; i < customerData.length; i++) {
    if (customerData[i].city === "X" || customerData[i].city === "Y") {
      totalPurchases += customerData[i].totalPurchases;
    }
  }

  return totalPurchases;
}

const totalPurchasesFromXAndY = getTotalPurchaseFromXAndY();
console.log("Total Purchases From City X And Y:\n", totalPurchasesFromXAndY);

console.log("------------- ------------- ---------------");

function calculateAverageAgeOfCustomersOfXAndY() {
  let totalCountOfAge = 0;
  let customerCount = 0;
  for (let i = 0; i < customerData.length; i++) {
    if (customerData[i].city === "X" || customerData[i].city === "Y") {
      totalCountOfAge += customerData[i].age;
      customerCount += 1;
    }
  }

  const average = totalCountOfAge / customerCount;
  return average;
}

const averageAgeOfCustomersOfXAndY = calculateAverageAgeOfCustomersOfXAndY();

console.log(
  "Average Age Of Customers Of City X And Y:\n",
  averageAgeOfCustomersOfXAndY
);
