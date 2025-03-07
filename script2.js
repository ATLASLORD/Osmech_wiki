document.addEventListener('DOMContentLoaded', function() {
    // Query all navigation buttons within the post-title container
    const allBtns = document.querySelectorAll('.post-title button');
    // Query all post-content sections
    const allPosts = document.querySelectorAll('.post-content');
  
    // Add click event listener to each button
    allBtns.forEach(function(btn, index) {
      btn.addEventListener('click', function() {
        // If the button is already active, hide its post and remove the active state
        if (this.classList.contains('activeBtn')) {
          allPosts[index].classList.remove('showPost', 'animatePost');
          this.classList.remove('activeBtn');
          let models = allPosts[index].querySelectorAll('.model');
          models.forEach(function(model) {
            model.classList.remove('animateModel');
          });
        } else {
          // Otherwise, deactivate all buttons and hide all posts
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
          // Activate the clicked button and show its corresponding post
          this.classList.add('activeBtn');
          allPosts[index].classList.add('showPost');
          setTimeout(() => {
            allPosts[index].classList.add('animatePost');
            let models = allPosts[index].querySelectorAll('.model');
            models.forEach(function(model) {
              model.classList.add('animateModel');
            });
          }, 1); // Adjust delay as needed
        }
      });
    });
  
    // On initial load, check if a URL hash is present (e.g., #spartak)
    const currentHash = window.location.hash;
    if (currentHash) {
      // Look for a link with an href that exactly matches the current hash
      const targetLink = document.querySelector(`a[href="${currentHash}"]`);
      if (targetLink) {
        // Simulate a click on the link to trigger the corresponding button logic
        targetLink.click();
      } else {
        console.warn('No matching link found for hash:', currentHash);
      }
    }
  });
  