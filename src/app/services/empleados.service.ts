import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tMecanico, tPintor } from '../models/empleados';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  url = 'http://localhost:3000';
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

  getEmpleado(dni: string): Observable<any>{
    return this.http.get(this.url + '/verEmpleado/' + dni);
  }

  crearMecanico(MECANICO: tMecanico): Observable<any> {
    return this.http.post(this.url + '/addEmpleado', MECANICO);
  }

  crearPintor(PINTOR: tPintor): Observable<any> {
    return this.http.post(this.url + '/addEmpleado', PINTOR);
  }

  eliminarEmpleado(dni: string): Observable<any> {
    return this.http.delete(this.url + '/deleteEmpleado/' + dni);
  }

  editarMecanico(dni: string, MECANICO: tMecanico):Observable<any>{
    return this.http.put(this.url + '/updateMecanico/' + dni, MECANICO);
  }

  editarPintor(dni: string, PINTOR: tPintor):Observable<any>{
    return this.http.put(this.url + '/updatePintor/' + dni, PINTOR);
  }
}
