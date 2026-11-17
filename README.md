# ☕ KopiKita POS - Aplikasi Kasir Cafe Mobile Web

Aplikasi kasir cafe berbasis web yang **didesain khusus dan berfokus 100% untuk layar browser handphone (smartphone)**. Sangat simpel, cepat, responsif, dan mudah digunakan dengan satu tangan oleh barista atau kasir cafe.

---

## ✨ Fitur Utama

1. **Desain Mobile-First & Touch-Friendly**:
   - Layout proporsional khusus layar HP portrait (iPhone & Android).
   - Tombol-tombol besar, nyaman di-tap dengan jempol satu tangan.
   - Dilengkapi efek *haptic feedback* (getar halus di HP yang mendukung).
   - Dukungan safe area (notch & home indicator iPhone).

2. **Menu Kasir (Point of Sale)**:
   - Filter kategori cepat: *Kopi, Non-Kopi, Makanan, Snack*.
   - Kolom pencarian menu instan.
   - Badge jumlah item di keranjang pada masing-masing kartu menu.
   - Status menu: *Tersedia / Habis*.

3. **Bottom Sheet Checkout (Pemesanan & Pembayaran)**:
   - Panel geser dari bawah ala aplikasi mobile modern.
   - Pilihan pesanan: **Dine In (Makan di Tempat)** / **Take Away (Bungkus)**.
   - Input nama pelanggan & shortcut nomor meja (1, 2, 3, 4, Bar, custom).
   - Atur jumlah (+ / -), hapus item, dan tambah catatan khusus (cth: *Less ice, Panas, Gula pisah*).
   - Pilihan metode bayar: **Tunai**, **QRIS**, **Transfer Bank**.
   - **Kalkulator Uang Pas & Cepat**: Tombol nominal Rp 20rb, Rp 50rb, Rp 100rb, serta hitung kembalian otomatis secara instan.

4. **Struk Digital & Cetak Kasir**:
   - Tampilan nota/struk kasir ala kertas thermal (58mm/80mm).
   - **Cetak Struk**: Terhubung langsung ke dialog print untuk printer thermal bluetooth / printer kasir.
   - **Kirim Struk ke WhatsApp**: Format teks rapi otomatis langsung terkirim ke WhatsApp pelanggan dalam 1 klik.

5. **Laporan & Rekap Penjualan Harian**:
   - Total pendapatan hari ini.
   - Total transaksi sukses.
   - Total item terjual.
   - Riwayat transaksi lengkap dengan opsi cetak ulang struk.

6. **Kelola Menu & Profil Kafe**:
   - Tambah menu baru langsung dari HP (nama, kategori, harga, emoji).
   - Ubah ketersediaan menu (Tersedia / Habis).
   - Ubah profil kafe (Nama Kafe, Alamat, No WA, Kasir, Pajak, Footer Struk).
   - **Export / Import JSON**: Fitur backup & restore data agar data tidak hilang saat ganti perangkat.

7. **Bisa Offline & PWA (Install di HP)**:
   - Data otomatis tersimpan di penyimpanan browser (`localStorage`).
   - Dapat ditambahkan ke Layar Utama (*Add to Home Screen*) sehingga terbuka fullscreen seperti aplikasi Play Store tanpa bar URL browser.

---

## 📱 Cara Menjalankan di Handphone

### Cara 1: Buka Langsung di Browser HP (Paling Praktis)
1. Unggah folder ini ke hosting gratis seperti:
   - **Vercel** (seret folder ke [vercel.com](https://vercel.com))
   - **Netlify Drop** (seret folder ke [app.netlify.com/drop](https://app.netlify.com/drop))
   - **GitHub Pages**
2. Buka link web di browser HP (Chrome / Safari).

### Cara 2: Akses via Jaringan WiFi Lokal (Dari Laptop ke HP)
Bila laptop dan HP terhubung di WiFi / Hotspot yang sama:
1. Di komputer/laptop, jalankan web server sederhana (misal Live Server di VS Code atau ekstensi browser).
2. Buka browser HP dan ketik `http://[IP-Komputer]:[PORT]` (misal: `http://192.168.1.10:5500`).

---

## 📲 Cara Pasang Jadi Aplikasi di Layar Utama HP (PWA)

- **Android (Google Chrome)**:
  1. Buka web di Google Chrome.
  2. Ketuk ikon titik tiga (⋮) di pojok kanan atas.
  3. Pilih **"Tambahkan ke Layar Utama"** atau **"Instal Aplikasi"**.
  4. Aplikasi KopiKita POS akan muncul di beranda HP Anda layaknya aplikasi native.

- **iPhone (Apple Safari)**:
  1. Buka web di Safari.
  2. Ketuk tombol **Share** (ikon kotak dengan panah ke atas di bagian bawah).
  3. Gulir ke bawah dan pilih **"Tambah ke Layar Utama" (Add to Home Screen)**.
  4. Ketuk **Tambah**.

---

## 📁 Struktur File

```
aplikasi kasir/
├── index.html        # Halaman utama aplikasi mobile
├── style.css         # Styling khusus touch screen & thermal print
├── app.js            # Logika kasir, keranjang, hitung kembalian, struk, dan data
├── manifest.json     # Konfigurasi PWA (Web App Installable)
└── README.md         # Petunjuk penggunaan
```
