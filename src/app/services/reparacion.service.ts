import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reparaciones, tReparaciones} from '../models/reparacion';
import { tVehiculo } from '../models/vehiculo';

@Injectable({
  providedIn: 'root'
})

export class ReparacionService {
  url = 'https://recu-backend.herokuapp.com';
  constructor(private http: HttpClient) { }

  getReparaciones(): Observable<any>{
    return this.http.get(this.url + '/verReparacion')
  }

  getReparacionesVehiculo(matricula:string): Observable<any>{
    return this.http.get(this.url + '/look2/' + matricula)
  }

  eliminarReparaciones(codReparacion: string): Observable<any>{
    return this.http.delete(this.url + '/deleteReparacion/' + codReparacion);
  }

  crearReparaciones(reparacion: tReparaciones): Observable<any>{
    return this.http.post(this.url + '/addReparacion', reparacion);
  }

  obtenerReparacion(codigo:string):Observable<any>{
    return this.http.get(this.url + '/verReparacion/' + codigo);
  }

  editarReparacion(codigo: string, reparacion: tReparaciones):Observable<any>{
    return this.http.put(this.url + '/updateReparacion/' + codigo, reparacion);
  }
}
