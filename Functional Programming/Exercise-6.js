// Refactor Global Variables Out of Functions

// The global variable
const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

// Change code below this line
function add(arr, bookName) {
  let bookList = [...arr];
  bookList.push(bookName);
  return bookList;

  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
  let bookList = [...arr];
  if (bookList.indexOf(bookName) >= 0) {
    bookList.splice(bookList.indexOf(bookName), 1); //
    return bookList;

    // Change code above this line
  }
}
