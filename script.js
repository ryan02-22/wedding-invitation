// Opening Screen Function
function openInvitation() {
    const openingScreen = document.getElementById('opening-screen');
    const loadingScreen = document.getElementById('loading-screen');
    
    // Hide opening screen with animation
    openingScreen.style.opacity = '0';
    openingScreen.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        openingScreen.style.display = 'none';
        // Show loading screen
        loadingScreen.style.display = 'flex';
        
        // After loading, hide loading screen and show main content
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                // Start all other functions
                startMainFeatures();
            }, 500);
        }, 2000);
    }, 800);
}

// Start main features after opening screen
function startMainFeatures() {
    updateCountdown();
    updateCurrentTime();
    createFloatingHeart();
    addScrollAnimations();
    addMusicPlayer();
    checkExistingRSVP();
    loadWishes(); // Load existing wishes
}

// Update current time
function updateCurrentTime() {
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: 'Asia/Jakarta'
        });
        
        const currentTimeElement = document.getElementById('current-time');
        if (currentTimeElement) {
            currentTimeElement.textContent = `Waktu saat ini: ${timeString} WIB`;
        }
    }
    
    // Update immediately
    updateTime();
    
    // Update every second
    setInterval(updateTime, 1000);
}

// Loading Screen (fallback)
window.addEventListener('load', function() {
    // If opening screen is not shown, show loading screen
    const openingScreen = document.getElementById('opening-screen');
    if (openingScreen.style.display !== 'none') {
        const loadingScreen = document.getElementById('loading-screen');
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                startMainFeatures();
            }, 500);
        }, 2000);
    }
});

// Countdown Timer
function updateCountdown() {
    // Set wedding date to February 15, 2025 at 8:00 AM WIB
    const weddingDate = new Date('2026-02-15T08:00:00+07:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        // Wedding has passed
        document.getElementById('days').innerHTML = '00';
        document.getElementById('hours').innerHTML = '00';
        document.getElementById('minutes').innerHTML = '00';
        document.getElementById('seconds').innerHTML = '00';
        
        // Show wedding day message
        const countdownSection = document.querySelector('.countdown-section h2');
        if (countdownSection) {
            countdownSection.innerHTML = '🎉 Hari Bahagia Telah Tiba! 🎉';
        }
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Add animation to changing numbers
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (daysEl && daysEl.innerHTML !== days.toString().padStart(2, '0')) {
        daysEl.style.transform = 'scale(1.2)';
        setTimeout(() => {
            daysEl.style.transform = 'scale(1)';
        }, 200);
    }
    if (hoursEl && hoursEl.innerHTML !== hours.toString().padStart(2, '0')) {
        hoursEl.style.transform = 'scale(1.2)';
        setTimeout(() => {
            hoursEl.style.transform = 'scale(1)';
        }, 200);
    }
    if (minutesEl && minutesEl.innerHTML !== minutes.toString().padStart(2, '0')) {
        minutesEl.style.transform = 'scale(1.2)';
        setTimeout(() => {
            minutesEl.style.transform = 'scale(1)';
        }, 200);
    }
    if (secondsEl && secondsEl.innerHTML !== seconds.toString().padStart(2, '0')) {
        secondsEl.style.transform = 'scale(1.2)';
        setTimeout(() => {
            secondsEl.style.transform = 'scale(1)';
        }, 200);
    }

    if (daysEl) daysEl.innerHTML = days.toString().padStart(2, '0');
    if (hoursEl) hoursEl.innerHTML = hours.toString().padStart(2, '0');
    if (minutesEl) minutesEl.innerHTML = minutes.toString().padStart(2, '0');
    if (secondsEl) secondsEl.innerHTML = seconds.toString().padStart(2, '0');
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Floating Hearts Animation
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
    
    document.querySelector('.floating-hearts').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Create floating hearts periodically
setInterval(createFloatingHeart, 2000);

// RSVP Functionality
function confirmAttendance(status) {
    const guestName = document.getElementById('guest-name').value;
    const guestCount = document.getElementById('guest-count').value;
    
    // Validasi input
    if (!guestName.trim()) {
        alert('Mohon isi nama lengkap Anda');
        return;
    }
    
    if (!guestCount || guestCount < 1) {
        alert('Mohon isi jumlah tamu minimal 1');
        return;
    }
    
    const buttons = document.querySelectorAll('.rsvp-btn');
    buttons.forEach(btn => {
        btn.style.opacity = '0.5';
        btn.disabled = true;
    });
    
    // Show confirmation message
    const rsvpSection = document.querySelector('.rsvp-section');
    const confirmation = document.createElement('div');
    confirmation.style.cssText = `
        margin-top: 20px;
        padding: 15px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        font-weight: 600;
        animation: fadeInUp 0.5s ease-out;
    `;
    
    if (status === 'hadir') {
        confirmation.innerHTML = `✅ Terima kasih ${guestName}! Kami menunggu kehadiran Anda (${guestCount} orang) di hari bahagia kami.
        <br><small>📱 Pesan konfirmasi akan dikirim ke WhatsApp</small>`;
        confirmation.style.color = '#4ecdc4';
        
        // Send to WhatsApp
        setTimeout(() => {
            sendToWhatsApp(status, guestName, guestCount);
            showToast('📱 Membuka WhatsApp untuk konfirmasi kehadiran...', 'info');
        }, 1000);
    } else {
        confirmation.innerHTML = `😢 Kami memahami ${guestName}. Terima kasih atas doa dan dukungan Anda.
        <br><small>📱 Pesan konfirmasi akan dikirim ke WhatsApp</small>`;
        confirmation.style.color = '#ff6b6b';
        
        // Send to WhatsApp for decline
        setTimeout(() => {
            sendToWhatsApp(status, guestName, guestCount);
            showToast('📱 Membuka WhatsApp untuk konfirmasi tidak hadir...', 'info');
        }, 1000);
        
        // Show transfer section
        document.getElementById('transfer-section').style.display = 'block';
    }
    
    rsvpSection.appendChild(confirmation);
    
    // Store RSVP status in localStorage
    const rsvpData = {
        status: status,
        guestName: guestName,
        guestCount: guestCount,
        date: new Date().toISOString()
    };
    
    localStorage.setItem('rsvpData', JSON.stringify(rsvpData));
    
    // Send data to server
    sendRSVPToServer(rsvpData);
}

// Send RSVP to WhatsApp
function sendToWhatsApp(status, guestName, guestCount) {
    const whatsappNumber = "6281234567890"; // Ganti dengan nomor WhatsApp Anda
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

    const url = `https://wa.me/6289604072195?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Copy to clipboard function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        // Show success message
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4ecdc4;
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            font-weight: 600;
            z-index: 1000;
            animation: slideInRight 0.3s ease-out;
        `;
        toast.textContent = '📋 Nomor rekening berhasil disalin!';
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
        alert('Gagal menyalin nomor rekening');
    });
}

// Send RSVP to server (placeholder function)
function sendRSVPToServer(rsvpData) {
    // This is where you would send the RSVP data to your server
    console.log('RSVP Data:', rsvpData);
    
    // Example using fetch API (uncomment and modify as needed)
    /*
    fetch('/api/rsvp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(rsvpData)
    })
    .then(response => response.json())
    .then(data => console.log('RSVP sent:', data))
    .catch(error => console.error('Error:', error));
    */
}

// Wishes System
function submitWish() {
    const wisherName = document.getElementById('wisher-name').value;
    const wishMessage = document.getElementById('wish-message').value;
    
    // Validasi input
    if (!wisherName.trim()) {
        alert('Mohon isi nama Anda');
        return;
    }
    
    if (!wishMessage.trim()) {
        alert('Mohon isi ucapan selamat');
        return;
    }
    
    // Buat objek wish
    const wishData = {
        name: wisherName.trim(),
        message: wishMessage.trim(),
        timestamp: new Date().toISOString(),
        id: Date.now() // Unique ID
    };
    
    // Simpan ke localStorage
    saveWishToStorage(wishData);
    
    // Tampilkan di halaman
    displayWish(wishData);
    
    // Reset form
    document.getElementById('wisher-name').value = '';
    document.getElementById('wish-message').value = '';
    
    // Show success message
    showToast('💝 Ucapan selamat berhasil dikirim!', 'success');
}

// Save wish to localStorage
function saveWishToStorage(wishData) {
    let wishes = JSON.parse(localStorage.getItem('wishes') || '[]');
    wishes.unshift(wishData); // Add to beginning
    localStorage.setItem('wishes', JSON.stringify(wishes));
}

// Display wish on page
function displayWish(wishData) {
    const wishesDisplay = document.getElementById('wishes-display');
    
    const wishElement = document.createElement('div');
    wishElement.className = 'wish-item';
    wishElement.innerHTML = `
        <div class="wish-name">${escapeHtml(wishData.name)}</div>
        <div class="wish-message">${escapeHtml(wishData.message)}</div>
        <div class="wish-time">${formatDate(wishData.timestamp)}</div>
    `;
    
    wishesDisplay.insertBefore(wishElement, wishesDisplay.firstChild);
}

// Load existing wishes from localStorage
function loadWishes() {
    const wishes = JSON.parse(localStorage.getItem('wishes') || '[]');
    const wishesDisplay = document.getElementById('wishes-display');
    
    wishesDisplay.innerHTML = '';
    
    if (wishes.length === 0) {
        wishesDisplay.innerHTML = '<p style="text-align: center; color: #999; font-style: italic;">Belum ada ucapan selamat. Jadilah yang pertama! 💕</p>';
        return;
    }
    
    wishes.forEach(wish => {
        displayWish(wish);
    });
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Format date for display
function formatDate(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    
    // Less than 1 minute
    if (diff < 60000) {
        return 'Baru saja';
    }
    
    // Less than 1 hour
    if (diff < 3600000) {
        const minutes = Math.floor(diff / 60000);
        return `${minutes} menit yang lalu`;
    }
    
    // Less than 24 hours
    if (diff < 86400000) {
        const hours = Math.floor(diff / 3600000);
        return `${hours} jam yang lalu`;
    }
    
    // More than 24 hours
    return date.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Show toast notification
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4ecdc4' : type === 'error' ? '#ff6b6b' : '#667eea'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        font-weight: 600;
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
        max-width: 300px;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Check if user has already RSVP'd
function checkExistingRSVP() {
    const rsvpStatus = localStorage.getItem('rsvpStatus');
    const rsvpDate = localStorage.getItem('rsvpDate');
    
    if (rsvpStatus) {
        const buttons = document.querySelectorAll('.rsvp-btn');
        buttons.forEach(btn => {
            btn.style.opacity = '0.5';
            btn.disabled = true;
        });
        
        const rsvpSection = document.querySelector('.rsvp-section');
        const existingRSVP = document.createElement('div');
        existingRSVP.style.cssText = `
            margin-top: 20px;
            padding: 15px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 10px;
            font-weight: 600;
        `;
        
        if (rsvpStatus === 'hadir') {
            existingRSVP.innerHTML = '✅ Anda sudah mengkonfirmasi kehadiran. Terima kasih!';
            existingRSVP.style.color = '#4ecdc4';
        } else {
            existingRSVP.innerHTML = '😢 Anda sudah mengkonfirmasi tidak bisa hadir.';
            existingRSVP.style.color = '#ff6b6b';
        }
        
        rsvpSection.appendChild(existingRSVP);
    }
}

// Initialize RSVP check
checkExistingRSVP();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.gallery-item, .detail-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
}

// Initialize scroll animations
addScrollAnimations();

// Add click effect to gallery images
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', function() {
        // Create modal for image viewing
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            cursor: pointer;
        `;
        
        const modalImg = document.createElement('img');
        modalImg.src = this.src;
        modalImg.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            border-radius: 10px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        `;
        
        modal.appendChild(modalImg);
        document.body.appendChild(modal);
        
        modal.addEventListener('click', () => {
            modal.remove();
        });
    });
});

// Add music player (optional)
function addMusicPlayer() {
    const musicButton = document.createElement('button');
    musicButton.innerHTML = '🎵';
    musicButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: none;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        color: white;
        font-size: 24px;
        cursor: pointer;
        z-index: 100;
        transition: all 0.3s ease;
    `;
    
    let isPlaying = false;
    let audio = null;
    
    musicButton.addEventListener('click', () => {
        if (!isPlaying) {
            // You can add background music here
            // audio = new Audio('path/to/your/music.mp3');
            // audio.loop = true;
            // audio.play();
            musicButton.innerHTML = '🔇';
            isPlaying = true;
        } else {
            // audio.pause();
            musicButton.innerHTML = '🎵';
            isPlaying = false;
        }
    });
    
    musicButton.addEventListener('mouseenter', () => {
        musicButton.style.transform = 'scale(1.1)';
    });
    
    musicButton.addEventListener('mouseleave', () => {
        musicButton.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(musicButton);
}

// Initialize music player
addMusicPlayer();

// Add confetti effect on page load
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                top: -10px;
                left: ${Math.random() * 100}vw;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                z-index: 1000;
                pointer-events: none;
            `;
            
            document.body.appendChild(confetti);
            
            const animation = confetti.animate([
                { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                { transform: `translateY(100vh) rotate(720deg)`, opacity: 0 }
            ], {
                duration: 3000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            animation.addEventListener('finish', () => {
                confetti.remove();
            });
        }, i * 100);
    }
}

// Trigger confetti after loading
setTimeout(createConfetti, 3000);
