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

## 🎮 Cara Penggunaan Lengkap

### **A. Untuk Tamu Undangan**

#### **1. Membuka Undangan**
1. **Buka link undangan** di browser (Chrome, Firefox, Safari, Edge)
2. **Tunggu opening screen** muncul dengan animasi amplop
3. **Klik tombol "Buka Undangan"** untuk masuk ke halaman utama
4. **Tunggu loading screen** selesai (2 detik)
5. **Scroll ke bawah** untuk melihat semua informasi

#### **2. Melihat Informasi Pernikahan**
- **Nama pasangan**: Ayu & Fatur
- **Tanggal**: Sabtu, 15 Februari 2026
- **Waktu**: 08.00 - 12.00 WIB
- **Lokasi**: Masjid Agung Slawi, Tegal
- **Kontak**: Nomor WhatsApp dan telepon
- **Countdown timer**: Waktu tersisa hingga hari pernikahan
- **Jam real-time**: Waktu saat ini yang update otomatis

#### **3. Konfirmasi Kehadiran (RSVP)**
1. **Scroll ke bagian "Konfirmasi Kehadiran"**
2. **Isi nama lengkap** di field "Masukkan nama lengkap Anda"
3. **Masukkan jumlah tamu** (1-10 orang)
4. **Pilih status**:
   - **Klik "Hadir"** → Otomatis buka WhatsApp dengan pesan konfirmasi
   - **Klik "Tidak Hadir"** → Otomatis buka WhatsApp + muncul opsi transfer
5. **Tunggu notifikasi** "Membuka WhatsApp untuk konfirmasi..."
6. **Kirim pesan** di WhatsApp yang sudah terbuka

#### **4. Transfer Uang (Jika Tidak Hadir)**
1. **Setelah pilih "Tidak Hadir"**, scroll ke bawah
2. **Lihat section "Bantuan untuk Pasangan"**
3. **Pilih metode transfer**:
   - **Bank Transfer**: BCA atau Mandiri
   - **E-Wallet**: DANA atau OVO
4. **Klik tombol "Copy"** di samping nomor rekening
5. **Tunggu notifikasi** "Nomor rekening berhasil disalin!"
6. **Transfer** sesuai nominal yang diinginkan

#### **5. Mengirim Ucapan Selamat**
1. **Scroll ke bagian "Ucapan Selamat"**
2. **Isi nama Anda** di field "Nama Anda"
3. **Tulis ucapan** di textarea (minimal 10 karakter)
4. **Klik "Kirim Ucapan"**
5. **Tunggu notifikasi** "Ucapan selamat berhasil dikirim!"
6. **Lihat ucapan** muncul di halaman dengan format waktu

#### **6. Melihat Gallery Foto**
1. **Scroll ke bagian "Momen Berharga"**
2. **Hover mouse** di atas foto untuk melihat overlay
3. **Klik foto** untuk melihat dalam ukuran penuh
4. **Klik di luar modal** untuk menutup

### **B. Untuk Admin/Pasangan**

#### **1. Melihat Data RSVP**
1. **Buka undangan** di browser
2. **Tekan F12** untuk membuka Developer Tools
3. **Klik tab "Application"** (Chrome) atau "Storage" (Firefox)
4. **Klik "Local Storage"** di sidebar kiri
5. **Lihat data** di key "rsvpData"
6. **Format data**: JSON dengan nama, jumlah tamu, status, tanggal

#### **2. Melihat Ucapan Selamat**
1. **Buka Developer Tools** (F12)
2. **Klik "Application" > "Local Storage"**
3. **Lihat data** di key "wishes"
4. **Format data**: Array JSON dengan nama, pesan, timestamp
5. **Export data** (copy-paste ke file .txt atau .json)

#### **3. Mengelola Data**
- **Backup data**: Copy data dari localStorage
- **Reset data**: Clear localStorage di Developer Tools
- **Export data**: Simpan data ke file eksternal

## 🛠️ Kustomisasi Detail

### **1. Mengubah Informasi Pernikahan**

#### **A. Nama Pasangan**
**File**: `index.html` (baris 22, 47, 69, 70)
```html
<!-- Opening Screen -->
<h1 class="opening-title">Ayu & Fatur</h1>

<!-- Header -->
<h1 class="couple-names">Ayu & Fatur</h1>

<!-- Detail Pasangan -->
<div class="bride">
    <h2>Ayu</h2>
    <p>Putri dari Bapak Ahmad & Ibu Siti</p>
</div>
<div class="groom">
    <h2>Fatur</h2>
    <p>Putra dari Bapak Budi & Ibu Rina</p>
</div>
```

#### **B. Tanggal Pernikahan**
**File**: `index.html` (baris 48)
```html
<p class="wedding-date">Sabtu, 15 Februari 2026</p>
```

**File**: `script.js` (baris 80)
```javascript
const weddingDate = new Date('2026-02-15T08:00:00+07:00').getTime();
```

#### **C. Lokasi dan Kontak**
**File**: `index.html` (baris 94-106)
```html
<p><strong>Masjid Agung Slawi</strong><br>
Jl. Procot Slawi, Tegal<br>
<small>📍 <a href="https://maps.google.com/?q=-6.9788,109.1403" target="_blank">Lihat di Google Maps</a></small></p>

<p>📞 0812-3456-7890 (Ahmad)<br>
📞 0813-4567-8901 (Budi)<br>
📱 <a href="https://wa.me/6281234567890" target="_blank">WhatsApp</a></p>
```

#### **D. Nomor WhatsApp untuk RSVP**
**File**: `script.js` (baris 233)
```javascript
const whatsappNumber = "6281234567890"; // Ganti dengan nomor Anda
```

### **2. Mengganti Foto Gallery**

#### **A. Upload Foto**
1. **Siapkan foto** dengan format JPG, PNG, atau WebP
2. **Ukuran optimal**: 800x600px atau 1200x800px
3. **Nama file**: Gunakan huruf kecil dan tanpa spasi
4. **Letakkan** di folder yang sama dengan index.html

#### **B. Update HTML**
**File**: `index.html` (baris 138-186)
```html
<!-- Horizontal Row -->
<img src="foto-prewedding-1.jpg" alt="Pre Wedding 1">
<img src="foto-engagement.jpg" alt="Engagement">

<!-- Vertical Row -->
<img src="foto-love-story.jpg" alt="Love Story">
<img src="foto-family.jpg" alt="Family">

<!-- Mixed Row -->
<img src="foto-couple.jpg" alt="Couple">
<img src="foto-preparation.jpg" alt="Wedding Preparation">
```

#### **C. Tips Foto**
- **Resolusi tinggi**: Minimal 800x600px
- **Rasio konsisten**: 4:3 atau 16:9
- **Format optimal**: JPG untuk foto, PNG untuk transparansi
- **Nama file**: Huruf kecil, tanpa spasi, deskriptif

### **3. Mengubah Warna Tema**

#### **A. Warna Background**
**File**: `style.css` (baris 12)
```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

#### **B. Warna Nama Pasangan**
**File**: `style.css` (baris 89)
```css
.couple-names {
    color: #fff;
}
```

#### **C. Warna Tombol RSVP**
**File**: `style.css` (baris 386-390)
```css
.rsvp-btn.confirm {
    background: #4ecdc4; /* Hijau */
}

.rsvp-btn.decline {
    background: rgba(255, 255, 255, 0.2);
}
```

#### **D. Warna Section Ucapan**
**File**: `style.css` (baris 624)
```css
.wishes-section h2 {
    color: #667eea;
}
```

### **4. Mengubah Font**

#### **A. Font Utama**
**File**: `index.html` (baris 8)
```html
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

#### **B. Font Nama Pasangan**
**File**: `style.css` (baris 89)
```css
.couple-names {
    font-family: 'Dancing Script', cursive;
}
```

#### **C. Font Body**
**File**: `style.css` (baris 6)
```css
body {
    font-family: 'Poppins', sans-serif;
}
```

### **5. Menambahkan Musik Background**

#### **A. Upload File Audio**
1. **Siapkan file** dengan format MP3, WAV, atau OGG
2. **Durasi**: 2-5 menit (akan di-loop)
3. **Ukuran**: Maksimal 5MB untuk loading cepat
4. **Letakkan** di folder assets/music/

#### **B. Update JavaScript**
**File**: `script.js` (fungsi addMusicPlayer)
```javascript
// Uncomment dan ganti path
audio = new Audio('assets/music/background.mp3');
audio.loop = true;
audio.play();
```

### **6. Mengubah Informasi Transfer**

#### **A. Bank Transfer**
**File**: `index.html` (baris 136-139)
```html
<p><strong>BCA:</strong> 1234567890 (Ayu)</p>
<p><strong>Mandiri:</strong> 0987654321 (Fatur)</p>
<button class="copy-btn" onclick="copyToClipboard('1234567890')">📋 Copy BCA</button>
<button class="copy-btn" onclick="copyToClipboard('0987654321')">📋 Copy Mandiri</button>
```

#### **B. E-Wallet**
**File**: `index.html` (baris 142-145)
```html
<p><strong>DANA:</strong> 081234567890</p>
<p><strong>OVO:</strong> 081234567890</p>
<button class="copy-btn" onclick="copyToClipboard('081234567890')">📋 Copy DANA</button>
<button class="copy-btn" onclick="copyToClipboard('081234567890')">📋 Copy OVO</button>
```

## 📱 Responsive Design

### **Desktop (1200px+)**
- **Layout**: Penuh dengan semua fitur
- **Gallery**: 3 baris (horizontal, vertical, mixed)
- **Countdown**: 4 unit waktu dalam satu baris
- **RSVP**: Tombol dalam satu baris
- **Font**: Ukuran normal

### **Tablet (768px - 1199px)**
- **Layout**: Menyesuaikan lebar layar
- **Gallery**: Tetap dalam baris terpisah
- **Countdown**: 4 unit waktu dalam satu baris
- **RSVP**: Tombol dalam satu baris
- **Font**: Sedikit lebih kecil

### **Mobile (767px ke bawah)**
- **Layout**: Vertikal, satu kolom
- **Gallery**: Semua foto dalam satu kolom
- **Countdown**: 4 unit waktu dalam grid 2x2
- **RSVP**: Tombol full width, vertikal
- **Font**: Menyesuaikan ukuran layar
- **Touch**: Optimized untuk sentuhan

## 🚀 Cara Menjalankan

### **1. Lokal (Komputer Sendiri)**

#### **A. Double-click**
1. **Buka folder** undangan
2. **Double-click** file `index.html`
3. **Browser** akan terbuka otomatis

#### **B. Drag & Drop**
1. **Buka browser** (Chrome, Firefox, Safari, Edge)
2. **Drag file** `index.html` ke jendela browser
3. **Drop** untuk membuka

#### **C. Via Terminal**
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

#### **D. Via Live Server (VS Code)**
1. **Install extension** "Live Server"
2. **Right-click** file `index.html`
3. **Pilih** "Open with Live Server"
4. **Browser** akan terbuka dengan auto-reload

### **2. Online (Hosting)**

#### **A. GitHub Pages**
1. **Buat repository** di GitHub
2. **Upload semua file** ke repository
3. **Aktifkan GitHub Pages** di Settings
4. **Akses** via URL: `https://username.github.io/repository-name`

#### **B. Netlify**
1. **Buka** netlify.com
2. **Drag & drop** folder undangan
3. **Tunggu** proses deploy selesai
4. **Akses** via URL yang diberikan

#### **C. Vercel**
1. **Install Vercel CLI**: `npm i -g vercel`
2. **Login**: `vercel login`
3. **Deploy**: `vercel`
4. **Follow** instruksi yang muncul

## 🔧 Troubleshooting

### **1. Countdown Timer Tidak Berfungsi**

#### **Penyebab:**
- Format tanggal salah
- Timezone tidak sesuai
- JavaScript error

#### **Solusi:**
```javascript
// Pastikan format tanggal benar
const weddingDate = new Date('2026-02-15T08:00:00+07:00').getTime();

// Cek console untuk error
console.log('Wedding date:', weddingDate);
console.log('Current time:', new Date().getTime());
```

#### **Format Tanggal yang Benar:**
- ✅ `'2026-02-15T08:00:00+07:00'` (dengan timezone)
- ✅ `'2026-02-15T08:00:00'` (tanpa timezone)
- ❌ `'15-02-2026 08:00:00'` (format salah)

### **2. Foto Gallery Tidak Muncul**

#### **Penyebab:**
- Path file salah
- File tidak ada
- Format tidak didukung

#### **Solusi:**
```html
<!-- Pastikan path benar -->
<img src="foto-prewedding-1.jpg" alt="Pre Wedding 1">

<!-- Cek file ada di folder yang sama -->
<!-- Format yang didukung: JPG, PNG, WebP -->
```

#### **Tips:**
- **Nama file**: Huruf kecil, tanpa spasi
- **Lokasi**: Folder yang sama dengan index.html
- **Format**: JPG, PNG, WebP
- **Ukuran**: Maksimal 2MB per foto

### **3. RSVP Tidak Tersimpan**

#### **Penyebab:**
- localStorage tidak support
- JavaScript error
- Browser security

#### **Solusi:**
```javascript
// Cek localStorage support
if (typeof(Storage) !== "undefined") {
    localStorage.setItem("rsvpData", JSON.stringify(data));
} else {
    console.log("localStorage not supported");
}
```

#### **Browser Support:**
- ✅ Chrome 4+
- ✅ Firefox 3.5+
- ✅ Safari 4+
- ✅ Edge 12+
- ❌ IE 7 dan sebelumnya

### **4. WhatsApp Tidak Terbuka**

#### **Penyebab:**
- Nomor WhatsApp salah
- Format URL salah
- Popup blocker

#### **Solusi:**
```javascript
// Pastikan nomor benar (tanpa +62)
const whatsappNumber = "6281234567890"; // Bukan +6281234567890

// Pastikan URL benar
const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
```

#### **Format Nomor yang Benar:**
- ✅ `6281234567890` (dengan 62, tanpa +)
- ❌ `+6281234567890` (dengan +)
- ❌ `081234567890` (tanpa 62)

### **5. Layout Rusak di Mobile**

#### **Penyebab:**
- Viewport meta tag tidak ada
- CSS responsive tidak benar
- Font size terlalu besar

#### **Solusi:**
```html
<!-- Pastikan viewport meta tag ada -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

```css
/* Pastikan responsive CSS ada */
@media (max-width: 768px) {
    .couple-names {
        font-size: 2.5rem;
    }
}
```

### **6. Ucapan Selamat Tidak Muncul**

#### **Penyebab:**
- JavaScript error
- localStorage penuh
- Input tidak valid

#### **Solusi:**
1. **Cek console** untuk error
2. **Clear localStorage** jika penuh
3. **Validasi input** sebelum submit

## 📋 Checklist Sebelum Launch

### **Informasi Dasar**
- [ ] Nama pasangan sudah benar
- [ ] Tanggal pernikahan sudah benar
- [ ] Waktu pernikahan sudah benar
- [ ] Lokasi sudah benar dengan koordinat Google Maps
- [ ] Nomor kontak sudah benar
- [ ] Nomor WhatsApp sudah benar

### **Foto dan Media**
- [ ] Foto gallery sudah diupload
- [ ] Nama file foto sudah benar
- [ ] Foto tampil dengan baik
- [ ] Ukuran foto sudah optimal
- [ ] Musik background (opsional) sudah diupload

### **Fitur dan Fungsi**
- [ ] Countdown timer berfungsi
- [ ] Jam real-time berfungsi
- [ ] RSVP system berfungsi
- [ ] WhatsApp integration berfungsi
- [ ] Transfer section berfungsi
- [ ] Ucapan selamat berfungsi
- [ ] Gallery modal berfungsi

### **Testing**
- [ ] Test di desktop (Chrome, Firefox, Safari, Edge)
- [ ] Test di tablet (iPad, Android tablet)
- [ ] Test di mobile (iPhone, Android)
- [ ] Test loading speed
- [ ] Test semua fitur interaktif
- [ ] Test responsive design

### **Backup dan Deploy**
- [ ] Backup file original
- [ ] Test di hosting
- [ ] Cek URL dan link
- [ ] Test di berbagai device
- [ ] Monitor performance

## 🎨 Tips Desain

### **1. Foto Gallery**
- **Resolusi tinggi**: Minimal 800x600px
- **Rasio konsisten**: 4:3 atau 16:9
- **Kualitas baik**: Tidak blur atau pixelated
- **Komposisi menarik**: Foto yang bagus secara visual
- **Variasi**: Mix foto portrait dan landscape

### **2. Warna**
- **Soft dan romantis**: Pink, lavender, gold
- **Kontras baik**: Text mudah dibaca
- **Konsisten**: Gunakan palette yang sama
- **Accessible**: Warna yang mudah dibedakan

### **3. Font**
- **Mudah dibaca**: Font yang jelas
- **Ukuran cukup**: Tidak terlalu kecil
- **Hierarchy**: Bedakan heading dan body text
- **Web-safe**: Font yang support di semua browser

### **4. Animasi**
- **Smooth**: Transisi yang halus
- **Tidak berlebihan**: Jangan mengganggu UX
- **Performance**: Animasi yang ringan
- **Meaningful**: Animasi yang bermakna

### **5. Loading**
- **Cepat**: Loading time < 3 detik
- **Feedback**: Loading indicator yang jelas
- **Optimized**: File yang dikompres
- **Progressive**: Load konten penting dulu

## 📞 Support

### **Getting Help**
- 📧 **Email**: support@wedding-invitation.com
- 💬 **Discord**: [Join our server](https://discord.gg/wedding-invitation)
- 📱 **WhatsApp**: +62 812-3456-7890
- 🐛 **Issues**: [GitHub Issues](https://github.com/username/wedding-invitation/issues)

### **FAQ**

**Q: Bagaimana cara mengubah tanggal pernikahan?**
A: Edit file `script.js` di baris 80, ubah tanggal di `new Date('2026-02-15T08:00:00+07:00')`

**Q: Bisakah menambahkan musik background?**
A: Ya, tambahkan file audio di folder dan edit fungsi `addMusicPlayer()` di `script.js`

**Q: Bagaimana cara mengubah warna tema?**
A: Edit file `style.css`, ubah nilai warna di berbagai class CSS

**Q: Apakah bisa digunakan untuk pernikahan lain?**
A: Tentu! Tinggal ganti nama, tanggal, dan foto sesuai kebutuhan

**Q: Bagaimana cara backup data RSVP dan ucapan?**
A: Buka Developer Tools > Application > Local Storage, copy data dari key "rsvpData" dan "wishes"

**Q: Apakah undangan bisa diakses offline?**
A: Ya, setelah pertama kali dibuka, undangan bisa diakses offline

**Q: Bagaimana cara mengubah nomor WhatsApp?**
A: Edit file `script.js` di baris 233, ubah nilai `whatsappNumber`

---

**Dibuat dengan ❤️ untuk Ayu & Fatur**

*Semoga pernikahan kalian berjalan lancar dan penuh kebahagiaan! 💕*
