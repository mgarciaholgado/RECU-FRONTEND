import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tMecanico, tPintor } from '../models/empleados';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  url = 'https://recu-backend.herokuapp.com';
  constructor(private http: HttpClient) {}

  getEmpleados(): Observable<any> {
    return this.http.get(this.url + '/verEmpleados');
  }

  getAnualSalario():Observable<any> {
    return this.http.get(this.url + '/sueldo');
  }

  getMecanicos(): Observable<any> {
    return this.http.get(this.url + '/verMecanicos');
  }

  getPintores(): Observable<any> {
    return this.http.get(this.url + '/verPintores');
  }

  crearMecanico(mecanico: tMecanico): Observable<any> {
    return this.http.post(this.url + '/addEmpleado', mecanico);
  }

  crearPintor(PINTOR: tPintor): Observable<any> {
    return this.http.post(this.url + '/addEmpleado', PINTOR);
  }

  eliminarEmpleado(dni: string): Observable<any> {
    return this.http.delete(this.url + '/deleteEmpleado/' + dni);
  }
}
