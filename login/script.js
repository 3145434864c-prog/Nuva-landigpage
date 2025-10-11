// Usuario de prueba (solo para validación)
const usuarioRegistrado = {
    email: "usuario@nuva.com",
    password: "123456"
};

function iniciarSesion() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Referencia al párrafo de mensajes
    const mensaje = document.getElementById('mensaje');
    mensaje.innerText = '';
    mensaje.style.color = 'red'; // por defecto errores

    // Validaciones
    if (email === '' || password === '') {
        mensaje.innerText = 'Por favor completa todos los campos.';
        return;
    }

    if (!validarEmail(email)) {
        mensaje.innerText = 'Por favor ingresa un email válido.';
        return;
    }

    // Verificación de usuario (solo local)
    if (email === usuarioRegistrado.email && password === usuarioRegistrado.password) {
        mensaje.style.color = 'green';
        mensaje.innerText = '¡Inicio de sesión válido!';
    } else {
        mensaje.innerText = 'Email o contraseña incorrectos.';
    }
}

// Validación simple de email
function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Obtener elementos
const modal = document.getElementById('modal');
const btnOlvidaste = document.querySelector('a[href="#"]'); // tu link de "olvidaste"
const spanClose = document.querySelector('.close');

// Abrir modal
btnOlvidaste.addEventListener('click', function(e) {
    e.preventDefault(); // evita que navegue
    modal.style.display = 'block';
});

// Cerrar modal al hacer clic en "x"
spanClose.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

const btnRecuperar = document.getElementById('btn-recuperar');
const inputRecuperar = document.getElementById('email-recuperar');
const mensajeRecuperar = document.getElementById('mensaje-recuperar');

// Validación simple de email
function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

btnRecuperar.addEventListener('click', function() {
    const email = inputRecuperar.value.trim();

    if (email === '') {
        mensajeRecuperar.textContent = 'Por favor ingresa tu correo electrónico.';
        return;
    }

    if (!validarEmail(email)) {
        mensajeRecuperar.textContent = 'Ingresa un correo válido.';
        return;
    }

    // Si pasa las validaciones
    mensajeRecuperar.style.color = 'lightgreen';
    mensajeRecuperar.textContent = 'Se ha enviado un correo con instrucciones de recuperación.';
    // Aquí podrías integrar la lógica real de envío de correo
});

const pasoCorreo = document.getElementById('paso-correo');
const pasoCodigo = document.getElementById('paso-codigo');
const inputCodigo = document.getElementById('codigo-recuperar');
const btnValidarCodigo = document.getElementById('btn-validar-codigo');
const mensajeCodigo = document.getElementById('mensaje-codigo');

// Código simulado para pruebas
const codigoSimulado = "123456";

btnRecuperar.addEventListener('click', function() {
    const email = inputRecuperar.value.trim();

    if (email === '') {
        mensajeRecuperar.textContent = 'Por favor ingresa tu correo electrónico.';
        return;
    }

    if (!validarEmail(email)) {
        mensajeRecuperar.textContent = 'Ingresa un correo válido.';
        return;
    }

    // Mostrar paso de código
    mensajeRecuperar.style.color = 'lightgreen';
    mensajeRecuperar.textContent = 'Correo válido. Se ha enviado un código.';
    pasoCorreo.style.display = 'none';
    pasoCodigo.style.display = 'block';
});

// Validación del código
btnValidarCodigo.addEventListener('click', function() {
    const codigo = inputCodigo.value.trim();

    if (codigo === '') {
        mensajeCodigo.textContent = 'Por favor ingresa el código.';
        return;
    }

    if (codigo !== codigoSimulado) {
        mensajeCodigo.textContent = 'Código incorrecto.';
        return;
    }

    mensajeCodigo.style.color = 'lightgreen';
    mensajeCodigo.textContent = 'Código correcto. Puedes cambiar tu contraseña.';
    // Aquí podrías mostrar un input para la nueva contraseña
});

const pasoNueva = document.getElementById('paso-nueva');
const inputNueva = document.getElementById('nueva-password');
const inputConfirmar = document.getElementById('confirmar-password');
const btnGuardar = document.getElementById('btn-guardar-password');
const mensajeNueva = document.getElementById('mensaje-nueva');

btnValidarCodigo.addEventListener('click', function() {
    const codigo = inputCodigo.value.trim();

    if (codigo === '') {
        mensajeCodigo.textContent = 'Por favor ingresa el código.';
        return;
    }

    if (codigo !== codigoSimulado) {
        mensajeCodigo.textContent = 'Código incorrecto.';
        return;
    }

    mensajeCodigo.style.color = 'lightgreen';
    mensajeCodigo.textContent = 'Código correcto. Ingresa tu nueva contraseña.';
    
    // Mostrar paso de nueva contraseña
    pasoCodigo.style.display = 'none';
    pasoNueva.style.display = 'block';
});

btnGuardar.addEventListener('click', function() {
    const nueva = inputNueva.value.trim();
    const confirmar = inputConfirmar.value.trim();

    if (nueva === '' || confirmar === '') {
        mensajeNueva.textContent = 'Por favor completa ambos campos.';
        return;
    }

    if (nueva.length < 6) {
        mensajeNueva.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        return;
    }

    if (nueva !== confirmar) {
        mensajeNueva.textContent = 'Las contraseñas no coinciden.';
        return;
    }

    mensajeNueva.style.color = 'lightgreen';
    mensajeNueva.textContent = '¡Contraseña actualizada correctamente!';
    
    // Aquí podrías cerrar modal o redirigir
    // modal.style.display = 'none';
});
