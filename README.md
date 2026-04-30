[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/WvkoNZBc)
# Assignment 6 - Simple Book Management Application

Selamat datang di challenge minggu keenam. Pada tugas kali ini, kamu akan membangun aplikasi manajemen buku sederhana menggunakan TypeScript.

## Tujuan Pembelajaran

Setelah menyelesaikan challenge ini, diharapkan kamu dapat:

1. Memahami cara mendefinisikan tipe data custom menggunakan type alias
2. Menggunakan tipe data primitif dengan tepat dalam TypeScript
3. Membuat fungsi dengan parameter yang memiliki tipe data spesifik
4. Menerapkan konsep optional parameter pada fungsi
5. Memahami return type void dan kapan menggunakannya

## Struktur Project

Project ini sudah disusun dengan struktur yang terorganisir:

```
assignment-6/
├── src/
│   ├── types/
│   │   └── index.ts          # Tempat mendefinisikan tipe Book
│   ├── data/
│   │   └── books.ts          # Tempat membuat array penyimpanan buku
│   ├── functions/
│   │   └── bookManager.ts    # Berisi fungsi-fungsi utama aplikasi
│   └── main.ts               # Entry point untuk testing
├── package.json              # Konfigurasi npm
└── tsconfig.json             # Konfigurasi TypeScript
```

Setiap file sudah dilengkapi dengan panduan singkat tentang apa yang perlu dilakukan. Silakan baca komentar di masing-masing file untuk memahami tugasnya.

## Alur Pengerjaan yang Disarankan

1. Mulai dari file `src/types/index.ts`
   Definisikan terlebih dahulu struktur data Book dengan properti yang diminta.

2. Lanjut ke file `src/data/books.ts`
   Buat array kosong yang akan menampung data buku.

3. Kerjakan file `src/functions/bookManager.ts`
   Implementasikan ketiga fungsi yang diminta satu per satu.

4. Terakhir, file `src/main.ts`
   Gunakan file ini untuk menguji apakah fungsi-fungsi yang dibuat sudah berjalan dengan benar.

## Checklist Penyelesaian

Pastikan semua poin berikut sudah terpenuhi:

- [ ] Tipe Book sudah dibuat dengan properti title, author, dan publicationYear
- [ ] Array untuk menyimpan buku sudah dibuat dengan tipe yang sesuai
- [ ] Fungsi addBook() sudah diimplementasikan dan bisa menambahkan buku
- [ ] Fungsi listBooks() sudah diimplementasikan dan bisa menampilkan semua buku
- [ ] Fungsi searchBook() sudah diimplementasikan dengan parameter title yang opsional
- [ ] Semua fungsi memiliki return type void
- [ ] Tidak ada error saat kompilasi TypeScript

## Kriteria Penilaian

| Aspek | Bobot | Keterangan |
|-------|-------|------------|
| **Definisi Tipe Data** | 25% | Tipe `Book` terdefinisi dengan benar menggunakan type alias dengan properti yang sesuai (`title`, `author`, `publicationYear`), dan array `books` dibuat dengan tipe `Book[]` yang tepat. |
| **Fungsi addBook()** | 25% | Fungsi berjalan dengan benar, menerima parameter bertipe `Book`, menambahkan buku ke array, dan menampilkan pesan konfirmasi. |
| **Fungsi listBooks()** | 25% | Fungsi berjalan dengan benar, menampilkan semua buku yang tersimpan dalam array dengan format yang jelas. |
| **Fungsi searchBook()** | 25% | Fungsi berjalan dengan benar, menerima parameter `title` yang bersifat optional (`?`), menampilkan hasil pencarian sesuai keyword, atau menampilkan semua buku jika parameter tidak diberikan. |

**Total: 100%**

## Cara Menjalankan

1. Install dependency terlebih dahulu:

   ```
   npm install
   ```

2. Compile dan jalankan aplikasi:
   ```
   npm run dev
   ```

Atau bisa juga compile dan jalankan secara terpisah:

```
npm run build
npm start
```

## Tips Mengerjakan

1. Kerjakan secara bertahap, satu file satu waktu. Jangan buru-buru ingin menyelesaikan semuanya sekaligus.

2. Jika menemukan error, baca pesan errornya dengan teliti. TypeScript biasanya memberikan petunjuk yang cukup jelas tentang apa yang salah.

3. Gunakan file main.ts untuk menguji setiap fungsi yang sudah dibuat. Ini membantu memastikan kode berjalan dengan baik.

4. Jika bingung tentang optional parameter, ingat bahwa parameter bisa dibuat opsional dengan menambahkan tanda tanya setelah nama parameter.

5. Return type void berarti fungsi tidak mengembalikan nilai apa pun. Fungsi semacam ini biasanya digunakan untuk operasi yang hanya melakukan aksi, seperti menampilkan data atau mengubah state.

Selamat mengerjakan. Jangan ragu untuk bertanya jika menemukan kendala.

Henry Rivardo - Mentor Software Engineer
