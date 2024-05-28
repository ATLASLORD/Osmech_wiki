document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.hover-sound-button');
    const clickSound = document.getElementById('click-sound');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            const hoverSound = new Audio('hover-sound.mp3');
            hoverSound.play();
        });

        button.addEventListener('click', () => {
            clickSound.currentTime = 0; // Rewind to the start
            clickSound.play();
        });
    });
});
