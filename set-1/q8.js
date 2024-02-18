const salesData = [
  { product: "Product A", unitsSold: 120, revenue: 15000 },
  { product: "Product B", unitsSold: 180, revenue: 20000 },
  { product: "Product C", unitsSold: 90, revenue: 12000 },
  { product: "Product D", unitsSold: 150, revenue: 18000 },
  { product: "Product E", unitsSold: 200, revenue: 25000 },
];

function getProductWithRevenueMoreThan19K() {
  for (let i = 0; i < salesData.length; i++) {
    if (salesData[i].revenue > 19000) {
      console.log(salesData[i]);
    }
  }
}

console.log("------ -------- ---------");
getProductWithRevenueMoreThan19K();
console.log("------ -------- ---------");

function getTotalUnitsSoldWithRevenueMoreThan15K() {
  let totalUnitsSold = 0;
  for (let i = 0; i < salesData.length; i++) {
    if (salesData[i].revenue > 15000) {
      totalUnitsSold += salesData[i].unitsSold;
    }
  }

  return totalUnitsSold;
}

const totalUnitsSold = getTotalUnitsSoldWithRevenueMoreThan15K();
console.log(
  "Total Number OF units Sold Of Products With Revenue More Than 15K:",
  totalUnitsSold
);
