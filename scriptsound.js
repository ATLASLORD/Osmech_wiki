document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.click-sound-button button');
    const clickSound = document.getElementById('click-sound');

    if (!clickSound) {
        console.error('Click sound element not found');
        return;
    }

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();  // Prevent default action of the button inside the anchor
            event.stopPropagation(); // Stop the event from propagating to the anchor

            try {
                clickSound.currentTime = 0; // Rewind to the start
                clickSound.play().then(() => {
                    console.log('Click sound played');
                }).catch(error => {
                    console.error('Error playing click sound:', error);
                });
            } catch (e) {
                console.error('Error playing click sound:', e);
            }
        });
    });
});
