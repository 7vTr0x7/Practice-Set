const movieData = [
  { movieName: "Movie 1", rating: 3.5, boxOfficeRevenue: 15000000 },
  { movieName: "Movie 2", rating: 4.2, boxOfficeRevenue: 25000000 },
  { movieName: "Movie 3", rating: 4.8, boxOfficeRevenue: 35000000 },
  { movieName: "Movie 4", rating: 3.0, boxOfficeRevenue: 12000000 },
  { movieName: "Movie 5", rating: 4.5, boxOfficeRevenue: 20000000 },
];

function getAverageRatingOfMovies() {
  let totalRating = 0;
  for (let i = 0; i < movieData.length; i++) {
    totalRating += movieData[i].rating;
  }

  let averageRating = totalRating / movieData.length;
  return averageRating;
}

const averageRatingOfMovies = getAverageRatingOfMovies();

console.log("----- ------- ------");
console.log("Average Rating Of Movies:", averageRatingOfMovies);
console.log("----- ------- ------");

function getTotalBoxOfficeRevenue() {
  let totalRevenue = 0;
  for (let i = 0; i < movieData.length; i++) {
    totalRevenue += movieData[i].boxOfficeRevenue;
  }

  return totalRevenue;
}

const totalBoxOfficeRevenue = getTotalBoxOfficeRevenue();

console.log("Total Box Office Revenue:", totalBoxOfficeRevenue);
