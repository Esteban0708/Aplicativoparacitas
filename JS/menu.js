document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los enlaces dentro de .menu
    var links = document.querySelectorAll(".menu a");

    links.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();  // Evita la navegación

            // Elimina la clase active de todos los enlaces
            links.forEach(function(innerLink) {
                innerLink.classList.remove("active");
            });

            // Añade la clase active al enlace seleccionado
            this.classList.add("active");

            // Si el enlace es "Inicio", muestra la imagen y borra cualquier contenido anterior
            if (this.href.includes("/HTML/vistaprincipalSUPER.html")) {
                var img = document.querySelector("img");
                if (img) {
                    img.style.display = "block";  // Muestra la imagen
                }
                document.getElementById("main-content").innerHTML = "";  // Borra el contenido anterior
                return;  // Termina el evento aquí
            }

            // Para cualquier otro enlace que no sea "javascript:void(0);"
            if (this.href && !this.href.includes("javascript:void(0);")) {
                fetch(this.href)
                    .then(response => response.text())
                    .then(data => {
                        // Reemplaza el contenido anterior con el nuevo contenido cargado
                        document.getElementById("main-content").innerHTML = data;

                        // Opcional: Puedes ocultar la imagen si así lo deseas para otros enlaces
                        var img = document.querySelector("img");
                        if (img) {
                            img.style.display = "none";
                        }
                    })
                    .catch(error => console.error(error));
            }
        });
    });
});
