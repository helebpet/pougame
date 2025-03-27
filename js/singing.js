document.addEventListener("DOMContentLoaded", function () {
    const hoverElement = document.querySelector(".hoverElement");
    const audio = document.getElementById("backgroundSound");

    // Pause and reset audio on load
    audio.pause();
    audio.currentTime = 0;

    // Play the audio when hovering
    hoverElement.addEventListener("mouseenter", function () {
        // Only play the audio if it’s paused
        if (audio.paused) {
            audio.play().catch(err => {
                console.log("Playback error:", err);
            });
        }
    });

    // Pause and reset audio when mouse leaves
    hoverElement.addEventListener("mouseleave", function () {
        audio.pause();
        audio.currentTime = 0; // Reset to the beginning
    });
});
