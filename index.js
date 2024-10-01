function openLightbox(imageSrc) {
    document.getElementById('lightbox-img').src = imageSrc;
    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}


function toggleMenu() {
    var navUl = document.querySelector('nav ul');
    navUl.classList.toggle('show');
}