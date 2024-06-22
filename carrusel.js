document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.anterior');
    const nextButton = document.querySelector('.siguiente');
    const carouselImages = document.querySelector('.carrusel-imagenes');
    const images = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showImage(index) {
        carouselImages.style.transform = `translateX(${-index * 100}%)`;
    }
    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });

    setInterval(function() {
        nextButton.click();
    }, 4000); //4 segundos
});

