// Validación de formulario y mensaje de bienvenida

document.addEventListener('DOMContentLoaded', () => {
    const bienvenidaBtn = document.getElementById('bienvenida-btn');
    const form = document.getElementById('contactForm');

    // Mostrar mensaje de bienvenida
    bienvenidaBtn.addEventListener('click', () => {
        alert('Hola, bienvenido/a a mi página. Espero que disfrutes el contenido.');
    });

    // Validación de formulario
    form?.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name === '' || email === '') {
            alert('Por favor, completa todos los campos.');
            event.preventDefault();
        } else {
            alert('¡Formulario enviado correctamente!');
        }
    });
});
