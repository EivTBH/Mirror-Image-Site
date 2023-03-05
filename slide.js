

let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

showSlides();


function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 5000); // Change image every 5 seconds
}


