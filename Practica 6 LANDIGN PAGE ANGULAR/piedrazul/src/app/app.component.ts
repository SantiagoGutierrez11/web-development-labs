import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CarruselComponent } from "./carrusel/carrusel.component";
import { MedicosComponent } from "./medicos/medicos.component";
import { RegistroPacienteComponent } from "./registro-paciente/registro-paciente.component";
import { UsuariosComponent } from "./usuarios/usuarios.component";
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, CarruselComponent, MedicosComponent, RegistroPacienteComponent, UsuariosComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'piedrazul';
}
