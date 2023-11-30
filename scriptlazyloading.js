window.onload = function() {
    var lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(function(img) {
        img.src = img.getAttribute('data-src');
        img.removeAttribute('data-src'); // Optional: remove data-src after setting src
    });
};
