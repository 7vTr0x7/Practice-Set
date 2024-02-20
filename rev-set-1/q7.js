const customerData = [
  {
    customerName: "Alice",
    age: 28,
    address: "123 Street",
    city: "A",
    totalPurchases: 5,
  },
  {
    customerName: "Bob",
    age: 35,
    address: "456 Avenue",
    city: "D",
    totalPurchases: 8,
  },
  {
    customerName: "Charlie",
    age: 40,
    address: "789 Road",
    city: "C",
    totalPurchases: 12,
  },
  {
    customerName: "Daisy",
    age: 32,
    address: "111 Lane",
    city: "D",
    totalPurchases: 6,
  },
  {
    customerName: "Emily",
    age: 45,
    address: "222 Boulevard",
    city: "A",
    totalPurchases: 10,
  },
  {
    customerName: "Charmie",
    age: 37,
    address: "113 Lane",
    city: "D",
    totalPurchases: 10,
  },
];

function getTotalPurchaseFromCityA() {
  let totalPurchase = 0;
  for (let i = 0; i < customerData.length; i++) {
    if (customerData[i].city === "A") {
      totalPurchase += customerData[i].totalPurchases;
    }
  }

  return totalPurchase;
}

const totalPurchase = getTotalPurchaseFromCityA();

console.log("Total Purchase From City A:", totalPurchase);
console.log("---------- ----------- ---------------");

function getAverageAgeOfCustomersOfState() {
  let totalOfAge = 0;
  for (let i = 0; i < customerData.length; i++) {
    totalOfAge += customerData[i].age;
  }

  const averageAge = totalOfAge / customerData.length;
  return averageAge;
}

const averageAgeOfCustomers = getAverageAgeOfCustomersOfState();

console.log("Average Age Of Customers Of State:\n", averageAgeOfCustomers);
console.log("---------- ----------- ---------------");

function getTotalPurchaseFromCAndD() {
  let totalPurchaseFromCAndD = 0;

  for (let i = 0; i < customerData.length; i++) {
    if (customerData[i].city === "C" || customerData[i].city === "D") {
      totalPurchaseFromCAndD += customerData[i].totalPurchases;
    }
  }

  return totalPurchaseFromCAndD;
}

const totalPurchaseFromCAndD = getTotalPurchaseFromCAndD();

console.log("Total Purchase From C and D:\n", totalPurchaseFromCAndD);
console.log("---------- ----------- ---------------");

function getAverageAgeOfCustomersOfD() {
  let totalOfAge = 0;

  let customerCount = 0;
  for (let i = 0; i < customerData.length; i++) {
    if (customerData[i].city === "D") {
      totalOfAge += customerData[i].age;
      customerCount += 1;
    }
  }

  const average = totalOfAge / customerCount;
  return average;
}

const averageAgeOfCustomersOfD = getAverageAgeOfCustomersOfD();
console.log("Average Age Of Customers Of D:\n", averageAgeOfCustomersOfD);
