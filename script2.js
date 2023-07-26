const allBtns = document.querySelectorAll('.post-title button');
const allPosts = document.querySelectorAll('.post-content');

allBtns.forEach(function(btn, index){
    btn.addEventListener('click', function(){
        allPosts.forEach(function(post){
            post.classList.remove('showPost');
            post.classList.remove('animatePost');
            let models = post.querySelectorAll('.model');
            models.forEach(function(model) {
                model.classList.remove('animateModel');
            });
        });
        allBtns.forEach(function(btn){
            btn.classList.remove('activeBtn');
        });
        this.classList.add('activeBtn');
        allPosts[index].classList.add('showPost');

        setTimeout(() => {
            allPosts[index].classList.add('animatePost');
            let models = allPosts[index].querySelectorAll('.model');
            models.forEach(function(model) {
                model.classList.add('animateModel');
            });
        }, 1); // Adjust this delay as needed
    });
});
