const moviesData = [
  {
    movieName: "Movie 1",
    rating: 4.8,
    viewerAge: 25,
    boxOffice: 25000000,
    genre: "Drama",
  },
  {
    movieName: "Movie 2",
    rating: 4.5,
    viewerAge: 30,
    boxOffice: 18000000,
    genre: "Comedy",
  },
  {
    movieName: "Movie 3",
    rating: 4.7,
    viewerAge: 22,
    boxOffice: 30000000,
    genre: "Action",
  },
  {
    movieName: "Movie 4",
    rating: 3.9,
    viewerAge: 28,
    boxOffice: 12000000,
    genre: "Thriller",
  },
  {
    movieName: "Movie 5",
    rating: 4.2,
    viewerAge: 35,
    boxOffice: 22000000,
    genre: "Romance",
  },
];

function getHighestRatedMovie() {
  let movie = moviesData[0];
  for (let i = 1; i < moviesData.length; i++) {
    if (moviesData[i].rating > movie.rating) {
      movie = moviesData[i];
    }
  }

  return movie;
}

const highestRatedMovie = getHighestRatedMovie();
console.log("--------- ----------- ---------");
console.log("Name:", highestRatedMovie.movieName);
console.log("Box Office Revenue:", highestRatedMovie.boxOffice);
console.log("Genre:", highestRatedMovie.genre);
console.log("Rating:", highestRatedMovie.rating);

console.log("--------- ----------- ---------");

function getAverageViewersAge() {
  let totalCountOFAge = 0;
  for (let i = 0; i < moviesData.length; i++) {
    totalCountOFAge += moviesData[i].viewerAge;
  }

  const averageAge = totalCountOFAge / moviesData.length;
  return averageAge;
}

const averageViewersAge = getAverageViewersAge();
console.log("Average Viewers Age:", averageViewersAge);
