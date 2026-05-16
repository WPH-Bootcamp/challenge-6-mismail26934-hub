'use strict';
// Tugas 3: Implementasikan fungsi-fungsi manajemen buku
Object.defineProperty(exports, '__esModule', { value: true });
exports.addBook = addBook;
exports.listBooks = listBooks;
exports.searchBook = searchBook;
const books_1 = require('../data/books');
function addBook(book) {
  books_1.books.push(book);
  console.log(`Book "${book.title}" was added to the collection.`);
}
// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca

function listBooks() {
  if (books_1.books.length === 0) {
    console.log('No books in the collection yet.');
    return;
  }
  console.log('--- All books ---');
  books_1.books.forEach((book, index) => {
    console.log(
      `${index + 1}. "${book.title}" by ${book.author} (${book.publicationYear})`
    );
  });
}
// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
// jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai
function searchBook(title) {
  if (title === undefined) {
    listBooks();
    return;
  }
  const keyword = title.toLowerCase();
  const matches = books_1.books.filter((book) =>
    book.title.toLowerCase().includes(keyword)
  );
  if (matches.length === 0) {
    console.log(`No books whose title contains "${title}".`);
    return;
  }
  console.log(`--- Search results for "${title}" ---`);
  matches.forEach((book, index) => {
    console.log(
      `${index + 1}. "${book.title}" by ${book.author} (${book.publicationYear})`
    );
  });
}
