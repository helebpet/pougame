const lamp = document.querySelector('.lamp');

lamp.addEventListener('mousemove', (event) => {
    const rect = lamp.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = Math.abs(event.clientX - centerX);
    const distanceY = Math.abs(event.clientY - centerY);

    const strictThresholdX = rect.width * 0.001;  
    const strictThresholdY = rect.height * 0.001; 

    if (distanceX < strictThresholdX && distanceY < strictThresholdY) {
        lamp.classList.add('hovered');
    } else {
        lamp.classList.remove('hovered');
    }
});

lamp.addEventListener('mouseleave', () => {
    lamp.classList.remove('hovered');
});
