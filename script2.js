document.addEventListener('DOMContentLoaded', function() {
    // Select all navigation links (the <a> elements inside .post-title)
    const navLinks = document.querySelectorAll('.post-title a');
    // Select all post-content sections (these are your content containers)
    const allPosts = document.querySelectorAll('.post-content');
    
    // Function to hide all posts and remove active classes from buttons
    function hideAllPosts() {
      navLinks.forEach(link => {
        const btn = link.querySelector('button');
        if (btn) {
          btn.classList.remove('activeBtn');
        }
      });
      allPosts.forEach(post => {
        post.classList.remove('showPost', 'animatePost');
        const models = post.querySelectorAll('.model');
        models.forEach(model => model.classList.remove('animateModel'));
      });
    }
    
    // Add click event listener to each navigation link
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // prevent default anchor behavior
        const targetSelector = this.getAttribute('data-target'); // e.g. "#spartak"
        if (!targetSelector) {
          console.warn('No data-target defined for this link');
          return;
        }
        const targetPost = document.querySelector(targetSelector);
        if (!targetPost) {
          console.warn('No post found for selector:', targetSelector);
          return;
        }
        // Hide all posts and reset buttons
        hideAllPosts();
        // Mark the clicked link's button as active
        const btn = this.querySelector('button');
        if (btn) {
          btn.classList.add('activeBtn');
        }
        // Show and animate the target post
        targetPost.classList.add('showPost');
        setTimeout(() => {
          targetPost.classList.add('animatePost');
          const models = targetPost.querySelectorAll('.model');
          models.forEach(model => model.classList.add('animateModel'));
        }, 1); // Delay can be adjusted if needed
      });
    });
    
    // On initial load, check if the URL has a hash (e.g. "#spartak")
    const currentHash = window.location.hash;
    if (currentHash) {
      // Look for a navigation link with an href exactly matching the hash
      const targetLink = document.querySelector(`.post-title a[href="${currentHash}"]`);
      if (targetLink) {
        targetLink.click();
      } else {
        console.warn('No navigation link found for hash:', currentHash);
      }
    }
  });
  