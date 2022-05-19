import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reparaciones } from 'src/app/models/reparacion';
import { ReparacionService } from 'src/app/services/reparacion.service';

@Component({
  selector: 'app-listar-reparaciones-vehiculo',
  templateUrl: './listar-reparaciones-vehiculo.component.html',
  styleUrls: ['./listar-reparaciones-vehiculo.component.css']
})
export class ListarReparacionesVehiculoComponent implements OnInit {
  listarReparacionesVehiculo: Reparaciones [] = []
  matricula: any | null;

  constructor(private reparacionesService: ReparacionService, private aRouter: ActivatedRoute) {
    this.matricula = this.aRouter.snapshot.paramMap.get('matricula');
   }

  ngOnInit(): void {
    this.obtenerReparacionesVehiculo();
  }


  obtenerReparacionesVehiculo(){
    this.reparacionesService.getReparacionesVehiculo(this.matricula).subscribe(data => {
      this.listarReparacionesVehiculo = data
      
      console.log(this.listarReparacionesVehiculo)
      })

      
    
    
  }

}
