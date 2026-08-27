class GestionarMedicos {
  constructor(medicoRepo) {
    this.medicoRepo = medicoRepo;
  }

  registrarMedico(nombres, apellidos, especialidad, horaInicioAtencion, horaFinAtencion, bibliografia, aniosExperiencia) {
    const id = this.medicoRepo.siguienteId();
    
    if (horaInicioAtencion >= horaFinAtencion) {
      throw new Error("La hora de inicio de atención debe ser menor que la hora de fin de atención");
    }
    
    const medico = new Medico(id, nombres, apellidos, especialidad, horaInicioAtencion, horaFinAtencion, bibliografia, aniosExperiencia);
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

