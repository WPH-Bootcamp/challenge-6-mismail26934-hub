"use strict";
// Tugas 3: Implementasikan fungsi-fungsi manajemen buku
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBook = addBook;
exports.listBooks = listBooks;
exports.searchBook = searchBook;
const books_1 = require("../data/books");
function addBook(book) {
    books_1.books.push(book);
    console.log(`Buku "${book.title}" berhasil ditambahkan ke koleksi.`);
}
// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca
function listBooks() {
    if (books_1.books.length === 0) {
        console.log('Belum ada buku dalam koleksi.');
        return;
    }
    console.log('--- Daftar semua buku ---');
    books_1.books.forEach((book, index) => {
        console.log(`${index + 1}. "${book.title}" oleh ${book.author} (${book.publicationYear})`);
    });
}
// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
//           jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai
function searchBook(title) {
    if (title === undefined) {
        listBooks();
        return;
    }
    const keyword = title.toLowerCase();
    const matches = books_1.books.filter((book) => book.title.toLowerCase().includes(keyword));
    if (matches.length === 0) {
        console.log(`Tidak ada buku yang judulnya mengandung "${title}".`);
        return;
    }
    console.log(`--- Hasil pencarian untuk "${title}" ---`);
    matches.forEach((book, index) => {
        console.log(`${index + 1}. "${book.title}" oleh ${book.author} (${book.publicationYear})`);
    });
}
