const appsData = [
  {
    appName: "App 1",
    rating: 4.2,
    minUserAge: 12,
    downloads: 4000,
    category: "games",
  },
  {
    appName: "App 2",
    rating: 4.5,
    minUserAge: 18,
    downloads: 9000,
    category: "education",
  },
  {
    appName: "App 3",
    rating: 4.7,
    minUserAge: 10,
    downloads: 11000,
    category: "medicine",
  },
  {
    appName: "App 4",
    rating: 3.1,
    minUserAge: 18,
    downloads: 4000,
    category: "medicine",
  },
  {
    appName: "App 5",
    rating: 4.3,
    minUserAge: 18,
    downloads: 7000,
    category: "fitness",
  },
];

function getHighestRatedApp() {
  let app = appsData[0];
  for (let i = 0; i < appsData.length; i++) {
    if (appsData[i].rating > app.rating) {
      app = appsData[i];
    }
  }
  return app;
}

const highestRatedApp = getHighestRatedApp();

console.log("------------------ --------- -------------");
console.log("Highest Rated App: \n");
console.log("App Name:", highestRatedApp.appName);
console.log("Downloads:", highestRatedApp.downloads);
console.log("Category:", highestRatedApp.category);
console.log("Rating:", highestRatedApp.rating);

console.log("------------------ --------- -------------");

function getAverageUserAge() {
  let totalAgeCount = 0;
  for (let i = 0; i < appsData.length; i++) {
    totalAgeCount += appsData[i].minUserAge;
  }

  let averageAge = totalAgeCount / appsData.length;
  return averageAge;
}

const averageUserAge = getAverageUserAge();
console.log("Average User Age:", averageUserAge);
console.log("------------------ --------- -------------");

function getMedicineAppWithMoreThan10KDownloads() {
  for (let i = 0; i < appsData.length; i++) {
    if (appsData[i].category === "medicine" && appsData[i].downloads > 10000) {
      return appsData[i];
    }
  }
}

const medicineApp = getMedicineAppWithMoreThan10KDownloads();
console.log(medicineApp);
