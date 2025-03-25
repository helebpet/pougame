document.addEventListener("DOMContentLoaded", () => {
    const sound = document.getElementById("backgroundSound");
  
    // Try to play the sound (some browsers need user interaction first)
    function playAudio() {
        sound.play().catch(() => {
            document.body.addEventListener("click", playAudio, { once: true });
        });
    }
  
    playAudio(); // Attempt to play immediately
  });