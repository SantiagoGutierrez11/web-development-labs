const formMedico = document.getElementById("formMedico");
const medicoSelect = document.getElementById("medicoSelect");
const btnAgregarMedico = document.getElementById("btnAgregarMedico");

// habilita/deshabilita el botón según la validez del formulario
formMedico.addEventListener("input", () => {
  btnAgregarMedico.disabled = !formMedico.checkValidity();
});

formMedico.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombres = document.getElementById("nombres").value;
  const apellidos = document.getElementById("apellidos").value;
  const especialidad = document.getElementById("especialidad").value;
  const horaInicioAtencion = document.getElementById("horaInicioAtencion").value;
  const horaFinAtencion = document.getElementById("horaFinAtencion").value;
  const horario = `${horaInicioAtencion} - ${horaFinAtencion}`;
  const bibliografia = document.getElementById("bibliografia").value;
  const aniosExperiencia = parseInt(document.getElementById("aniosExperiencia").value);

  const medico = gestionarMedicos.registrarMedico(nombres, apellidos, especialidad, horario, bibliografia, aniosExperiencia);
  // actualizar select

  const option = document.createElement("option");
  option.value = medico.id;
  option.textContent = `${medico.nombres} ${medico.apellidos}`;

  medicoSelect.appendChild(option);

  formMedico.reset();
  btnAgregarMedico.disabled = true;

  mostrarNotificacion(`Médico ${medico.nombres} ${medico.apellidos} registrado con éxito`);
});

