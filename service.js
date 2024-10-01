
function toggleMenu() {
    var navUl = document.querySelector('nav ul');
    navUl.classList.toggle('show');
}

  
let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    const texts = document.getElementsByClassName("text");

    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        texts[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
    texts[slideIndex].style.display = "block";
}
