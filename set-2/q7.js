const moviesData = [
  { title: "Movie A", genre: "Drama", views: 60000, likes: 35000 },
  { title: "Movie B", genre: "Comedy", views: 75000, likes: 48000 },
  { title: "Movie C", genre: "Action", views: 30000, likes: 25000 },
  { title: "Movie D", genre: "Thriller", views: 45000, likes: 30000 },
  { title: "Movie E", genre: "Romance", views: 55000, likes: 42000 },
];

function getMoviesWithViewsMoreThan50K() {
  let filteredMovies = [];
  for (let i = 0; i < moviesData.length; i++) {
    if (moviesData[i].views > 50000) {
      console.log("----- -------- ----");
      console.log("Title", moviesData[i].title);
      console.log("Genre:", moviesData[i].genre);
      console.log("Views:", moviesData[i].views);
      filteredMovies.push({
        title: moviesData[i].title,
        genre: moviesData[i].genre,
        views: moviesData[i].views,
      });
    }
  }

  return filteredMovies;
}

const filteredMovies = getMoviesWithViewsMoreThan50K();
console.log("----------- ------------ ----------");
console.log(filteredMovies);

console.log("----------- ------------ ----------");

function getOverallLikes() {
  let totalLike = 0;
  for (let i = 0; i < moviesData.length; i++) {
    if (moviesData[i].views > 40000) {
      totalLike += moviesData[i].likes;
    }
  }

  return totalLike;
}

const totalLikes = getOverallLikes();
console.log("Total Likes:", totalLikes);
