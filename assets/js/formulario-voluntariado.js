document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('volunteerForm');
    const otherInterestCheckbox = document.getElementById('otro');
    const otherInterestInput = document.getElementById('otherInterest');

    // Mostrar/ocultar campo "Otra área de interés"
    otherInterestCheckbox.addEventListener('change', function() {
        document.querySelector('.other-interest').style.display = 
            this.checked ? 'block' : 'none';
    });

    // Validación del formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validar que al menos un área de interés esté seleccionada
        const interests = document.querySelectorAll('input[name="interests"]:checked');
        if (interests.length === 0) {
            alert('Por favor selecciona al menos un área de interés');
            return;
        }

        // Validar que al menos un día esté seleccionado
        const days = document.querySelectorAll('input[name="days"]:checked');
        if (days.length === 0) {
            alert('Por favor selecciona al menos un día disponible');
            return;
        }

        // Validar horas disponibles
        const hours = document.getElementById('hours').value;
        if (hours < 1) {
            alert('Por favor indica cuántas horas puedes dedicar por semana');
            return;
        }

        // Si "Otro" está seleccionado pero no se especifica
        if (otherInterestCheckbox.checked && !otherInterestInput.value.trim()) {
            alert('Por favor especifica tu otra área de interés');
            return;
        }

        // Mostrar datos del formulario (simulación)
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        console.log('Datos del formulario:', data);
        alert('¡Gracias por tu solicitud! Nos pondremos en contacto contigo pronto.');
        form.reset();
    });

    // Inicializar estado del campo "Otra área de interés"
    document.querySelector('.other-interest').style.display = 
        otherInterestCheckbox.checked ? 'block' : 'none';
});