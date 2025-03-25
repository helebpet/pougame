document.addEventListener("DOMContentLoaded", () => {
    const sound = document.getElementById("backgroundSound");

    // Ensure sound is muted first (Safari autoplay restriction workaround)
    sound.muted = true;
    sound.play().then(() => {
        sound.muted = false; // Unmute after autoplay success
    }).catch(() => {
        document.body.addEventListener("click", () => {
            sound.muted = false; 
            sound.play();
        }, { once: true });
    });
});
