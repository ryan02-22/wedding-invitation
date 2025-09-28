# 📖 Panduan Penggunaan Undangan Pernikahan Digital - Ayu & Fatur

## 🎯 Daftar Isi
- [Fitur-Fitur Utama](#-fitur-fitur-utama)
- [Cara Penggunaan Lengkap](#-cara-penggunaan-lengkap)
- [Kustomisasi Detail](#-kustomisasi-detail)
- [Troubleshooting](#-troubleshooting)
- [Tips & Trik](#-tips--trik)

## 🚀 Fitur-Fitur Utama

### 1. **Opening Screen (Layar Pembuka)**
- **Fungsi**: Menampilkan layar pembuka yang elegan dengan animasi amplop
- **Cara Kerja**: 
  - User melihat amplop dengan nama pasangan "Ayu & Fatur"
  - Klik tombol "Buka Undangan" untuk masuk ke halaman utama
  - Animasi transisi yang smooth dari opening ke loading screen
- **Durasi**: 2 detik loading screen
- **Responsive**: Tampil sempurna di semua device

### 2. **Countdown Timer Real-time (Penghitung Mundur)**
- **Fungsi**: Menampilkan waktu tersisa hingga hari pernikahan
- **Fitur**:
  - Update otomatis setiap detik
  - Animasi scale saat angka berubah
  - Menampilkan hari, jam, menit, dan detik
  - Pesan khusus saat hari pernikahan tiba
  - Timezone Indonesia (WIB)
- **Lokasi**: File `script.js` - fungsi `updateCountdown()`
- **Kustomisasi**: Ubah tanggal di baris 80: `new Date('2026-02-15T08:00:00+07:00')`

### 3. **Jam Real-time (Waktu Saat Ini)**
- **Fungsi**: Menampilkan waktu saat ini yang update otomatis
- **Fitur**:
  - Format waktu Indonesia (WIB)
  - Update setiap detik
  - Menampilkan di bagian detail pernikahan
  - Format: "Waktu saat ini: 14:30:25 WIB"
- **Lokasi**: File `script.js` - fungsi `updateCurrentTime()`

### 4. **Gallery Interaktif dengan Layout Dinamis**
- **Fungsi**: Menampilkan foto-foto dengan susunan yang menarik
- **Layout**:
  - **Horizontal Row**: Foto lebar + foto biasa
  - **Vertical Row**: Foto-foto tersusun vertikal
  - **Mixed Row**: Kombinasi foto biasa dan lebar
- **Fitur**:
  - Hover effect dengan overlay dan judul
  - Modal popup saat klik foto
  - Responsive design untuk semua device
  - Animasi fade-in saat scroll
- **Lokasi**: File `index.html` - section gallery, File `style.css` - class gallery

### 5. **Sistem RSVP Terintegrasi WhatsApp**
- **Fungsi**: Memungkinkan tamu konfirmasi kehadiran langsung ke WhatsApp
- **Fitur**:
  - Form input nama lengkap dan jumlah tamu
  - Tombol "Hadir" dan "Tidak Hadir"
  - Validasi input yang ketat
  - Redirect otomatis ke WhatsApp dengan pesan terformat
  - Penyimpanan data di localStorage
  - Toast notification untuk feedback
- **Pesan WhatsApp**:
  - **Hadir**: Pesan konfirmasi dengan detail lengkap
  - **Tidak Hadir**: Pesan permohonan maaf dengan doa
- **Lokasi**: File `script.js` - fungsi `confirmAttendance()` dan `sendToWhatsApp()`

### 6. **Fitur Transfer Uang untuk yang Tidak Hadir**
- **Fungsi**: Menampilkan opsi transfer untuk tamu yang tidak bisa hadir
- **Fitur**:
  - Tampil otomatis saat pilih "Tidak Hadir"
  - Informasi rekening bank (BCA, Mandiri)
  - Informasi e-wallet (DANA, OVO)
  - Tombol copy nomor rekening
  - Notifikasi sukses saat copy
- **Lokasi**: File `index.html` - section transfer-section

### 7. **Sistem Ucapan Selamat Interaktif**
- **Fungsi**: Memungkinkan tamu mengirim ucapan selamat
- **Fitur**:
  - Form input nama dan pesan
  - Validasi input dan keamanan XSS
  - Tampilan real-time ucapan
  - Format waktu yang user-friendly
  - Penyimpanan di localStorage
  - Animasi fade-in untuk ucapan baru
- **Lokasi**: File `script.js` - fungsi `submitWish()`, `displayWish()`, `loadWishes()`

### 8. **Informasi Lokasi Terperinci**
- **Fungsi**: Menampilkan detail lokasi pernikahan
- **Fitur**:
  - Nama tempat: "Masjid Agung Slawi"
  - Alamat lengkap: "Jl. Procot Slawi, Tegal"
  - Link Google Maps yang bisa diklik
  - Informasi kontak lengkap
  - Nomor WhatsApp yang bisa diklik
- **Lokasi**: File `index.html` - section wedding-details

## 🛠️ Cara Kustomisasi

### 1. **Mengubah Informasi Pernikahan**

#### File: `index.html`
```html
<!-- Nama Pasangan -->
<h1 class="couple-names">Fajri & Iskandar</h1>

<!-- Tanggal Pernikahan -->
<p class="wedding-date">Sabtu, 15 Februari 2025</p>

<!-- Detail Pasangan -->
<div class="bride">
    <h2>Fajri</h2>
    <p>Putra dari Bapak Ahmad & Ibu Siti</p>
</div>

<!-- Lokasi -->
<p><strong>Masjid Agung Slawi</strong><br>
Jl. Procot Slawi, Tegal<br>
<small>📍 <a href="https://maps.google.com/?q=-6.9788,109.1403" target="_blank">Lihat di Google Maps</a></small></p>

<!-- Kontak -->
<p>📞 0812-3456-7890 (Ahmad)<br>
📞 0813-4567-8901 (Budi)<br>
📱 <a href="https://wa.me/6281234567890" target="_blank">WhatsApp</a></p>
```

#### File: `script.js`
```javascript
// Mengubah tanggal countdown
const weddingDate = new Date('2025-02-15T08:00:00+07:00').getTime();
```

### 2. **Mengganti Foto Gallery**

#### File: `index.html`
```html
<!-- Ganti src dengan nama file foto Anda -->
<img src="foto-prewedding-1.jpg" alt="Pre Wedding 1">
<img src="foto-engagement.jpg" alt="Engagement">
<img src="foto-love-story.jpg" alt="Love Story">
```

**Tips Foto:**
- Format yang didukung: JPG, PNG, WebP
- Ukuran optimal: 800x600px atau 1200x800px
- Pastikan foto ada di folder yang sama dengan file HTML

### 3. **Mengubah Warna Tema**

#### File: `style.css`
```css
/* Warna utama */
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Warna tombol RSVP */
.rsvp-btn.confirm {
    background: #4ecdc4; /* Hijau */
}

/* Warna nama pasangan */
.couple-names {
    color: #fff;
}
```

### 4. **Menambahkan Musik Background**

#### File: `script.js`
```javascript
// Di fungsi addMusicPlayer(), uncomment dan ganti path
audio = new Audio('path/to/your/music.mp3');
audio.loop = true;
audio.play();
```

## 📱 Responsive Design

### Desktop (1200px+)
- Layout penuh dengan semua fitur
- Gallery dalam 3 baris (horizontal, vertical, mixed)
- Countdown timer dengan 4 unit waktu

### Tablet (768px - 1199px)
- Layout menyesuaikan lebar layar
- Gallery tetap dalam baris terpisah
- Tombol RSVP dalam satu baris

### Mobile (767px ke bawah)
- Layout vertikal
- Gallery dalam satu kolom
- Tombol RSVP full width
- Font size menyesuaikan

## 🚀 Cara Menjalankan

### 1. **Lokal (Komputer Sendiri)**
```bash
# Buka file index.html di browser
start index.html
# atau double-click file index.html
```

### 2. **Online (Hosting)**
1. Upload semua file ke hosting (GitHub Pages, Netlify, Vercel)
2. Pastikan file foto juga terupload
3. Buka URL yang diberikan hosting

## 🔧 Troubleshooting

### 1. **Countdown Tidak Berfungsi**
- Pastikan tanggal di `script.js` benar
- Cek format tanggal: `YYYY-MM-DDTHH:MM:SS+07:00`
- Refresh halaman

### 2. **Foto Tidak Muncul**
- Pastikan nama file foto benar
- Cek ekstensi file (.jpg, .png, .jpeg)
- Pastikan file ada di folder yang sama

### 3. **RSVP Tidak Tersimpan**
- Cek browser support localStorage
- Pastikan JavaScript enabled
- Coba di browser lain

### 4. **Layout Rusak di Mobile**
- Pastikan viewport meta tag ada
- Cek CSS responsive
- Test di berbagai ukuran layar

## 📋 Checklist Sebelum Launch

- [ ] Ganti nama pasangan
- [ ] Update tanggal pernikahan
- [ ] Ganti lokasi dan kontak
- [ ] Upload foto asli
- [ ] Test countdown timer
- [ ] Test RSVP system
- [ ] Test di berbagai device
- [ ] Test loading speed
- [ ] Backup file original

## 🎨 Tips Desain

1. **Foto Gallery**: Gunakan foto dengan resolusi tinggi dan rasio yang konsisten
2. **Warna**: Pilih warna yang soft dan romantis
3. **Font**: Gunakan font yang mudah dibaca
4. **Animasi**: Jangan berlebihan, fokus pada user experience
5. **Loading**: Pastikan loading time tidak terlalu lama

## 📞 Support

Jika mengalami masalah atau butuh bantuan:
1. Cek dokumentasi ini terlebih dahulu
2. Periksa console browser untuk error
3. Pastikan semua file lengkap dan benar
4. Test di browser yang berbeda

---

**Selamat menggunakan undangan pernikahan digital! 💕**
