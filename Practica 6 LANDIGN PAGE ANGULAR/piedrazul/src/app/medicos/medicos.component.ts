import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Medico } from './medico';
import { Especialidad } from './especialidad';

@Component({
  selector: 'app-medicos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medicos.component.html',
  styleUrl: './medicos.component.css'
})
export class MedicosComponent {
  especialidades: Especialidad[] = [];
  medicos: Medico[] = [];
  especialidadSeleccionada!: Especialidad;

  ngOnInit(): void {

    this.especialidades = [
      {id: 1, nombre: 'Terapia Neural', descripcion: 'Tratamiento que aplica anestésicos locales en puntos específicos del cuerpo para regular el sistema nervioso y aliviar el dolor crónico.'},
      {id: 2, nombre: 'Quiropraxia', descripcion: 'Diagnostica y trata problemas de la columna y las articulaciones mediante ajustes manuales, mejorando la postura y la movilidad.'},
      {id: 3, nombre: 'Fisioterapia', descripcion: 'Rehabilitación por medio de ejercicio terapéutico y técnicas manuales para recuperar la función después de lesiones o cirugías.'},
      {id: 4, nombre: 'Nutrición y Dietética Terapéutica', descripcion: 'Planes de alimentación personalizados para prevenir y tratar enfermedades como la diabetes, la hipertensión o el sobrepeso.'},
      {id: 5, nombre: 'Medicina General', descripcion: 'Atención integral de primer nivel: diagnóstico, tratamiento de enfermedades comunes y remisión a especialistas.'},
      {id: 6, nombre: 'Medicina Interna', descripcion: 'Diagnóstico y manejo de enfermedades complejas de los órganos internos en adultos.'}
    ];

    this.medicos = [
      {id: 1, nombre: 'Dr. Juan Perez', especialidad: 'Terapia Neural', enfoque: 'manejo del dolor crónico, migraña.', frase: 'Tratar la causa, no solo el síntoma.', imagen: 'img/doctor1.jpg'},
      {id: 2, nombre: 'Dra. Maria Gomez', especialidad: 'Quiropraxia', enfoque: 'columna vertebral, postura.', frase: 'Una columna sana es una vida en movimiento.', imagen: 'img/doctor2.jpg'},
      {id: 3, nombre: 'Dr. Carlos Rodriguez', especialidad: 'Fisioterapia', enfoque: 'rehabilitación deportiva, lesiones de rodilla.', frase: 'Cada paso de tu recuperación cuenta.', imagen: 'img/doctor3.jpg'},
      {id: 4, nombre: 'Dra. Laura Martinez', especialidad: 'Nutrición', enfoque: 'nutrición clínica, control de peso.', frase: 'Tu alimentación es tu primera medicina.', imagen: 'img/doctor4.jpg'},
      {id: 5, nombre: 'Dr. Andres Torres', especialidad: 'Medicina General', enfoque: 'medicina familiar, prevención.', frase: 'Escucharte es el primer paso para cuidarte.', imagen: 'img/doctor5.jpg'},
      {id: 6, nombre: 'Dra. Sofia Ramirez', especialidad: 'Medicina Interna', enfoque: 'diabetes, hipertensión.', frase: 'Acompañarte en cada etapa de tu salud.', imagen: 'img/doctor6.jpg'}
    ];

    this.especialidadSeleccionada = this.especialidades[0];
  }

  seleccionarEspecialidad(especialidad: Especialidad): void {
    this.especialidadSeleccionada = especialidad;
  }
}
