function toggleMenu() {
    var navUl = document.querySelector('nav ul');
    navUl.classList.toggle('show');
}


let slideIndex = 1;

function showSlides(n) {
    const slides = document.querySelector('.slides');

    if (n > slides.children.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.children.length;
    }

    for (let i = 0; i < slides.children.length; i++) {
        slides.children[i].style.display = 'none';
    }

    slides.children[slideIndex - 1].style.display = 'block';
}

function plusSlides(n) {
    showSlides((slideIndex += n));
}

// Display the first slide initially
showSlides(slideIndex);
let currentIndex = 0;
const sliderContainer = document.getElementById("slider-container");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
let isMouseOverSlider = false;

function showSlide(index) {
    const slider = document.getElementById("image-slider");
    const slideHeight = slides[0].offsetHeight;
    const newPosition = -index * slideHeight;
    slider.style.transform = `translateY(${newPosition}px)`;
    currentIndex = index;
}

function handleScroll(event) {
    if (!isMouseOverSlider) {
        return; // Do nothing if the mouse is not over the slider
    }

    event.preventDefault(); // Prevent default scroll behavior

    const delta = Math.sign(event.deltaY);
    if (delta > 0) {
        currentIndex = (currentIndex + 1) % totalSlides;
    } else {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    }
    showSlide(currentIndex);
}

sliderContainer.addEventListener("wheel", handleScroll);

// Event listeners for mouse entering and leaving the slider area
sliderContainer.addEventListener("mouseenter", () => {
    isMouseOverSlider = true;
});

sliderContainer.addEventListener("mouseleave", () => {
    isMouseOverSlider = false;
});

