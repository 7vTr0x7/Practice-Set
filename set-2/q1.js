const customersOrders = [
  {
    name: "Alice",
    tableNo: 101,
    mainCourse: 15.99,
    appetizer: 8.49,
    dessert: 5.99,
    beverage: 2.99,
  },
  {
    name: "Bob",
    tableNo: 102,
    mainCourse: 12.49,
    appetizer: 6.99,
    dessert: 4.49,
    beverage: 1.99,
  },
  {
    name: "Charlie",
    tableNo: 103,
    mainCourse: 18.99,
    appetizer: 9.99,
    dessert: 7.49,
    beverage: 3.99,
  },
  {
    name: "David",
    tableNo: 104,
    mainCourse: 14.99,
    appetizer: 7.49,
    dessert: 6.49,
    beverage: 2.49,
  },
  {
    name: "Eve",
    tableNo: 105,
    mainCourse: 16.49,
    appetizer: 8.99,
    dessert: 5.49,
    beverage: 2.79,
  },
];

function calculateAndAddTotalCost() {
  for (let i = 0; i < customersOrders.length; i++) {
    let total =
      customersOrders[i].appetizer +
      customersOrders[i].beverage +
      customersOrders[i].dessert +
      customersOrders[i].mainCourse;

    customersOrders[i].totalCost = total;
  }
}

calculateAndAddTotalCost();
console.log(customersOrders);

console.log("----- ------- --------");

function getCustomerWithTotalCostMoreThan30() {
  for (let i = 0; i < customersOrders.length; i++) {
    if (customersOrders[i].totalCost > 30) {
      console.log("Customer Name:", customersOrders[i].name);
    }
  }
}

getCustomerWithTotalCostMoreThan30();
