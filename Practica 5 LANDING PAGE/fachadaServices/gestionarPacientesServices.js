class GestionarPacientes {
  constructor(repoPaciente) {
    this.repoPaciente = repoPaciente;
  }

  registrarPaciente(documento, nombre, apellido, telefono, genero) {
    const id = this.repoPaciente.siguienteId();
    const paciente = new Paciente(id, documento, nombre, apellido, telefono, genero);
    this.repoPaciente.agregar(paciente);
    return paciente;
  }

  listarPacientes() {
    return this.repoPaciente.obtenerTodos();
  }

  buscarPaciente(id) {
    return this.repoPaciente.buscarPorId(id);
  }
}

const gestionarPacientes = new GestionarPacientes(pacienteRepo);

