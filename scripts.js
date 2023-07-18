// scripts.js
document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.getElementById('scrollButton');
  const switchTheme = document.querySelector('#checkbox');
  const body = document.body;
  
  // Contact Me Button
  document.getElementById("contact").addEventListener("click", function(event) {
    event.preventDefault();
    window.open("mailto:Pags12189@gmail.com", "_blank");
  });
  
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
  }
  
  // Initial update of scroll button visibility
  updateScrollButtonVisibility();
});
  
      

  