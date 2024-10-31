$(document).ready(function() {
  // Initialize Bootstrap scrollspy
   $('body').scrollspy({ target: '#main-bar', offset: 50 });
	
  jQuery.extend(verge);

 var isScrolling = false; // Flag to track scrolling state

    // Smooth scrolling of viewport to target
    $('a[href^="#"]').click(function(event) {
        event.preventDefault();
        if (!isScrolling) { // Check if not already scrolling
            isScrolling = true; // Set scrolling flag to true
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top - 50
            }, 900, function() {
                isScrolling = false; // Reset scrolling flag when animation completes
            });
        }
    });

 // Button click event for scrolling to a different section
    $('#down').click(function() {
        $('html,body').animate({
            scrollTop: $('#section-projects').offset().top - 50 // Change the target section as needed
        }, 900);
    });
	
  var currentTime = new Date();
  var year = currentTime.getFullYear();
	
	
  $(".copyright").append("<span>© " + year +  " Christina Barbosa. All rights reserved.</span>");


  // turn on bootstrap tooltips
  $('[data-toggle="tooltip"]').tooltip();


});
