const libraryBooksData = [
  {
    title: "Book A",
    author: "Author X",
    genre: "Fantasy",
    pages: 300,
    publicationYear: 2005,
  },
  {
    title: "Book B",
    author: "Author Y",
    genre: "Mystery",
    pages: 250,
    publicationYear: 2010,
  },
  {
    title: "Book C",
    author: "Author Z",
    genre: "Science Fiction",
    pages: 400,
    publicationYear: 2015,
  },
  {
    title: "Book D",
    author: "Author W",
    genre: "Romance",
    pages: 350,
    publicationYear: 2008,
  },
  {
    title: "Book E",
    author: "Author V",
    genre: "Science Fiction",
    pages: 450,
    publicationYear: 2020,
  },
];

function getBookWithMostPages() {
  let book = libraryBooksData[0];
  for (let i = 0; i < libraryBooksData.length; i++) {
    if (libraryBooksData[i].pages > book.pages) {
      book = libraryBooksData[i];
    }
  }

  return book;
}

const bookWithMostPages = getBookWithMostPages();

console.log("Book Title:", bookWithMostPages.title);
console.log("Author:", bookWithMostPages.author);
console.log("Genre:", bookWithMostPages.genre);
console.log("Pages:", bookWithMostPages.pages);

console.log("----- -------- -------");

function getAveragePublicationYear() {
  let totalOfYear = 0;
  for (let i = 0; i < libraryBooksData.length; i++) {
    totalOfYear += libraryBooksData[i].publicationYear;
  }

  const average = totalOfYear / libraryBooksData.length;
  return average;
}

const averagePublicationYear = getAveragePublicationYear();
console.log("Average Publication Year:", averagePublicationYear);

console.log("----- -------- -------");

function getBookOfScienceFiction() {
  for (let i = 0; i < libraryBooksData.length; i++) {
    if (libraryBooksData[i].genre === "Science Fiction") {
      console.log(libraryBooksData[i]);
    }
  }
}
getBookOfScienceFiction();
