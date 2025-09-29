// Performance Optimizations
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Play opening music
function playOpeningMusic() {
    // Use global audio if available, otherwise create one
    if (window.backgroundAudio) {
        // Pause background music if playing
        if (!window.backgroundAudio.paused) {
            window.backgroundAudio.pause();
        }
        window.backgroundAudio.currentTime = 0; // Reset to beginning
        window.backgroundAudio.volume = 0.6; // Higher volume for opening
        window.backgroundAudio.loop = false; // Don't loop for opening
        window.backgroundAudio.play().catch(e => {
            // Opening music autoplay blocked - this is normal on mobile
        });
    } else {
        // Create global audio for opening
        window.backgroundAudio = new Audio('musik.mp3');
        window.backgroundAudio.volume = 0.6;
        window.backgroundAudio.loop = false;
        window.backgroundAudio.preload = 'auto';
        window.backgroundAudio.play().catch(e => {
            // Opening music autoplay blocked - this is normal on mobile
        });
    }
}

// Opening Screen Function
function openInvitation() {
    const openingScreen = document.getElementById('opening-screen');
    const loadingScreen = document.getElementById('loading-screen');
    
    if (!openingScreen || !loadingScreen) {
        return;
    }
    
    // Scroll to top immediately when opening invitation
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
    });
    
    // Remove body scroll restriction when opening invitation
    document.body.classList.remove('opening-screen-active');
    
    // Play opening music
    playOpeningMusic();
    
    // Show loading screen immediately
    loadingScreen.classList.remove('hidden');
    loadingScreen.style.display = 'flex';
    loadingScreen.style.opacity = '1';
    loadingScreen.style.visibility = 'visible';
    loadingScreen.style.zIndex = '9999';
    
    // Start realistic loading animation immediately
    setTimeout(() => {
        startRealisticLoading();
    }, 100);
    
    // Hide opening screen with animation
    openingScreen.style.opacity = '0';
    openingScreen.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        openingScreen.classList.add('hidden');
        openingScreen.style.display = 'none'; // Force hide
    }, 800);
}

// Realistic Loading Animation
let isLoading = false; // Flag to prevent multiple loading screens

function startRealisticLoading() {
    // Prevent multiple loading screens
    if (isLoading) return;
    isLoading = true;
    
    const progressFill = document.getElementById('loadingProgressFill');
    const percentageText = document.getElementById('loadingPercentage');
    const loadingScreen = document.getElementById('loading-screen');
    
    // Ensure loading screen is visible and properly displayed
    if (loadingScreen) {
        loadingScreen.classList.remove('hidden');
        loadingScreen.style.display = 'flex';
        loadingScreen.style.opacity = '1';
        loadingScreen.style.visibility = 'visible';
        loadingScreen.style.zIndex = '9999';
    }
    
    // Ensure progress elements exist
    if (progressFill) {
        progressFill.style.width = '0%';
    }
    if (percentageText) {
        percentageText.textContent = '0%';
    }
    
    let progress = 0;
    const totalDuration = 3000; // 3 seconds total for better visibility
    const updateInterval = 50; // Update every 50ms (smoother)
    
    // Simple and fast loading progression
    const progressIncrement = 100 / (totalDuration / updateInterval);
    
    const loadingInterval = setInterval(() => {
        progress += progressIncrement;
        
        // Add slight randomness for realism but keep it smooth
        const randomFactor = 0.98 + Math.random() * 0.04; // 0.98 to 1.02
        const actualProgress = Math.min(progress * randomFactor, 100);
        
        // Update UI
        if (progressFill) {
            progressFill.style.width = actualProgress + '%';
        }
        if (percentageText) {
            percentageText.textContent = Math.round(actualProgress) + '%';
        }
        
        // Check if loading is complete
        if (actualProgress >= 100) {
            clearInterval(loadingInterval);
            
            // Hide loading screen and show main content
        setTimeout(() => {
                if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                        loadingScreen.classList.add('hidden');
                loadingScreen.style.display = 'none';
                        loadingScreen.style.visibility = 'hidden';
                // Start all other functions
                startMainFeatures();
                        // Reset loading flag
                        isLoading = false;
                    }, 300); // Slower transition for better visibility
                }
            }, 200); // Delay before hiding
        }
    }, updateInterval);
}

// Start main features after opening screen
function startMainFeatures() {
    // Scroll to top immediately to ensure page starts at the top
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
    });
    
    // Only call updateCountdown once, not in interval
    updateCountdown();
    updateCurrentTime();
    createFloatingHeart();
    addMusicPlayer();
    checkExistingRSVP();
    loadWishes(); // Load existing wishes
    initializeAnalyticsAndTheme(); // Initialize analytics and theme
    
    // Initialize additional features
    initializeScrollAnimations();
    initializeScrollIndicator();
    initializeScrollProgress();
    createFloatingElements();
    addScrollToTopButton();
    initializeBackgroundMusic();
    
    // Show buttons immediately after main content loads
    setTimeout(() => {
        if (window.musicButton) {
            window.musicButton.style.opacity = '1';
            window.musicButton.style.visibility = 'visible';
            window.musicButton.style.pointerEvents = 'auto';
        }
        if (window.scrollToTopBtn) {
            window.scrollToTopBtn.style.opacity = '1';
            window.scrollToTopBtn.style.visibility = 'visible';
            window.scrollToTopBtn.style.pointerEvents = 'auto';
        }
    }, 100);
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
    // Scroll to top immediately when page loads
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
    });
    
    // Prevent body scroll when opening screen is active
    document.body.classList.add('opening-screen-active');
    
    // Show opening screen immediately
    const openingScreen = document.getElementById('opening-screen');
    if (openingScreen) {
        openingScreen.classList.remove('hidden');
        openingScreen.style.opacity = '1';
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
const countdownInterval = setInterval(updateCountdown, 1000);

// Floating Hearts Animation
function createFloatingHeart() {
    // Skip on low-end devices or mobile to prevent lag
    if (isLowEndDevice || isMobile) return;
    
    const floatingContainer = document.querySelector('.floating-hearts');
    if (!floatingContainer) return;
    
    // Limit number of hearts to prevent performance issues
    if (floatingContainer.children.length >= 5) return;
    
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
    
    floatingContainer.appendChild(heart);
    
    setTimeout(() => {
        if (heart.parentNode) {
        heart.remove();
        }
    }, 6000);
}

// Create floating hearts periodically (less frequent for better performance)
const heartsInterval = setInterval(createFloatingHeart, isMobile ? 5000 : 3000);

// Floating Petals Animation
function createFloatingPetal() {
    // Skip on low-end devices or mobile to prevent lag
    if (isLowEndDevice || isMobile) return;
    
    const floatingContainer = document.querySelector('.floating-petals');
    if (!floatingContainer) return;
    
    // Limit number of petals to prevent performance issues
    if (floatingContainer.children.length >= 8) return;
    
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (Math.random() * 4 + 8) + 's';
    petal.style.width = (Math.random() * 8 + 8) + 'px';
    petal.style.height = petal.style.width;
    
    floatingContainer.appendChild(petal);
    
    // Auto-remove after animation
    setTimeout(() => {
        if (petal.parentNode) {
            petal.remove();
        }
    }, 12000);
}

// Create floating petals periodically (less frequent on mobile)
const petalInterval = isMobile ? 5000 : 3000;
const petalsInterval = setInterval(createFloatingPetal, petalInterval);

// RSVP Functionality
function confirmAttendance(status) {
    try {
    const guestName = document.getElementById('guest-name').value;
    const guestCount = document.getElementById('guest-count').value;
    
    // Validasi input
    if (!guestName.trim()) {
            showToast('❌ Mohon isi nama lengkap Anda', 'error');
        return;
    }
    
    if (!guestCount || guestCount < 1) {
            showToast('❌ Mohon isi jumlah tamu minimal 1', 'error');
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
        
    } catch (error) {
        // Error in confirmAttendance
        showToast('❌ Terjadi kesalahan saat konfirmasi', 'error');
        
        // Re-enable buttons on error
        const buttons = document.querySelectorAll('.rsvp-btn');
        buttons.forEach(btn => {
            btn.style.opacity = '1';
            btn.disabled = false;
        });
    }
}

// Send RSVP to WhatsApp
function sendToWhatsApp(status, guestName, guestCount) {
    try {
    const whatsappNumber = "6281234567890"; // Ganti dengan nomor WhatsApp Anda
        const weddingDate = "15 Februari 2025";
    const weddingLocation = "Masjid Agung Slawi, Tegal";
    
    let message;
    
    if (status === 'hadir') {
        message = `Assalamualaikum! 

Saya ${guestName} ingin konfirmasi kehadiran untuk pernikahan Fatur & Simbet.

📅 Tanggal: ${weddingDate}
📍 Lokasi: ${weddingLocation}
👥 Jumlah tamu: ${guestCount} orang
✅ Status: HADIR

Kami akan hadir di hari bahagia kalian. Semoga pernikahan berjalan lancar! 🙏

Terima kasih atas undangannya! 💕`;
    } else {
        message = `Assalamualaikum! 

Saya ${guestName} ingin konfirmasi kehadiran untuk pernikahan Fatur & Simbet.

📅 Tanggal: ${weddingDate}
📍 Lokasi: ${weddingLocation}
👥 Jumlah tamu: ${guestCount} orang
❌ Status: TIDAK HADIR

Mohon maaf, kami tidak bisa hadir di hari bahagia kalian. Semoga pernikahan berjalan lancar dan penuh kebahagiaan! 🙏

Doa terbaik untuk Ayu & Fatur! 💕`;
    }

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
        
    } catch (error) {
        // Error in sendToWhatsApp
        showToast('❌ Gagal membuka WhatsApp', 'error');
    }
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
        // Could not copy text
        showToast('❌ Gagal menyalin nomor rekening', 'error');
    });
}

// Send RSVP to server (placeholder function)
function sendRSVPToServer(rsvpData) {
    // This is where you would send the RSVP data to your server
    // RSVP Data stored
    
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
    .then(data => {
        // RSVP sent successfully
    })
    .catch(error => {
        // Error sending RSVP
    });
    */
}

// Wishes System
function submitWish() {
    try {
    const wisherName = document.getElementById('wisher-name').value;
    const wishMessage = document.getElementById('wish-message').value;
    
    // Validasi input
    if (!wisherName.trim()) {
            showToast('❌ Mohon isi nama Anda', 'error');
        return;
    }
    
    if (!wishMessage.trim()) {
            showToast('❌ Mohon isi ucapan selamat', 'error');
            return;
        }
        
        if (wisherName.trim().length < 2) {
            showToast('❌ Nama minimal 2 karakter', 'error');
            return;
        }
        
        if (wishMessage.trim().length < 10) {
            showToast('❌ Ucapan minimal 10 karakter', 'error');
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
        
        // Track wish in analytics
        trackWish();
        
    } catch (error) {
        // Error in submitWish
        showToast('❌ Gagal mengirim ucapan selamat', 'error');
    }
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

// Scroll animations are now handled by initializeScrollAnimations()

// Scroll animations are initialized in startMainFeatures()

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
    musicButton.className = 'music-player-btn';
    musicButton.setAttribute('aria-label', 'Toggle Music');
    musicButton.setAttribute('title', 'Play/Pause Music');
    musicButton.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: linear-gradient(135deg, #FFB6C1, #F8BBD9);
        color: white;
        font-size: 20px;
        cursor: pointer;
        z-index: 10000;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(255, 182, 193, 0.3);
        opacity: 0;
        visibility: hidden;
        touch-action: manipulation;
        -webkit-tap-highlight-color: transparent;
        pointer-events: auto;
    `;
    
    let isPlaying = false;
    let audio = null;
    
    // Handle both click and touch events for better mobile compatibility
    const handleMusicToggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        try {
        if (!isPlaying) {
                // Use global background audio if available, otherwise create one
                if (window.backgroundAudio) {
                    audio = window.backgroundAudio;
                } else {
                    // Create global audio if not exists
                    window.backgroundAudio = new Audio('musik.mp3');
                    window.backgroundAudio.loop = true;
                    window.backgroundAudio.volume = 0.4;
                    window.backgroundAudio.preload = 'auto';
                    audio = window.backgroundAudio;
                }
                
                audio.volume = 0.5; // Set volume for music player
                audio.play().then(() => {
            musicButton.innerHTML = '🔇';
            isPlaying = true;
                }).catch(e => {
                    // Audio autoplay blocked
                    musicButton.innerHTML = '🎵';
                    isPlaying = false;
                    showToast('Klik tombol musik untuk memutar audio', 'info');
                });
        } else {
                if (audio) {
                    audio.pause();
                }
            musicButton.innerHTML = '🎵';
            isPlaying = false;
        }
        } catch (error) {
            musicButton.innerHTML = '🎵';
            isPlaying = false;
            showToast('Error memutar audio', 'error');
        }
    };
    
    musicButton.addEventListener('click', handleMusicToggle);
    musicButton.addEventListener('touchend', handleMusicToggle);
    
    musicButton.addEventListener('mouseenter', () => {
        musicButton.style.transform = 'scale(1.1) translateY(-2px)';
        musicButton.style.boxShadow = '0 6px 20px rgba(255, 182, 193, 0.4)';
    });
    
    musicButton.addEventListener('mouseleave', () => {
        musicButton.style.transform = 'scale(1) translateY(0)';
        musicButton.style.boxShadow = '0 4px 15px rgba(255, 182, 193, 0.3)';
    });
    
    document.body.appendChild(musicButton);
    
    // Store button globally for unified scroll handler
    window.musicButton = musicButton;
}

// Music player is initialized in startMainFeatures()

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
    try {
        isAdminMode = !isAdminMode;
        const adminPanel = document.getElementById('admin-panel');
        const adminToggleBtn = document.querySelector('.admin-toggle-btn');
        
        if (!adminPanel || !adminToggleBtn) {
            showToast('❌ Elemen admin tidak ditemukan', 'error');
            return;
        }
        
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
        
    } catch (error) {
        // Error in toggleAdminMode
        showToast('❌ Gagal mengubah mode admin', 'error');
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
    
    // Open Google Calendar directly (no popup selection)
    try {
        window.open(googleCalendarUrl, '_blank');
        showToast('📅 Event berhasil ditambahkan ke Google Calendar!', 'success');
        trackCalendarSave(); // Track analytics
    } catch (error) {
        showToast('❌ Error membuka Google Calendar', 'error');
    }
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
    try {
        const address = 'Masjid Agung Slawi, Jl. Procot Slawi, Tegal';
        const url = `https://maps.google.com/?q=${encodeURIComponent(address)}`;
        window.open(url, '_blank');
        showToast('🗺️ Membuka Google Maps...', 'info');
        trackCalendarSave(); // Track analytics
    } catch (error) {
        // Error opening Google Maps
        showToast('❌ Gagal membuka Google Maps', 'error');
    }
}

function openWaze() {
    try {
        const address = 'Masjid Agung Slawi, Jl. Procot Slawi, Tegal';
        const url = `https://waze.com/ul?q=${encodeURIComponent(address)}`;
        window.open(url, '_blank');
        showToast('🚗 Membuka Waze...', 'info');
        trackCalendarSave(); // Track analytics
    } catch (error) {
        // Error opening Waze
        showToast('❌ Gagal membuka Waze', 'error');
    }
}

function copyAddress() {
    try {
        const address = 'Masjid Agung Slawi, Jl. Procot Slawi, Tegal';
        
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(address).then(() => {
                showToast('📋 Alamat berhasil disalin!', 'success');
            }).catch(() => {
                fallbackCopyTextToClipboard(address);
            });
        } else {
            fallbackCopyTextToClipboard(address);
        }
    } catch (error) {
        // Error copying address
        showToast('❌ Gagal menyalin alamat', 'error');
    }
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showToast('📋 Alamat berhasil disalin!', 'success');
        } else {
            showToast('❌ Gagal menyalin alamat', 'error');
        }
    } catch (err) {
        showToast('❌ Gagal menyalin alamat', 'error');
    }
    
    document.body.removeChild(textArea);
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

// Confetti removed to improve performance

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
    try {
        if (!theme) {
            showToast('❌ Tema tidak valid', 'error');
            return;
        }
        
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
        
        const activeButton = document.querySelector(`[data-theme="${theme}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
        
        // Save theme preference
        localStorage.setItem('selectedTheme', theme);
        
        // Apply theme colors
        applyThemeColors(theme);
        
        showToast(`🎨 Tema ${theme} berhasil diterapkan!`, 'success');
        
    } catch (error) {
        // Error in changeTheme
        showToast('❌ Gagal mengubah tema', 'error');
    }
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

// Analytics tracking is already integrated in the original functions

// Cleanup function for intervals (if needed)
function cleanupIntervals() {
    if (typeof countdownInterval !== 'undefined') clearInterval(countdownInterval);
    if (typeof heartsInterval !== 'undefined') clearInterval(heartsInterval);
    if (typeof petalsInterval !== 'undefined') clearInterval(petalsInterval);
}

// Cleanup intervals on page unload
window.addEventListener('beforeunload', cleanupIntervals);
window.addEventListener('unload', cleanupIntervals);

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
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .fade-in-scale, .fade-in-rotate, .gallery-item');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Scroll Indicator
function initializeScrollIndicator() {
    const scrollIndicator = document.getElementById('scrollIndicator');
    const scrollDots = document.querySelectorAll('.scroll-dot');
    const sections = document.querySelectorAll('[id$="-section"], .header, .invitation-card');

    // Store elements globally for unified scroll handler
    window.scrollIndicator = scrollIndicator;
    window.scrollDots = scrollDots;
    window.scrollSections = sections;

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
    if (!progressBar) return;
    
    // Store progress bar globally for unified scroll handler
    window.scrollProgressBar = progressBar;
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
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to Top');
    scrollToTopBtn.setAttribute('title', 'Scroll to Top');
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #FFB6C1, #F8BBD9);
        border: none;
        color: white;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 10000;
        box-shadow: 0 4px 15px rgba(255, 182, 193, 0.3);
        touch-action: manipulation;
        -webkit-tap-highlight-color: transparent;
        pointer-events: auto;
    `;
    
    // Handle both click and touch events for better mobile compatibility
    const handleScrollToTop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        scrollToTop();
    };
    
    scrollToTopBtn.addEventListener('click', handleScrollToTop);
    scrollToTopBtn.addEventListener('touchend', handleScrollToTop);
    
    scrollToTopBtn.addEventListener('mouseenter', () => {
        scrollToTopBtn.style.transform = 'scale(1.1) translateY(-2px)';
        scrollToTopBtn.style.boxShadow = '0 6px 20px rgba(255, 182, 193, 0.4)';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', () => {
        scrollToTopBtn.style.transform = 'scale(1) translateY(0)';
        scrollToTopBtn.style.boxShadow = '0 4px 15px rgba(255, 182, 193, 0.3)';
    });
    
    document.body.appendChild(scrollToTopBtn);

    // Store button globally for unified scroll handler
    window.scrollToTopBtn = scrollToTopBtn;
}

// Background Music Player
function initializeBackgroundMusic() {
    // Only create if not already exists
    if (!window.backgroundAudio) {
        window.backgroundAudio = new Audio('musik.mp3');
        window.backgroundAudio.volume = 0.4; // Increased volume for better clarity
        window.backgroundAudio.loop = true;
        window.backgroundAudio.preload = 'auto'; // Preload for better performance
    }
    
    // Multiple user interaction triggers for mobile compatibility
    const playAudio = () => {
        if (window.backgroundAudio.paused) {
            // Set to background music mode
            window.backgroundAudio.volume = 0.4;
            window.backgroundAudio.loop = true;
            window.backgroundAudio.play().catch(e => {
                // Background music autoplay blocked
            });
        }
    };
    
    // Try multiple interaction events for better mobile support
    document.addEventListener('click', playAudio, { once: true });
    document.addEventListener('touchstart', playAudio, { once: true });
    document.addEventListener('keydown', playAudio, { once: true });
}

// Unified Scroll Handler
function initializeUnifiedScrollHandler() {
    // Throttled scroll handler for better performance
    const handleScroll = throttle(() => {
        const scrollY = window.scrollY;
        
        // Scroll Progress Bar
        if (window.scrollProgressBar) {
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = Math.min((scrollY / docHeight) * 100, 100);
            requestAnimationFrame(() => {
                window.scrollProgressBar.style.width = scrollPercent + '%';
            });
        }
        
        // Scroll Indicator
        if (window.scrollIndicator) {
            if (scrollY > 100) {
                window.scrollIndicator.classList.add('show');
            } else {
                window.scrollIndicator.classList.remove('show');
            }
            
            // Update active dot
            if (window.scrollSections && window.scrollDots) {
                let current = '';
                window.scrollSections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    if (scrollY >= (sectionTop - 200)) {
                        current = section.getAttribute('id') || section.className;
                    }
                });

                window.scrollDots.forEach(dot => {
                    dot.classList.remove('active');
                    const target = dot.getAttribute('data-target');
                    if (target && document.getElementById(target) && current.includes(target.replace('-section', ''))) {
                        dot.classList.add('active');
                    }
                });
            }
        }
        
        // Scroll to Top Button - Always visible after main content loads
        if (window.scrollToTopBtn) {
            window.scrollToTopBtn.style.opacity = '1';
            window.scrollToTopBtn.style.visibility = 'visible';
        }
        
        // Music Button - Always visible after main content loads
        if (window.musicButton) {
            window.musicButton.style.opacity = '1';
            window.musicButton.style.visibility = 'visible';
        }
    }, 16); // ~60fps
    
    // Add single scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
}

// Initialize enhanced features
setTimeout(() => {
    initializeScrollAnimations();
    initializeScrollIndicator();
    initializeScrollProgress();
    createFloatingElements();
    addScrollToTopButton();
    initializeBackgroundMusic();
    initializeUnifiedScrollHandler();
}, 1000);
