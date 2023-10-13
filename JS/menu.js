// Función para inicializar los eventos de la vista "Mis Datos"
function initializeMisDatos() {
    // Aquí pondrás el código para inicializar los eventos 
    // de los botones "Editar" y otros elementos interactivos.
    
    const botonEditar = document.getElementById("botonEditar");
    const modalEdicionContra = document.getElementById("modalEdicionContra");

    botonEditar.addEventListener("click", function() {
        modalEdicionContra.style.display = "block";
    });

    // Puedes agregar otros eventos aquí si es necesario...
}

// Función para cerrar el modal
function cerrarModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "none";
}

// Lógica para manejar los clics en los ítems del menú y cargar contenido dinámicamente
window.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".menu a");

    links.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            links.forEach(innerLink => innerLink.classList.remove("active"));
            this.classList.add("active");

            if (this.href.includes("/HTML/vistaprincipalSUPER.html")) {
                const img = document.querySelector("img");
                if (img) img.style.display = "block";
                document.getElementById("main-content").innerHTML = "";
                return;
            }

            if (this.href && !this.href.includes("javascript:void(0);")) {
                fetch(this.href)
                    .then(response => response.text())
                    .then(data => {
                        document.getElementById("main-content").innerHTML = data;

                        const img = document.querySelector("img");
                        if (img) img.style.display = "none";

                        if (this.href.includes("/HTML/MisDatos.html")) {
                            initializeMisDatos();
                        }
                    })
                    .catch(error => console.error(error));
            }
        });
    });
});
