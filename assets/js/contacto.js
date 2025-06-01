document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const formContacto = document.getElementById('formContacto');
    const modal = document.getElementById('modalConfirmacion');
    const closeModal = document.querySelector('.close-modal');
    const aceptarModal = document.getElementById('aceptarModal');
    
    // Validación del formulario
    formContacto.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Resetear mensajes de error
        resetErrorMessages();
        
        // Validar campos
        const nombreValido = validarNombre();
        const emailValido = validarEmail();
        const telefonoValido = validarTelefono();
        const asuntoValido = validarAsunto();
        const mensajeValido = validarMensaje();
        
        // Si todo es válido, mostrar modal
        if (nombreValido && emailValido && telefonoValido && asuntoValido && mensajeValido) {
            mostrarModal();
        }
    });
    
    // Función para resetear mensajes de error
    function resetErrorMessages() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => {
            msg.textContent = '';
        });
        
        // Resetear estilos de los inputs
        const inputs = document.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.style.borderColor = '#ddd';
        });
    }
    
    // Validar nombre
    function validarNombre() {
        const nombre = document.getElementById('nombre');
        const errorNombre = document.getElementById('error-nombre');
        
        if (nombre.value.trim() === '') {
            errorNombre.textContent = 'Por favor ingresa tu nombre';
            nombre.style.borderColor = 'var(--danger)';
            return false;
        }
        
        if (nombre.value.length < 3) {
            errorNombre.textContent = 'El nombre debe tener al menos 3 caracteres';
            nombre.style.borderColor = 'var(--danger)';
            return false;
        }
        
        return true;
    }
    
    // Validar email
    function validarEmail() {
        const email = document.getElementById('email');
        const errorEmail = document.getElementById('error-email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email.value.trim() === '') {
            errorEmail.textContent = 'Por favor ingresa tu email';
            email.style.borderColor = 'var(--danger)';
            return false;
        }
        
        if (!emailRegex.test(email.value)) {
            errorEmail.textContent = 'Por favor ingresa un email válido';
            email.style.borderColor = 'var(--danger)';
            return false;
        }
        
        return true;
    }
    
    // Validar teléfono (opcional)
    function validarTelefono() {
        const telefono = document.getElementById('telefono');
        const errorTelefono = document.getElementById('error-telefono');
        
        // Si el campo está vacío, es válido (es opcional)
        if (telefono.value.trim() === '') {
            return true;
        }
        
        // Validar que solo contenga números
        const telefonoRegex = /^[0-9]+$/;
        if (!telefonoRegex.test(telefono.value)) {
            errorTelefono.textContent = 'El teléfono solo debe contener números';
            telefono.style.borderColor = 'var(--danger)';
            return false;
        }
        
        // Validar longitud mínima
        if (telefono.value.length < 9) {
            errorTelefono.textContent = 'El teléfono debe tener al menos 9 dígitos';
            telefono.style.borderColor = 'var(--danger)';
            return false;
        }
        
        return true;
    }
    
    // Validar asunto
    function validarAsunto() {
        const asunto = document.getElementById('asunto');
        const errorAsunto = document.getElementById('error-asunto');
        
        if (asunto.value === '') {
            errorAsunto.textContent = 'Por favor selecciona un asunto';
            asunto.style.borderColor = 'var(--danger)';
            return false;
        }
        
        return true;
    }
    
    // Validar mensaje
    function validarMensaje() {
        const mensaje = document.getElementById('mensaje');
        const errorMensaje = document.getElementById('error-mensaje');
        
        if (mensaje.value.trim() === '') {
            errorMensaje.textContent = 'Por favor escribe tu mensaje';
            mensaje.style.borderColor = 'var(--danger)';
            return false;
        }
        
        if (mensaje.value.length < 10) {
            errorMensaje.textContent = 'El mensaje debe tener al menos 10 caracteres';
            mensaje.style.borderColor = 'var(--danger)';
            return false;
        }
        
        return true;
    }
    
    // Mostrar modal
    function mostrarModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Evitar scroll
    }
    
    // Cerrar modal al hacer click en la X
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaurar scroll
        formContacto.reset(); // Limpiar formulario
    });
    
    // Cerrar modal al hacer click en Aceptar
    aceptarModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaurar scroll
        formContacto.reset(); // Limpiar formulario
    });
    
    // Cerrar modal al hacer click fuera del contenido
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restaurar scroll
            formContacto.reset(); // Limpiar formulario
        }
    });
    
    // Validación en tiempo real para algunos campos
    document.getElementById('nombre').addEventListener('input', validarNombre);
    document.getElementById('email').addEventListener('input', validarEmail);
    document.getElementById('telefono').addEventListener('input', validarTelefono);
    document.getElementById('mensaje').addEventListener('input', validarMensaje);
}); 