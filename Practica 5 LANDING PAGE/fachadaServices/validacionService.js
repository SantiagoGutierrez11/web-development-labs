
function validarCampoObligatorio(campo, errorElement, mensaje) {
    if (campo.value.trim() === '') {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validarLongitud(campo, errorElement, min, max, mensaje) {
    if (campo.value.length < min || campo.value.length > max) {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validarGenero(genero, errorElement, mensaje) {
    let seleccionado = false;
    for (let i = 0; i < genero.length; i++) {
        if (genero[i].checked) {
            seleccionado = true;
            break;
        }
    }

    if (!seleccionado) {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validarContraseniasIguales(campo, campoConfirmar, errorElement, mensaje) {
    if (campo.value !== campoConfirmar.value) {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validarFormularioPaciente() {
    const inputDocumento = document.getElementById('documentoPaciente');
    const inputNombres = document.getElementById('nombresPaciente');
    const inputApellidos = document.getElementById('apellidosPaciente');
    const inputTelefono = document.getElementById('telefonoPaciente');
    const inputGenero = document.getElementsByName('generoPaciente');
    const inputContrasenia = document.getElementById('contraseniaPaciente');
    const inputConfirmar = document.getElementById('confirmarContraseniaPaciente');

    const errorContrasenia = document.getElementById('errorContraseniaPaciente');
    const errorConfirmar = document.getElementById('errorConfirmarContraseniaPaciente');
    const errorDocumento = document.getElementById('errorDocumentoPaciente');
    const errorGenero = document.getElementById('errorGeneroPaciente');
    const errorNombres = document.getElementById('errorNombrePaciente');
    const errorApellidos = document.getElementById('errorApellidosPaciente');
    const errorTelefono = document.getElementById('errorTelefonoPaciente');

    const documentoValido =
        validarCampoObligatorio(inputDocumento, errorDocumento, 'El campo Documento es obligatorio') &&
        validarLongitud(inputDocumento, errorDocumento, 6, 10, 'El campo Documento debe tener entre 6 y 10 caracteres');
    const generoValido = validarGenero(inputGenero, errorGenero, 'Debe seleccionar un género');
    const nombresValidos =
        validarCampoObligatorio(inputNombres, errorNombres, 'El campo Nombres es obligatorio') &&
        validarLongitud(inputNombres, errorNombres, 3, 50, 'El campo Nombres debe tener entre 3 y 50 caracteres');
    const apellidosValidos =
        validarCampoObligatorio(inputApellidos, errorApellidos, 'El campo Apellidos es obligatorio') &&
        validarLongitud(inputApellidos, errorApellidos, 3, 50, 'El campo Apellidos debe tener entre 3 y 50 caracteres');
    const telefonoValido =
        validarCampoObligatorio(inputTelefono, errorTelefono, 'El campo Teléfono es obligatorio') &&
        validarLongitud(inputTelefono, errorTelefono, 10, 10, 'El campo Teléfono debe tener 10 dígitos');
    const contraseniaValida =
        validarCampoObligatorio(inputContrasenia, errorContrasenia, 'El campo Contraseña es obligatorio') &&
        validarLongitud(inputContrasenia, errorContrasenia, 8, 30, 'La contraseña debe tener mínimo 8 caracteres');
    const confirmarValida =
        validarCampoObligatorio(inputConfirmar, errorConfirmar, 'Debe confirmar la contraseña') &&
        validarContraseniasIguales(inputContrasenia, inputConfirmar, errorConfirmar, 'Las contraseñas no coinciden');

    return documentoValido && nombresValidos && apellidosValidos && telefonoValido && generoValido &&
           contraseniaValida && confirmarValida;
}


function validarCamposAlCambiarFoco()
{
    const inputPacienteDocumento = document.getElementById('documentoPaciente');
    const inputPacienteNombres = document.getElementById('nombresPaciente');
    const inputPacienteApellidos = document.getElementById('apellidosPaciente');
    const inputPacienteTelefono = document.getElementById('telefonoPaciente');
    const inputGenero = document.getElementsByName('generoPaciente');
    const inputPacienteContrasenia = document.getElementById('contraseniaPaciente');
    const inputPacienteConfirmar = document.getElementById('confirmarContraseniaPaciente');

    inputPacienteContrasenia.addEventListener('blur', () => {
        validarCampoObligatorio(inputPacienteContrasenia, document.getElementById('errorContraseniaPaciente'), 'El campo Contraseña es obligatorio') &&
        validarLongitud(inputPacienteContrasenia, document.getElementById('errorContraseniaPaciente'), 8, 30, 'La contraseña debe tener mínimo 8 caracteres');
    })
    inputPacienteConfirmar.addEventListener('blur', () => {
        validarCampoObligatorio(inputPacienteConfirmar, document.getElementById('errorConfirmarContraseniaPaciente'), 'Debe confirmar la contraseña') &&
        validarContraseniasIguales(inputPacienteContrasenia, inputPacienteConfirmar, document.getElementById('errorConfirmarContraseniaPaciente'), 'Las contraseñas no coinciden');
    })
    inputPacienteDocumento.addEventListener('blur', () => {
        validarCampoObligatorio(inputPacienteDocumento, document.getElementById('errorDocumentoPaciente'), 'El campo Documento es obligatorio') &&
        validarLongitud(inputPacienteDocumento, document.getElementById('errorDocumentoPaciente'), 6, 10, 'El campo Documento debe tener entre 6 y 10 caracteres');
    })
    inputPacienteTelefono.addEventListener('blur', () => {
        validarCampoObligatorio(inputPacienteTelefono, document.getElementById('errorTelefonoPaciente'), 'El campo Teléfono es obligatorio') &&
        validarLongitud(inputPacienteTelefono, document.getElementById('errorTelefonoPaciente'), 10, 10, 'El campo Teléfono debe tener 10 dígitos');
    })
    inputPacienteNombres.addEventListener('blur', () => {
        validarCampoObligatorio(inputPacienteNombres, document.getElementById('errorNombrePaciente'), 'El campo Nombres es obligatorio') &&
        validarLongitud(inputPacienteNombres, document.getElementById('errorNombrePaciente'), 3, 50, 'El campo Nombres debe tener entre 3 y 50 caracteres');
    })
    inputPacienteApellidos.addEventListener('blur', () => {
        validarCampoObligatorio(inputPacienteApellidos, document.getElementById('errorApellidosPaciente'), 'El campo Apellidos es obligatorio') &&
        validarLongitud(inputPacienteApellidos, document.getElementById('errorApellidosPaciente'), 3, 50, 'El campo Apellidos debe tener entre 3 y 50 caracteres');
    })

    inputGenero.forEach((radio) => {
        radio.addEventListener('change', () => {
            validarGenero(inputGenero, document.getElementById('errorGeneroPaciente'), 'Debe seleccionar un género');
        });
        radio.addEventListener('blur', () => {
            validarGenero(inputGenero, document.getElementById('errorGeneroPaciente'), 'Debe seleccionar un género');
        });
    });
}

document.addEventListener('DOMContentLoaded', validarCamposAlCambiarFoco)