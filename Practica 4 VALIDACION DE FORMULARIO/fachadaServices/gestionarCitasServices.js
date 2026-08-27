class GestionarCitas {
  constructor(medicoRepo, pacienteRepo, citaRepo) {
    this.medicoRepo = medicoRepo;
    this.pacienteRepo = pacienteRepo;
    this.citaRepo = citaRepo;
  }
  registrarCita(fecha, horaInicio, horaFin, idMedico, idPaciente) {
    const id = this.citaRepo.siguienteId();
    const medico = this.medicoRepo.buscarPorId(idMedico);
    if (!medico) {
      throw new Error("Médico no encontrado");
    }
    const paciente = this.pacienteRepo.buscarPorId(idPaciente);
    if (!paciente) {
      throw new Error("Paciente no encontrado");
    }

    // Validar que la hora de inicio sea anterior a la hora de fin
    this.validarFechaHoraCita(horaInicio, horaFin);

    const cita = new Cita(id, fecha, horaInicio, horaFin, medico, paciente);
    this.citaRepo.agregar(cita);
    return cita;
  }

  validarFechaHoraCita(horaInicio, horaFin) {
      if (horaInicio >= horaFin) {
          throw new Error("La hora de inicio debe ser anterior a la hora de fin");
      }
  }

  listarCitas() {
    return this.citaRepo.obtenerTodas();
  }

  buscarCita(id) {
    return this.citaRepo.buscarPorId(id);
  }
}
const gestionarCitas = new GestionarCitas(medicoRepo, pacienteRepo, citaRepo);
