import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { NgIf, NgFor } from '@angular/common';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SelectButtonModule, FormsModule, FloatLabelModule, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  selectedOption: string = 'maquinaria';

  stateOptions: any[] = [
    { label: 'Maquinaria', value: 'maquinaria' },
    { label: 'Equipo Menor', value: 'equipo_menor' },
    { label: 'Herramienta', value: 'herramienta' },
    { label: 'Material Construcción', value: 'material_construccion' },
    { label: 'Insumos Consumibles', value: 'insumos_consumibles' }
  ];

  value: string = '';

  // Datos que se obtendrán del servicio
  data: any[] = [];

  // Modelos para almacenar los datos que se van a enviar
  maquinaria: any = {};
  equipoMenor: any = {};
  // Agrega modelos para otras opciones si es necesario

  constructor(private dataService: DataService) {}

  // Método que se ejecuta al iniciar el componente
  ngOnInit(): void {
    this.fetchData();
  }

  // Método para obtener los datos del servicio
  fetchData(): void {
    switch (this.selectedOption) {
      case 'maquinaria':
        this.dataService.getMaquinariaData().subscribe((data: any) => {
          console.log('Maquinaria data fetched:', data); // Inspecciona los datos aquí
          this.data = data;
        });
        break;
      case 'equipo_menor':
        this.dataService.getEquipoMenorData().subscribe((data: any) => {
          console.log('Equipo Menor data fetched:', data); // Inspecciona los datos aquí
          this.data = data;
        });
        break;
      // Agrega casos para otras opciones si es necesario
      default:
        this.data = []; // Limpia los datos si la opción no coincide
        break;
    }
  }

  // Método para enviar los datos del formulario al servicio
  onSubmit(): void {
    switch (this.selectedOption) {
      case 'maquinaria':
        this.dataService.postMaquinariaData(this.maquinaria).subscribe(response => {
          console.log('Maquinaria data posted successfully:', response);
          // Maneja la respuesta aquí si es necesario
        });
        break;
      case 'equipo_menor':
        this.dataService.postEquipoMenorData(this.equipoMenor).subscribe(response => {
          console.log('Equipo Menor data posted successfully:', response);
          // Maneja la respuesta aquí si es necesario
        });
        break;
      // Agrega casos para otras opciones si es necesario
    }
  }
}
