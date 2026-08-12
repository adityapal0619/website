/* ==========================================================================
   20 ROMANTIC SONGS DATA BLOCK WITH TIMESTAMP SEGMENTS
   ========================================================================== */
const playlist = [
  {
    id: 1,
    title: "Chand Sifarish",
    artist: "Fanaa",
    start: 0,
    end: 274,
    background: "backgrounds/01.jpg",
    caption: "Some songs just feel like home.",
    gradient: "linear-gradient(135deg, #18091e, #3a152d, #5a1235, #7a1f3c)"
  },
  {
    id: 2,
    title: "Tujh Mein Rab Dikhta Hai",
    artist: "Rab Ne Bana Di Jodi",
    start: 274,
    end: 550,
    background: "backgrounds/02.jpg",
    caption: "Some songs somehow bring one person to mind.",
    gradient: "linear-gradient(135deg, #090b14, #12182c, #1f2a4a, #2f3e6e)"
  },
  {
    id: 3,
    title: "Dil Diyan Gallan",
    artist: "Tiger Zinda Hai",
    start: 550,
    end: 801,
    background: "backgrounds/03.jpg",
    caption: "For conversations that somehow turn into hours.",
    gradient: "linear-gradient(135deg, #1d120a, #381f0f, #572d12, #7a4115)"
  },
  {
    id: 4,
    title: "Hey Shona",
    artist: "Ta Ra Rum Pum",
    start: 801,
    end: 1119,
    background: "backgrounds/04.jpg",
    caption: "Maybe some feelings are better felt than explained.",
    gradient: "linear-gradient(135deg, #03040c, #090f20, #131e3d, #20315c)"
  },
  {
    id: 5,
    title: "Hum Tum (Title Track)",
    artist: "Hum Tum",
    start: 1119,
    end: 1444,
    background: "backgrounds/05.jpg",
    caption: "A little bit of love can make an ordinary day special.",
    gradient: "linear-gradient(135deg, #1c0818, #350f2e, #551347, #7a1b66)"
  },
  {
    id: 6,
    title: "Bol Na Halke Halke",
    artist: "Jhoom Barabar Jhoom",
    start: 1444,
    end: 1747,
    background: "backgrounds/06.jpg",
    caption: "You make ordinary moments feel a little more beautiful.",
    gradient: "linear-gradient(135deg, #1b0c03, #351909, #56270d, #7a3a11)"
  },
  {
    id: 7,
    title: "Main Yahaan Hoon",
    artist: "Veer-Zaara",
    start: 1747,
    end: 2039,
    background: "backgrounds/07.jpg",
    caption: "Somehow, you ended up stealing my heart.",
    gradient: "linear-gradient(135deg, #060a12, #0d1527, #192644, #2a3c66)"
  },
  {
    id: 8,
    title: "Jag Ghoomeya",
    artist: "Sultan",
    start: 2039,
    end: 2308,
    background: "backgrounds/08.jpg",
    caption: "Some memories stay with you wherever you go.",
    gradient: "linear-gradient(135deg, #0b0716, #18102d, #2a1c49, #412b6e)"
  },
  {
    id: 9,
    title: "Humko Humise Chura Lo",
    artist: "Mohabbatein",
    start: 2308,
    end: 2780,
    background: "backgrounds/09.jpg",
    caption: "Some people just stay close to your heart.",
    gradient: "linear-gradient(135deg, #1c0a1a, #36102f, #58164b, #7a1f68)"
  },
  {
    id: 10,
    title: "Dard Karaara",
    artist: "Dum Laga Ke Haisha",
    start: 2780,
    end: 3033,
    background: "backgrounds/10.jpg",
    caption: "If I had to choose someone to share countless moments with…",
    gradient: "linear-gradient(135deg, #1a030d, #350719, #560a28, #7a113a)"
  },
  {
    id: 11,
    title: "Haan Ke Haan",
    artist: "Dum Laga Ke Haisha",
    start: 3033,
    end: 3234,
    background: "backgrounds/11.jpg",
    caption: "Somehow, everything feels a little better.",
    gradient: "linear-gradient(135deg, #020614, #071330, #102454, #1d3e80)"
  },
  {
    id: 12,
    title: "Dil To Pagal Hai (Title Track)",
    artist: "Dil To Pagal Hai",
    start: 3234,
    end: 3568,
    background: "backgrounds/12.jpg",
    caption: "Some feelings don't need an explanation.",
    gradient: "linear-gradient(135deg, #0c0418, #18092f, #2b1154, #431a80)"
  },
  {
    id: 13,
    title: "Falak Tak",
    artist: "Tashan",
    start: 3568,
    end: 3915,
    background: "backgrounds/13.jpg",
    caption: "You make life feel a little more alive.",
    gradient: "linear-gradient(135deg, #050b16, #0b1a30, #152d54, #224780)"
  },
  {
    id: 14,
    title: "Ishq Hua",
    artist: "Aaja Nachle",
    start: 3915,
    end: 4175,
    background: "backgrounds/14.jpg",
    caption: "Somewhere along the way, you became someone very special.",
    gradient: "linear-gradient(135deg, #160a04, #2f170b, #4e2712, #6f3b1b)"
  },
  {
    id: 15,
    title: "Chalte Chalte",
    artist: "Chalte Chalte",
    start: 4175,
    end: 4632,
    background: "backgrounds/15.jpg",
    caption: "Some feelings never really grow old.",
    gradient: "linear-gradient(135deg, #1b0709, #350f13, #56191f, #7a252d)"
  },
  {
    id: 16,
    title: "Moh Moh Ke Dhaage (Female)",
    artist: "Dum Laga Ke Haisha",
    start: 4632,
    end: 4952,
    background: "backgrounds/16.jpg",
    caption: "And then life became a little more interesting.",
    gradient: "linear-gradient(135deg, #18041c, #310b37, #51125a, #731e80)"
  },
  {
    id: 17,
    title: "Haule Haule",
    artist: "Rab Ne Bana Di Jodi",
    start: 4952,
    end: 5214,
    background: "backgrounds/17.jpg",
    caption: "Some people make life feel more beautiful.",
    gradient: "linear-gradient(135deg, #03081a, #0a1435, #16265a, #283e80)"
  },
  {
    id: 18,
    title: "Mere Haath Mein",
    artist: "Fanaa",
    start: 5214,
    end: 5492,
    background: "backgrounds/18.jpg",
    caption: "Okay… you definitely stole it. ❤️",
    gradient: "linear-gradient(135deg, #150c02, #2c1806, #4b2a09, #6b3e0d)"
  },
  {
    id: 19,
    title: "Khuda Jaane",
    artist: "Bachna Ae Haseeno",
    start: 5492,
    end: 5822,
    background: "backgrounds/19.jpg",
    caption: "For moments you wish could last a little longer.",
    gradient: "linear-gradient(135deg, #0b0b0a, #181716, #2a2927, #403e3c)"
  },
  {
    id: 20,
    title: "Isq Risk",
    artist: "Mere Brother Ki Dulhan",
    start: 5822,
    end: 6200,
    background: "backgrounds/20.jpg",
    caption: "One last song… but definitely not the end.",
    gradient: "linear-gradient(135deg, #13071b, #281137, #441d5b, #652f80)"
  }
];

/* ==========================================================================
   GLOBAL APP STATE
   ========================================================================== */
const audio = document.getElementById("audio-player");
let isPlaying = false;
let currentTrackIndex = 0;
let isMuted = false;
let currentVolume = 0.8;
let eggClickCount = 0;
let isLoveMode = false;

/* Elements references */
const bg1 = document.getElementById("bg-1");
const bg2 = document.getElementById("bg-2");
const mainContent = document.getElementById("main-content");
const introScreen = document.getElementById("intro-screen");
const btnEnter = document.getElementById("btn-enter-story");
const btnHeroPlay = document.getElementById("btn-hero-play");

// Controls
const btnPlay = document.getElementById("btn-play");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const btnMute = document.getElementById("btn-mute");
const btnFavorite = document.getElementById("btn-favorite");
const btnPlaylistToggle = document.getElementById("btn-playlist-toggle");
const btnPlaylistClose = document.getElementById("btn-playlist-close");
const playlistSheet = document.getElementById("playlist-sheet");
const volumeRange = document.getElementById("volume-range");
const volumeFill = document.getElementById("volume-fill");
const progressContainer = document.getElementById("progress-container");
const progressFill = document.getElementById("progress-fill");
const progressKnob = document.getElementById("progress-knob");
const timeCurrent = document.getElementById("time-current");
const timeDuration = document.getElementById("time-duration");

// Track Text Elements
const trackTitle = document.getElementById("player-track-title");
const trackArtist = document.getElementById("player-track-artist");
const trackCaption = document.getElementById("player-track-caption");
const trackArtwork = document.getElementById("player-artwork");
const songNumberBadge = document.getElementById("song-number-badge");
const statusBadge = document.getElementById("player-status-badge");

// Love Mode Button
const btnLoveMode = document.getElementById("btn-love-mode");

// Canvases
const eqCanvas = document.getElementById("equalizer-canvas");
const eqCtx = eqCanvas.getContext("2d");
let eqFrameId = null;

const particleCanvas = document.getElementById("particle-canvas");
const particleCtx = particleCanvas.getContext("2d");
let particleFrameId = null;

/* ==========================================================================
   INITIALIZATION & INTRO SEQUENCE
   ========================================================================== */
window.addEventListener("DOMContentLoaded", () => {
  initIntroSequence();
  initPlaylistSheet();
  initVolumeSlider();
  initParticleSystem();
  setupEventListeners();
  
  // Set initial volume
  audio.volume = currentVolume;
  
  // Setup track metadata
  setupTrackUI(0);
});

// Timed sequential reveals for intro screen text
function initIntroSequence() {
  const t1 = document.getElementById("intro-text-1");
  const t2 = document.getElementById("intro-text-2");
  const t3 = document.getElementById("intro-text-3");
  const t4 = document.getElementById("intro-text-4");
  const t5 = document.getElementById("intro-text-5");

  // Step 1: Hey Harshita...
  setTimeout(() => {
    t1.classList.add("show");
  }, 1000);

  // Step 2: I made something for you.
  setTimeout(() => {
    t1.classList.remove("show");
    t1.classList.add("hide");
    setTimeout(() => {
      t2.classList.add("show");
    }, 800);
  }, 3800);

  // Step 3: No special occasion.
  setTimeout(() => {
    t2.classList.remove("show");
    t2.classList.add("hide");
    setTimeout(() => {
      t3.classList.add("show");
    }, 800);
  }, 6600);

  // Step 4: I just felt like making something for someone special. ❤️
  setTimeout(() => {
    t3.classList.remove("show");
    t3.classList.add("hide");
    setTimeout(() => {
      t4.classList.add("show");
    }, 800);
  }, 9400);

  // Step 5: So… press play + Button
  setTimeout(() => {
    t4.classList.remove("show");
    t4.classList.add("hide");
    setTimeout(() => {
      t5.classList.add("show");
    }, 800);
  }, 12200);
}

// Enter button transition
btnEnter.addEventListener("click", () => {
  introScreen.classList.add("intro-hidden");
  mainContent.classList.remove("content-hidden");
  
  setTimeout(() => {
    mainContent.classList.add("content-visible");
    
    // Play the audio
    playTrack();
  }, 150);
});

// Hero play button transition (Scrolls down to playlist/player)
btnHeroPlay.addEventListener("click", () => {
  const musicSection = document.getElementById("music-section");
  musicSection.scrollIntoView({ behavior: "smooth" });
  
  if (!isPlaying) {
    playTrack();
  }
});

/* ==========================================================================
   SCROLL REVEALS FOR MESSAGE SECTION
   ========================================================================== */
const messageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
    }
  });
}, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

setTimeout(() => {
  const messageParas = document.querySelectorAll(".message-paragraph, .message-footer");
  messageParas.forEach(p => {
    messageObserver.observe(p);
  });
}, 500);

/* ==========================================================================
   CINEMATIC BACKGROUND SYSTEM
   ========================================================================== */
let activeBgLayer = bg1;

function setupTrackUI(index) {
  const track = playlist[index];
  
  trackTitle.innerText = track.title;
  trackArtist.innerText = track.artist;
  songNumberBadge.innerText = `Song ${String(index + 1).padStart(2, '0')} / 20`;
  
  updatePlaylistItemStates(index);
  trackArtwork.style.backgroundImage = `url('${track.background}'), linear-gradient(135deg, #1b0a20, #0c050d)`;
  
  trackCaption.style.opacity = 0;
  setTimeout(() => {
    trackCaption.innerText = `“${track.caption}”`;
    trackCaption.style.opacity = 1;
  }, 300);

  transitionBackground(track);
}

function transitionBackground(track) {
  const nextBgLayer = activeBgLayer === bg1 ? bg2 : bg1;
  
  const tempImg = new Image();
  tempImg.onload = () => {
    nextBgLayer.style.backgroundImage = `url('${track.background}')`;
    
    activeBgLayer.className = "bg-layer zoom-out-fade"; 
    nextBgLayer.className = "bg-layer active-bg zoom-in-fade"; 
    
    activeBgLayer = nextBgLayer;
  };
  tempImg.onerror = () => {
    nextBgLayer.style.backgroundImage = track.gradient;
    activeBgLayer.className = "bg-layer zoom-out-fade";
    nextBgLayer.className = "bg-layer active-bg zoom-in-fade";
    activeBgLayer = nextBgLayer;
  };
  tempImg.src = track.background;
}

/* ==========================================================================
   TRACK NAVIGATION & LIFECYCLE
   ========================================================================== */
function loadTrack(index, autostart = true) {
  currentTrackIndex = index;
  setupTrackUI(index);
  
  audio.currentTime = playlist[index].start;
  
  if (autostart) {
    // Check if moving to Timeless Classics (before track index 10 / Song 11)
    if (index === 10) {
      triggerClassicTransition(() => {
        playTrack();
      });
    } else {
      playTrack();
    }
  } else {
    pauseTrack();
    updateTimelineUI();
  }
}

function playTrack() {
  isPlaying = true;
  statusBadge.classList.add("hidden-badge");
  
  audio.play().catch(err => {
    console.warn("Autoplay block:", err);
    statusBadge.classList.remove("hidden-badge");
    isPlaying = false;
    btnPlay.querySelector(".play-icon").classList.remove("hidden");
    btnPlay.querySelector(".pause-icon").classList.add("hidden");
    trackArtwork.classList.remove("playing");
  });

  if (isPlaying) {
    btnPlay.querySelector(".play-icon").classList.add("hidden");
    btnPlay.querySelector(".pause-icon").classList.remove("hidden");
    trackArtwork.classList.add("playing");
    startEqualizerVisuals();
  }
}

function pauseTrack() {
  isPlaying = false;
  audio.pause();
  
  btnPlay.querySelector(".play-icon").classList.remove("hidden");
  btnPlay.querySelector(".pause-icon").classList.add("hidden");
  trackArtwork.classList.remove("playing");
  stopEqualizerVisuals();
}

function playPauseToggle() {
  if (isPlaying) {
    pauseTrack();
  } else {
    playTrack();
  }
}

function nextTrack() {
  let nextIdx = currentTrackIndex + 1;
  if (nextIdx >= playlist.length) {
    nextIdx = 0;
  }
  loadTrack(nextIdx, true);
}

function prevTrack() {
  let prevIdx = currentTrackIndex - 1;
  if (prevIdx < 0) {
    prevIdx = playlist.length - 1;
  }
  loadTrack(prevIdx, true);
}

/* ==========================================================================
   TIMELINE PROGRESS & SCRUBBER
   ========================================================================== */
audio.addEventListener("timeupdate", () => {
  const currentTrack = playlist[currentTrackIndex];
  
  // Auto transition to next song if current segment ends
  if (audio.currentTime >= currentTrack.end) {
    if (currentTrackIndex === 19) {
      triggerFinalSurprise();
    } else {
      nextTrack();
    }
  } else if (audio.currentTime < currentTrack.start) {
    // If it gets below the current track start time (e.g. manual seek backwards), wrap it
    audio.currentTime = currentTrack.start;
  }
  
  updateTimelineUI();
});

function updateTimelineUI() {
  const currentTrack = playlist[currentTrackIndex];
  const elapsed = Math.max(0, audio.currentTime - currentTrack.start);
  const duration = currentTrack.end - currentTrack.start;
  
  timeCurrent.innerText = formatTime(elapsed);
  timeDuration.innerText = formatTime(duration);
  
  const percent = Math.min(100, Math.max(0, (elapsed / duration) * 100));
  progressFill.style.width = `${percent}%`;
  progressKnob.style.left = `${percent}%`;
}

function scrubTrack(event) {
  const rect = progressContainer.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const percent = Math.max(0, Math.min(1, clickX / rect.width));
  
  const currentTrack = playlist[currentTrackIndex];
  const duration = currentTrack.end - currentTrack.start;
  
  audio.currentTime = currentTrack.start + (percent * duration);
  updateTimelineUI();
}

function formatTime(seconds) {
  if (isNaN(seconds) || seconds === undefined) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

/* ==========================================================================
   VOLUME & MUTE CONTROL
   ========================================================================== */
function initVolumeSlider() {
  volumeRange.value = currentVolume;
  volumeFill.style.width = `${currentVolume * 100}%`;
}

function handleVolumeChange(event) {
  currentVolume = parseFloat(event.target.value);
  volumeFill.style.width = `${currentVolume * 100}%`;
  
  audio.volume = currentVolume;
  
  if (currentVolume == 0) {
    isMuted = true;
    updateMuteUI(true);
  } else {
    isMuted = false;
    updateMuteUI(false);
  }
}

function toggleMute() {
  isMuted = !isMuted;
  audio.muted = isMuted;
  updateMuteUI(isMuted);
}

function updateMuteUI(muted) {
  const icon = document.getElementById("volume-icon");
  if (muted || currentVolume == 0) {
    icon.innerHTML = `<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />`;
    volumeFill.style.width = `0%`;
  } else {
    icon.innerHTML = `<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />`;
    volumeFill.style.width = `${currentVolume * 100}%`;
  }
}

/* ==========================================================================
   CLASSIC TIMELINE TRANSITION SCREEN
   ========================================================================== */
function triggerClassicTransition(callback) {
  const transScreen = document.getElementById("classic-transition");
  
  transScreen.classList.remove("hidden");
  setTimeout(() => {
    transScreen.classList.add("show");
    transScreen.classList.add("animating");
  }, 50);

  pauseTrack();

  setTimeout(() => {
    transScreen.classList.remove("show");
    setTimeout(() => {
      transScreen.classList.add("hidden");
      transScreen.classList.remove("animating");
      callback();
    }, 1200);
  }, 6200);
}

/* ==========================================================================
   PLAYLIST PANEL DRAWER
   ========================================================================== */
function initPlaylistSheet() {
  const modernContainer = document.getElementById("playlist-modern-container");
  const classicsContainer = document.getElementById("playlist-classics-container");
  
  playlist.forEach((track, i) => {
    const item = document.createElement("div");
    item.className = "playlist-item";
    item.setAttribute("data-index", i);
    
    item.innerHTML = `
      <div class="playlist-item-info">
        <span class="playlist-index">${String(i + 1).padStart(2, '0')}</span>
        <div class="playlist-details">
          <span class="playlist-song-title">${track.title}</span>
          <span class="playlist-song-artist">${track.artist}</span>
        </div>
      </div>
      <div class="playlist-playing-icon">
        <svg viewBox="0 0 24 24" style="width: 14px; height: 14px; fill: currentColor;">
          <rect x="4" y="10" width="3" height="4">
            <animate attributeName="height" values="4;14;4" dur="0.8s" repeatCount="indefinite" />
            <animate attributeName="y" values="10;5;10" dur="0.8s" repeatCount="indefinite" />
          </rect>
          <rect x="10" y="10" width="3" height="4">
            <animate attributeName="height" values="4;18;4" dur="0.6s" repeatCount="indefinite" />
            <animate attributeName="y" values="10;3;10" dur="0.6s" repeatCount="indefinite" />
          </rect>
          <rect x="16" y="10" width="3" height="4">
            <animate attributeName="height" values="4;12;4" dur="0.7s" repeatCount="indefinite" />
            <animate attributeName="y" values="10;6;10" dur="0.7s" repeatCount="indefinite" />
          </rect>
        </svg>
      </div>
    `;
    
    item.addEventListener("click", () => {
      loadTrack(i, true);
      togglePlaylistSheet(false);
    });
    
    if (i < 10) {
      modernContainer.appendChild(item);
    } else {
      classicsContainer.appendChild(item);
    }
  });
}

function updatePlaylistItemStates(activeIndex) {
  const items = document.querySelectorAll(".playlist-item");
  items.forEach((item, index) => {
    if (index === activeIndex) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

function togglePlaylistSheet(show) {
  if (show) {
    playlistSheet.classList.remove("playlist-hidden");
  } else {
    playlistSheet.classList.add("playlist-hidden");
  }
}

/* ==========================================================================
   PROCEDURAL EQUALIZER DRAW LOOP
   ========================================================================== */
function startEqualizerVisuals() {
  stopEqualizerVisuals();
  
  eqCanvas.width = eqCanvas.clientWidth;
  eqCanvas.height = eqCanvas.clientHeight;
  
  drawEqualizerFrame();
}

function stopEqualizerVisuals() {
  if (eqFrameId) {
    cancelAnimationFrame(eqFrameId);
    eqFrameId = null;
  }
  
  const width = eqCanvas.width;
  const height = eqCanvas.height;
  eqCtx.clearRect(0, 0, width, height);
  eqCtx.strokeStyle = "rgba(255, 77, 121, 0.4)";
  eqCtx.lineWidth = 2;
  eqCtx.beginPath();
  eqCtx.moveTo(0, height - 5);
  eqCtx.lineTo(width, height - 5);
  eqCtx.stroke();
}

function drawEqualizerFrame() {
  eqFrameId = requestAnimationFrame(drawEqualizerFrame);
  
  const width = eqCanvas.width;
  const height = eqCanvas.height;
  eqCtx.clearRect(0, 0, width, height);
  
  const barCount = 18;
  const barSpacing = 4;
  const barWidth = (width - (barSpacing * (barCount - 1))) / barCount;
  
  const time = Date.now() * 0.0035;
  
  for (let i = 0; i < barCount; i++) {
    let heightFactor = Math.sin(time + i * 0.4) * 0.4 + 0.5;
    heightFactor += Math.cos(time * 0.7 - i * 0.25) * 0.25;
    
    let normalizedHeight = Math.max(0.12, Math.min(1.0, heightFactor));
    
    if (Math.random() > 0.85) {
      normalizedHeight += (Math.random() - 0.5) * 0.15;
    }
    
    const barHeight = normalizedHeight * height * 0.85;
    const x = i * (barWidth + barSpacing);
    const y = height - barHeight;
    
    const gradient = eqCtx.createLinearGradient(x, y, x, height);
    gradient.addColorStop(0, '#ff4d79'); 
    gradient.addColorStop(1, '#8a2be2'); 
    
    eqCtx.fillStyle = gradient;
    drawRoundedRect(eqCtx, x, y, barWidth, barHeight, 3);
  }
}

function drawRoundedRect(ctx, x, y, w, h, r) {
  if (w < 2 * r) r = w / 2;
  if (h < 2 * r) r = h / 2;
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
  ctx.fill();
}

/* ==========================================================================
   CANVAS DUST & FLOATING HEART PARTICLE SYSTEM
   ========================================================================== */
const particles = [];
const confettiElements = [];
const particleColors = ["#ff4d79", "#ff6b8b", "#8a2be2", "#ba8cff", "#ff8fa3"];

class Particle {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + 20;
    this.size = Math.random() * 5 + 2;
    this.speedY = Math.random() * 0.8 + 0.3;
    this.speedX = (Math.random() - 0.5) * 0.4;
    this.opacity = Math.random() * 0.5 + 0.2;
    this.color = particleColors[Math.floor(Math.random() * particleColors.length)];
    
    const heartChance = isLoveMode ? 0.35 : 0.08;
    this.type = Math.random() < heartChance ? "heart" : "bokeh";
    
    this.pulse = Math.random() * 0.02;
    this.angle = Math.random() * Math.PI;
  }
  
  update() {
    this.y -= this.speedY;
    this.x += this.speedX + Math.sin(this.angle) * 0.15;
    this.angle += 0.025;
    
    this.opacity += this.pulse;
    if (this.opacity > 0.8 || this.opacity < 0.15) {
      this.pulse = -this.pulse;
    }
  }
  
  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = this.color;
    
    if (this.type === "bokeh") {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.shadowBlur = 12;
      ctx.shadowColor = this.color;
      ctx.fill();
    } else {
      ctx.beginPath();
      const scale = this.size * 0.55;
      ctx.translate(this.x, this.y);
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-3 * scale, -3 * scale, -6 * scale, 0, 0, 6 * scale);
      ctx.bezierCurveTo(6 * scale, 0, 3 * scale, -3 * scale, 0, 0);
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;
      ctx.fill();
    }
    ctx.restore();
  }
}

class Confetti {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = -20;
    this.size = Math.random() * 9 + 6;
    this.speedY = Math.random() * 3 + 2;
    this.speedX = (Math.random() - 0.5) * 3;
    this.color = particleColors[Math.floor(Math.random() * particleColors.length)];
    this.rotation = Math.random() * 360;
    this.rotationSpeed = (Math.random() - 0.5) * 6;
    this.type = Math.random() > 0.4 ? "confetti" : "heart";
  }
  
  update() {
    this.y += this.speedY;
    this.x += this.speedX;
    this.rotation += this.rotationSpeed;
  }
  
  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation * Math.PI / 180);
    ctx.fillStyle = this.color;
    
    if (this.type === "confetti") {
      ctx.fillRect(-this.size/2, -this.size/2, this.size, this.size / 1.5);
    } else {
      ctx.beginPath();
      const scale = this.size * 0.45;
      ctx.moveTo(0, -scale);
      ctx.bezierCurveTo(-5 * scale, -6 * scale, -10 * scale, 0, 0, 8 * scale);
      ctx.bezierCurveTo(10 * scale, 0, 5 * scale, -6 * scale, 0, -scale);
      ctx.fill();
    }
    ctx.restore();
  }
}

function initParticleSystem() {
  resizeParticleCanvas();
  window.addEventListener("resize", resizeParticleCanvas);
  tickParticles();
}

function resizeParticleCanvas() {
  particleCanvas.width = window.innerWidth;
  particleCanvas.height = window.innerHeight;
}

function tickParticles() {
  particleFrameId = requestAnimationFrame(tickParticles);
  particleCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
  
  const maxParticles = isLoveMode ? 130 : 60;
  
  if (particles.length < maxParticles) {
    particles.push(new Particle(particleCanvas));
  }
  
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.update();
    p.draw(particleCtx);
    
    if (p.y < -20 || p.x < -20 || p.x > particleCanvas.width + 20) {
      particles.splice(i, 1);
    }
  }
  
  for (let i = confettiElements.length - 1; i >= 0; i--) {
    const c = confettiElements[i];
    c.update();
    c.draw(particleCtx);
    
    if (c.y > particleCanvas.height + 20) {
      confettiElements.splice(i, 1);
    }
  }
}

function triggerSurpriseRain() {
  for (let i = 0; i < 180; i++) {
    setTimeout(() => {
      if (confettiElements.length < 250) {
        confettiElements.push(new Confetti(particleCanvas));
      }
    }, i * 15);
  }
}

/* ==========================================================================
   FINAL SURPRISE TYPEWRITER & REPLAY
   ========================================================================== */
const surpriseScreen = document.getElementById("surprise-screen");
const btnReplay = document.getElementById("btn-replay-story");
const surpriseTextArea = document.getElementById("surprise-text-area");
const surpriseActionArea = document.getElementById("surprise-action-area");

function triggerFinalSurprise() {
  pauseTrack();
  
  surpriseTextArea.innerHTML = "";
  surpriseActionArea.classList.add("hidden");
  surpriseScreen.classList.remove("surprise-hidden");
  
  const surpriseLines = [
    "You made it to the end.",
    "But I have one more thing to say…",
    "I'm really lucky to have you, Harshita. ❤️",
    "That's it.",
    "No special occasion.",
    "Just me reminding you that you matter to me."
  ];
  
  surpriseLines.forEach((lineText, i) => {
    setTimeout(() => {
      const p = document.createElement("p");
      p.className = "surprise-line";
      
      if (i === 2) {
        p.classList.add("surprise-line-highlight");
      }
      
      p.innerText = lineText;
      surpriseTextArea.appendChild(p);
    }, (i + 1) * 2600);
  });
  
  setTimeout(() => {
    surpriseActionArea.classList.remove("hidden");
  }, (surpriseLines.length + 1) * 2600);
}

btnReplay.addEventListener("click", () => {
  surpriseScreen.classList.add("surprise-hidden");
  
  // Restart playlist from song 1
  loadTrack(0, true);
  triggerSurpriseRain();
  
  document.getElementById("music-section").scrollIntoView({ behavior: "smooth" });
});

/* ==========================================================================
   LOVE MODE TOGGLE FUNCTION
   ========================================================================== */
function toggleLoveMode() {
  isLoveMode = !isLoveMode;
  
  if (isLoveMode) {
    document.body.classList.add("love-mode-active");
    btnLoveMode.innerText = "❤️ Love Mode ON";
    
    for (let i = 0; i < 30; i++) {
      particles.push(new Particle(particleCanvas));
    }
  } else {
    document.body.classList.remove("love-mode-active");
    btnLoveMode.innerText = "❤️ Love Mode";
  }
}

btnLoveMode.addEventListener("click", toggleLoveMode);

/* ==========================================================================
   EASTER EGG MODAL & Math HEART RENDERING
   ========================================================================== */
const eggTrigger = document.getElementById("easter-egg-trigger");
const eggModal = document.getElementById("easter-egg-modal");
const btnCloseEgg = document.getElementById("btn-close-egg");
const eggOverlay = document.getElementById("easter-egg-overlay");
const eggHeartCanvas = document.getElementById("egg-heart-canvas");
const eggCtx = eggHeartCanvas.getContext("2d");
let eggAnimFrameId = null;

eggTrigger.addEventListener("click", () => {
  eggClickCount++;
  
  eggTrigger.style.transform = "scale(1.4)";
  setTimeout(() => {
    eggTrigger.style.transform = "scale(1)";
  }, 150);
  
  if (eggClickCount >= 7) {
    eggClickCount = 0;
    openEasterEgg();
  }
});

function openEasterEgg() {
  eggModal.classList.remove("modal-hidden");
  
  eggHeartCanvas.width = 200;
  eggHeartCanvas.height = 200;
  
  cancelAnimationFrame(eggAnimFrameId);
  animateMathHeart();
}

function closeEasterEgg() {
  eggModal.classList.add("modal-hidden");
  cancelAnimationFrame(eggAnimFrameId);
}

btnCloseEgg.addEventListener("click", closeEasterEgg);
eggOverlay.addEventListener("click", closeEasterEgg);

let eggHeartScale = 0;
let eggHeartScaleDir = 0.005;

function animateMathHeart() {
  eggAnimFrameId = requestAnimationFrame(animateMathHeart);
  
  const w = eggHeartCanvas.width;
  const h = eggHeartCanvas.height;
  eggCtx.clearRect(0, 0, w, h);
  
  eggCtx.save();
  eggCtx.translate(w / 2, h / 2 + 10);
  
  eggHeartScale += eggHeartScaleDir;
  if (eggHeartScale > 1.05 || eggHeartScale < 0.95) {
    eggHeartScaleDir = -eggHeartScaleDir;
  }
  
  eggCtx.scale(eggHeartScale * 5.2, -eggHeartScale * 5.2);
  
  eggCtx.beginPath();
  for (let t = 0; t <= Math.PI * 2; t += 0.02) {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t);
    
    if (t === 0) {
      eggCtx.moveTo(x / 5, y / 5);
    } else {
      eggCtx.lineTo(x / 5, y / 5);
    }
  }
  eggCtx.closePath();
  
  eggCtx.shadowBlur = 15;
  eggCtx.shadowColor = "#ff4d79";
  eggCtx.strokeStyle = "#ffffff";
  eggCtx.lineWidth = 1;
  eggCtx.stroke();
  
  const radial = eggCtx.createRadialGradient(0, 0, 0, 0, 0, 15);
  radial.addColorStop(0, "rgba(255, 77, 121, 0.7)");
  radial.addColorStop(1, "rgba(138, 43, 226, 0.15)");
  eggCtx.fillStyle = radial;
  eggCtx.shadowBlur = 0;
  eggCtx.fill();
  
  eggCtx.restore();
}

/* ==========================================================================
   EVENT LISTENER BINDINGS
   ========================================================================== */
function setupEventListeners() {
  btnPlay.addEventListener("click", playPauseToggle);
  btnNext.addEventListener("click", nextTrack);
  btnPrev.addEventListener("click", prevTrack);
  btnMute.addEventListener("click", toggleMute);
  
  volumeRange.addEventListener("input", handleVolumeChange);
  volumeRange.addEventListener("change", handleVolumeChange);
  
  progressContainer.addEventListener("click", scrubTrack);
  
  btnPlaylistToggle.addEventListener("click", () => togglePlaylistSheet(true));
  btnPlaylistClose.addEventListener("click", () => togglePlaylistSheet(false));
  document.getElementById("playlist-sheet-overlay").addEventListener("click", () => togglePlaylistSheet(false));
  
  btnFavorite.addEventListener("click", () => {
    const currentTrack = playlist[currentTrackIndex];
    const isFav = btnFavorite.classList.toggle("active");
    localStorage.setItem(`fav_song_${currentTrack.id}`, isFav ? "true" : "false");
  });
}
