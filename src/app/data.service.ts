import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  maquinariaUrl = 'http://localhost:3000/maquinaria';
  equipoMenorUrl = 'http://localhost:3000/equipo_menor';

  constructor(private http: HttpClient) { }

  getMaquinariaData(): Observable<any> {
    return this.http.get(this.maquinariaUrl, { headers: { Accept: 'application/json' } });
  }

  getEquipoMenorData(): Observable<any> {
    return this.http.get(this.equipoMenorUrl, { headers: { Accept: 'application/json' } });
  }
}
