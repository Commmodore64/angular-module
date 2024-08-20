import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Maquinaria --------------------------------------------------------------
  getMaquinariaData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/maquinaria`);
  }

  deleteMaquinariaData(id: number): Observable<any> {
    console.log('Deleting ID:', id);
    return this.http.delete<any>(`${this.baseUrl}/maquinaria/${id}`);
  }

  postMaquinariaData(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/maquinaria`, data);
  }

  // Equipo Menor --------------------------------------------------------------
  getEquipoMenorData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/equipo_menor`);
  }

  postEquipoMenorData(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/equipo_menor`, data);
  }
  deleteEquipoMenorData(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/equipo_menor/${id}`);
  }
  // Herramienta ---------------------------------------------------------------
  getHerramientaData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/herramienta`);
  }

  postHerramientaData(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/herramienta`, data);
  }
  deleteHerramientaData(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/herramienta/${id}`);
  }
  // Material Construcción -----------------------------------------------------
  getMaterialConstruccionData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/material_construccion`);
  }

  postMaterialConstruccionData(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/material_construccion`, data);
  }
  deleteMaterialConstruccionData(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/material_construccion/${id}`);
  }
  // Insumos Consumibles -------------------------------------------------------
  getInsumosConsumiblesData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/insumos_consumibles`);
  }

  postInsumosConsumiblesData(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/insumos_consumibles`, data);
  }
  deleteInsumosConsumiblesData(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/insumos_consumibles/${id}`);
  }
  

  // Agrega métodos para otras opciones si es necesario
}
