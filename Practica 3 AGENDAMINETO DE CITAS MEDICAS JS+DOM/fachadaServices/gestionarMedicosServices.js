class GestionarMedicos {
  constructor(medicoRepo) {
    this.medicoRepo = medicoRepo;
  }

  registrarMedico(nombres, apellidos, edad, especialidad, horario, bibliografia, aniosExperiencia) {
    const id = this.medicoRepo.siguienteId();
    const medico = new Medico(id, nombres, apellidos, edad, especialidad, horario, bibliografia, aniosExperiencia);
    this.medicoRepo.agregar(medico);
    return medico;
  }

  listarMedicos() {
    return this.medicoRepo.obtenerTodos();  
  }

  buscarMedico(id) {
    return this.medicoRepo.buscarPorId(id);
  }
}

const gestionarMedicos = new GestionarMedicos(medicoRepo);

