
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlide].classList.add('active');
}

function showSlide(slideIndex) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[slideIndex].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
  updateDots();
}

slides[currentSlide].classList.add('active');
updateDots();

setInterval(nextSlide, 3000);