const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const stopBtn = document.getElementById('stop');
const title = document.getElementById('title');
const musicImage = document.getElementById('music-image');

const songs = [
    { title: 'Song 1', src: './song1.mp3', image: 'cover1.jpg' },
    { title: 'Song 2', src: './song2.mp3', image: 'cover2.jpg' },
    { title: 'Song 3', src: './song3.mp3', image: 'cover3.jpg' }
];

let songIndex = 0;

function loadSong(song) {
    title.innerText = song.title;
    audio.src = song.src;
    musicImage.src = song.image;
}

function playPauseSong() {
    if (audio.paused) {
        audio.play().catch(err => console.log("Autoplay blocked:", err));
        playBtn.innerText = '⏸ Pause';
    } else {
        audio.pause();
        playBtn.innerText = '▶ Play';
    }
}

function stopSong() {
    audio.pause();
    audio.currentTime = 0;
    playBtn.innerText = '▶ Play';
}

function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    audio.play();
    playBtn.innerText = '⏸ Pause';
}

function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    audio.play();
    playBtn.innerText = '⏸ Pause';
}

// Event Listeners
playBtn.addEventListener('click', playPauseSong);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
stopBtn.addEventListener('click', stopSong);

// Load first song
loadSong(songs[songIndex]);
