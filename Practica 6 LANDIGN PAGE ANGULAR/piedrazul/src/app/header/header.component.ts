import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public nombre: String = "Piedrazul";
  public disciplina: String = "Centro médico";
  public descripcion: String = "Conoce a nuestros especialistas y agenda tu cita.";
  public correo: String = "https://mail.google.com";
  public github: String = "https://github.com/SantiagoGutierrez11";
  public linkedin: String = "https://www.linkedin.com/in/santiago-felipe-gutierrez-astaiza-5441223aa/";
}
