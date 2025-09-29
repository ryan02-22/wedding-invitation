// Play opening music
function playOpeningMusic() {
    const openingAudio = new Audio('assets/music/opening.mp3');
    openingAudio.volume = 0.4;
    openingAudio.loop = false;
    
    // Try to play, but don't force it
    openingAudio.play().catch(e => {
        console.log('Opening music autoplay blocked:', e);
    });
}

// Opening Screen Function
function openInvitation() {
    const openingScreen = document.getElementById('opening-screen');
    const loadingScreen = document.getElementById('loading-screen');
    
    // Play opening music
    playOpeningMusic();
    
    // Hide opening screen with animation
    openingScreen.style.opacity = '0';
    openingScreen.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        openingScreen.style.display = 'none';
        // Show loading screen
        loadingScreen.style.display = 'flex';
        
        // Start realistic loading animation
        startRealisticLoading();
    }, 800);
}

// Realistic Loading Animation
function startRealisticLoading() {
    const progressFill = document.getElementById('loadingProgressFill');
    const percentageText = document.getElementById('loadingPercentage');
    const loadingScreen = document.getElementById('loading-screen');
    
    let progress = 0;
    const totalDuration = 3000; // 3 seconds total
    const updateInterval = 50; // Update every 50ms
    const totalSteps = totalDuration / updateInterval;
    
    // Simulate realistic loading with varying speeds
    const loadingSteps = [
        { start: 0, end: 15, speed: 0.3 },    // Slow start
        { start: 15, end: 45, speed: 1.2 },   // Fast middle
        { start: 45, end: 70, speed: 0.8 },   // Medium speed
        { start: 70, end: 85, speed: 0.4 },   // Slow down
        { start: 85, end: 95, speed: 0.2 },   // Very slow
        { start: 95, end: 100, speed: 0.1 }   // Crawl to finish
    ];
    
    let currentStep = 0;
    let stepProgress = 0;
    
    const loadingInterval = setInterval(() => {
        const currentStepData = loadingSteps[currentStep];
        const stepRange = currentStepData.end - currentStepData.start;
        const stepSpeed = currentStepData.speed;
        
        // Add some randomness to make it more realistic
        const randomFactor = 0.8 + Math.random() * 0.4; // 0.8 to 1.2
        const increment = (stepSpeed * randomFactor) / totalSteps;
        
        stepProgress += increment;
        
        if (stepProgress >= 1) {
            stepProgress = 0;
            currentStep++;
            if (currentStep >= loadingSteps.length) {
                currentStep = loadingSteps.length - 1;
            }
        }
        
        // Calculate current progress
        const stepProgressValue = currentStepData.start + (stepProgress * stepRange);
        progress = Math.min(stepProgressValue, 100);
        
        // Update UI
        progressFill.style.width = progress + '%';
        percentageText.textContent = Math.round(progress) + '%';
        
        // Check if loading is complete
        if (progress >= 100) {
            clearInterval(loadingInterval);
            
            // Hide loading screen and show main content
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    // Start all other functions
                    startMainFeatures();
                }, 500);
            }, 300);
        }
    }, updateInterval);
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
    initializeAnalyticsAndTheme(); // Initialize analytics and theme
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

// Floating Petals Animation
function createFloatingPetal() {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (Math.random() * 4 + 8) + 's';
    petal.style.width = (Math.random() * 8 + 8) + 'px';
    petal.style.height = petal.style.width;
    
    document.querySelector('.floating-petals').appendChild(petal);
    
    setTimeout(() => {
        petal.remove();
    }, 12000);
}

// Create floating petals periodically
setInterval(createFloatingPetal, 3000);

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

// Display wish on page (updated with admin mode support)
function displayWish(wishData) {
    const wishesDisplay = document.getElementById('wishes-display');
    
    const wishElement = document.createElement('div');
    wishElement.className = 'wish-item';
    wishElement.dataset.wishId = wishData.id;
    wishElement.innerHTML = `
        <div class="wish-name">${escapeHtml(wishData.name)}</div>
        <div class="wish-message">${escapeHtml(wishData.message)}</div>
        <div class="wish-time">${formatDate(wishData.timestamp)}</div>
    `;
    
    // Add click listener if in admin mode
    if (isAdminMode) {
        wishElement.classList.add('admin-mode');
        wishElement.addEventListener('click', handleWishDelete);
    }
    
    wishesDisplay.insertBefore(wishElement, wishesDisplay.firstChild);
}

// Load existing wishes from localStorage (updated with admin mode support)
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
                if (entry.target.classList.contains('gallery-item')) {
                    entry.target.style.animation = 'fadeInSlow 1.2s ease-out forwards';
                } else if (entry.target.classList.contains('detail-item')) {
                    entry.target.style.animation = 'fadeInUp 1s ease-out forwards';
                } else if (entry.target.classList.contains('wish-item')) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                } else {
                    entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                }
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.gallery-item, .detail-item, .wish-item, .countdown-section, .wishes-section').forEach(el => {
        if (!el.classList.contains('gallery-item')) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
        }
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
            // Use global background audio if available
            if (window.backgroundAudio) {
                audio = window.backgroundAudio;
                audio.volume = 0.3; // Volume 30% agar tidak mengganggu
                audio.play().catch(e => {
                    console.log('Audio autoplay blocked:', e);
                    // Fallback jika autoplay diblokir browser
                    musicButton.innerHTML = '🎵';
                    isPlaying = false;
                });
            } else {
                // Fallback: create new audio
                audio = new Audio('musik.mp3');
                audio.loop = true;
                audio.volume = 0.3;
                audio.play().catch(e => {
                    console.log('Audio autoplay blocked:', e);
                    musicButton.innerHTML = '🎵';
                    isPlaying = false;
                });
            }
            musicButton.innerHTML = '🔇';
            isPlaying = true;
        } else {
            if (audio) {
                audio.pause();
            }
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

// Admin Mode Variables
let isAdminMode = false;

// Analytics Variables
let analyticsData = {
    visitors: 0,
    wishes: 0,
    rsvp: 0,
    calendarSaves: 0,
    dailyActivity: {},
    hourlyActivity: {}
};

// Theme Variables
let currentTheme = 'brown';

// Toggle Admin Mode
function toggleAdminMode() {
    isAdminMode = !isAdminMode;
    const adminPanel = document.getElementById('admin-panel');
    const adminToggleBtn = document.querySelector('.admin-toggle-btn');
    
    if (isAdminMode) {
        adminPanel.style.display = 'block';
        adminToggleBtn.innerHTML = '<i class="fas fa-cog"></i> Keluar dari Mode Admin';
        adminToggleBtn.style.background = '#ff6b6b';
        adminToggleBtn.style.borderColor = '#ff6b6b';
        adminToggleBtn.style.color = 'white';
        
        // Add admin mode class to all wish items
        document.querySelectorAll('.wish-item').forEach(item => {
            item.classList.add('admin-mode');
            item.addEventListener('click', handleWishDelete);
        });
        
        showToast('🔧 Mode Admin aktif - Klik ucapan untuk menghapus', 'info');
        updateAnalytics();
    } else {
        adminPanel.style.display = 'none';
        adminToggleBtn.innerHTML = '<i class="fas fa-cog"></i> Mode Admin';
        adminToggleBtn.style.background = 'rgba(139, 69, 19, 0.1)';
        adminToggleBtn.style.borderColor = '#8B4513';
        adminToggleBtn.style.color = '#8B4513';
        
        // Remove admin mode class from all wish items
        document.querySelectorAll('.wish-item').forEach(item => {
            item.classList.remove('admin-mode');
            item.removeEventListener('click', handleWishDelete);
        });
        
        showToast('✅ Mode Admin dinonaktifkan', 'success');
    }
}

// Handle wish deletion
function handleWishDelete(event) {
    if (!isAdminMode) return;
    
    const wishItem = event.currentTarget;
    const wishId = wishItem.dataset.wishId;
    
    // Show confirmation dialog
    const confirmDelete = confirm('Apakah Anda yakin ingin menghapus ucapan ini?');
    
    if (confirmDelete) {
        deleteWish(wishId);
        wishItem.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            wishItem.remove();
        }, 300);
        
        showToast('🗑️ Ucapan berhasil dihapus', 'success');
    }
}

// Delete wish from storage
function deleteWish(wishId) {
    let wishes = JSON.parse(localStorage.getItem('wishes') || '[]');
    wishes = wishes.filter(wish => wish.id != wishId);
    localStorage.setItem('wishes', JSON.stringify(wishes));
}


// Save to Calendar Function
function saveToCalendar() {
    const weddingDate = new Date('2025-02-15T08:00:00+07:00');
    const endDate = new Date('2025-02-15T12:00:00+07:00');
    
    // Format dates for calendar
    const startDateStr = weddingDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const endDateStr = endDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    
    const eventDetails = {
        title: 'Pernikahan Fatur & Simbet',
        description: 'Undangan pernikahan Fatur & Simbet\n\nLokasi: Masjid Agung Slawi, Jl. Procot Slawi, Tegal\nWaktu: 08.00 - 12.00 WIB\n\nMerupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.',
        location: 'Masjid Agung Slawi, Jl. Procot Slawi, Tegal',
        startTime: startDateStr,
        endTime: endDateStr
    };
    
    // Create Google Calendar URL
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${startDateStr}/${endDateStr}&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}`;
    
    // Create Outlook Calendar URL
    const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(eventDetails.title)}&startdt=${startDateStr}&enddt=${endDateStr}&body=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}`;
    
    // Show calendar options
    const calendarOptions = document.createElement('div');
    calendarOptions.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 30px;
        border-radius: 15px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        text-align: center;
        max-width: 400px;
        width: 90%;
    `;
    
    calendarOptions.innerHTML = `
        <h3 style="color: #5D4E37; margin-bottom: 20px;">Pilih Kalender</h3>
        <div style="display: flex; flex-direction: column; gap: 15px;">
            <button onclick="window.open('${googleCalendarUrl}', '_blank'); this.parentElement.parentElement.remove();" 
                    style="background: #4285f4; color: white; border: none; padding: 12px 20px; border-radius: 8px; cursor: pointer; font-weight: 500;">
                <i class="fab fa-google"></i> Google Calendar
            </button>
            <button onclick="window.open('${outlookUrl}', '_blank'); this.parentElement.parentElement.remove();" 
                    style="background: #0078d4; color: white; border: none; padding: 12px 20px; border-radius: 8px; cursor: pointer; font-weight: 500;">
                <i class="fab fa-microsoft"></i> Outlook Calendar
            </button>
            <button onclick="downloadICS(); this.parentElement.parentElement.remove();" 
                    style="background: #8B4513; color: white; border: none; padding: 12px 20px; border-radius: 8px; cursor: pointer; font-weight: 500;">
                <i class="fas fa-download"></i> Download .ics File
            </button>
            <button onclick="this.parentElement.parentElement.remove();" 
                    style="background: #ccc; color: #333; border: none; padding: 12px 20px; border-radius: 8px; cursor: pointer; font-weight: 500;">
                Batal
            </button>
        </div>
    `;
    
    // Add backdrop
    const backdrop = document.createElement('div');
    backdrop.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 9999;
    `;
    
    backdrop.addEventListener('click', () => {
        backdrop.remove();
        calendarOptions.remove();
    });
    
    document.body.appendChild(backdrop);
    document.body.appendChild(calendarOptions);
    
    showToast('📅 Pilih kalender untuk menyimpan acara', 'info');
}

// Download ICS file
function downloadICS() {
    const weddingDate = new Date('2025-02-15T08:00:00+07:00');
    const endDate = new Date('2025-02-15T12:00:00+07:00');
    
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Wedding Invitation//EN
BEGIN:VEVENT
UID:wedding-${Date.now()}@example.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${weddingDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTEND:${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
SUMMARY:Pernikahan Fatur & Simbet
DESCRIPTION:Undangan pernikahan Fatur & Simbet\\n\\nLokasi: Masjid Agung Slawi, Jl. Procot Slawi, Tegal\\nWaktu: 08.00 - 12.00 WIB\\n\\nMerupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
LOCATION:Masjid Agung Slawi, Jl. Procot Slawi, Tegal
END:VEVENT
END:VCALENDAR`;
    
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Pernikahan_Fatur_Simbet.ics';
    link.click();
    
    showToast('📥 File kalender berhasil diunduh!', 'success');
}

// Maps Functions
function openGoogleMaps() {
    const address = 'Masjid Agung Slawi, Jl. Procot Slawi, Tegal';
    const url = `https://maps.google.com/?q=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
    showToast('🗺️ Membuka Google Maps...', 'info');
}

function openWaze() {
    const address = 'Masjid Agung Slawi, Jl. Procot Slawi, Tegal';
    const url = `https://waze.com/ul?q=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
    showToast('🚗 Membuka Waze...', 'info');
}

function copyAddress() {
    const address = 'Masjid Agung Slawi, Jl. Procot Slawi, Tegal';
    navigator.clipboard.writeText(address).then(() => {
        showToast('📋 Alamat berhasil disalin!', 'success');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = address;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('📋 Alamat berhasil disalin!', 'success');
    });
}

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

// Analytics Functions
function trackVisitor() {
    const today = new Date().toDateString();
    const hour = new Date().getHours();
    
    // Load existing analytics
    const savedAnalytics = localStorage.getItem('analyticsData');
    if (savedAnalytics) {
        analyticsData = JSON.parse(savedAnalytics);
    }
    
    // Check if this is a new visitor today
    if (!analyticsData.dailyActivity[today]) {
        analyticsData.visitors++;
        analyticsData.dailyActivity[today] = 1;
    } else {
        analyticsData.dailyActivity[today]++;
    }
    
    // Track hourly activity
    if (!analyticsData.hourlyActivity[hour]) {
        analyticsData.hourlyActivity[hour] = 1;
    } else {
        analyticsData.hourlyActivity[hour]++;
    }
    
    // Save analytics
    localStorage.setItem('analyticsData', JSON.stringify(analyticsData));
}

function trackWish() {
    analyticsData.wishes++;
    localStorage.setItem('analyticsData', JSON.stringify(analyticsData));
    updateAnalytics();
}

function trackRSVP() {
    analyticsData.rsvp++;
    localStorage.setItem('analyticsData', JSON.stringify(analyticsData));
    updateAnalytics();
}

function trackCalendarSave() {
    analyticsData.calendarSaves++;
    localStorage.setItem('analyticsData', JSON.stringify(analyticsData));
    updateAnalytics();
}

function updateAnalytics() {
    // Load analytics data
    const savedAnalytics = localStorage.getItem('analyticsData');
    if (savedAnalytics) {
        analyticsData = JSON.parse(savedAnalytics);
    }
    
    // Update analytics display
    document.getElementById('total-visitors').textContent = analyticsData.visitors;
    document.getElementById('total-wishes').textContent = analyticsData.wishes;
    document.getElementById('total-rsvp').textContent = analyticsData.rsvp;
    document.getElementById('calendar-saves').textContent = analyticsData.calendarSaves;
    
    // Draw charts
    drawDailyChart();
    drawHourlyChart();
}

function drawDailyChart() {
    const canvas = document.getElementById('dailyChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const dailyData = analyticsData.dailyActivity;
    const labels = Object.keys(dailyData).slice(-7); // Last 7 days
    const data = labels.map(label => dailyData[label] || 0);
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw simple bar chart
    const maxValue = Math.max(...data, 1);
    const barWidth = canvas.width / labels.length;
    
    ctx.fillStyle = '#8B4513';
    labels.forEach((label, index) => {
        const barHeight = (data[index] / maxValue) * (canvas.height - 40);
        const x = index * barWidth + 10;
        const y = canvas.height - barHeight - 20;
        
        ctx.fillRect(x, y, barWidth - 20, barHeight);
        
        // Draw label
        ctx.fillStyle = '#666';
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(data[index], x + barWidth/2 - 10, y - 5);
        ctx.fillStyle = '#8B4513';
    });
}

function drawHourlyChart() {
    const canvas = document.getElementById('hourlyChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const hourlyData = analyticsData.hourlyActivity;
    const hours = Array.from({length: 24}, (_, i) => i);
    const data = hours.map(hour => hourlyData[hour] || 0);
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw simple line chart
    const maxValue = Math.max(...data, 1);
    const stepX = canvas.width / 24;
    
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    hours.forEach((hour, index) => {
        const x = index * stepX;
        const y = canvas.height - (data[index] / maxValue) * (canvas.height - 40) - 20;
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    
    ctx.stroke();
    
    // Draw points
    ctx.fillStyle = '#8B4513';
    hours.forEach((hour, index) => {
        const x = index * stepX;
        const y = canvas.height - (data[index] / maxValue) * (canvas.height - 40) - 20;
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, 2 * Math.PI);
        ctx.fill();
    });
}

// Theme Functions
function changeTheme(theme) {
    currentTheme = theme;
    
    // Remove existing theme classes
    document.body.classList.remove('theme-pink', 'theme-blue', 'theme-green', 'theme-purple');
    
    // Add new theme class
    if (theme !== 'brown') {
        document.body.classList.add(`theme-${theme}`);
    }
    
    // Update active button
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-theme="${theme}"]`).classList.add('active');
    
    // Save theme preference
    localStorage.setItem('selectedTheme', theme);
    
    // Apply theme colors
    applyThemeColors(theme);
    
    showToast(`🎨 Tema ${theme} berhasil diterapkan!`, 'success');
}

function applyThemeColors(theme) {
    const themes = {
        brown: {
            primary: '#8B4513',
            secondary: '#A0522D',
            accent: '#D4C4B0',
            backgroundStart: '#F5E6D3',
            backgroundEnd: '#C4B5A0',
            textColor: '#5D4E37'
        },
        pink: {
            primary: '#E91E63',
            secondary: '#F06292',
            accent: '#F8BBD9',
            backgroundStart: '#FFE4E1',
            backgroundEnd: '#FFB6C1',
            textColor: '#880E4F'
        },
        blue: {
            primary: '#1976D2',
            secondary: '#42A5F5',
            accent: '#B3D9FF',
            backgroundStart: '#E6F3FF',
            backgroundEnd: '#B3D9FF',
            textColor: '#0D47A1'
        },
        green: {
            primary: '#388E3C',
            secondary: '#66BB6A',
            accent: '#C8E6C9',
            backgroundStart: '#E8F5E8',
            backgroundEnd: '#C8E6C9',
            textColor: '#1B5E20'
        },
        purple: {
            primary: '#7B1FA2',
            secondary: '#BA68C8',
            accent: '#E1BEE7',
            backgroundStart: '#F3E5F5',
            backgroundEnd: '#E1BEE7',
            textColor: '#4A148C'
        }
    };
    
    const colors = themes[theme];
    if (!colors) return;
    
    // Update CSS custom properties
    document.documentElement.style.setProperty('--primary-color', colors.primary);
    document.documentElement.style.setProperty('--secondary-color', colors.secondary);
    document.documentElement.style.setProperty('--accent-color', colors.accent);
    document.documentElement.style.setProperty('--background-start', colors.backgroundStart);
    document.documentElement.style.setProperty('--background-end', colors.backgroundEnd);
    document.documentElement.style.setProperty('--text-color', colors.textColor);
    
    // Update body background
    document.body.style.background = `linear-gradient(135deg, ${colors.backgroundStart} 0%, ${colors.backgroundEnd} 100%)`;
    
    // Update opening screen background
    const openingScreen = document.getElementById('opening-screen');
    if (openingScreen) {
        openingScreen.style.background = `linear-gradient(135deg, ${colors.backgroundStart} 0%, ${colors.backgroundEnd} 100%)`;
    }
    
    // Update loading screen background
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.background = `linear-gradient(135deg, ${colors.backgroundStart} 0%, ${colors.backgroundEnd} 100%)`;
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('selectedTheme') || 'brown';
    changeTheme(savedTheme);
}

// Initialize analytics and theme on page load
function initializeAnalyticsAndTheme() {
    trackVisitor();
    loadTheme();
}

// Update existing functions to track analytics
const originalSubmitWish = submitWish;
submitWish = function() {
    originalSubmitWish();
    trackWish();
};

const originalConfirmAttendance = confirmAttendance;
confirmAttendance = function(status) {
    originalConfirmAttendance(status);
    trackRSVP();
};

const originalSaveToCalendar = saveToCalendar;
saveToCalendar = function() {
    originalSaveToCalendar();
    trackCalendarSave();
};

// Enhanced Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .fade-in-scale, .fade-in-rotate');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Scroll Indicator
function initializeScrollIndicator() {
    const scrollIndicator = document.getElementById('scrollIndicator');
    const scrollDots = document.querySelectorAll('.scroll-dot');
    const sections = document.querySelectorAll('[id$="-section"], .header, .invitation-card');

    // Show scroll indicator after scrolling
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollIndicator.classList.add('show');
        } else {
            scrollIndicator.classList.remove('show');
        }

        // Update active dot
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id') || section.className;
            }
        });

        scrollDots.forEach(dot => {
            dot.classList.remove('active');
            const target = dot.getAttribute('data-target');
            if (target && document.getElementById(target) && current.includes(target.replace('-section', ''))) {
                dot.classList.add('active');
            }
        });
    });

    // Click to scroll to section
    scrollDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const target = dot.getAttribute('data-target');
            const targetElement = document.getElementById(target);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll Progress Bar
function initializeScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });
}

// Enhanced Loading Animation
function createFloatingElements() {
    const loadingFloating = document.querySelector('.loading-floating');
    if (!loadingFloating) return;

    // Create additional floating elements
    for (let i = 0; i < 5; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.style.left = Math.random() * 100 + '%';
        element.style.animationDelay = Math.random() * 2 + 's';
        element.style.animationDuration = (Math.random() * 2 + 3) + 's';
        loadingFloating.appendChild(element);
    }
}

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button
function addScrollToTopButton() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #FFB6C1, #F8BBD9);
        border: none;
        color: white;
        font-size: 18px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(255, 182, 193, 0.3);
    `;
    
    scrollToTopBtn.addEventListener('click', scrollToTop);
    document.body.appendChild(scrollToTopBtn);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
}

// Background Music Player
function initializeBackgroundMusic() {
    const backgroundAudio = new Audio('assets/music/background.mp3');
    backgroundAudio.volume = 0.2; // Volume rendah
    backgroundAudio.loop = true;
    
    // Play after user interaction (to avoid autoplay restrictions)
    document.addEventListener('click', () => {
        if (backgroundAudio.paused) {
            backgroundAudio.play().catch(e => {
                console.log('Background music autoplay blocked:', e);
            });
        }
    }, { once: true });
    
    // Store audio globally for music player control
    window.backgroundAudio = backgroundAudio;
}

// Initialize enhanced features
setTimeout(() => {
    initializeScrollAnimations();
    initializeScrollIndicator();
    initializeScrollProgress();
    createFloatingElements();
    addScrollToTopButton();
    initializeBackgroundMusic();
}, 1000);
