document.addEventListener("DOMContentLoaded", function() {
    const lamp = document.querySelector('.lamp');
    if (!lamp) {
      console.error("Lamp element not found.");
      return;
    }
    console.log("Lamp element found:", lamp);
  
    // Get the original src; if not set, default to '../img/lamp.png'
    const originalSrc = lamp.getAttribute('src') || '../img/lamp.png';
    const hoverSrc = '../img/lamphover.png';
  
    // Use a fixed threshold in pixels for testing
    const threshold = 3; // 3 pixels from the center
  
    lamp.addEventListener('mousemove', function(event) {
      const rect = lamp.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
  
      const distanceX = Math.abs(event.clientX - centerX);
      const distanceY = Math.abs(event.clientY - centerY);
      console.log(`distanceX: ${distanceX}, distanceY: ${distanceY}`);
  
      if (distanceX < threshold && distanceY < threshold) {
        if (lamp.src !== hoverSrc) {
          lamp.src = hoverSrc;
          console.log("Hover activated: switched to hover image.");
        }
      } else {
        if (lamp.src !== originalSrc) {
          lamp.src = originalSrc;
          console.log("Hover deactivated: reverted to original image.");
        }
      }
    });
  
    lamp.addEventListener('mouseleave', function() {
      lamp.src = originalSrc;
      console.log("Mouse left: reverted to original image.");
    });
  });
  