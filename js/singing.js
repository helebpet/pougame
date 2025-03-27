// JavaScript for playing audio on hover
const image = document.querySelector('.minipousinging');
const audio = document.getElementById('backgroundSound');

// Play audio when the mouse hovers over the image
image.addEventListener('mouseenter', () => {
    audio.play();
    audio.muted = false;  // Ensure the audio is unmuted
});

// Pause audio when the mouse leaves the image
image.addEventListener('mouseleave', () => {
    audio.pause();
    audio.currentTime = 0; // Reset the audio to the beginning
});
