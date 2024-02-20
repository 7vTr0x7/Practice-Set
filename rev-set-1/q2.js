const appData = [
  { appName: "App 1", rating: 4, downloads: 5000 },
  { appName: "App 2", rating: 4, downloads: 8000 },
  { appName: "App 3", rating: 5, downloads: 12000 },
  { appName: "App 4", rating: 2, downloads: 3000 },
  { appName: "App 5", rating: 5, downloads: 6000 },
];

function getAverageOfRating() {
  let totalRating = 0;
  for (let i = 0; i < appData.length; i++) {
    totalRating += appData[i].rating;
  }

  const averageRating = totalRating / appData.length;
  return averageRating;
}

const averageOfRating = getAverageOfRating();
console.log("---------- --------- ---------");
console.log("Average Of Rating:", averageOfRating);
console.log("---------- --------- ---------");

function getTotalDownloads() {
  let total = 0;
  for (let i = 0; i < appData.length; i++) {
    total += appData[i].downloads;
  }

  return total;
}

const totalDownloads = getTotalDownloads();

console.log("Total Downloads:", totalDownloads);
