import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tDeportivo, tTodoterreno, tVehiculo } from '../models/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getVehiculos(): Observable<any>{
    return this.http.get(this.url + '/verVehiculos')
  }

  getVehiculosValor(): Observable<any>{
    return this.http.get(this.url + '/valor');
  }

  eliminarVehiculo(matricula: string): Observable<any>{
    return this.http.delete(this.url + '/deleteVehiculo/' + matricula);
  }

  crearTodoterreno(TODOTERRENO: tTodoterreno): Observable<any>{
    return this.http.post(this.url + '/addVehiculo', TODOTERRENO);
  }

  crearDeportivo(DEPORTIVO: tDeportivo): Observable<any>{
    return this.http.post(this.url + '/addVehiculo', DEPORTIVO);
  }

  obtenerVehiculo(matricula:string):Observable<any>{
    return this.http.get(this.url + '/verVehiculo/' + matricula)
  }

  editarVehiculo(matricula: string, vehiculo: tVehiculo):Observable<any>{
    return this.http.put(this.url + '/updateVehiculo/' + matricula, vehiculo);
  }
  
}
