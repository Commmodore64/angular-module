import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

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

  getEquipoMenorData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/equipo_menor`);
  }

  postEquipoMenorData(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/equipo_menor`, data);
  }
  deleteEquipoMenorData(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/equipo_menor/${id}`);
  }
  

  // Agrega métodos para otras opciones si es necesario
}
