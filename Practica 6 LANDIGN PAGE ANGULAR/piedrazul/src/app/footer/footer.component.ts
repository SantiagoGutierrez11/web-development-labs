import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public proyecto: any = {anio: '2026', nombreProyecto: 'Piedrazul - Centro médico'};
  public tecnologia: any = {leyenda: 'WebApp desarrollada con ', tec1: 'Angular ', tec2: 'Bootstrap'};
  public autor: string = 'Desarrollado por Santiago';
  public correo: string = 'contacto@piedrazul.com';
}
