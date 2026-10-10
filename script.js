/*  Nama            : Muhammad Dedy
    Tanggal         : 10/10/2026
    Tujuan Program  :
*/

let kedai = {
    nama            :"Kedai Senja",
    pemilik         :"Mr. Ded",
    kota            :"Djogjakarta",
    tahunBerdiri    :2026,
    sedangBuka      :"15.00 - 01.00",
    nomorWhatsapp   :081234567890,
    website         :null,
    jamOperasional  :{
        buka:"15.00",
        tutup:"01.00"
    }
};

const menu = [
    {
        nama    :"Americano",
        kategori:"Minuman",
        harga   :20000,
        stok    :30,
        tersedia:true
    },
    {
        nama    :"Kopi Susu",
        kategori:"Minuman",
        harga   :25000,
        stok    :25,
        tersedia:true
    },
    {
        nama    :"Aren Latte",
        kategori:"Minuman",
        harga   :25000,
        stok    :0,
        tersedia:false
    },
    {
        nama    :"Matcha Latte",
        kategori:"Minuman",
        harga   :25000,
        stok    :30,
        tersedia:true
    },
    {
        nama    :"Roti Bakar",
        kategori:"Makanan",
        harga   :10000,
        stok    :30,
        tersedia:true
    },
    {
        nama    :"Kentang Goreng",
        kategori:"Makanan",
        harga   :10000,
        stok    :50,
        tersedia:true
    }
];

const transaksi = [
    {
        kode        :"TRX-001",
        pelanggan   :"Arif",
        sudahMember :true,
        uangDibayar :100000,
        catatan     :"",
        pesanan     : [
            { indeksMenu:0, jumlah:1 },
            { indeksMenu:3, jumlah:1 }
        ]
    },
    {
        kode        :"TRX-002",
        pelanggan   :"Yusuf",
        sudahMember :false,
        uangDibayar :150000,
        catatan     :"",
        pesanan     : [
            { indeksMenu:1, jumlah:1 },
            { indeksMenu:2, jumlah:2 },
            { indeksMenu:4, jumlah:2 },
            { indeksMenu:5, jumlah:2 }
        ]
    },
    {
        kode        :"TRX-003",
        pelanggan   :"Nayla",
        sudahMember :true,
        uangDibayar :60000,
        catatan     :"",
        pesanan     : [
            { indeksMenu:1, jumlah:1 },
            { indeksMenu:2, jumlah:1 },
        ]
    }
];

const indeksMenuPilihan = transaksi[2].pesanan[1].indeksMenu;

console.log("---INFORMASI KEDAI & TRANSAKSI---");
console.log("Nama Kedai:", kedai.nama);
console.log("Kota:", kedai["kota"]);
console.log("Jam Tutup:", kedai.jamOperasional.tutup);
console.log("Menu Pertama", menu[0]);
console.log("Menu Terakhir", menu [menu.length - 1]);
console.log("Nama Pelanggan Kedua", transaksi[1].pelanggan);
console.log("Menu Item ke-2 di Transaksi ke-3:", menu[indeksMenuPilihan].namaMenu);

console.log("\n--- HASIL TYPEOF ---");
console.log("typeof kedai.tahunBerdiri  :", typeof kedai.tahunBerdiri);
console.log("typeof kedai.sedangBuka :",typeof kedai.sedangBuka);
console.log("typeof kedai.website :",typeof kedai.website);
console.log("typeof kedai.jamOperasional :",typeof kedai.jamOperasional);
console.log("typeof menu :",typeof menu);
console.log("typeof transaksi[0].catatan :",typeof transaksi[0].catatan);

let catatanKasir;
console.log("\nNilai variabel catatanKasir:", catatanKasir);

/*Jawaban latihan bagian 2
1)`nomorWhatsApp` disimpan sebagai string, bukan number adalah nomor WhatsApp (contoh `"08123456789"`) lebih tepat disimpan sebagai **string** karena jika disimpan sebagai number (contoh:081234567890), Javascript akan menganggap nol diawal tidak bernilai dan otomatis merubahnya 81234567890.
2)`website` diisi `null`, sedangkan `catatanKasir` dibiarkan tanpa nilai karena `website` diberi `null`, bukan dibiarkan tanpa nilai seperti di kode awal karena website diberi null untuk menunjukkan kesengajaan bahwa properti tersebut memang ada tetapi belum/tidak memiliki nilai saat ini.
    Perbedaan 'null' dan 'undefined' adalah 'null' nilainya sengaja dikosongkan oleh si programmer sedangkan 'undefined' variabel atau properti yang belum dideklarasikan atau belum pernah diberi nilai oleh Javascript.
3)Jika `menu` berisi 6 item, hasil `menu[6]` adalah `menu[6]` tidak berisi produk ke-6, dan apa yang tercetak jika kamu mengaksesnya Array di JavaScript menggunakan zero-based indexing (penomoran indeks dimulai dari angka 0). Produk ke-1 berada di indeks 0, produk ke-2 di indeks 1, produk ke-3 di indeks 2, dan produk ke-4 berada di indeks 3 sampai seterusnya.
    Jika kita mengakses menu[6], JavaScript akan mencari elemen di posisi ke-7. Karena elemen tersebut tidak ada di dalam array, maka yang tercetak di console adalah undefined.
4)Hasil `typeof menu` adalah typeof menghasilkan 'array' karena array tersebut memiliki tipe non-primitif.
5)`menu` dibuat sebagai array, sedangkan `kedai` dibuat sebagai object karena 'menu' berisi nilai yang berurutan sedangkan 'kedai' memiliki data yang terstruktur.
*/

//BAGIAN 3
//  TRANSAKSI 1
const subtotal1 = (menu[transaksi[0].pesanan[0].indeksMenu].harga * transaksi[0].pesanan[0].jumlah) +
                 (menu[transaksi[0].pesanan[1].indeksMenu].harga * transaksi[0].pesanan[1].jumlah);

const potongan1 = transaksi[0].sudahMember ? subtotal1 * 0.10 : 0;
const pajak1 = (subtotal1 - potongan1) * 0.11;
const totalBayar1= (subtotal1 - potongan1) + pajak1;
const kembalian1= transaksi[0].uangDibayar - totalBayar1;

const uangCukup1 = kembalian1 >= 0;
const totalItem1 = transaksi[0].pesanan[0].jumlah + transaksi[0].pesanan[1].jumlah;
const gratisAntar1 = subtotal1 >= 100000 || totalItem1 >= 5;
const semuaMenuTersedia1 = menu [transaksi[0].pesanan[0].indeksMenu].tersedia && menu[transaksi[0].pesanan[1].indeksMenu].tersedia;

const sisa50k1 = uangCukup1 ? kembalian1 % 50000 : 0;
const sisa20k1 = uangCukup1 ? sisa50k1 % 20000 : 0;

//Transaksi 2
const subtotal2 = (menu[transaksi[1].pesanan[0].indeksMenu].harga * transaksi[1].pesanan[0].jumlah) +
                   (menu[transaksi[1].pesanan[1].indeksMenu].harga * transaksi[1].pesanan[1].jumlah) +
                   (menu[transaksi[1].pesanan[2].indeksMenu].harga * transaksi[1].pesanan[2].jumlah) +
                   (menu[transaksi[1].pesanan[3].indeksMenu].harga * transaksi[1].pesanan[3].jumlah);

const potongan2 = transaksi[1].sudahMember ? subtotal1 * 0.10 : 0;
const pajak2 = (subtotal2 - potongan2) * 0.11;
const totalBayar2= (subtotal2 - potongan2) + pajak2;
const kembalian2= transaksi[1].uangDibayar - totalBayar2;

const uangCukup2 = kembalian2 >= 0;
const totalItem2 = transaksi[1].pesanan[0].jumlah;
const gratisAntar2 = subtotal2 >= 100000 || totalItem2 >= 5;
const semuaMenuTersedia2 = menu [transaksi[1].pesanan[0].indeksMenu].tersedia && menu[transaksi[1].pesanan[1].indeksMenu].tersedia;

const sisa50k2 = uangCukup2 ? kembalian2 % 50000 : 0;
const sisa20k2 = uangCukup2 ? sisa50k2 % 20000 : 0;

//Transaksi 3
const subtotal3 = (menu[transaksi[2].pesanan[0].indeksMenu].harga * transaksi[2].pesanan[0].jumlah) +
                    (menu[transaksi[2].pesanan[1].indeksMenu].harga * transaksi[2].pesanan[1].jumlah);

const potongan3 = transaksi[2].sudahMember ? subtotal1 * 0.10 : 0;
const pajak3 = (subtotal3 - potongan3) * 0.11;
const totalBayar3= (subtotal3 - potongan3) + pajak3;
const kembalian3= transaksi[2].uangDibayar - totalBayar3;

const uangCukup3 = kembalian3 >= 0;
const totalItem3 = transaksi[2].pesanan[0].jumlah;
const gratisAntar3 = subtotal3 >= 100000 || totalItem3 >= 5;
const semuaMenuTersedia3 = menu [transaksi[2].pesanan[0].indeksMenu].tersedia && menu[transaksi[2].pesanan[1].indeksMenu].tersedia;

const sisa50k3 = uangCukup2 ? kembalian3 % 50000 : 0;
const sisa20k3 = uangCukup2 ? sisa50k3 % 20000 : 0;

console.log(`========================================`);
console.log(`      LAPORAN HARIAN KEDAI SENJA        `);
console.log(`      Nama Kedai: ${kedai.nama} (${kedai.kota})`);
console.log(`========================================\n`);

console.log(`--- Detail Transaksi 1 (${transaksi[0].namaPelanggan}) ---`);
console.log(`Subtotal       : Rp ${subtotal1}`);
console.log(`Potongan Member: Rp ${potongan1}`);
console.log(`Pajak (11%)    : Rp ${pajak1.toFixed(2)}`);
console.log(`Total Bayar    : Rp ${totalBayar1.toFixed(2)}`);
console.log(`Kembalian      : Rp ${kembalian1.toFixed(2)}`);
console.log(`Uang Cukup     : ${uangCukup1}`);
console.log(`Gratis Antar   : ${gratisAntar1}`);
console.log(`Menu Tersedia  : ${semuaMenuTersedia1}`);
console.log(`Sisa Pecahan   : Sisa bagi 50k = Rp ${sisa50k1}, Sisa bagi 20k = Rp ${sisa20k1}\n`);

console.log(`--- Detail Transaksi 2 (${transaksi[1].namaPelanggan}) ---`);
console.log(`Subtotal       : Rp ${subtotal2}`);
console.log(`Potongan Member: Rp ${potongan2}`);
console.log(`Pajak (11%)    : Rp ${pajak2.toFixed(2)}`);
console.log(`Total Bayar    : Rp ${totalBayar2.toFixed(2)}`);
console.log(`Kembalian      : Rp ${kembalian2.toFixed(2)}`);
console.log(`Uang Cukup     : ${uangCukup2}`);
console.log(`Gratis Antar   : ${gratisAntar2}`);
console.log(`Menu Tersedia  : ${semuaMenuTersedia2}`);
console.log(`Sisa Pecahan   : Sisa bagi 50k = Rp ${sisa50k2}, Sisa bagi 20k = Rp ${sisa20k2}\n`);

console.log(`--- Detail Transaksi 3 (${transaksi[2].namaPelanggan}) ---`);
console.log(`Subtotal       : Rp ${subtotal3}`);
console.log(`Potongan Member: Rp ${potongan3}`);
console.log(`Pajak (11%)    : Rp ${pajak3.toFixed(2)}`);
console.log(`Total Bayar    : Rp ${totalBayar3.toFixed(2)}`);
console.log(`Kembalian      : Rp ${kembalian3.toFixed(2)}`);
console.log(`Uang Cukup     : ${uangCukup3}`);
console.log(`Gratis Antar   : ${gratisAntar3}`);
console.log(`Menu Tersedia  : ${semuaMenuTersedia3}`);
console.log(`Sisa Pecahan   : Sisa bagi 50k = Rp ${sisa50k3}, Sisa bagi 20k = Rp ${sisa20k3}\n`);
