document.addEventListener('DOMContentLoaded', (event) => {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("carrusel-item");
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].classList.add("active");
        setTimeout(showSlides, 4000); // Cambia imagen cada 4 segundos
    }

    function plusSlides(n) {
        slideIndex += n - 1;
        showSlides();
    }
});