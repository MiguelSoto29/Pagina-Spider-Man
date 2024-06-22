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
            const regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/; // Expresión regular para solo letras y espacios

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
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correo electrónico

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

            // Envío exitoso si el formulario es válido
            if (formIsValid) {
                alert('Sugerencia enviada con éxito.');
                formulario.reset(); // Reiniciar el formulario
            }
        });
}
});