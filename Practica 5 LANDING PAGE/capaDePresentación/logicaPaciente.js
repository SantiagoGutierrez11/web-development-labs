const formPaciente = document.getElementById("formPaciente");

formPaciente.addEventListener("submit", (e) => {
  e.preventDefault();
  if(!validarFormularioPaciente()) {
    return;
  }
  const documento = document.getElementById("documentoPaciente").value;
  const nombres = document.getElementById("nombresPaciente").value;
  const apellidos = document.getElementById("apellidosPaciente").value;
  const telefono = document.getElementById("telefonoPaciente").value;
  const genero = document.querySelector('input[name="generoPaciente"]:checked').value;

  const paciente = gestionarPacientes.registrarPaciente(documento, nombres, apellidos, telefono, genero);
  console.log("Paciente registrado:", paciente);

  formPaciente.reset();

  mostrarNotificacion(`Paciente ${paciente.nombres} ${paciente.apellidos} registrado con éxito`);
});
