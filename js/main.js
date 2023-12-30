var lastScrollTop = 0;

window.addEventListener('scroll', function () {
  var nav = document.querySelector('nav');
  var scrolled = window.scrollY;

  if (scrolled > lastScrollTop) {
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');
  }

  lastScrollTop = scrolled <= 0 ? 0 : scrolled;
});


document.addEventListener("DOMContentLoaded", function () {
    var overlayGrid = document.querySelector('.overlay-grid');

    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        var triggerPosition = overlayGrid.offsetTop - window.innerHeight / 2;

        if (scrollPosition > triggerPosition) {
            overlayGrid.classList.add('show-overlay');
            overlayGrid.style.left = '10%';
        } else {
            overlayGrid.classList.remove('show-overlay');
            overlayGrid.style.left = '-100%';
        }
    });
});

function selectSlide(element) {
    // Remove 'clicked' class from all slides
    document.querySelectorAll('.slide_div').forEach(function (slide) {
      slide.classList.remove('clicked');
    });

    // Add 'clicked' class to the selected slide
    element.classList.add('clicked');
}