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

function getTotalPurchaseFromZ() {
  let totalPurchase = 0;
  for (let i = 0; i < customerData.length; i++) {
    if (customerData[i].city === "Z") {
      totalPurchase += customerData[i].totalPurchases;
    }
  }

  return totalPurchase;
}

const totalPurchaseFromCityZ = getTotalPurchaseFromZ();
console.log("--------- ----------- ----------");
console.log("Total Purchase From City Z:", totalPurchaseFromCityZ);
console.log("--------- ----------- ----------");

function getAverageAgeOfCustomersOfState() {
  let totalAgeCount = 0;
  for (let i = 0; i < customerData.length; i++) {
    totalAgeCount += customerData[i].age;
  }

  let averageOfAge = totalAgeCount / customerData.length;
  return averageOfAge;
}

const averageAgeOFCustomersOfState = getAverageAgeOfCustomersOfState();
console.log("Average Age Of Customers OF State:", averageAgeOFCustomersOfState);
console.log("--------- ----------- ----------");

function getTotalPurchaseFromXAndY() {
  let totalOfX = 0;
  let totalOfY = 0;

  for (let i = 0; i < customerData.length; i++) {
    if (customerData[i].city === "X") {
      totalOfX += customerData[i].totalPurchases;
    }
    if (customerData[i].city === "Y") {
      totalOfY += customerData[i].totalPurchases;
    }
  }

  return [totalOfX, totalOfY];
}

const [totalPurchaseOfX, totalPurchaseOfY] = getTotalPurchaseFromXAndY();

console.log("Total Purchase Of X:", totalPurchaseOfX);
console.log("Total Purchase Of Y:", totalPurchaseOfY);
console.log("--------- ----------- ----------");

function getAverageCustomerAgeOfXAndY() {
  let totalAgeOfX = 0;
  let totalAgeOfY = 0;

  let customerCountOfX = 0;
  let customerCountOfY = 0;

  for (let i = 0; i < customerData.length; i++) {
    if (customerData[i].city === "X") {
      totalAgeOfX += customerData[i].age;
      customerCountOfX += 1;
    }
    if (customerData[i].city === "Y") {
      totalAgeOfY += customerData[i].age;
      customerCountOfY += 1;
    }
  }

  const averageAgeOfX = totalAgeOfX / customerCountOfX;
  const averageAgeOfY = totalAgeOfY / customerCountOfY;

  return [averageAgeOfX, averageAgeOfY];
}

const [averageCustomerAgeOfCityX, averageCustomerAgeOfCityY] =
  getAverageCustomerAgeOfXAndY();

console.log("Average Customer Age Of X:", averageCustomerAgeOfCityX);
console.log("Average Customer Age Of Y:", averageCustomerAgeOfCityY);
console.log("--------- ----------- ----------");

function getAverageOfXPlusY() {
  let totalAgeOfXPlusY = 0;
  let customerCountXPlusY = 0;
  for (let i = 0; i < customerData.length; i++) {
    if (customerData[i].city === "X" || customerData[i].city === "Y") {
      totalAgeOfXPlusY += customerData[i].age;
      customerCountXPlusY += 1;
    }
  }

  const averageAgeOfXPlusY = totalAgeOfXPlusY / customerCountXPlusY;
  return averageAgeOfXPlusY;
}

const averageAgeOfXPlusY = getAverageOfXPlusY();

console.log("Average Age OF City X And Y:", averageAgeOfXPlusY);
