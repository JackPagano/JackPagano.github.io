

/*------------------------------- scripts.js -------------------------------*/
document.addEventListener("DOMContentLoaded", function() {
  console.log
  const body = document.body;

  // Function to set the active page in the navbar
  function setActiveLink() {
    const currentPageUrl = window.location.href;
    const navLinks = document.querySelectorAll("#navbar ul li a");

    navLinks.forEach((link) => {
      if (link.href === currentPageUrl) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
  
  // Theme Switch Toggle
  const switchTheme = document.querySelector('#checkbox');
  function toggleTheme() {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
    const theme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', theme);
  }

  // Restore theme preference if set
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    body.classList.add(storedTheme);
    switchTheme.checked = storedTheme === 'dark-theme';
  }

  // Open/close the dropdown menu
  const hamburger = document.getElementById("hamburger");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const closeIcon = document.getElementById("close-icon");
  const dropdownContainer = document.getElementById("dropdown-container");
  hamburger.addEventListener("click", function() {
    this.classList.toggle("open");
    dropdownContainer.classList.toggle("open");

    if (this.classList.contains("open")) {
      hamburgerIcon.style.display = "none";
      closeIcon.style.display = "block";
    } else {
      hamburgerIcon.style.display = "block";
      closeIcon.style.display = "none";
    }
  });
  
  // Scroll Up Button
  const scrollButton = document.getElementById('scrollButton');
  function updateScrollButtonVisibility() {
    if (window.scrollY >= 300) {
      scrollButton.style.display = 'block';
      scrollButton.disabled = false;
    } else {
      scrollButton.style.display = 'none';
      scrollButton.disabled = true;
    }
  }

  setActiveLink(); // Initial update of active page
  updateScrollButtonVisibility(); // Initial update of scroll button visibility

  window.addEventListener('scroll', updateScrollButtonVisibility);
  switchTheme.addEventListener('change', toggleTheme);
});


// // Send Email Button (Work in Progress)
// document.getElementById("contact-form").addEventListener("submit", function(event) {
//   event.preventDefault();
//   const email = document.getElementById("email").value;
//   const message = document.getElementById("message").value;
//   // Perform an AJAX request to the server-side script and pass the email and body data
//   // Use a library like Axios or fetch to send the data to a server-side script for email processing
// });