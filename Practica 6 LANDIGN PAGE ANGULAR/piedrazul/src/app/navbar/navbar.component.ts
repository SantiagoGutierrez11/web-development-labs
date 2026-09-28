import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public enlaces: any[] = [
    {texto: 'Home', href: '#'},
    {texto: 'Promociones', href: '#seccion1'},
    {texto: 'Médicos', href: '#seccion2'},
    {texto: 'Registrar Paciente', href: '#seccion3'},
    {texto: 'Usuarios', href: '#seccion4'}
  ];
}
