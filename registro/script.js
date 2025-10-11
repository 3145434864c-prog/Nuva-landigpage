document.getElementById('btn-registrar').addEventListener('click', function() {
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const contraseña = document.getElementById('contraseña').value.trim();
  const fecha = document.getElementById('fecha').value.trim();
  const mensaje = document.getElementById('mensaje');

  mensaje.style.color = 'red';
  mensaje.textContent = '';

  if (nombre === '') {
    mensaje.textContent = 'Por favor ingresa tu nombre completo.';
    return;
  }

  if (!validarEmail(correo)) {
    mensaje.textContent = 'Ingresa un correo válido.';
    return;
  }

  if (contraseña.length < 6) {
    mensaje.textContent = 'La contraseña debe tener al menos 6 caracteres.';
    return;
  }

  if (fecha === '') {
    mensaje.textContent = 'Selecciona tu fecha de nacimiento.';
    return;
  }

  mensaje.style.color = 'lightgreen';
  mensaje.textContent = '✅ Registro exitoso.';
});

function validarEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
