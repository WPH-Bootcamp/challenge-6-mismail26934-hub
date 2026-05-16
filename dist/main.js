"use strict";
// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Book Management Application - Week 6');
console.log('=====================================');
// Mulai pengujian di bawah ini
const promises_1 = require("node:readline/promises");
const node_process_1 = require("node:process");
const bookManager_1 = require("./functions/bookManager");
function parsePublicationYear(raw) {
    const n = Number.parseInt(raw.trim(), 10);
    return Number.isFinite(n) ? n : null;
}
async function promptPublicationYear(rl) {
    const raw = (await rl.question('Tahun terbit: ')).trim();
    const year = parsePublicationYear(raw);
    if (year === null) {
        console.log('Tahun tidak valid, masukkan bilangan bulat.');
        return promptPublicationYear(rl);
    }
    return year;
}
async function promptAddBookFromCli(rl) {
    console.log('\n--- Tambah buku ---\n');
    while (true) {
        const title = (await rl.question('Judul: ')).trim();
        if (!title) {
            console.log('Judul tidak boleh kosong.\n');
            continue;
        }
        const author = (await rl.question('Penulis: ')).trim();
        if (!author) {
            console.log('Penulis tidak boleh kosong.\n');
            continue;
        }
        const publicationYear = await promptPublicationYear(rl);
        (0, bookManager_1.addBook)({ title, author, publicationYear });
        console.log('');
        break;
    }
}
async function promptListAndSearchFromCli(rl) {
    console.log('\n--- Tampilkan buku ---\n');
    (0, bookManager_1.listBooks)();
    console.log('\n--- Cari buku (input CLI) ---\n');
    const keyword = (await rl.question('Kata kunci judul (kosongkan lalu Enter untuk menampilkan semua buku): ')).trim();
    if (keyword === '') {
        (0, bookManager_1.searchBook)();
    }
    else {
        (0, bookManager_1.searchBook)(keyword);
    }
}
async function readMainMenuChoice(rl) {
    while (true) {
        console.log('\n========== Menu ==========');
        console.log('1. Tambah buku');
        console.log('2. Tampilkan buku dan cari buku');
        console.log('0. Keluar');
        const raw = (await rl.question('Pilih menu (0–2): ')).trim();
        if (raw === '1' || raw === '2' || raw === '0') {
            return raw;
        }
        console.log('Pilihan tidak valid. Masukkan 0, 1, atau 2.');
    }
}
async function confirmExit(rl) {
    const ans = (await rl.question('\nApakah Anda yakin ingin keluar? (y/n): '))
        .trim()
        .toLowerCase();
    return ans === 'y' || ans === 'ya' || ans === 'yes';
}
async function main() {
    const rl = (0, promises_1.createInterface)({ input: node_process_1.stdin, output: node_process_1.stdout });
    try {
        while (true) {
            const menu = await readMainMenuChoice(rl);
            if (menu === '0') {
                if (await confirmExit(rl)) {
                    console.log('\nTerima kasih');
                    break;
                }
                console.log('Kembali ke Menu.');
                continue;
            }
            if (menu === '1') {
                await promptAddBookFromCli(rl);
            }
            else {
                await promptListAndSearchFromCli(rl);
            }
        }
    }
    finally {
        rl.close();
    }
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
