document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector("#video");
    const playPauseBtn = document.querySelector("#playPauseBtn");
    const playPauseIcon = document.querySelector("#playPauseIcon");
    const muteBtn = document.querySelector("#muteBtn");
    const muteIcon = document.querySelector("#muteIcon");

    playPauseBtn.addEventListener("click", () => {
        if (video.paused) {
            video.play();
            playPauseIcon.src = "icons/pause.png";
            playPauseIcon.alt = "Pause";
        } else {
            video.pause();
            playPauseIcon.src = "icons/play.png";
            playPauseIcon.alt = "Play";
        }
    });

    muteBtn.addEventListener("click", () => {
        video.muted = !video.muted;
        if (video.muted) {
            muteIcon.src = "icons/mute.png";
            muteIcon.alt = "Mute";
        } else {
            muteIcon.src = "icons/volumen.png";
            muteIcon.alt = "Unmute";
        }
    });

    // Intersection Observer per reproduir el vídeo automàticament
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
                playPauseIcon.src = "icons/pause.png";
                playPauseIcon.alt = "Pause";
            } else {
                video.pause();
                playPauseIcon.src = "icons/play.png";
                playPauseIcon.alt = "Play";
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(video);
});
