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
    const image = document.querySelector(
        'img[alt="hoophouse"]'
      );
    const image2 = document.querySelector(
      'img[alt="phone"]'
    );


    // Check if the toggle state exists in local storage
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    toggle.checked = isDarkMode;
    if (isDarkMode) {
      body.classList.add("dark-mode");
      image.src = "/assets/hoop_house/hoophouse_dark.jpg";
      image2.src="/assets/hoop_house/phone_dark.jpg";
    }

    // Add event listener to toggle switch
    toggle.addEventListener("change", function() {
      // Add toggle records to local storage
      if (this.checked) {
        body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "true");
        image.src = "/assets/hoop_house/hoophouse_dark.jpg";
        image2.src="/assets/hoop_house/phone_dark.jpg";
      } else {
        body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "false");
        image.src = "/assets/hoop_house/hoophouse.jpg";
        image2.src="/assets/hoop_house/phone.jpg";
      }
    });
  });