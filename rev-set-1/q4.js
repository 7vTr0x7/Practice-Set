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

function getAppWithHighestRating() {
  let app = appsData[0];
  for (let i = 1; i < appsData.length; i++) {
    if (appsData[i].rating > app.rating) {
      app = appsData[i];
    }
  }
  return app;
}

const highestRatedApp = getAppWithHighestRating();

console.log("App Name:", highestRatedApp.appName);
console.log("Downloads:", highestRatedApp.downloads);
console.log("Category:", highestRatedApp.category);
console.log("Rating:", highestRatedApp.rating);

console.log("---------- ---------- -----------");

function getAverageUserAge() {
  let total = 0;
  for (let i = 0; i < appsData.length; i++) {
    total += appsData[i].minUserAge;
  }

  const average = total / appsData.length;
  return average;
}

const averageAgeOfUser = getAverageUserAge();
console.log("Average Age Of User:", averageAgeOfUser);

console.log("---------- ---------- -----------");

function getMedicineApp() {
  for (let i = 0; i < appsData.length; i++) {
    if (appsData[i].category === "medicine" && appsData[i].downloads > 10000) {
      console.log(appsData[i]);
    }
  }
}
getMedicineApp();
