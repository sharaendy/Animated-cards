const slides = document.querySelectorAll('.slide');

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
}

slides.forEach((slide) => {
  slide.addEventListener('click', () => {
    if (slide.classList.contains('active')) {
      clearActiveClasses();
      return;
    }
    clearActiveClasses();
    slide.classList.add('active');
  });
});
