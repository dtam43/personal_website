// Code to scroll back to top when clicked
document.addEventListener("DOMContentLoaded", function() {
    var backToTopLink = document.querySelector(".back-to-top a");

    backToTopLink.addEventListener("click", function(event) {
      event.preventDefault();
      var scrollToTop = window.setInterval(function() {
        var currentPosition = window.pageYOffset;
        if (currentPosition > 0) {
          window.scrollTo(0, currentPosition - 50);
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 16);
    });
  });
