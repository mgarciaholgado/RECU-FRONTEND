import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tCliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = 'https://recu-backend.herokuapp.com';
  constructor(private http: HttpClient) { }

  getClientes(): Observable<any>{
    return this.http.get(this.url + '/verClientes')
  }

  getClientesVehiculos(dni:string): Observable<any>{
    return this.http.get(this.url + '/look/' + dni)
  }

  eliminarCliente(dni: string): Observable<any>{
    return this.http.delete(this.url + '/deleteCliente/' + dni);
  }

  crearCliente(cliente: tCliente): Observable<any>{
    return this.http.post(this.url + '/addCliente', cliente);
  }

  obtenerCliente(dni:string):Observable<any>{
    return this.http.get(this.url + '/verCliente/' + dni)
  }

  editarCliente(dni: string, cliente: tCliente):Observable<any>{
    return this.http.put(this.url + '/updateCliente/' + dni, cliente);
  }
}
