import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Paciente } from './paciente';

@Component({
  selector: 'app-registro-paciente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro-paciente.component.html',
  styleUrl: './registro-paciente.component.css'
})
export class RegistroPacienteComponent {
  pacientes: Paciente[] = [];

  documento: string = '';
  nombres: string = '';
  apellidos: string = '';
  telefono: string = '';
  genero: string = '';
  contrasenia: string = '';
  confirmarContrasenia: string = '';

  errores: any = {documento: '', nombres: '', apellidos: '', telefono: '', genero: '', contrasenia: '', confirmar: ''};
  mensajeExito: string = '';

  // Funciones generales de validación

  validarCampoObligatorio(valor: string, campo: string, mensaje: string): boolean {
    if (valor.trim() === '') {
      this.errores[campo] = mensaje;
      return false;
    } else {
      this.errores[campo] = '';
      return true;
    }
  }

  validarLongitud(valor: string, campo: string, min: number, max: number, mensaje: string): boolean {
    if (valor.length < min || valor.length > max) {
      this.errores[campo] = mensaje;
      return false;
    } else {
      this.errores[campo] = '';
      return true;
    }
  }

  validarContraseniasIguales(mensaje: string): boolean {
    if (this.contrasenia !== this.confirmarContrasenia) {
      this.errores.confirmar = mensaje;
      return false;
    } else {
      this.errores.confirmar = '';
      return true;
    }
  }

  // Validaciones de cada campo (se invocan al cambiar el foco)

  validarDocumento(): boolean {
    return this.validarCampoObligatorio(this.documento, 'documento', 'El campo Documento es obligatorio') &&
      this.validarLongitud(this.documento, 'documento', 6, 10, 'El campo Documento debe tener entre 6 y 10 caracteres');
  }

  validarNombres(): boolean {
    return this.validarCampoObligatorio(this.nombres, 'nombres', 'El campo Nombres es obligatorio') &&
      this.validarLongitud(this.nombres, 'nombres', 3, 50, 'El campo Nombres debe tener entre 3 y 50 caracteres');
  }

  validarApellidos(): boolean {
    return this.validarCampoObligatorio(this.apellidos, 'apellidos', 'El campo Apellidos es obligatorio') &&
      this.validarLongitud(this.apellidos, 'apellidos', 3, 50, 'El campo Apellidos debe tener entre 3 y 50 caracteres');
  }

  validarTelefono(): boolean {
    return this.validarCampoObligatorio(this.telefono, 'telefono', 'El campo Teléfono es obligatorio') &&
      this.validarLongitud(this.telefono, 'telefono', 10, 10, 'El campo Teléfono debe tener 10 dígitos');
  }

  validarGenero(): boolean {
    return this.validarCampoObligatorio(this.genero, 'genero', 'Debe seleccionar un género');
  }

  validarContrasenia(): boolean {
    return this.validarCampoObligatorio(this.contrasenia, 'contrasenia', 'El campo Contraseña es obligatorio') &&
      this.validarLongitud(this.contrasenia, 'contrasenia', 8, 30, 'La contraseña debe tener mínimo 8 caracteres');
  }

  validarConfirmarContrasenia(): boolean {
    return this.validarCampoObligatorio(this.confirmarContrasenia, 'confirmar', 'Debe confirmar la contraseña') &&
      this.validarContraseniasIguales('Las contraseñas no coinciden');
  }

  // Validación de todo el formulario (se invoca al dar click en registrar)

  validarFormulario(): boolean {
    const documentoValido = this.validarDocumento();
    const nombresValidos = this.validarNombres();
    const apellidosValidos = this.validarApellidos();
    const telefonoValido = this.validarTelefono();
    const generoValido = this.validarGenero();
    const contraseniaValida = this.validarContrasenia();
    const confirmarValida = this.validarConfirmarContrasenia();

    return documentoValido && nombresValidos && apellidosValidos && telefonoValido && generoValido &&
      contraseniaValida && confirmarValida;
  }

  registrar(): void {
    this.mensajeExito = '';
    if (!this.validarFormulario()) {
      return;
    }

    const paciente: Paciente = {
      id: this.pacientes.length + 1,
      documento: this.documento,
      nombres: this.nombres,
      apellidos: this.apellidos,
      telefono: this.telefono,
      genero: this.genero
    };
    this.pacientes.push(paciente);
    console.log('Paciente registrado:', paciente);

    this.mensajeExito = 'Paciente ' + paciente.nombres + ' ' + paciente.apellidos + ' registrado con éxito';
    this.limpiarFormulario();
  }

  limpiarFormulario(): void {
    this.documento = '';
    this.nombres = '';
    this.apellidos = '';
    this.telefono = '';
    this.genero = '';
    this.contrasenia = '';
    this.confirmarContrasenia = '';
  }
}
