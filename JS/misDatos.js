console.log("archivo JS cargado");
function mostrarModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        console.log('El botón ha sido presionado');
    }
}

function cerrarModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Cerrar el modal al hacer clic fuera del contenido del modal
document.addEventListener('click', function(event) {
    const modal = document.getElementById('modalEdicionContra');
    if (modal && modal.style.display === 'flex') {
        const modalContent = modal.querySelector('.modal-content');
        if (!modalContent.contains(event.target)) {
            cerrarModal('modalEdicionContra');
        }
    }
});
