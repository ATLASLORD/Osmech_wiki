function playSound() {
    var sound = document.getElementById("click-sound");
    sound.play();
}

function handleButtonClick(event, buttonId) {
    event.preventDefault(); // Prevent the default anchor behavior
    history.pushState(null, '', `#${buttonId}`); // Update the URL without scrolling
    var button = document.getElementById(buttonId);
    if (button) {
        playSound(); // Play the sound
        button.focus(); // Focus on the button to ensure it gets clicked without scrolling
    }
}

function handleFragment() {
    var fragment = location.hash.substring(1); // Get the fragment identifier without the "#"
    if (fragment) {
        var button = document.getElementById(fragment);
        if (button) {
            button.focus(); // Focus on the button to ensure it gets clicked without scrolling
        }
    }
}

window.onload = handleFragment; // Handle fragment on page load
window.onhashchange = handleFragment; // Handle fragment change without reloading
