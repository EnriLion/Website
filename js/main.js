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
    const animatedBusinessText = document.getElementById("animated-business-text");
    let lastScrollTop = 0;

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

    // function playAnimation() {
    //     animatedBusinessText.classList.add("visible");
    // }

    // setTimeout(playAnimation, 300);

    function checkScrollDirection() {
        const currentScrollTop = window.scrollY;

        if (currentScrollTop > lastScrollTop) {
            // Scrolling down, hide the text
            animatedBusinessText.classList.remove("visible");
        } else {
            // Scrolling up, show the text
            animatedBusinessText.classList.add("visible");
        }

        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Ensure negative values are set to 0
    }

    function playAnimation() {
        animatedBusinessText.classList.add("visible");
    }

    // Play animation after a short delay (e.g., 500 milliseconds)
    setTimeout(playAnimation, 500);

    // Check scroll direction on scroll events
    window.addEventListener("scroll", checkScrollDirection);
});

// function selectSlide(element) {
//     // Remove 'clicked' class from all slides
//     document.querySelectorAll('.slide_div').forEach(function (slide) {
//       slide.classList.remove('clicked');
//     });

//     // Add 'clicked' class to the selected slide
//     element.classList.add('clicked');
// }

function selectSlide(element) {
  // Remove 'clicked' class from all slides
  document.querySelectorAll('.slide_div').forEach(function (slide) {
    slide.classList.remove('clicked');
  });

  // Add 'clicked' class to the selected slide
  element.classList.add('clicked');

  // Move the selected slide to the center
  const container = document.querySelector('.imgContainer');
  const selectedSlide = element.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  const offset = (containerRect.width - selectedSlide.width) / 2 - selectedSlide.left + containerRect.left;
  container.style.transform = `translateX(${offset}px)`;
}
