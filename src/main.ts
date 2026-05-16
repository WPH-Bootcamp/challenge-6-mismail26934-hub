// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik

console.log('Book Management Application - Week 6');
console.log('=====================================');

// Mulai pengujian di bawah ini

import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { addBook, listBooks, searchBook } from './functions/bookManager';

type ReadlineInterface = ReturnType<typeof createInterface>;

function parsePublicationYear(raw: string): number | null {
  const n = Number.parseInt(raw.trim(), 10);
  return Number.isFinite(n) ? n : null;
}

async function promptPublicationYear(rl: ReadlineInterface): Promise<number> {
  const raw = (await rl.question('Publication year: ')).trim();
  const year = parsePublicationYear(raw);
  if (year === null) {
    console.log('Invalid year; enter a whole number.');
    return promptPublicationYear(rl);
  }
  return year;
}

async function promptAddBookFromCli(rl: ReadlineInterface): Promise<void> {
  console.log('\n--- Add book ---\n');

  while (true) {
    const title = (await rl.question('Title: ')).trim();
    if (!title) {
      console.log('Title cannot be empty..\n');
      continue;
    }
    const author = (await rl.question('Author: ')).trim();
    if (!author) {
      console.log('Author cannot be empty.\n');
      continue;
    }

    const publicationYear = await promptPublicationYear(rl);
    addBook({ title, author, publicationYear });
    console.log('');
    break;
  }
}

async function promptListAndSearchFromCli(
  rl: ReadlineInterface
): Promise<void> {
  console.log('\n--- List books ---\n');
  listBooks();

  console.log('\n--- Search books (CLI input) ---\n');
  const keyword = (
    await rl.question(
      'Title keyword (leave blank and press Enter to show all books): '
    )
  ).trim();

  if (keyword === '') {
    searchBook();
  } else {
    searchBook(keyword);
  }
}

async function readMainMenuChoice(
  rl: ReadlineInterface
): Promise<'1' | '2' | '0'> {
  while (true) {
    console.log('\n========== Menu ==========');
    console.log('1. Add book');
    console.log('2. List and search books');
    console.log('0. Exit');
    const raw = (await rl.question('Choose menu (0–2): ')).trim();
    if (raw === '1' || raw === '2' || raw === '0') {
      return raw;
    }
    console.log('Invalid choice. Enter 0, 1, atau 2.');
  }
}

async function confirmExit(rl: ReadlineInterface): Promise<boolean> {
  const ans = (await rl.question('\nAre you sure you want to exit ? (y/n): '))
    .trim()
    .toLowerCase();
  return ans === 'y' || ans === 'ya' || ans === 'yes';
}

async function main(): Promise<void> {
  const rl = createInterface({ input, output });

  try {
    while (true) {
      const menu = await readMainMenuChoice(rl);

      if (menu === '0') {
        if (await confirmExit(rl)) {
          console.log('\nThank you');
          break;
        }
        console.log('Back to menu.');
        continue;
      }

      if (menu === '1') {
        await promptAddBookFromCli(rl);
      } else {
        await promptListAndSearchFromCli(rl);
      }
    }
  } finally {
    rl.close();
  }
}

main().catch((err: unknown) => {
  console.error(err);
  process.exitCode = 1;
});
