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

function getTotalNumberOfPurchaseFromCityA() {
  let totalNumOfPurchase = 0;
  for (let i = 0; i < customerData.length; i++) {
    if (customerData[i].city === "A") {
      totalNumOfPurchase += customerData[i].totalPurchases;
    }
  }

  return totalNumOfPurchase;
}

const totalNumberOfPurchase = getTotalNumberOfPurchaseFromCityA();
console.log("------- ------- ------");
console.log("Total Number Of Purchase From City A:", totalNumberOfPurchase);
console.log("------- ------- ------");

function getAverageAgeOfCustomers() {
  let totalOfAge = 0;
  for (let i = 0; i < customerData.length; i++) {
    totalOfAge += customerData[i].age;
  }

  const average = totalOfAge / customerData.length;
  return average;
}

const averageAgeOfCustomers = getAverageAgeOfCustomers();
console.log("Average Age OF Customers Of The State:", averageAgeOfCustomers);
console.log("------- ------- ------");

function getTotalPurchaseFromCAndD() {
  let totalOfC = 0;
  let totalOfD = 0;

  for (let i = 0; i < customerData.length; i++) {
    if (customerData[i].city === "C") {
      totalOfC += customerData[i].totalPurchases;
    }
    if (customerData[i].city === "D") {
      totalOfD += customerData[i].totalPurchases;
    }
  }

  return [totalOfC, totalOfD];
}

const [totalPurchaseFromC, totalPurchaseFromD] = getTotalPurchaseFromCAndD();
console.log("Total Purchase From C:", totalPurchaseFromC);
console.log("Total Purchase From D:", totalPurchaseFromD);
console.log("------- ------- ------");

function getAverageAgeOfD() {
  let totalAge = 0;
  let customerCountOfD = 0;
  for (let i = 0; i < customerData.length; i++) {
    if (customerData[i].city === "D") {
      totalAge += customerData[i].age;
      customerCountOfD += 1;
    }
  }

  let averageOfAge = totalAge / customerCountOfD;
  return averageOfAge;
}

const averageAgeOfD = getAverageAgeOfD();
console.log("Average Age Of D:", averageAgeOfD);
