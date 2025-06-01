document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formularioTaller');
    const mensajeExito = document.getElementById('mensaje-exito');
    const radioAcompanado = document.querySelectorAll('input[name="acompanado"]');
    const campoAcompanante = document.querySelector('.acompanante-info');

    // Mostrar/ocultar campo de acompañante
    radioAcompanado.forEach(radio => {
        radio.addEventListener('change', function() {
            campoAcompanante.style.display = this.value === 'si' ? 'block' : 'none';
        });
    });

    // Validar y enviar formulario
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validar selección de taller
        const tallerSeleccionado = document.getElementById('taller').value;
        if (!tallerSeleccionado) {
            alert('Por favor selecciona un taller');
            return;
        }

        // Validar fecha
        const fechaSeleccionada = document.getElementById('fecha').value;
        if (!fechaSeleccionada) {
            alert('Por favor selecciona una fecha');
            return;
        }

        // Validar condición médica
        const condicionSeleccionada = document.getElementById('condicion').value;
        if (!condicionSeleccionada) {
            alert('Por favor indica tu condición médica principal');
            return;
        }

        // Validar términos y privacidad
        if (!document.querySelector('input[name="terminos"]:checked') || 
            !document.querySelector('input[name="privacidad"]:checked')) {
            alert('Debes aceptar los términos y la política de privacidad');
            return;
        }

        // Simular envío (en un caso real, aquí iría la llamada AJAX)
        console.log('Formulario enviado:', {
            nombre: formulario.nombre.value,
            email: formulario.email.value,
            taller: formulario.taller.value,
            fecha: formulario.fecha.value,
            condicion: formulario.condicion.value
        });

        // Mostrar mensaje de éxito
        formulario.style.display = 'none';
        mensajeExito.style.display = 'block';
        
        // Desplazarse al mensaje de éxito
        mensajeExito.scrollIntoView({ behavior: 'smooth' });
    });

    // Limpiar formulario
    document.querySelector('.boton-limpiar').addEventListener('click', function() {
        campoAcompanante.style.display = 'none';
    });
});