document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.click-sound-button');
    const clickSound = document.getElementById('click-sound');

    if (!clickSound) {
        console.error('Click sound element not found');
        return;
    }

    buttons.forEach(anchor => {
        const button = anchor.querySelector('button');

        if (button) {
            button.addEventListener('click', (event) => {
                event.preventDefault();  // Prevent default action of the button inside the anchor
                event.stopPropagation(); // Stop the event from propagating to the anchor

                // Play click sound
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

                // Handle data-target
                const targetSelector = anchor.getAttribute('data-target');
                if (targetSelector) {
                    const targetElement = document.querySelector(targetSelector);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    } else {
                        console.error('Target element not found for selector:', targetSelector);
                    }
                } else {
                    console.error('No data-target attribute found on anchor');
                }
            });
        } else {
            console.error('Button not found inside anchor');
        }
    });
});
