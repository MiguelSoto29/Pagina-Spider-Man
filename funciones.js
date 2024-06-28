

document.addEventListener('DOMContentLoaded', function() {
    const suggestionLink = document.querySelector('.suggestion-link');
    const footerForm = document.querySelector('.footer-form');

    if (suggestionLink && footerForm) {
        suggestionLink.addEventListener('click', function(event) {
            event.preventDefault();
            footerForm.style.display = (footerForm.style.display === 'block') ? 'none' : 'block';
            footerForm.scrollIntoView({ behavior: 'smooth' });
        });
    }

    const btnBorrarUltimo = document.querySelector('.btn-borrar-ultimo');
    const btnBorrarTodo = document.querySelector('.btn-borrar-todo');
    const formulario = document.querySelector('form');

    if (btnBorrarUltimo) {
        btnBorrarUltimo.addEventListener('click', function() {
            const campos = formulario.querySelectorAll('input[type="text"], input[type="email"], textarea');
            for (let i = campos.length - 1; i >= 0; i--) {
                if (campos[i].value !== '') {
                    campos[i].value = '';
                    break;
                }
            }
        });
    }

    if (btnBorrarTodo) {
        btnBorrarTodo.addEventListener('click', function() {
            const campos = formulario.querySelectorAll('input[type="text"], input[type="email"], textarea');
            campos.forEach(campo => campo.value = '');
        });
    }

    const enviarFormulario = document.querySelector('input[type="submit"]');
    if (enviarFormulario) {
        enviarFormulario.addEventListener('click', function(event) {
            event.preventDefault();
            let formIsValid = true;

            // Limpiar mensajes de error anteriores
            document.getElementById('nombre-error').textContent = '';
            document.getElementById('apellido-error').textContent = '';
            document.getElementById('email-error').textContent = '';
            document.getElementById('sugerencia-error').textContent = '';

            // Validación de nombre sin números
            const nombreInput = formulario.querySelector('input[name="nombre"]');
            const nombre = nombreInput.value.trim();
            const regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/; 

            if (nombre === '') {
                document.getElementById('nombre-error').textContent = 'El nombre no puede estar vacío.';
                formIsValid = false;
            } else if (!regex.test(nombre)) {
                document.getElementById('nombre-error').textContent = 'El nombre no debe contener números ni caracteres especiales.';
                formIsValid = false;
            }

            // Validación de apellido sin números
            const apellidoInput = formulario.querySelector('input[name="apellido"]');
            const apellido = apellidoInput.value.trim();

            if (apellido === '') {
                document.getElementById('apellido-error').textContent = 'El apellido no puede estar vacío.';
                formIsValid = false;
            } else if (!regex.test(apellido)) {
                document.getElementById('apellido-error').textContent = 'El apellido no debe contener números ni caracteres especiales.';
                formIsValid = false;
            }

            // Validación de correo electrónico
            const emailInput = formulario.querySelector('input[name="email"]');
            const email = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

            if (email === '') {
                document.getElementById('email-error').textContent = 'El correo electrónico no puede estar vacío.';
                formIsValid = false;
            } else if (!emailRegex.test(email)) {
                document.getElementById('email-error').textContent = 'Ingrese un correo electrónico válido.';
                formIsValid = false;
            }

            // Validación de sugerencia no vacía
            const sugerenciaInput = formulario.querySelector('textarea[name="sugerencia"]');
            const sugerencia = sugerenciaInput.value.trim();

            if (sugerencia === '') {
                document.getElementById('sugerencia-error').textContent = 'La sugerencia no puede estar vacía.';
                formIsValid = false;
            }

            if (formIsValid) {
                alert('Sugerencia enviada con éxito. Muchas gracias por su ayuda.');
                formulario.reset(); // Reiniciar el formulario
            }
        });
}
});
//Carrusel de Versiones
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
        setTimeout(showSlides, 4000); 
    }

    function plusSlides(n) {
        slideIndex += n - 1;
        showSlides();
    }
});
//Carrusel de Imagenes
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


