# Kedai Senja - Sistem Simulasi & Perhitungan Transaksi Kasir

Proyek web interaktif berbasis JavaScript murni (Vanilla JavaScript) yang dirancang untuk mensimulasikan manajemen data kedai kopi, perhitungan transaksi kasir otomatis, laporan harian, serta eksperimen dasar pemrograman.

---

## Cara Menjalankan
1. Clone repositori ini atau unduh kodenya ke komputer lokal Anda.
2. Pastikan Anda memiliki browser modern (seperti Google Chrome).
3. Buka file `.html` yang ingin diuji (misal: `perbaikan.html` atau `eksperimen.html`) langsung di browser, atau gunakan ekstensi *Live Server* di VS Code.
4. Tekan **F12** atau klik kanan lalu pilih **Inspect**, kemudian buka tab **Console** untuk melihat hasil eksekusi program.

---

## Teknologi yang Digunakan
* **HTML5**: Struktur kerangka halaman penampil skrip.
* **JavaScript (ES6+)**: Logika pemrograman, manipulasi objek/array, operator, dan pengolahan data transaksi.
* **Git & GitHub**: Kontrol versi (*Version Control*) untuk pengelolaan kolaborasi, branch, dan riwayat kode.

---

## Penulis
* **Mr Ded**: Dikembangkan sebagai bagian dari pelatihan dan studi kasus pemrograman JavaScript interaktif.

---

## Riwayat Git (`git log --oneline --graph`)
* d908797 (HEAD -> docs/tebak-jelaskan, origin/docs/tebak-jelaskan) Menjelaskan tebakan operasi dan eksperimen
* a1cced4 Eksperimen var dan let
* 29f6f4b Menebak operasi javascript
* e00ab04 (fix/perbaikan-kode) Membuat catatan bug dalam komentar
* 48989ae Memperbaiki  12 kesalahan di bagian 4
* 22e2a42 (feat/hitungan-kasir) Menjawab soal latihan bagian 3
* 2c1158d Menjawab soal latihan bagian 3
* 4b77c32 Menghitung transaksi & membuat laporan harian
* b655e80 (origin/main, main) Menjawab soal latihan bagian 2
* 07ab2a1 Mendata Kedai
* f635782 Mempersiapkan proyek
*   0784bc0 (feat/data-kedai) tipe: deskripsi
|\
| * 4f40f5b Initial commit
* 4c392a8 tipe: deskripsi
* 257b218 tipe: deskripsi

## Riwayat Blame
 git blame index.html
^257b218 (Dedy 2026-10-10 09:54:36 +0700  1) <!DOCTYPE html>
^257b218 (Dedy 2026-10-10 09:54:36 +0700  2) <html lang="en">
^257b218 (Dedy 2026-10-10 09:54:36 +0700  3) <head>
^257b218 (Dedy 2026-10-10 09:54:36 +0700  4)     <meta charset="UTF-8">
^257b218 (Dedy 2026-10-10 09:54:36 +0700  5)     <meta name="viewport" content="width=device-width, initial-scale=1.0">
^257b218 (Dedy 2026-10-10 09:54:36 +0700  6)     <title>Document</title>
^257b218 (Dedy 2026-10-10 09:54:36 +0700  7) </head>
^257b218 (Dedy 2026-10-10 09:54:36 +0700  8) <body>
^257b218 (Dedy 2026-10-10 09:54:36 +0700  9)     <script src="script.js"></script>
^257b218 (Dedy 2026-10-10 09:54:36 +0700 10) </body>
^257b218 (Dedy 2026-10-10 09:54:36 +0700 11) </html>

## Jawaban 3 pertanyaan dengan bahasa sendiri
    - Apa beda `git add` dan `git commit`?
    Jawaban:
    Git Add > Masuk ke Staving Area
    Git Commit > Masuk ke Repository

    - Kenapa konflik terjadi pada Bagian 6.1, dan bagaimana kamu menyelesaikannya?
    Jawaban:
    Karena Merge Conflict, dengan menghapus salah satunya

    - Apa beda `fork` dan `clone`? Apa gunanya Pull Request?
    Jawaban:
    Fork untuk menyalin repositori orang lain ke dalam git hub kita sendiri
    clone untuk mengunduh salinan repositori di github ke komputer lokal
    fungsi pull request adalah fitur kolaborasi di github
