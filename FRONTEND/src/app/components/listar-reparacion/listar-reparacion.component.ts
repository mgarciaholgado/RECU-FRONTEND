import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'
import { ReparacionService } from 'src/app/services/reparacion.service';
import { Reparaciones } from 'src/app/models/reparacion';

@Component({
  selector: 'app-listar-reparacion',
  templateUrl: './listar-reparacion.component.html',
  styleUrls: ['./listar-reparacion.component.css']
})
export class ListarReparacionComponent implements OnInit {
  listarReparaciones: Reparaciones[] = [];
  constructor(private _reparacionesService: ReparacionService) { 

  } 
  ngOnInit(): void {
    this.obtenerReparaciones();
  }
  obtenerReparaciones(){
    this._reparacionesService.getReparaciones().subscribe(data => {
      this.listarReparaciones = data;
    })
  }

  eliminarReparaciones(codReparacion:any){
    this._reparacionesService.eliminarReparaciones(codReparacion).subscribe(data =>{
    this.obtenerReparaciones();
    })
  }

}
