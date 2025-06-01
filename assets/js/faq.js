document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const pregunta = item.querySelector('.faq-pregunta');
        
        pregunta.addEventListener('click', () => {
            // Cerrar otros items abiertos
            const itemActivo = document.querySelector('.faq-item.activo');
            if (itemActivo && itemActivo !== item) {
                itemActivo.classList.remove('activo');
            }
            
            // Alternar el item actual
            item.classList.toggle('activo');
        });
    });
});