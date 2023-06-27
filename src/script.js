// To scroll back to top when clicked
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

  // To check for dark mode on loading different pages
  document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.getElementById("toggle");
    const body = document.body;

    // Check if the toggle state exists in local storage
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    toggle.checked = isDarkMode;
    if (isDarkMode) {
      body.classList.add("dark-mode");
    }

    // Add event listener to toggle switch
    toggle.addEventListener("change", function() {
      // Add toggle records to local storage
      if (this.checked) {
        body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "true");
      } else {
        body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "false");
      }
    });
  });