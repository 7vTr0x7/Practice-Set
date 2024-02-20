const salesData = [
  { product: "Product A", unitsSold: 120, revenue: 15000 },
  { product: "Product B", unitsSold: 180, revenue: 20000 },
  { product: "Product C", unitsSold: 90, revenue: 12000 },
  { product: "Product D", unitsSold: 150, revenue: 18000 },
  { product: "Product E", unitsSold: 200, revenue: 25000 },
];

function getProductWithRevenueAbove19K() {
  for (let i = 0; i < salesData.length; i++) {
    if (salesData[i].revenue > 19000) {
      console.log(salesData[i]);
    }
  }
}

console.log("----------- ---------------- ------------");
getProductWithRevenueAbove19K();
console.log("----------- ---------------- ------------");

function getTotalUnitsSoldOfRevenueAbove15K() {
  let totalUnits = 0;
  for (let i = 0; i < salesData.length; i++) {
    if (salesData[i].revenue > 15000) {
      totalUnits += salesData[i].unitsSold;
    }
  }

  return totalUnits;
}

const totalUnitsSold = getTotalUnitsSoldOfRevenueAbove15K();

console.log(
  "Total Units Sold Of Products With Revenue More Than 15K:\n",
  totalUnitsSold
);
