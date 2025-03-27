document.addEventListener("DOMContentLoaded", function () {
    const hoverElement = document.querySelector(".hoverElement");
    const audio = document.getElementById("backgroundSound");

    // Ensure the audio element is paused at the beginning
    audio.pause();
    audio.currentTime = 0;

    hoverElement.addEventListener("mouseenter", function () {
        // Play the audio only if it is paused
        if (audio.paused) {
            audio.play().catch(err => console.log("Playback error:", err));
        }
    });

    hoverElement.addEventListener("mouseleave", function () {
        // Pause the audio and reset to the beginning when mouse leaves
        audio.pause();
        audio.currentTime = 0;
    });
});
