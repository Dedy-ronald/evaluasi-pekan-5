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
        uangDibayar :120000,
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
        uangDibayar :50000,
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