console.log("=== 5.1 TEBAK OPERASI ===");

// 1. Tebakan: "55" | Hasil Asli: "55"
console.log(5 + "5");

// 2. Tebakan: 6 | Hasil Asli: 6
console.log("10" - 4);

// 3. Tebakan: 20 | Hasil Asli: 20
console.log("10" * "2");

// 4. Tebakan: "string" | Hasil Asli: "string"
console.log(typeof ("5" + 5));

// 5. Tebakan: 1 | Hasil Asli: 1
console.log(9 % 4);

// 6. Tebakan: 25 | Hasil Asli: 25
console.log((2 + 3) ** 2);

// 7. Tebakan: 2.5 | Hasil Asli: 2.5
console.log(10 / 4);

// 8. Tebakan: Infinity | Hasil Asli: Infinity
console.log(1 / 0);

// 9. Tebakan: NaN | Hasil Asli: NaN
console.log("abc" * 2);

// 10. Tebakan: "number" | Hasil Asli: "number"
console.log(typeof NaN);

// 11. Tebakan: true | Hasil Asli: true
console.log((5 > 3 && 2 > 4) || 1 === 1);

// 12. Tebakan: true | Hasil Asli: true
console.log(!true || !false);

// 13. Tebakan: false | Hasil Asli: false
console.log("5" == 5 && "5" !== 5);

// 14. Tebakan: true | Hasil Asli: true
console.log(typeof [] === typeof {});

// 15. Tebakan: 50 | Hasil Asli: 50
console.log([10, 20, 30][1] + [10, 20, 30][2]);


console.log("\n=== 5.2 EKSPERIMEN var DAN let ===");

// Bukti 1: Variabel var bocor keluar blok, sedangkan let memiliki block scope
{
  var varGlobalBok = "Halo dari var di dalam blok";
  let letLokalBok = "Halo dari let di dalam blok";
}
console.log(varGlobalBok); // Berhasil tercetak: "Halo dari var di dalam blok"
// console.log(letLokalBok); // Jika diaktifkan, memicu ReferenceError: letLokalBok is not defined


// Bukti 2: Deklarasi ulang variabel dengan nama yang sama
var namaBarang = "Kopi";
var namaBarang = "Teh"; // Berhasil ditimpa tanpa error
console.log("Hasil deklarasi ulang var:", namaBarang);

let hargaMenu = 15000;
// let hargaMenu = 20000; // Jika diaktifkan, memicu SyntaxError: Identifier 'hargaMenu' has already been declared
console.log("Harga menu let:", hargaMenu);

/* 5.3 JELASKAN (JAWABAN DALAM KOMENTAR)

1. Kenapa 5 + "5" dan "10" - 4 hasilnya berbeda jenis?
   - Pada `5 + "5"`, operator plus (+) mendeteksi adanya tipe string, sehingga JavaScript melakukan *type coercion* implisit dengan mengubah angka `5` menjadi string `"5"`, lalu menggabungkannya menjadi `"55"` (tipe string).
   - Pada `"10" - 4`, operator minus (-) tidak memiliki fungsi penggabungan teks seperti halnya plus (+). Oleh karena itu, JavaScript memaksa string `"10"` dikonversi menjadi angka `10`, lalu melakukan operasi matematika murni `10 - 4 = 6` (tipe number).

2. typeof NaN hasilnya "number". Apa artinya NaN, dan kenapa tipenya number?
   - `NaN` adalah singkatan dari *Not-a-Number*. Nilai ini merepresentasikan hasil dari operasi matematika yang tidak valid atau gagal menghasilkan angka yang sah (contoh: `"abc" * 2` atau `0 / 0`).
   - Tipenya tetap `"number"` dalam standar IEEE 754 (standar penomoran floating-point di JavaScript) karena `NaN` secara teknis dikategorikan sebagai nilai numerik spesial yang mendefinisikan kondisi "nilai numerik yang gagal dihitung", bukan sebagai tipe data teks atau boolean yang terpisah.

3. Jelaskan urutan evaluasi 5 > 3 && 2 > 4 || 1 === 1 langkah demi langkah.
   - Langkah 1: Evaluasi perbandingan pertama `5 > 3` menghasilkan `true`.
   - Langkah 2: Evaluasi perbandingan kedua `2 > 4` menghasilkan `false`.
   - Langkah 3: Evaluasi ekspresi AND (`&&`) di sisi kiri: `true && false` menghasilkan `false`.
   - Langkah 4: Evaluasi perbandingan ketiga `1 === 1` menghasilkan `true`.
   - Langkah 5: Evaluasi operasi OR (`||`) antara hasil sisi kiri dan sisi kanan: `false || true` menghasilkan akhir **`true`**.

4. typeof [] hasilnya "object". Bagaimana kamu membedakan array dari object biasa di kodemu?
   - Untuk membedakan apakah suatu variabel adalah Array murni atau Object biasa, kita dapat menggunakan method bawaan `Array.isArray(namaVariabel)` yang akan mengembalikan nilai `true` jika itu array dan `false` jika object biasa. Alternatif lain bisa menggunakan `variabel instanceof Array`.

5. Dari kode let hasil = 5 + 10; lalu console.log(hasil * 2);: sebutkan semua statement dan expression, dan nilai tiap expression.
   - Statement 1: `let hasil = 5 + 10;`
     - Expression di dalamnya:
       - `5 + 10` -> bernilai `15`
       - `5` -> bernilai `5`
       - `10` -> bernilai `10`
       - `let hasil = 15` (deklarasi/assignment expression) -> bernilai `15`
   - Statement 2: `console.log(hasil * 2);`
     - Expression di dalamnya:
       - `hasil` -> bernilai `15`
       - `2` -> bernilai `2`
       - `hasil * 2` -> bernilai `30`
       - `console.log(30)` (pemanggilan fungsi) -> bernilai `undefined` (karena console.log tidak mengembalikan nilai apa pun).

6. eksperimen.js dijalankan di mana dan oleh apa? Apa bedanya dengan menjalankan JavaScript lewat Node.js? Kenapa modul ini memakai let dan const, bukan var?
   - Di file HTML ini, `eksperimen.js` dijalankan di dalam **lingkungan browser** (Google Chrome) dan dieksekusi oleh mesin JavaScript browser (misal V8 Engine di Chrome).
   - Perbedaan dengan Node.js: Node.js menjalankan JavaScript di lingkungan sisi server (*server-side* / *backend*) tanpa antarmuka browser, sehingga tidak memiliki akses ke objek global browser seperti `window` atau elemen DOM, melainkan memiliki modul sistem berkas (`fs`, `path`, dll.).
   - Alasan memakai `let` dan `const` daripada `var`: `let` dan `const` memiliki fitur *block scope* yang mencegah variabel bocor ke luar blok kode (seperti loop atau if), serta meminimalisir bug akibat deklarasi ulang variabel yang tidak sengaja, menjadikan kode jauh lebih aman, bersih, dan mudah diprediksi (*modern JavaScript* / ES6+).

7. Apa hasil eksperimen var dan let milikmu? Jelaskan apa yang terjadi di setiap kasus.
   - Kasus 1 (`var` vs `let` di dalam blok `{}`): Variabel yang dideklarasikan dengan `var` di dalam kurung kurawal tetap bisa diakses dari luar kurung kurawal tersebut (*function-scoped* / *global-scoped*), sedangkan variabel `let` terkurung rapat di dalam blok tempat ia dibuat (*block-scoped*) dan memicu `ReferenceError` jika dipanggil dari luar.
   - Kasus 2 (Deklarasi ulang): Variabel `var` mengizinkan kita mendeklarasikan nama variabel yang sama berkali-kali pada cakupan yang sama tanpa peringatan (nilai lama akan ditimpa), sedangkan `let` melarang keras hal tersebut dan langsung melempar `SyntaxError` untuk mencegah penimpaan variabel secara tidak sengaja.

8. Berikan satu contoh nyata di program besar yang bisa menimbulkan bug karena var bocor keluar blok atau dideklarasikan ulang.
   - Contoh nyata: Di dalam sebuah aplikasi kasir besar, seorang programmer menggunakan loop `for (var i = 0; i < daftarPesanan.length; i++)` untuk memproses diskon pesanan. Karena `var` bersifat *function-scoped* (bocor ke luar blok loop), variabel `i` tetap hidup di luar fungsi loop tersebut. Jika di baris kode bawahnya ada fungsi asynchronous (seperti `setTimeout` atau *event listener* tombol bayar) yang juga memanfaatkan variabel `i` untuk melacak indeks item, nilai `i` sudah terlanjur berubah menjadi nilai maksimum dari perulangan sebelumnya. Akibatnya, sistem salah mengambil atau memproses data transaksi pelanggan yang berujung pada kerugian atau error transaksi.
*/