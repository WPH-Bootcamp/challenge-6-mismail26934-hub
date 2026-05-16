// Tugas 3: Implementasikan fungsi-fungsi manajemen buku

// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan

import type { Book } from '../types';
import { books } from '../data/books';

export function addBook(book: Book): void {
  books.push(book);
  console.log(`Buku "${book.title}" berhasil ditambahkan ke koleksi.`);
}

// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca
export function listBooks(): void {
  if (books.length === 0) {
    console.log('Belum ada buku dalam koleksi.');
    return;
  }

  console.log('--- Daftar semua buku ---');
  books.forEach((book, index) => {
    console.log(
      `${index + 1}. "${book.title}" oleh ${book.author} (${book.publicationYear})`
    );
  });
}
// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
//           jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai
export function searchBook(title?: string): void {
  if (title === undefined) {
    listBooks();
    return;
  }

  const keyword = title.toLowerCase();
  const matches = books.filter((book) =>
    book.title.toLowerCase().includes(keyword)
  );

  if (matches.length === 0) {
    console.log(`Tidak ada buku yang judulnya mengandung "${title}".`);
    return;
  }

  console.log(`--- Hasil pencarian untuk "${title}" ---`);
  matches.forEach((book, index) => {
    console.log(
      `${index + 1}. "${book.title}" oleh ${book.author} (${book.publicationYear})`
    );
  });
}
