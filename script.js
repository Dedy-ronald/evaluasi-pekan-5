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

/*Jawaban latihan bagian 2
1)`nomorWhatsApp` disimpan sebagai string, bukan number adalah nomor WhatsApp (contoh `"08123456789"`) lebih tepat disimpan sebagai **string** karena jika disimpan sebagai number (contoh:081234567890), Javascript akan menganggap nol diawal tidak bernilai dan otomatis merubahnya 81234567890.
2)`website` diisi `null`, sedangkan `catatanKasir` dibiarkan tanpa nilai karena `website` diberi `null`, bukan dibiarkan tanpa nilai seperti di kode awal karena website diberi null untuk menunjukkan kesengajaan bahwa properti tersebut memang ada tetapi belum/tidak memiliki nilai saat ini.
    Perbedaan 'null' dan 'undefined' adalah 'null' nilainya sengaja dikosongkan oleh si programmer sedangkan 'undefined' variabel atau properti yang belum dideklarasikan atau belum pernah diberi nilai oleh Javascript.
3)Jika `menu` berisi 6 item, hasil `menu[6]` adalah `menu[6]` tidak berisi produk ke-6, dan apa yang tercetak jika kamu mengaksesnya Array di JavaScript menggunakan zero-based indexing (penomoran indeks dimulai dari angka 0). Produk ke-1 berada di indeks 0, produk ke-2 di indeks 1, produk ke-3 di indeks 2, dan produk ke-4 berada di indeks 3 sampai seterusnya.
    Jika kita mengakses menu[6], JavaScript akan mencari elemen di posisi ke-7. Karena elemen tersebut tidak ada di dalam array, maka yang tercetak di console adalah undefined.
4)Hasil `typeof menu` adalah typeof menghasilkan 'array' karena array tersebut memiliki tipe non-primitif.
5)`menu` dibuat sebagai array, sedangkan `kedai` dibuat sebagai object karena 'menu' berisi nilai yang berurutan sedangkan 'kedai' memiliki data yang terstruktur.

