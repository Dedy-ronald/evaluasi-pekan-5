/*Program hitung transaksi Kedai Senja*/ // FIX 1: Menambahkan tanda tutup komentar (*/) yang hilang di awal baris agar tidak terjadi SyntaxError.

const namaKedai = "Kedai Senja";
const HARGA_KOPI = 18000;
const HARGA_ROTI = 15000;
let TARIF_PAJAK = 0.11 ; // FIX 2: Mengubah const menjadi let pada TARIF_PAJAK agar nilainya di baris bawah bisa diubah menjadi 0.12 (sesuai instruksi kasus uji).
let jumlahKopi = 3; 
let jumlahRoti = 2; // FIX 3: Mengubah string "2" menjadi tipe data number (2) agar saat dijumlahkan tidak menjadi penggabungan string ("32").
let transaksiSelesai = 0;

// Jumlah seluruh item. Seharusnya: 5
let jumlahItem = jumlahKopi + jumlahRoti;

// Subtotal. Seharusnya: 84000
// FIX 4: Memperbaiki penulisan variabel 'jumlahkopi' (huruf k kecil) menjadi 'jumlahKopi' (huruf K kapital) karena bersifat case-sensitive.
let subtotal = HARGA_KOPI * jumlahKopi + HARGA_ROTI * jumlahRoti;

// Pajak 11% dari subtotal setelah dipotong diskon 10000. Seharusnya: 8140
// FIX 5: Menambahkan tanda kurung '(subtotal - 10000)' agar operasi pengurangan diskon didahulukan sebelum dikalikan dengan tarif pajak.
let pajak =( subtotal - 10000 ) * TARIF_PAJAK;

// Total bayar. Seharusnya: 82140
// FIX 6: Menambahkan titik koma (;) di akhir baris dan memastikan variabel 'pajak' sudah dihitung dengan benar dari diskon.
let totalBayar = subtotal - 10000 + pajak;

// Pelanggan membayar 100000. Cukup? Seharusnya: true
// FIX 7: Mengubah operator assignment (=) tunggal yang bernilai salah menjadi operator perbandingan lebih besar atau sama dengan (>=).
let uangBayar = 100000;
let uangCukup = uangBayar >= totalBayar;

// Kembalian. Seharusnya: 17860
// FIX 8: Membalik urutan pengurangan kembalian dari 'totalBayar - uangBayar' menjadi 'uangBayar - totalBayar' agar tidak bernilai negatif.
let kembalian = uangBayar - totalBayar;
// Jumlah item genap? Seharusnya: false
// FIX 9: Mengubah pengecekan sisa bagi dari '=== 1' (ganjil) menjadi '=== 0' (genap) atau '!== 1'.
let itemGenap = jumlahItem % 2 === 0;

// Transaksi selesai bertambah 1. Seharusnya: 1
// FIX 10: Mengubah ekspresi penambahan menjadi assignment penugasan (+= 1) agar variabel 'transaksiSelesai' benar-benar menyimpan nilai baru.
transaksiSelesai += 1;

// Kedai berganti nama. Seharusnya "Kedai Senja Baru"
// FIX 11: Menghapus keyword 'let' karena variabel 'namaKedai' sudah dideklarasikan sebelumnya di baris atas.
// namaKedai = "Kedai Senja Baru";

// Tarif pajak tidak boleh berubah. Seharusnya tetap 0.12
// FIX 12: Mengubah nilai TARIF_PAJAK menjadi 0.12 (setelah diubah menjadi let pada FIX 2 agar tidak memicu TypeError).
TARIF_PAJAK = 0.12;

// FIX 13: Memperbaiki kapitalisasi fungsi 'Console.log' menjadi 'console.log' karena method bawaan JavaScript berhuruf kecil.
console.log(namaKedai, jumlahItem, subtotal, pajak, totalBayar, uangCukup, kembalian, itemGenap, transaksiSelesai);

/* 
   CATATAN BUG (12 KESALAHAN)

1. Komentar tidak ditutup (SyntaxError)
   - Jenis: Menghentikan program dengan error (SyntaxError).
   - Penyebab: Tanda `/*` di awal baris tidak ditutup dengan penutup komentar, sehingga seluruh kode di bawahnya dianggap sebagai komentar oleh interpreter JavaScript.

2. Deklarasi konstanta pada variabel yang nilainya diubah (TypeError)
   - Jenis: Menghentikan program dengan error (TypeError).
   - Penyebab: Variabel `TARIF_PAJAK` dideklarasikan menggunakan `const`, tetapi di bagian bawah kode dilakukan assignment ulang (`TARIF_PAJAK = 0.12`).

3. Tipe data string pada jumlah roti (Bug Logika / Hasil Salah)
   - Jenis: Tidak error, tapi hasil salah.
   - Penyebab: `jumlahRoti` diset sebagai string `"2"`. Ketika dijumlahkan dengan `jumlahKopi` (number `3`), operator `+` melakukan penggabungan string (*string concatenation*), menghasilkan `"32"` bukan `5`.

4. Typo penulisan nama variabel (ReferenceError)
   - Jenis: Menghentikan program dengan error (ReferenceError).
   - Penyebab: Menulis `jumlahkopi` dengan huruf `k` kecil, padahal variabel dideklarasikan sebagai `jumlahKopi` dengan huruf `K` kapital.

5. Prioritas operator matematika / Kurung yang hilang (Bug Logika / Hasil Salah)
   - Jenis: Tidak error, tapi hasil salah.
   - Penyebab: Penulisan `subtotal - 10000 * TARIF_PAJAK` tanpa tanda kurung membuat perkalian `10000 * TARIF_PAJAK` dikerjakan lebih dulu sebelum pengurangan, melenceng dari aturan diskon dikurangi dulu dari subtotal.

6. Missing Semicolon / Syntax minor (Opsional / Tergantung strict mode)
   - Jenis: Tidak error, tapi bagian dari kerapian penulisan statement.
   - Penyebab: Baris `let totalBayar = ...` tidak diakhiri titik koma.

7. Salah menggunakan operator penugasan alih-alih perbandingan (Bug Logika / Hasil Salah)
   - Jenis: Tidak error, tapi hasil salah.
   - Penyebab: Menggunakan `uangBayar = totalBayar` (assignment) alih-alih `uangBayar >= totalBayar` (perbandingan), sehingga `uangCukup` bernilai angka hasil assignment alih-alih boolean.

8. Urutan rumus matematika terbalik (Bug Logika / Hasil Salah)
   - Jenis: Tidak error, tapi hasil salah.
   - Penyebab: Rumus kembalian ditulis `totalBayar - uangBayar`, yang menghasilkan angka negatif (`-17860`) alih-alih `uangBayar - totalBayar`.

9. Logika sisa bagi (Modulo) terbalik (Bug Logika / Hasil Salah)
   - Jenis: Tidak error, tapi hasil salah.
   - Penyebab: Mengecek kelipatan genap menggunakan `=== 1` (yang mana itu untuk mendeteksi ganjil), sehingga nilai `itemGenap` menjadi salah (`true` padahal item berjumlah 5).

10. Variabel tidak di-assign kembali (Bug Logika / Hasil Salah)
    - Jenis: Tidak error, tapi hasil salah.
    - Penyebab: Menulis `transaksiSelesai + 1` tanpa operator assignment (`+=` atau `=`), sehingga nilai `transaksiSelesai` tetap `0` dan tidak bertambah.

11. Mendeklarasikan ulang variabel dengan let (SyntaxError)
    - Jenis: Menghentikan program dengan error (SyntaxError).
    - Penyebab: Menulis ulang `let namaKedai = ...`, padahal `namaKedai` sudah pernah dideklarasikan menggunakan `const` di baris atas.

12. Kapitalisasi fungsi console bawaan (ReferenceError)
    - Jenis: Menghentikan program dengan error (ReferenceError).
    - Penyebab: Menulis `Console.log` dengan huruf kapital `C`, padahal method bawaan JavaScript yang benar adalah `console.log`.
*/