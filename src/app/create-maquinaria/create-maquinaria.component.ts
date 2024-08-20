import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { NgIf, NgFor } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-create-maquinaria',
  standalone: true,
  imports: [
    FloatLabelModule,
    ButtonModule,
    NgIf,
    NgFor,
    FormsModule,
    RouterOutlet,
    InputTextModule,
  ],
  templateUrl: './create-maquinaria.component.html',
  styleUrl: './create-maquinaria.component.css',
})
export class CreateMaquinariaComponent {
  selectedOption: string = 'maquinaria';
  value: string = '';
  data: any[] = [];

  maquinaria: any = {};
  equipoMenor: any = {};
  // Agrega modelos para otras opciones si es necesario

  stateOptions: any[] = [
    { label: 'Maquinaria', value: 'maquinaria' },
    { label: 'Equipo Menor', value: 'equipo_menor' },
    { label: 'Herramienta', value: 'herramienta' },
    { label: 'Material Construcción', value: 'material_construccion' },
    { label: 'Insumos Consumibles', value: 'insumos_consumibles' },
  ];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    switch (this.selectedOption) {
      case 'maquinaria':
        this.dataService.getMaquinariaData().subscribe({
          next: (data) => {
            console.log('Maquinaria data fetched:', data);
            this.data = data;
          },
          error: (error) => {
            console.error('Error fetching data:', error);
          },
        });
        break;
      case 'equipo_menor':
        this.dataService.getEquipoMenorData().subscribe({
          next: (data) => {
            console.log('Equipo Menor data fetched:', data);
            this.data = data;
          },
          error: (error) => {
            console.error('Error fetching data:', error);
          },
        });
        break;
      case 'herramienta':
        this.dataService.getHerramientaData().subscribe({
          next: (data) => {
            console.log('Herramienta data fetched:', data);
            this.data = data;
          },
          error: (error) => {
            console.error('Error fetching data:', error);
          },
        });
        break;
      default:
        this.data = [];
        break;
    }
  }

  onSubmit(): void {
    switch (this.selectedOption) {
      case 'maquinaria':
        this.dataService.postMaquinariaData(this.maquinaria).subscribe({
          next: (response) => {
            console.log('Maquinaria data posted successfully:', response);
            this.fetchData();
          },
          error: (error) => {
            console.error('Error posting data:', error);
          },
        });
        break;
      case 'equipo_menor':
        this.dataService.postEquipoMenorData(this.equipoMenor).subscribe({
          next: (response) => {
            console.log('Equipo Menor data posted successfully:', response);
            this.fetchData();
          },
          error: (error) => {
            console.error('Error posting data:', error);
          },
        });
        break;
    }
  }

  onDelete(item: any): void {
    switch (this.selectedOption) {
      case 'maquinaria':
        this.dataService.deleteMaquinariaData(item.id).subscribe({
          next: (response) => {
            console.log('Maquinaria data deleted successfully:', response);
            this.fetchData();
          },
          error: (error) => {
            console.error('Error deleting data:', error);
          },
        });
        break;
      case 'equipo_menor':
        this.dataService.deleteEquipoMenorData(item.id).subscribe({
          next: (response) => {
            console.log('Equipo Menor data deleted successfully:', response);
            this.fetchData();
          },
          error: (error) => {
            console.error('Error deleting data:', error);
          },
        });
        break;
      case 'herramienta':
        this.dataService.deleteHerramientaData(item.id).subscribe({
          next: (response) => {
            console.log('Herramienta data deleted successfully:', response);
            this.fetchData();
          },
          error: (error) => {
            console.error('Error deleting data:', error);
          },
        });
        break;
    }
  }

  openModal(): void {
    const modal = document.getElementById('manualModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeModal(): void {
    const modal = document.getElementById('manualModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  confirmSubmit(): void {
    this.closeModal();
    this.onSubmit(); // Llama al método para enviar los datos
    this.router.navigate(['/']); // Redirige a la página de inicio
  }
}
