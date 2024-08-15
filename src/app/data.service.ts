import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:3000'; // Cambia esto a tu URL de API

  constructor(private http: HttpClient) {}

  getMaquinariaData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/maquinaria`);
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

  // Agrega métodos para otras opciones si es necesario
}
