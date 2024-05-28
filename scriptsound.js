document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.hover-sound-button');
    const clickSound = document.getElementById('click-sound');

    buttons.forEach((button, index) => {
        // Create a new audio element for each button for the hover sound
        const hoverSound = new Audio('pamove.mp3');
        hoverSound.id = `hover-sound-${index}`;
        button.dataset.hoverSoundId = hoverSound.id;

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
