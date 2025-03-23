document.addEventListener("DOMContentLoaded", function () {
    let minipou = document.querySelector(".minipou");
    let audio = document.getElementById("singing-audio");

    minipou.addEventListener("mouseenter", function () {
        audio.currentTime = 0; // Reset audio to start
        audio.play();
    });

    minipou.addEventListener("mouseleave", function () {
        audio.pause();
        audio.currentTime = 0; // Stop and reset audio
    });
});
