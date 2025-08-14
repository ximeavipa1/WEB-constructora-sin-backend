document.addEventListener("DOMContentLoaded", () => {
    // ------------------------
    // Actualiza automáticamente el año en el footer
    // ------------------------
    document.getElementById('year').textContent = new Date().getFullYear();

    // ------------------------
    // Validación local de formulario (opcional)
    // ------------------------
    const contactForm = document.getElementById('contact-form');
    const btnEnviar = contactForm.querySelector('button[type="submit"]');

    btnEnviar.addEventListener('click', (e) => {
        const nombre = document.getElementById('name').value.trim();
        const correo = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('message').value.trim();

        if (!nombre || !correo || !mensaje) {
            e.preventDefault(); // Evita que se intente enviar
            alert('Por favor completa todos los campos.');
        }
    });

    
    emailjs.init("7LcEfjivieGlE_EZ4");

   
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_41i4fxg', 'template_gmaz2ml', this)
            .then(() => {
                alert('Mensaje enviado correctamente!');
                contactForm.reset();
            })
            .catch((err) => {
                console.error('Error EmailJS:', err);
                alert('Error al enviar: ' + JSON.stringify(err));
            });
    });
});
