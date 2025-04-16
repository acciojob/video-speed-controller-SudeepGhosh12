// Get DOM elements
const video = document.querySelector('video');
const playButton = document.querySelector('.player__button');
const volumeSlider = document.querySelector('input[name="volume"]');
const speedSlider = document.querySelector('input[name="playbackSpeed"]');
const rewindButton = document.querySelector('[data-skip="-10"]');
const forwardButton = document.querySelector('[data-skip="25"]');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

// Toggle play/pause
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update play button icon
function updateButton() {
  playButton.textContent = video.paused ? '►' : '❚ ❚';
}

// Handle volume and playback speed changes
function handleRangeUpdate() {
  video[this.name] = this.value;
}

// Skip video
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Update progress bar
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = `${percent}%`;
}

// Scrub (click and drag progress bar)
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Event listeners
video.addEventListener('click', toggle

