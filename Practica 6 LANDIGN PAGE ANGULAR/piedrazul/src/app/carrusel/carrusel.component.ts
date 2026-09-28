import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {
  public titulo: string = 'Promociones';
  public promociones: any[] = [
    {imagen: 'img/promo1.png', descripcion: 'Promo 1'},
    {imagen: 'img/promo2.png', descripcion: 'Promo 2'},
    {imagen: 'img/promo3.png', descripcion: 'Promo 3'}
  ];
}
