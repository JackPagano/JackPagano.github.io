window.onscroll = function() {
  var scrollBtn = document.getElementById('scrollBtn');
  var scrollPosition = window.scrollY;
  var scrollLimit = 20 * getLineHeight(); // modify 10

  if (scrollPosition > scrollLimit) {
    scrollBtn.style.position = 'fixed';
    scrollBtn.style.bottom = '20px'; // Adjust for button placement
    scrollBtn.style.right = '20px';
  } else {
    scrollBtn.style.position = 'static';
  }
}

function getLineHeight() {
  var temp = document.createElement('div');
  temp.style['font-size'] = window.getComputedStyle(document.body)['font-size'];
  temp.innerHTML = 'A';
  document.body.appendChild(temp);
  var lineHeight = temp.offsetHeight;
  document.body.removeChild(temp);
  return lineHeight;
}

