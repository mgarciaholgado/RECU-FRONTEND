import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tVehiculo } from '../models/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  url = 'https://mechanic-api-rest.herokuapp.com';
  constructor(private http: HttpClient) { }

  getVehiculos(): Observable<any>{
    return this.http.get(this.url + '/verVehiculos')
  }

  eliminarVehiculo(matricula: string): Observable<any>{
    return this.http.delete(this.url + '/deleteVehiculo/' + matricula);
  }

  crearVehiculo(vehiculo: tVehiculo): Observable<any>{
    return this.http.post(this.url + '/addVehiculo', vehiculo);
  }

  obtenerVehiculo(matricula:string):Observable<any>{
    return this.http.get(this.url + '/verVehiculo/' + matricula)
  }

  editarVehiculo(matricula: string, vehiculo: tVehiculo):Observable<any>{
    return this.http.put(this.url + '/updateVehiculo/' + matricula, vehiculo);
  }
  
}
