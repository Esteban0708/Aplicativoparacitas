function mostrarHorasDescanso() {
  var checkbox = document.getElementById("Si");
  var contenidoAMostrar = document.getElementById("contenidoAMostrar");

  if (checkbox.checked) {
      contenidoAMostrar.style.display = "block";
  } else {
      contenidoAMostrar.style.display = "none";
  }
}