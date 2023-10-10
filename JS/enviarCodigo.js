// Escuchar el evento 'submit' del formulario
document.getElementById('formularioRecuperacion').addEventListener('submit', function(e) {
    e.preventDefault();  // Evitar el envío estándar del formulario

    const phoneNumber = document.getElementById('celular').value;
 // Verificar si el número de teléfono está vacío
    if (!phoneNumber.trim()) {
        alert('Por favor, ingresa tu número de celular.');
        return;
    }
    // Enviar la solicitud POST al servidor
    fetch('http://127.0.0.1:5000/sendCode', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phoneNumber: phoneNumber })
    })
    .then(response => {
        // Verificar si la respuesta es exitosa
        if (!response.ok) {
            throw new Error(`Error del servidor: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(`Código recibido: ${data.code}`);
        window.location.href = "/HTML/IngresarCodigo.html";
    })
    .catch(error => {
        console.error('Hubo un problema con la operación fetch:', error.message);
    });
});
