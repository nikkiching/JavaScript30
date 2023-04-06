/** Get elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = progress.querySelector('.progress__filled');
const playButton = player.querySelector('.toggle');
const skipbuttons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreen = player.querySelector('.player__button[name="fullscreen"]');


function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}
function togglePlayIcon() {
  const icon = this.paused ? '►' : '❚ ❚';
  playButton.textContent = icon;
}

function skipPlay() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function handleFullScreen() {
  player.classList.toggle('fullscreen');
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  }
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', togglePlayIcon);
video.addEventListener('pause', togglePlayIcon);
video.addEventListener('timeupdate', handleProgress);
fullscreen.addEventListener('click', handleFullScreen);
playButton.addEventListener('click', togglePlay);
skipbuttons.forEach(item => item.addEventListener('click', skipPlay));
ranges.forEach(item => item.addEventListener('change', handleRangeUpdate));
let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mouseup', () => mousedown = false);
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mousemove', (event) => mousedown && scrub(event));
