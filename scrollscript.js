window.addEventListener('scroll', function() {
    var scrollButton = document.getElementById('scrollButton');
    if (window.scrollY < 300) { // enable button if user scrolls down 20 lines (approx. 400px)
      scrollButton.style.display = 'none';
      scrollButton.disabled = true;
    } else { // disable button if user scrolls less than 20 lines
      scrollButton.style.display = 'block';
      scrollButton.disabled = false;
    }
});
