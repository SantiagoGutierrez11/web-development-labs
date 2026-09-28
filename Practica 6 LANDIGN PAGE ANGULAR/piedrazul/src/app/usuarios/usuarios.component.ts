import { Component } from '@angular/core';
import { Usuario } from './usuario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  usuarios: Usuario[] = [];

  ngOnInit(): void {

    this.usuarios = [
      {id: 1, nombre: 'Juan', apellido: 'Perez', email: 'juan@unicauca.edu.co', createAt: '2021-05-14'},
      {id: 2, nombre: 'Andres', apellido: 'Sanchez', email: 'andres@unicauca.edu.co', createAt: '2022-06-14'},
      {id: 3, nombre: 'Pedro', apellido: 'Cortez', email: 'pedro@unicauca.edu.co', createAt: '2018-02-14'}
    ]
  }
}
