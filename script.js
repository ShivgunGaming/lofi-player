document.addEventListener("DOMContentLoaded", function() {
    const audio = new Audio();
    const playPauseBtn = document.getElementById('play-pause-btn');
    const volumeSlider = document.getElementById('volume-slider');
    const progress = document.getElementById('progress');
    const currentTrack = document.getElementById('current-track');
    const playlist = document.querySelector('.playlist ul');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let isPlaying = false;
    let currentVolume = 0.5;
    let currentSongIndex = 0;
    const songs = [
        { title: "Breathing Stone", artist: "Tenno", source: "/images/Lofi1.mp3" },
        { title: "Eternal Beauty", artist: "Tenno", source: "/images/Lofi2.mp3" },
        { title: "Pagoda in the Mist", artist: "Tenno", source: "/images/Lofi3.mp3" },
        { title: "Reflecting", artist: "Tenno", source: "/images/Lofi4.mp3" },
        { title: "Theme of the Swaying Forest", artist: "Tenno", source: "/images/Lofi5.mp3" },
        { title: "My Safe Haven", artist: "Tenno", source: "/images/Lofi6.mp3" },
        { title: "Poles Apart", artist: "slowburn", source: "/images/slowburn1.mp3" },
        { title: "Lightleaks", artist: "slowburn", source: "/images/slowburn2.mp3" },
        { title: "Callisto", artist: "slowburn", source: "/images/slowburn3.mp3" },
        { title: "A second worth", artist: "slowburn", source: "/images/slowburn4.mp3" },
        { title: "Midspring", artist: "slowburn", source: "/images/slowburn5.mp3" },
        { title: "Alissa", artist: "slowburn", source: "/images/slowburn6.mp3" },
        { title: "As it was", artist: "slowburn", source: "/images/slowburn7.mp3" },
        { title: "New light", artist: "slowburn", source: "/images/slowburn8.mp3" },
        { title: "Between Time", artist: "slowburn", source: "/images/slowburn9.mp3" }
        // Add more songs as needed
    ];

    // Function to update the current track display
    function updateCurrentTrack() {
        currentTrack.textContent = `Now Playing: ${songs[currentSongIndex].title} - ${songs[currentSongIndex].artist}`;
    }

    // Function to play or pause the audio
    function togglePlayPause() {
        if (isPlaying) {
            audio.pause();
            playPauseBtn.textContent = '▶️';
        } else {
            audio.play();
            playPauseBtn.textContent = '⏸️';
        }
        isPlaying = !isPlaying;
    }

    // Function to change the volume
    function changeVolume() {
        audio.volume = volumeSlider.value / 100;
        currentVolume = audio.volume;
    }

    // Function to update the progress bar
    function updateProgress() {
        const progressPercentage = (audio.currentTime / audio.duration) * 100;
        progress.style.width = `${progressPercentage}%`;
    }

    // Function to play the next song
    function playNextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        audio.src = songs[currentSongIndex].source;
        updateCurrentTrack();
        audio.play();
        playPauseBtn.textContent = '⏸️';
        isPlaying = true;
    }

    // Function to play the previous song
    function playPrevSong() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        audio.src = songs[currentSongIndex].source;
        updateCurrentTrack();
        audio.play();
        playPauseBtn.textContent = '⏸️';
        isPlaying = true;
    }

    // Event listeners
    playPauseBtn.addEventListener('click', togglePlayPause);
    volumeSlider.addEventListener('input', changeVolume);
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', playNextSong);
    prevBtn.addEventListener('click', playPrevSong);
    nextBtn.addEventListener('click', playNextSong);

    // Initial setup
    audio.src = songs[currentSongIndex].source;
    updateCurrentTrack();
    audio.volume = currentVolume;
    volumeSlider.value = currentVolume * 100;
});
