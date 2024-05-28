document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.click-sound-button');
    const clickSound = document.getElementById('click-sound');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            try {
                clickSound.currentTime = 0; // Rewind to the start
                clickSound.play();
            } catch (e) {
                console.error('Error playing click sound:', e);
            }
        });
    });
});
