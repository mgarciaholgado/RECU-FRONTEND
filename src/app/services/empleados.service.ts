import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tMecanico, tPintor } from '../models/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {
    
   }
   crearMecanico(mecanico: tMecanico): Observable<any>{
    return this.http.post(this.url + '/addMecanico', mecanico);
  }

  crearPintor(pintor: tPintor): Observable<any>{
    return this.http.post(this.url + '/addPintor', pintor);
  }
}
