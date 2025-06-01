document.addEventListener('DOMContentLoaded', function() {
    // Mostrar/ocultar formulario de cita online
    const btnOnline = document.getElementById('btnOnline');
    const formularioCita = document.getElementById('formularioCita');
    
    btnOnline.addEventListener('click', function() {
        formularioCita.style.display = 'block';
        formularioCita.scrollIntoView({ behavior: 'smooth' });
    });

    // Manejar envío del formulario
    const citaForm = document.getElementById('citaForm');
    const modal = document.getElementById('confirmacionCita');
    const mensajeConfirmacion = document.getElementById('mensajeConfirmacion');
    const closeModal = document.querySelector('.close-modal');
    const btnNuevaCita = document.getElementById('btnNuevaCita');
    const btnImprimir = document.getElementById('btnImprimir');

    citaForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validar fecha no sea anterior a hoy
        const fechaSeleccionada = new Date(document.getElementById('fecha').value);
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        
        if (fechaSeleccionada < hoy) {
            alert('Por favor seleccione una fecha válida (hoy o en el futuro)');
            return;
        }
        
        // Simular envío (en producción sería una llamada AJAX)
        const tipoCita = document.getElementById('tipoCita').options[document.getElementById('tipoCita').selectedIndex].text;
        const fecha = document.getElementById('fecha').value;
        const hora = document.getElementById('hora').options[document.getElementById('hora').selectedIndex].text;
        
        mensajeConfirmacion.innerHTML = `
            Su cita de <strong>${tipoCita}</strong> ha sido agendada para el <strong>${formatFecha(fecha)}</strong> 
            a las <strong>${hora}</strong>. Recibirá un correo de confirmación con los detalles.
        `;
        
        // Mostrar modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Limpiar formulario
        citaForm.reset();
    });

    // Cerrar modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Agendar nueva cita
    btnNuevaCita.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        formularioCita.scrollIntoView({ behavior: 'smooth' });
    });

    // Imprimir comprobante (simulación)
    btnImprimir.addEventListener('click', function() {
        alert('Función de impresión simulada. En producción se generaría un PDF.');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Formatear fecha para mostrar
    function formatFecha(fechaStr) {
        const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const fecha = new Date(fechaStr);
        return fecha.toLocaleDateString('es-ES', opciones);
    }

    // Cargar fechas disponibles (simulación)
    const fechaInput = document.getElementById('fecha');
    const hoy = new Date();
    const fechaMin = new Date(hoy);
    const fechaMax = new Date(hoy);
    
    fechaMin.setDate(hoy.getDate() + 1); // Mañana como fecha mínima
    fechaMax.setDate(hoy.getDate() + 30); // 30 días en el futuro como fecha máxima
    
    fechaInput.min = formatDateInput(fechaMin);
    fechaInput.max = formatDateInput(fechaMax);
    fechaInput.value = formatDateInput(fechaMin); // Valor por defecto: mañana

    function formatDateInput(date) {
        return date.toISOString().split('T')[0];
    }

    // Mostrar/ocultar campos según tipo de cita
    const tipoCitaSelect = document.getElementById('tipoCita');
    const motivoConsulta = document.getElementById('motivo');
    
    tipoCitaSelect.addEventListener('change', function() {
        if (this.value === 'examenes' || this.value === 'grupo') {
            motivoConsulta.placeholder = "Por favor, especifique detalles adicionales...";
        } else {
            motivoConsulta.placeholder = "Describa brevemente el motivo de su consulta (opcional)";
        }
    });
});