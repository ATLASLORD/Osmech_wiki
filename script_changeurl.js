$(document).ready(function() {
    function handleFragment() {
        var fragment = window.location.hash.substring(1); // Get the fragment identifier without the "#"
        if (fragment) {
            var $target = $('[data-target="#' + fragment + '"]');
            if ($target.length > 0) {
                loadContent($target);
            }
        }
    }

    function loadContent($element) {
        var targetId = $element.attr('data-target');
        $(targetId).focus(); // Focus on the target element to simulate the click without scrolling
        // You can add additional content loading logic here if necessary
    }

    // Bind click event
    $('.js-content').on('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        loadContent($(this));
    });

    // Handle URL fragment on page load
    handleFragment();
    // Handle URL fragment change
    $(window).on('hashchange', handleFragment);
});
