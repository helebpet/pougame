document.addEventListener("DOMContentLoaded", function () {
    const minipou = document.querySelector(".minipou");
    const audio = document.getElementById("backgroundSound");

    // Ensure the user clicks once before enabling hover play
    document.body.addEventListener("click", () => {
        audio.play().then(() => {
            audio.pause(); // Pause so it only plays on hover
        }).catch(err => console.log("Autoplay blocked: ", err));
    }, { once: true });

    minipou.addEventListener("mouseenter", () => {
        console.log("Mouse entered mini Pou");
        if (audio.paused) {
            audio.play().catch(err => console.log("Playback error: ", err));
        }
    });

    minipou.addEventListener("mouseleave", () => {
        console.log("Mouse left mini Pou");
        audio.pause();
        audio.currentTime = 0; // Reset playback position
    });
});
