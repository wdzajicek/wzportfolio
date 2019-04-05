document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() { // Fade-out the header image on scrolling down:
    const verticalScrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const pixelMath = 100+300*verticalScrollPosition/windowHeight;
    const siteHeader = document.getElementById('header');
    siteHeader.style.filter = 'contrast(' + pixelMath + '%)'
  });
});
