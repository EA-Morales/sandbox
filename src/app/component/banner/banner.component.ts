import { Component, OnInit } from '@angular/core';

import { UiService } from './../../services/ui.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  /* 
  @Propiedades booleanas que vamos a usar en conjunto con los *ngIf para mostrar u ocultar los elementos HTML
  */
  mostrarImagen: boolean = false;
  mostrarNombre: boolean = false;
  mostrarPuesto: boolean = false;
  mostrarUbicacion: boolean = false;

  /* 
  @Propiedades que van a guardar los datos de informacion personal
  */
  imagen: string =
    'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';
  nombre: string = 'Agustin Morales';
  puesto: string = 'Full stack developer';
  ubicacion: string = 'Buenos Aires, Argentina';

  constructor(public uiService: UiService) {}

  ngOnInit(): void {}

  //@Metodo llamado por evento (click) para cambiar el valor booleano de las propiedades a mostrar
  editarImagen() {
    this.mostrarImagen = !this.mostrarImagen;
  }

  //@Metodo llamado por evento (click) para cambiar el valor booleano de las propiedades a mostrar
  editarNombre() {
    this.mostrarNombre = !this.mostrarNombre;
  }

  //@Metodo llamado por evento (click) para cambiar el valor booleano de las propiedades a mostrar
  editarPuesto() {
    this.mostrarPuesto = !this.mostrarPuesto;
  }

  //@Metodo llamado por evento (click) para cambiar el valor booleano de las propiedades a mostrar
  editarUbicacion() {
    this.mostrarUbicacion = !this.mostrarUbicacion;
  }
}
