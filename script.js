// ============================================
// KAWAI LOADING ANIMATION - FIXED VERSION
// ============================================

// Pesan imut acak
const kawaiiMessages = [
    "Menyiapkan segalanya dengan cinta~ 💖",
    "Bersiap-siap untuk keimutan! ✨",
    "Sedang menghias dengan bunga-bunga 🌸",
    "Menyiapkan musik untukmu 🎵",
    "Tunggu sebentar ya, lagi sibuk jadi imut~ 🐱",
    "Loading dengan penuh kasih sayang 💕",
    "Sedang menambahkan glitter dan sparkles ✨",
    "Hampir selesai, sabar ya~ 🌈",
    "Menyusun kata-kata manis untukmu 💌",
    "Sedang menghitung bintang-bintang ⭐"
];

// Simulasi loading progress
function simulateLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    const randomMessage = document.getElementById('random-message');
    const cat = document.querySelector('.kawaii-cat');
    
    // Blokir scroll saat loading
    document.body.classList.add('loading-active');
    
    let progress = 0;
    const totalTime = 2500; // 2.5 detik total loading
    const steps = 100;
    const stepTime = totalTime / steps;
    
    // Tampilkan pesan acak
    randomMessage.textContent = kawaiiMessages[Math.floor(Math.random() * kawaiiMessages.length)];
    
    const interval = setInterval(() => {
        progress += 1;
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `${progress}%`;
        
        // Efek khusus di beberapa progress
        if (progress === 25) {
            randomMessage.textContent = kawaiiMessages[Math.floor(Math.random() * kawaiiMessages.length)];
        } else if (progress === 50) {
            cat.style.animation = 'floatCat 3s ease-in-out infinite';
            randomMessage.textContent = kawaiiMessages[Math.floor(Math.random() * kawaiiMessages.length)];
        } else if (progress === 75) {
            randomMessage.textContent = kawaiiMessages[Math.floor(Math.random() * kawaiiMessages.length)];
        }
        
        if (progress >= 100) {
            clearInterval(interval);
            
            // Delay sebelum menghilangkan loading screen
            setTimeout(() => {
                loadingScreen.classList.add('fade-out');
                
                // Setelah animasi selesai, hapus element dan kembalikan scroll
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    document.body.classList.remove('loading-active');
                    
                    // Mulai efek mengetik setelah loading selesai
                    if (typeof typeEffect === 'function') {
                        typeEffect();
                    }
                    
                    // Inisialisasi music player setelah loading selesai
                    if (typeof initMusicPlayer === 'function') {
                        setTimeout(initMusicPlayer, 500);
                    }
                }, 800);
            }, 500);
        }
    }, stepTime);
}

// Pastikan loading screen langsung muncul
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Jika loading screen masih ada, jalankan animasi
    if (loadingScreen && loadingScreen.style.display !== 'none') {
        // Tampilkan loading screen dengan opacity 1
        loadingScreen.style.opacity = '1';
        loadingScreen.style.visibility = 'visible';
        
        // Jalankan animasi loading
        setTimeout(simulateLoading, 100);
    }
});

// Juga jalankan saat DOM siap (fallback)
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Pastikan loading screen terlihat
    if (loadingScreen) {
        loadingScreen.style.display = 'flex';
        loadingScreen.style.opacity = '1';
        loadingScreen.style.visibility = 'visible';
    }
    
    // Mulai loading animation dengan delay kecil
    setTimeout(simulateLoading, 300);
});

// 1. Toggle Menu untuk Tampilan Mobile
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Tutup menu saat link diklik
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// 2. Efek Mengetik (Typewriter Effect)
const textElement = document.querySelector('.typing-text');
const words = ["wanita", "cewe", "girl"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex--);
    } else {
        textElement.textContent = currentWord.substring(0, charIndex++);
    }

    let typeSpeed = isDeleting ? 100 : 200;

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 2000; // Tunggu sebentar saat kata selesai diketik
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// 3. MUSIC PLAYER FUNCTIONALITY
const audioPlayer = document.getElementById('audioPlayer');
const playIcon = document.getElementById('playIcon');
const vinyl = document.getElementById('vinyl');
const progress = document.getElementById('progress');
const progressBar = document.getElementById('progressBar');
const currentTimeElement = document.getElementById('currentTime');
const durationElement = document.getElementById('duration');
const volumeSlider = document.getElementById('volumeSlider');
const volumeIcon = document.getElementById('volumeIcon');
const currentTitle = document.getElementById('currentTitle');
const currentArtist = document.getElementById('currentArtist');
const currentCover = document.getElementById('currentCover');

// Daftar lagu dengan URL yang valid
const songs = [
    {
        title: "Night Changes",
        artist: "One Direction",
        src: "http://g.top4top.io/m_3645wxvss0.mp3",
        cover: "https://i.ibb.co.com/fzzQ1ckh/mqdefault-1.jpg",
        duration: "3:45"
    },
    {
        title: "Dandelions",
        artist: "Ruth B",
        src: "http://f.top4top.io/m_36466jjq50.mp3",
        cover: "https://i.ibb.co.com/gZnkwNJs/mqdefault.jpg",
        duration: "4:20"
    },
    {
        title: "Cheerleader",
        artist: "OMI",
        src: "https://c.top4top.io/m_36453xq7a0.mp3",
        cover: "http://i.ibb.co.com/V0HGHJ9p/r-XF9zi-Z3-AU4-HQ.jpg",
        duration: "3:15"
    }
];

let currentSongIndex = 0;
let isPlaying = false;
let isShuffled = false;
let isRepeated = false;

// Format waktu (detik ke menit:detik)
function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Update progress bar
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    
    currentTimeElement.textContent = formatTime(currentTime);
    
    // Update duration jika belum ada
    if (duration && !durationElement.dataset.set) {
        durationElement.textContent = formatTime(duration);
        durationElement.dataset.set = "true";
    }
}

// Set progress bar saat di-klik
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;
    
    if (!duration) return;
    
    audioPlayer.currentTime = (clickX / width) * duration;
}

// Toggle play/pause
function togglePlay() {
    if (audioPlayer.paused) {
        playSong(currentSongIndex);
    } else {
        pauseSong();
    }
}

// Memutar lagu
function playSong(index) {
    console.log("Memutar lagu index:", index);
    
    // Hentikan lagu yang sedang diputar
    audioPlayer.pause();
    
    // Update current index
    currentSongIndex = index;
    
    // Update UI untuk lagu yang sedang diputar
    document.querySelectorAll('.song-item').forEach((item, i) => {
        if (i === currentSongIndex) {
            item.classList.add('playing');
        } else {
            item.classList.remove('playing');
        }
    });
    
    // Load lagu baru
    const song = songs[currentSongIndex];
    
    audioPlayer.src = song.src;
    currentTitle.textContent = song.title;
    currentArtist.textContent = song.artist;
    currentCover.src = song.cover;
    durationElement.textContent = song.duration;
    durationElement.dataset.set = "true";
    
    // Reset progress
    progress.style.width = "0%";
    currentTimeElement.textContent = "0:00";
    
    // Coba putar lagu
    const playPromise = audioPlayer.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            isPlaying = true;
            playIcon.className = 'fas fa-pause';
            vinyl.classList.add('spinning');
        }).catch(error => {
            console.error("Gagal memutar lagu:", error);
            // Fallback untuk autoplay restrictions
            playIcon.className = 'fas fa-play';
            vinyl.classList.remove('spinning');
        });
    }
}

// Pause lagu
function pauseSong() {
    audioPlayer.pause();
    isPlaying = false;
    playIcon.className = 'fas fa-play';
    vinyl.classList.remove('spinning');
}

// Lagu berikutnya
function nextSong() {
    if (isShuffled) {
        // Random song
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * songs.length);
        } while (newIndex === currentSongIndex && songs.length > 1);
        currentSongIndex = newIndex;
    } else {
        // Normal next
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    
    playSong(currentSongIndex);
}

// Lagu sebelumnya
function previousSong() {
    if (isShuffled) {
        // Random song
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * songs.length);
        } while (newIndex === currentSongIndex && songs.length > 1);
        currentSongIndex = newIndex;
    } else {
        // Normal previous
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    
    playSong(currentSongIndex);
}

// Ubah volume
function changeVolume(value) {
    audioPlayer.volume = value / 100;
    
    // Update icon volume
    if (value == 0) {
        volumeIcon.className = 'fas fa-volume-mute';
    } else if (value < 50) {
        volumeIcon.className = 'fas fa-volume-down';
    } else {
        volumeIcon.className = 'fas fa-volume-up';
    }
}

// Fungsi toggle shuffle
function toggleShuffle() {
    isShuffled = !isShuffled;
    const shuffleBtn = document.getElementById('shuffleBtn');
    
    if (isShuffled) {
        shuffleBtn.style.color = 'white';
        shuffleBtn.style.background = 'var(--primary)';
        shuffleBtn.title = 'Shuffle: ON';
    } else {
        shuffleBtn.style.color = 'var(--primary)';
        shuffleBtn.style.background = 'var(--white)';
        shuffleBtn.title = 'Shuffle: OFF';
    }
}

// Fungsi toggle repeat
function toggleRepeat() {
    isRepeated = !isRepeated;
    const repeatBtn = document.getElementById('repeatBtn');
    
    if (isRepeated) {
        repeatBtn.style.color = 'white';
        repeatBtn.style.background = 'var(--primary)';
        repeatBtn.title = 'Repeat: ON';
    } else {
        repeatBtn.style.color = 'var(--primary)';
        repeatBtn.style.background = 'var(--white)';
        repeatBtn.title = 'Repeat: OFF';
    }
}

// Initialize player dengan lagu pertama
function initMusicPlayer() {
    console.log("Inisialisasi music player...");
    
    // Update UI untuk playlist
    updatePlaylistUI();
    
    // Load lagu pertama
    playSong(0);
    
    // Event untuk klik item playlist
    document.querySelectorAll('.song-item').forEach((item, index) => {
        item.addEventListener('click', function() {
            playSong(index);
        });
    });
    
    // Event untuk volume slider
    volumeSlider.addEventListener('input', function() {
        changeVolume(this.value);
    });
    
    // Event untuk progress bar
    progressBar.addEventListener('click', setProgress);
}

// Update playlist UI
function updatePlaylistUI() {
    const songItems = document.querySelectorAll('.song-item');
    
    songs.forEach((song, index) => {
        if (songItems[index]) {
            const songName = songItems[index].querySelector('.song-name');
            const songArtist = songItems[index].querySelector('.song-artist');
            const songDuration = songItems[index].querySelector('.song-duration');
            const songCover = songItems[index].querySelector('img');
            
            if (songName) songName.textContent = song.title;
            if (songArtist) songArtist.textContent = song.artist;
            if (songDuration) songDuration.textContent = song.duration;
            if (songCover) songCover.src = song.cover;
        }
    });
}

// Event Listeners untuk audio player
audioPlayer.addEventListener('timeupdate', updateProgress);
audioPlayer.addEventListener('ended', function() {
    if (isRepeated) {
        // Ulangi lagu yang sama
        playSong(currentSongIndex);
    } else {
        nextSong();
    }
});

// Error handling untuk audio
audioPlayer.addEventListener('error', function(e) {
    console.error('Error loading audio:', e);
    alert('Gagal memuat file audio. Coba refresh halaman.');
});

// Pause otomatis saat halaman tidak aktif
document.addEventListener('visibilitychange', function() {
    if (document.hidden && !audioPlayer.paused) {
        audioPlayer.pause();
        vinyl.classList.remove('spinning');
    }
});

// Mulai loading saat DOM siap
document.addEventListener('DOMContentLoaded', function() {
    // Mulai loading animation
    setTimeout(simulateLoading, 300);
    
    // Setup event listeners lainnya
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});

// Juga coba inisialisasi saat window load (fallback)
window.addEventListener('load', function() {
    // Jika loading screen masih terlihat (fallback)
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen && !loadingScreen.classList.contains('fade-out')) {
        setTimeout(simulateLoading, 300);
    }
});

// ================================
// Scroll Animation ala Reels
// ================================
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    },
    {
        threshold: 0.6 // section aktif kalau 60% terlihat
    }
);

// observe semua section
sections.forEach(section => observer.observe(section));