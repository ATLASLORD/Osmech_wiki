function playSound() {
    var sound = document.getElementById("click-sound");
    sound.play();
}

function handleButtonClick(event, buttonId) {
    event.preventDefault(); // Prevent the default anchor behavior
    var button = document.getElementById(buttonId);
    if (button) {
        playSound(); // Play the sound
        button.click(); // Simulate the button click
    }
}

function handleFragment() {
    var fragment = location.hash.substring(1); // Get the fragment identifier without the "#"
    if (fragment) {
        var button = document.getElementById(fragment);
        if (button) {
            button.click(); // Programmatically click the button
        }
    }
}

window.onload = handleFragment; // Handle fragment on page load
window.onhashchange = handleFragment; // Handle fragment change without reloading
