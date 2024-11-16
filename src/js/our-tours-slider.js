const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slides');
const prevBtn = document.querySelector('.arrow-left');
const nextBtn = document.querySelector('.arrow-right');

let currentSlide = 0;

function updateSlider() {
  const slidesToShow = window.innerWidth >= 1024 ? 2 : 1;
  const slideWidth = slides[0].clientWidth;
  slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function showPrevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
}

function showNextSlide() {
  const maxSlide = slides.length - (window.innerWidth >= 1024 ? 2 : 1);
  if (currentSlide < maxSlide) {
    currentSlide++;
    updateSlider();
  }
}

prevBtn.addEventListener('click', showPrevSlide);
nextBtn.addEventListener('click', showNextSlide);

window.addEventListener('resize', updateSlider);
updateSlider();
