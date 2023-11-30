const allBtns = document.querySelectorAll('.post-title button');
const allPosts = document.querySelectorAll('.post-content');

allBtns.forEach(function(btn, index) {
    btn.addEventListener('click', function() {
        // Check if the clicked button is already active
        if (this.classList.contains('activeBtn')) {
            // Hide the post and deactivate the button
            allPosts[index].classList.remove('showPost', 'animatePost');
            this.classList.remove('activeBtn');
            let models = allPosts[index].querySelectorAll('.model');
            models.forEach(function(model) {
                model.classList.remove('animateModel');
            });
        } else {
            // Deactivate all buttons and hide all posts
            allBtns.forEach(function(btn) {
                btn.classList.remove('activeBtn');
            });
            allPosts.forEach(function(post) {
                post.classList.remove('showPost', 'animatePost');
                let models = post.querySelectorAll('.model');
                models.forEach(function(model) {
                    model.classList.remove('animateModel');
                });
            });
            // Activate the clicked button and show the post
            this.classList.add('activeBtn');
            allPosts[index].classList.add('showPost');
            setTimeout(() => {
                allPosts[index].classList.add('animatePost');
                let models = allPosts[index].querySelectorAll('.model');
                models.forEach(function(model) {
                    model.classList.add('animateModel');
                });
            }, 1); // Adjust this delay as needed
        }
    });
});
