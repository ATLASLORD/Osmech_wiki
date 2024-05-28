document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.hover-sound-button');
    const hoverSound = document.getElementById('hover-sound');
    const clickSound = document.getElementById('click-sound');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            hoverSound.currentTime = 0; // Rewind to the start
            hoverSound.play();
        });

        button.addEventListener('click', () => {
            clickSound.currentTime = 0; // Rewind to the start
            clickSound.play();
        });
    });
});
