

// scripts.js
document.addEventListener("DOMContentLoaded", function() {
  console.log
  const scrollButton = document.getElementById('scrollButton');
  const switchTheme = document.querySelector('#checkbox');
  const body = document.body;

  // // Send Email Button (Work in Progress)
  // document.getElementById("contact-form").addEventListener("submit", function(event) {
  //   event.preventDefault();
  //   const email = document.getElementById("email").value;
  //   const message = document.getElementById("message").value;
  //   // Perform an AJAX request to the server-side script and pass the email and body data
  //   // Use a library like Axios or fetch to send the data to a server-side script for email processing
  // });

  // Function to set the active link based on the current page URL
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

  // Set the active link on page load
  setActiveLink();
  
  // Theme Switch Button
  function toggleTheme() {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
    const theme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', theme);
  }
  
  switchTheme.addEventListener('change', toggleTheme);
  
  // Scroll Up Button
  function updateScrollButtonVisibility() {
    if (window.scrollY >= 300) {
      scrollButton.style.display = 'block';
      scrollButton.disabled = false;
    } else {
      scrollButton.style.display = 'none';
      scrollButton.disabled = true;
    }
  }
  
  window.addEventListener('scroll', updateScrollButtonVisibility);
  
  // Restore theme preference if set
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    body.classList.add(storedTheme);
    switchTheme.checked = storedTheme === 'dark-theme';
  } else {
    // Set default theme based on system preference
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-theme' : 'light-theme';
    body.classList.add(systemTheme);
    switchTheme.checked = systemTheme === 'dark-theme';
    localStorage.setItem('theme', systemTheme);
  }
  
  // Initial update of scroll button visibility
  updateScrollButtonVisibility();

  const hamburger = document.getElementById("hamburger");
  const dropdownContainer = document.getElementById("dropdown-container");
  hamburger.addEventListener("click", function() {
    this.classList.toggle("open");
    dropdownContainer.classList.toggle("open");
  });

  const dropdownLinks = document.querySelectorAll("#dropdown-content li a");
  dropdownLinks.forEach((link) => {
    link.addEventListener("click", function() {
      dropdownContainer.classList.remove("open");
      hamburger.classList.remove("open");
    });
});
});