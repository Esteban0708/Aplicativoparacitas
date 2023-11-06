const botones = document.querySelectorAll('.boton');
const contenedorDatos = document.querySelector('.contenedorDatos');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        contenedorDatos.style.display = 'block';
    });
});
