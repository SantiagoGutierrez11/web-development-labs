
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

function validarCorreo(campo, errorElement,mensaje) {
    const correoRegex = /^[a-zA-Z0-9._%+-]+@unicauca\.edu\.co$/;
    if (!correoRegex.test(campo.value)) {
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

function validarFormularioMedico() {
    const inputNombres = document.getElementById('nombresMedico');
    const inputApellidos = document.getElementById('apellidosMedico');
    const inputEspecialidad = document.getElementById('especialidad');
    const inputHoraInicio = document.getElementById('horaInicioAtencion');
    const inputHoraFin = document.getElementById('horaFinAtencion');
    const inputBibliografia = document.getElementById('bibliografia');
    const inputAniosExperiencia = document.getElementById('aniosExperiencia');
    const inputGenero = document.getElementsByName('generoMedico');

    const errorNombres = document.getElementById('errorNombresMedico');
    const errorApellidos = document.getElementById('errorApellidosMedico');
    const errorEspecialidad = document.getElementById('errorEspecialidad');
    const errorHoraInicio = document.getElementById('errorHoraInicioAtencion');
    const errorHoraFin = document.getElementById('errorHoraFinAtencion');
    const errorBibliografia = document.getElementById('errorBibliografia');
    const errorAniosExperiencia = document.getElementById('errorAniosExperiencia');
    const errorGenero = document.getElementById('errorGenero');

    // Nombres y Apellidos necesitan las dos validaciones (obligatorio Y longitud)
    const nombresValidos =
        validarCampoObligatorio(inputNombres, errorNombres, 'El campo Nombres es obligatorio') &&
        validarLongitud(inputNombres, errorNombres, 3, 50, 'El campo Nombres debe tener entre 3 y 50 caracteres');

    const apellidosValidos =
        validarCampoObligatorio(inputApellidos, errorApellidos, 'El campo Apellidos es obligatorio') &&
        validarLongitud(inputApellidos, errorApellidos, 3, 50, 'El campo Apellidos debe tener entre 3 y 50 caracteres');

    const especialidadValida = validarCampoObligatorio(inputEspecialidad, errorEspecialidad, 'El campo Especialidad es obligatorio');
    const horaInicioValida = validarCampoObligatorio(inputHoraInicio, errorHoraInicio, 'El campo Hora de Inicio de Atención es obligatorio');
    const horaFinValida = validarCampoObligatorio(inputHoraFin, errorHoraFin, 'El campo Hora de Fin de Atención es obligatorio');
    const bibliografiaValida = validarCampoObligatorio(inputBibliografia, errorBibliografia, 'El campo Bibliografía es obligatorio');
    const aniosExperienciaValidos = validarCampoObligatorio(inputAniosExperiencia, errorAniosExperiencia, 'El campo Años de Experiencia es obligatorio');
    const generoValido = validarGenero(inputGenero, errorGenero, 'El campo Género es obligatorio');

    return nombresValidos && apellidosValidos && especialidadValida &&
           horaInicioValida && horaFinValida && bibliografiaValida &&
           aniosExperienciaValidos && generoValido;
}

function validarFormularioPaciente() {
    const inputNombres = document.getElementById('nombresPaciente');
    const inputApellidos = document.getElementById('apellidosPaciente');

    const errorNombres = document.getElementById('errorNombrePaciente');
    const errorApellidos = document.getElementById('errorApellidosPaciente');

    const nombresValidos = validarCampoObligatorio(inputNombres, errorNombres, 'El campo Nombres es obligatorio');
    const apellidosValidos = validarCampoObligatorio(inputApellidos, errorApellidos, 'El campo Apellidos es obligatorio');

    return nombresValidos && apellidosValidos;
}


function validarFormularioCita() {
    const inputFecha = document.getElementById('fecha');
    const inputHoraInicio = document.getElementById('horaInicio');
    const inputHoraFin = document.getElementById('horaFin');
    const inputMedico = document.getElementById('medicoSelect');
    const inputPaciente = document.getElementById('pacienteSelect');

    const errorFecha = document.getElementById('errorFecha');
    const errorHoraInicio = document.getElementById('errorHoraInicio');
    const errorHoraFin = document.getElementById('errorHoraFin');
    const errorMedico = document.getElementById('errorMedicoSelect');
    const errorPaciente = document.getElementById('errorPacienteSelect');

    const fechaValida = validarCampoObligatorio(inputFecha, errorFecha, 'El campo Fecha es obligatorio');
    const horaInicioValida = validarCampoObligatorio(inputHoraInicio, errorHoraInicio, 'El campo Hora de Inicio es obligatorio');
    const horaFinValida = validarCampoObligatorio(inputHoraFin, errorHoraFin, 'El campo Hora de Fin es obligatorio');
    const medicoValido = validarCampoObligatorio(inputMedico, errorMedico, 'Debe seleccionar un médico');
    const pacienteValido = validarCampoObligatorio(inputPaciente, errorPaciente, 'Debe seleccionar un paciente');

    return fechaValida && horaInicioValida && horaFinValida && medicoValido && pacienteValido;
}

function validarCamposAlCambiarFoco()
{
    const inputMedicoNombres = document.getElementById('nombresMedico');
    const inputMedicoApellidos = document.getElementById('apellidosMedico');
    const inputMedicoEspecialidad = document.getElementById('especialidad');
    const inputMedicoHoraInicio = document.getElementById('horaInicioAtencion');
    const inputMedicoHoraFin = document.getElementById('horaFinAtencion');
    const inputMedicoBibliografia = document.getElementById('bibliografia');
    const inputMedicoAniosExperiencia = document.getElementById('aniosExperiencia');
    const inputGeneroMedico = document.getElementsByName('generoMedico'); 

    const inputPacienteNombres = document.getElementById('nombresPaciente');
    const inputPacienteApellidos = document.getElementById('apellidosPaciente');
    const inputCitaFecha = document.getElementById('fecha');
    const inputCitaHoraInicio = document.getElementById('horaInicio');
    const inputCitaHoraFin = document.getElementById('horaFin');
    const inputCitaMedico = document.getElementById('medicoSelect');
    const inputCitaPaciente = document.getElementById('pacienteSelect');

    inputMedicoNombres.addEventListener('blur', () => {
        validarCampoObligatorio(inputMedicoNombres, document.getElementById('errorNombresMedico'), 'El campo Nombres es obligatorio');
    });
    inputMedicoNombres.addEventListener('blur', () => {
        validarLongitud(inputMedicoNombres, document.getElementById('errorNombresMedico'), 3, 50, 'El campo Nombres debe tener entre 3 y 50 caracteres');
    })
    inputMedicoApellidos.addEventListener('blur', () => {
        validarCampoObligatorio(inputMedicoApellidos, document.getElementById('errorApellidosMedico'), 'El campo Apellidos es obligatorio');
    })
    inputMedicoApellidos.addEventListener('blur', () => {
        validarLongitud(inputMedicoApellidos, document.getElementById('errorApellidosMedico'), 3, 50, 'El campo Apellidos debe tener entre 3 y 50 caracteres');
    });
    inputMedicoEspecialidad.addEventListener('blur', () => {
        validarCampoObligatorio(inputMedicoEspecialidad, document.getElementById('errorEspecialidad'), 'El campo Especialidad es obligatorio');
    })
    inputMedicoHoraInicio.addEventListener('blur', () => {
        validarCampoObligatorio(inputMedicoHoraInicio, document.getElementById('errorHoraInicioAtencion'), 'El campo Hora de Inicio de Atención es obligatorio');
    })
    inputMedicoHoraFin.addEventListener('blur', () => {
        validarCampoObligatorio(inputMedicoHoraFin, document.getElementById('errorHoraFinAtencion'), 'El campo Hora de Fin de Atención es obligatorio');
    })
    inputMedicoBibliografia.addEventListener('blur', () => {
        validarCampoObligatorio(inputMedicoBibliografia, document.getElementById('errorBibliografia'), 'El campo Bibliografía es obligatorio');
    })
    inputMedicoAniosExperiencia.addEventListener('blur', () => {
        validarCampoObligatorio(inputMedicoAniosExperiencia, document.getElementById('errorAniosExperiencia'), 'El campo Años de Experiencia es obligatorio');
    })

    inputGeneroMedico.forEach(radio => {
        radio.addEventListener('change', () => {
            validarGenero(inputGeneroMedico, document.getElementById('errorGenero'), 'El campo Género es obligatorio');
        });
        radio.addEventListener('blur', () => {
            validarGenero(inputGeneroMedico, document.getElementById('errorGenero'), 'El campo Género es obligatorio');
        });
    });

    inputPacienteNombres.addEventListener('blur', () => {
        validarCampoObligatorio(inputPacienteNombres, document.getElementById('errorNombrePaciente'), 'El campo Nombres es obligatorio');
    })
    inputPacienteNombres.addEventListener('blur', () => {
        validarLongitud(inputPacienteNombres, document.getElementById('errorNombrePaciente'), 3, 50, 'El campo Nombres debe tener entre 3 y 50 caracteres');
    })
    inputPacienteApellidos.addEventListener('blur', () => {
        validarCampoObligatorio(inputPacienteApellidos, document.getElementById('errorApellidosPaciente'), 'El campo Apellidos es obligatorio');
    })
    inputPacienteApellidos.addEventListener('blur', () => {
        validarLongitud(inputPacienteApellidos, document.getElementById('errorApellidosPaciente'), 3, 50, 'El campo Apellidos debe tener entre 3 y 50 caracteres');
    })
    inputCitaFecha.addEventListener('blur', () => {
        validarCampoObligatorio(inputCitaFecha, document.getElementById('errorFecha'), 'El campo Fecha es obligatorio');
    })
    inputCitaHoraInicio.addEventListener('blur', () => {
        validarCampoObligatorio(inputCitaHoraInicio, document.getElementById('errorHoraInicio'), 'El campo Hora de Inicio es obligatorio');
    })
    inputCitaHoraFin.addEventListener('blur', () => {
        validarCampoObligatorio(inputCitaHoraFin, document.getElementById('errorHoraFin'), 'El campo Hora de Fin es obligatorio');
    })
    inputCitaMedico.addEventListener('blur', () => {
        validarCampoObligatorio(inputCitaMedico, document.getElementById('errorMedicoSelect'), 'Debe seleccionar un médico');
    })
    inputCitaPaciente.addEventListener('blur', () => {
        validarCampoObligatorio(inputCitaPaciente, document.getElementById('errorPacienteSelect'), 'Debe seleccionar un paciente');
    })

}

document.addEventListener('DOMContentLoaded', validarCamposAlCambiarFoco)