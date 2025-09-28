# 💒 Undangan Pernikahan Digital - Ayu & Fatur

![Wedding Invitation](https://img.shields.io/badge/Wedding-Invitation-pink?style=for-the-badge&logo=heart)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Yes-green?style=for-the-badge)
![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)

## 📋 Daftar Isi
- [Deskripsi](#-deskripsi)
- [Fitur Utama](#-fitur-utama)
- [Screenshot](#-screenshot)
- [Instalasi](#-instalasi)
- [Konfigurasi](#-konfigurasi)
- [Struktur File](#-struktur-file)
- [Cara Penggunaan](#-cara-penggunaan)
- [Kustomisasi](#-kustomisasi)
- [API & Integrasi](#-api--integrasi)
- [Troubleshooting](#-troubleshooting)
- [Performance](#-performance)
- [Security](#-security)
- [Deployment](#-deployment)
- [Kontribusi](#-kontribusi)
- [Lisensi](#-lisensi)

## 🎯 Deskripsi

Undangan pernikahan digital yang modern dan interaktif untuk **Ayu & Fatur**. Dibangun dengan HTML5, CSS3, dan JavaScript vanilla, undangan ini menawarkan pengalaman yang memukau dengan animasi yang smooth, countdown timer real-time, sistem RSVP terintegrasi dengan WhatsApp, dan fitur transfer uang untuk tamu yang tidak bisa hadir.

### ✨ Keunggulan
- **🎨 Modern Design** - UI/UX yang elegan dan user-friendly
- **📱 Fully Responsive** - Tampil sempurna di semua device
- **⚡ Real-time Features** - Countdown timer dan jam yang update otomatis
- **💬 WhatsApp Integration** - RSVP langsung ke WhatsApp dengan pesan terformat
- **💰 Payment Integration** - Fitur transfer uang untuk yang tidak hadir
- **💝 Wishes System** - Sistem ucapan selamat interaktif
- **🖼️ Dynamic Gallery** - Layout vertikal dan horizontal yang dinamis
- **🎭 Smooth Animations** - Animasi dan efek visual yang menarik
- **🔒 Secure** - Input validation dan XSS protection
- **⚡ Fast Loading** - Optimized untuk performa terbaik

## 🚀 Fitur Utama

### 1. **Opening Screen (Layar Pembuka)**
- **Animasi amplop** yang menarik dengan nama pasangan
- **Transisi smooth** dari opening ke loading screen
- **Loading screen** dengan animasi hati berdetak
- **Responsive design** untuk semua ukuran layar

### 2. **Countdown Timer Real-time**
- **Update otomatis** setiap detik
- **Animasi scale** saat angka berubah
- **Timezone Indonesia** (WIB)
- **Pesan khusus** saat hari pernikahan tiba
- **Format**: Hari, Jam, Menit, Detik

### 3. **Jam Real-time**
- **Format waktu Indonesia** (WIB)
- **Update setiap detik**
- **Tampil di detail pernikahan**
- **Format**: "Waktu saat ini: 14:30:25 WIB"

### 4. **Gallery Interaktif**
- **Layout dinamis**: Horizontal, Vertical, dan Mixed rows
- **Hover effects** dengan overlay dan judul
- **Modal popup** untuk melihat foto detail
- **Responsive grid** untuk semua device
- **Animasi fade-in** saat scroll

### 5. **Sistem RSVP Terintegrasi WhatsApp**
- **Form input** nama lengkap dan jumlah tamu
- **Validasi input** yang ketat
- **Redirect otomatis** ke WhatsApp dengan pesan terformat
- **Pesan berbeda** untuk hadir dan tidak hadir
- **Penyimpanan data** di localStorage
- **Toast notifications** untuk feedback

### 6. **Fitur Transfer Uang**
- **Tampil otomatis** untuk yang tidak hadir
- **Informasi lengkap**: Bank (BCA, Mandiri) dan E-wallet (DANA, OVO)
- **Tombol copy** nomor rekening
- **Notifikasi sukses** saat copy
- **Design menarik** dan mudah digunakan

### 7. **Sistem Ucapan Selamat**
- **Form input** nama dan pesan
- **Validasi input** dan keamanan XSS
- **Tampilan real-time** ucapan
- **Format waktu** yang user-friendly
- **Penyimpanan** di localStorage
- **Animasi fade-in** untuk ucapan baru

### 8. **Informasi Detail Pernikahan**
- **Nama pasangan**: Ayu & Fatur
- **Tanggal**: Sabtu, 15 Februari 2026
- **Waktu**: 08.00 - 12.00 WIB
- **Lokasi**: Masjid Agung Slawi, Tegal
- **Google Maps** link yang bisa diklik
- **Kontak lengkap** dengan WhatsApp

## 📸 Screenshot

### Desktop View
```
┌─────────────────────────────────────────────────────────┐
│  💌 Opening Screen - Amplop Animasi                    │
│  👰 Ayu & Fatur - Header dengan Gradient               │
│  📅 Countdown Timer - Real-time (Hari, Jam, Menit, Detik) │
│  📋 RSVP Form - Nama, Jumlah, Konfirmasi ke WhatsApp  │
│  💰 Transfer Section - Bank & E-wallet (jika tidak hadir) │
│  🖼️ Gallery - Layout Vertikal & Horizontal             │
│  💝 Ucapan Selamat - Form & Display Real-time          │
│  📞 Kontak & Lokasi - Google Maps & WhatsApp           │
└─────────────────────────────────────────────────────────┘
```

### Mobile View
```
┌─────────────────┐
│  💌 Opening     │
│  👰 Ayu & Fatur │
│  📅 Countdown   │
│  📋 RSVP       │
│  💰 Transfer   │
│  🖼️ Gallery    │
│  💝 Ucapan     │
│  📞 Kontak     │
└─────────────────┘
```

## 🛠️ Instalasi

### Prerequisites
- **Web browser modern** (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- **Text editor** (VS Code, Sublime Text, Atom, dll.)
- **Web server** (opsional, untuk testing lokal)

### Langkah Instalasi

#### **1. Clone atau Download Repository**
```bash
git clone https://github.com/username/wedding-invitation.git
cd wedding-invitation
```

#### **2. Buka di Browser**

**Cara 1: Double-click**
```bash
# Double-click file index.html
# Browser akan terbuka otomatis
```

**Cara 2: Drag & Drop**
```bash
# Drag file index.html ke browser
# Drop untuk membuka
```

**Cara 3: Via Terminal**
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

**Cara 4: Via Live Server (VS Code)**
```bash
# Install Live Server extension
# Right-click index.html > "Open with Live Server"
# Browser akan terbuka dengan auto-reload
```

#### **3. Online Hosting (Opsional)**

**GitHub Pages:**
1. Upload ke GitHub repository
2. Aktifkan GitHub Pages di Settings
3. Akses via URL: `https://username.github.io/repository-name`

**Netlify:**
1. Drag & drop folder ke netlify.com
2. Tunggu proses deploy selesai
3. Akses via URL yang diberikan

**Vercel:**
```bash
npm i -g vercel
vercel login
vercel
```

## ⚙️ Konfigurasi

### 1. **Mengubah Informasi Pernikahan**

#### **A. Nama Pasangan**
**File**: `index.html`
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
**File**: `index.html`
```html
<p class="wedding-date">Sabtu, 15 Februari 2026</p>
```

**File**: `script.js` (baris 80)
```javascript
const weddingDate = new Date('2026-02-15T08:00:00+07:00').getTime();
```

#### **C. Lokasi dan Kontak**
**File**: `index.html`
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

### 2. **Mengganti Foto Gallery**

#### **A. Upload Foto**
1. **Siapkan foto** dengan format JPG, PNG, atau WebP
2. **Ukuran optimal**: 800x600px atau 1200x800px
3. **Nama file**: Huruf kecil, tanpa spasi
4. **Letakkan** di folder yang sama dengan index.html

#### **B. Update HTML**
**File**: `index.html`
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
- **Ukuran file**: Maksimal 2MB per foto

### 3. **Mengubah Warna Tema**

#### **A. Warna Background**
**File**: `style.css`
```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

#### **B. Warna Nama Pasangan**
**File**: `style.css`
```css
.couple-names {
    color: #fff;
}
```

#### **C. Warna Tombol RSVP**
**File**: `style.css`
```css
.rsvp-btn.confirm {
    background: #4ecdc4; /* Hijau */
}

.rsvp-btn.decline {
    background: rgba(255, 255, 255, 0.2);
}
```

#### **D. Warna Section Ucapan**
**File**: `style.css`
```css
.wishes-section h2 {
    color: #667eea;
}
```

### 4. **Mengubah Font**

#### **A. Font Utama**
**File**: `index.html`
```html
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

#### **B. Font Nama Pasangan**
**File**: `style.css`
```css
.couple-names {
    font-family: 'Dancing Script', cursive;
}
```

#### **C. Font Body**
**File**: `style.css`
```css
body {
    font-family: 'Poppins', sans-serif;
}
```

### 5. **Menambahkan Musik Background**

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

### 6. **Mengubah Informasi Transfer**

#### **A. Bank Transfer**
**File**: `index.html`
```html
<p><strong>BCA:</strong> 1234567890 (Ayu)</p>
<p><strong>Mandiri:</strong> 0987654321 (Fatur)</p>
<button class="copy-btn" onclick="copyToClipboard('1234567890')">📋 Copy BCA</button>
<button class="copy-btn" onclick="copyToClipboard('0987654321')">📋 Copy Mandiri</button>
```

#### **B. E-Wallet**
**File**: `index.html`
```html
<p><strong>DANA:</strong> 081234567890</p>
<p><strong>OVO:</strong> 081234567890</p>
<button class="copy-btn" onclick="copyToClipboard('081234567890')">📋 Copy DANA</button>
<button class="copy-btn" onclick="copyToClipboard('081234567890')">📋 Copy OVO</button>
```

## 📁 Struktur File

```
wedding-invitation/
├── index.html                      # File utama HTML
├── style.css                       # File styling CSS
├── script.js                       # File JavaScript
├── README_LENGKAP.md               # Dokumentasi lengkap
├── PANDUAN_PENGGUNAAN_LENGKAP.md   # Panduan penggunaan detail
├── PANDUAN_PENGGUNAAN.md           # Panduan singkat
├── README.md                       # Dokumentasi standar
├── IMG_1831.JPG                   # Foto gallery 1
├── 2.JPG                          # Foto gallery 2
├── bdb3734d-4256-459f-abb8-81a725efc45d.jpg  # Foto gallery 3
├── c8aae3b3-9673-4629-8a79-b5bf69c3dc21.JPG  # Foto gallery 4
└── assets/                         # Folder untuk asset tambahan (opsional)
    ├── music/
    │   └── background.mp3
    ├── images/
    │   └── logo.png
    └── fonts/
        └── custom-font.woff2
```

## 🎮 Cara Penggunaan

### **A. Untuk Tamu Undangan**

#### **1. Membuka Undangan**
1. **Buka link undangan** di browser
2. **Tunggu opening screen** dengan animasi amplop
3. **Klik "Buka Undangan"** untuk masuk ke halaman utama
4. **Tunggu loading screen** selesai (2 detik)
5. **Scroll ke bawah** untuk melihat semua informasi

#### **2. Melihat Informasi Pernikahan**
- **Nama pasangan**: Ayu & Fatur
- **Tanggal**: Sabtu, 15 Februari 2026
- **Waktu**: 08.00 - 12.00 WIB
- **Lokasi**: Masjid Agung Slawi, Tegal
- **Countdown timer**: Waktu tersisa hingga hari pernikahan
- **Jam real-time**: Waktu saat ini yang update otomatis

#### **3. Konfirmasi Kehadiran (RSVP)**
1. **Scroll ke bagian "Konfirmasi Kehadiran"**
2. **Isi nama lengkap** di field input
3. **Masukkan jumlah tamu** (1-10 orang)
4. **Pilih status**:
   - **"Hadir"** → Otomatis buka WhatsApp dengan pesan konfirmasi
   - **"Tidak Hadir"** → Otomatis buka WhatsApp + muncul opsi transfer
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
2. **Isi nama Anda** di field input
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

## 🎨 Kustomisasi

### **1. Mengubah Warna Tema**

#### **A. Warna Background**
**File**: `style.css`
```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

#### **B. Warna Nama Pasangan**
**File**: `style.css`
```css
.couple-names {
    color: #fff;
}
```

#### **C. Warna Tombol RSVP**
**File**: `style.css`
```css
.rsvp-btn.confirm {
    background: #4ecdc4; /* Hijau */
}

.rsvp-btn.decline {
    background: rgba(255, 255, 255, 0.2);
}
```

#### **D. Warna Section Ucapan**
**File**: `style.css`
```css
.wishes-section h2 {
    color: #667eea;
}
```

### **2. Mengubah Font**

#### **A. Font Utama**
**File**: `index.html`
```html
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

#### **B. Font Nama Pasangan**
**File**: `style.css`
```css
.couple-names {
    font-family: 'Dancing Script', cursive;
}
```

#### **C. Font Body**
**File**: `style.css`
```css
body {
    font-family: 'Poppins', sans-serif;
}
```

### **3. Mengubah Animasi**

#### **A. Animasi fadeInUp**
**File**: `style.css`
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

#### **B. Animasi heartbeat**
**File**: `style.css`
```css
@keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
}
```

### **4. Mengubah Layout Gallery**

#### **A. Horizontal Row**
**File**: `index.html`
```html
<div class="gallery-row horizontal">
    <div class="gallery-item wide">
        <img src="foto-lebar.jpg" alt="Foto Lebar">
    </div>
    <div class="gallery-item">
        <img src="foto-biasa.jpg" alt="Foto Biasa">
    </div>
</div>
```

#### **B. Vertical Row**
**File**: `index.html`
```html
<div class="gallery-row vertical">
    <div class="gallery-item">
        <img src="foto-1.jpg" alt="Foto 1">
    </div>
    <div class="gallery-item">
        <img src="foto-2.jpg" alt="Foto 2">
    </div>
</div>
```

## 🔌 API & Integrasi

### **1. WhatsApp Integration**

#### **RSVP ke WhatsApp**
```javascript
function sendToWhatsApp(status, guestName, guestCount) {
    const whatsappNumber = "6281234567890";
    const weddingDate = "15 Februari 2026";
    const weddingLocation = "Masjid Agung Slawi, Tegal";
    
    let message;
    
    if (status === 'hadir') {
        message = `Assalamualaikum! 

Saya ${guestName} ingin konfirmasi kehadiran untuk pernikahan Ayu & Fatur.

📅 Tanggal: ${weddingDate}
📍 Lokasi: ${weddingLocation}
👥 Jumlah tamu: ${guestCount} orang
✅ Status: HADIR

Kami akan hadir di hari bahagia kalian. Semoga pernikahan berjalan lancar! 🙏

Terima kasih atas undangannya! 💕`;
    } else {
        message = `Assalamualaikum! 

Saya ${guestName} ingin konfirmasi kehadiran untuk pernikahan Ayu & Fatur.

📅 Tanggal: ${weddingDate}
📍 Lokasi: ${weddingLocation}
👥 Jumlah tamu: ${guestCount} orang
❌ Status: TIDAK HADIR

Mohon maaf, kami tidak bisa hadir di hari bahagia kalian. Semoga pernikahan berjalan lancar dan penuh kebahagiaan! 🙏

Doa terbaik untuk Ayu & Fatur! 💕`;
    }

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
```

### **2. Backend Integration (Opsional)**

#### **Mengirim Data ke Server**
```javascript
async function sendRSVPToServer(rsvpData) {
    try {
        const response = await fetch('/api/rsvp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(rsvpData)
        });
        
        const result = await response.json();
        console.log('RSVP sent:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
```

### **3. Database Integration (Opsional)**

#### **Menyimpan ke Database**
```javascript
// Contoh dengan Firebase
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';

const firebaseConfig = {
    // Your Firebase config
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function saveWishToDatabase(wishData) {
    const wishesRef = ref(database, 'wishes');
    push(wishesRef, wishData);
}
```

## 🐛 Troubleshooting

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

## 📱 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 60+ | ✅ Full |
| Firefox | 55+ | ✅ Full |
| Safari | 12+ | ✅ Full |
| Edge | 79+ | ✅ Full |
| IE | 11 | ⚠️ Limited |

## 🚀 Performance

### **Optimasi yang Sudah Diterapkan**
- **Lazy Loading** - Gambar dimuat saat dibutuhkan
- **CSS Minification** - File CSS dioptimasi
- **JavaScript Optimization** - Kode JS dioptimasi
- **Responsive Images** - Gambar menyesuaikan device
- **Efficient Animations** - Animasi menggunakan CSS3

### **Metrik Performance**
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.0s

### **Tips Optimasi**
1. **Kompres gambar** sebelum upload
2. **Gunakan format WebP** untuk foto
3. **Minimize JavaScript** jika tidak perlu
4. **Gunakan CDN** untuk font dan library
5. **Enable gzip** di server

## 🔒 Security

### **Fitur Keamanan**
- **Input Validation** - Semua input divalidasi
- **XSS Protection** - Text di-escape sebelum ditampilkan
- **CSRF Protection** - Token CSRF untuk form
- **Content Security Policy** - CSP header untuk keamanan

### **Best Practices**
```javascript
// Sanitize input
function sanitizeInput(input) {
    return input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
}

// Validate email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
```

## 📊 Analytics (Opsional)

### **Google Analytics**
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### **Custom Analytics**
```javascript
// Track RSVP
function trackRSVP(status) {
    gtag('event', 'rsvp', {
        'event_category': 'engagement',
        'event_label': status
    });
}

// Track wishes
function trackWish() {
    gtag('event', 'wish_submitted', {
        'event_category': 'engagement'
    });
}
```

## 🌐 Deployment

### **1. GitHub Pages**
```bash
# Push ke GitHub
git add .
git commit -m "Initial commit"
git push origin main

# Aktifkan GitHub Pages di Settings
# Repository Settings > Pages > Source: main branch
```

### **2. Netlify**
```bash
# Drag & drop folder ke Netlify
# Atau connect dengan GitHub repository
# Deploy otomatis setiap push
```

### **3. Vercel**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow instructions
```

### **4. Custom Domain**
```html
<!-- Tambahkan di index.html -->
<link rel="canonical" href="https://yourdomain.com/">
<meta property="og:url" content="https://yourdomain.com/">
```

## 🤝 Kontribusi

### **Cara Berkontribusi**
1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

### **Guidelines**
- Gunakan conventional commits
- Test di berbagai browser
- Update dokumentasi jika perlu
- Follow coding standards

## 📝 Changelog

### **Version 2.0.0 (Current)**
- ✅ Added opening screen dengan animasi amplop
- ✅ Added countdown timer real-time
- ✅ Added jam real-time
- ✅ Added gallery layout vertikal & horizontal
- ✅ Added RSVP ke WhatsApp
- ✅ Added fitur transfer uang
- ✅ Added sistem ucapan selamat
- ✅ Improved responsive design
- ✅ Added animasi dan efek visual
- ✅ Added input validation dan security
- ✅ Added toast notifications

### **Version 1.0.0**
- ✅ Basic wedding invitation
- ✅ Simple RSVP system
- ✅ Basic gallery
- ✅ Responsive design

## 🆘 Support

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

## 👥 Tim Pengembang

- **Developer**: [Your Name](https://github.com/yourusername)
- **Designer**: [Designer Name](https://github.com/designer)
- **Tester**: [Tester Name](https://github.com/tester)

## 🙏 Acknowledgments

- Font: [Google Fonts](https://fonts.google.com/)
- Icons: [Font Awesome](https://fontawesome.com/)
- Inspiration: [Dribbble](https://dribbble.com/)
- Community: [Stack Overflow](https://stackoverflow.com/)

---

**Dibuat dengan ❤️ untuk Ayu & Fatur**

*Semoga pernikahan kalian berjalan lancar dan penuh kebahagiaan! 💕*

---

## 📞 Kontak

- **Website**: [https://yourdomain.com](https://yourdomain.com)
- **Email**: info@yourdomain.com
- **Phone**: +62 812-3456-7890
- **Address**: Jakarta, Indonesia

---

*Last updated: January 2025*
