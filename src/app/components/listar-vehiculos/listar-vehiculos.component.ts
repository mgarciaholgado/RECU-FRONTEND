import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { tVehiculo, Vehiculos } from 'src/app/models/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.component.html',
  styleUrls: ['./listar-vehiculos.component.css'],
})
export class ListarVehiculosComponent implements OnInit {
  listarVehiculos: tVehiculo[] = [];
  constructor(private _vehiculosService: VehiculoService,
    private toastr: ToastrService) {}

  ngOnInit(): void {
    this.obtenerVehiculos();
  }

  obtenerVehiculos() {
    this._vehiculosService.getVehiculos().subscribe((data) => {
      this.listarVehiculos = data;
      console.log(this.listarVehiculos)
    });
  }

  eliminarVehiculo(matricula: any) {
    this._vehiculosService.eliminarVehiculo(matricula).subscribe((data) => {
      this.toastr.error('El vehiculo fue eliminado correctamente' , 'VEHICULO ELIMINADO')
      this.obtenerVehiculos();
    });
  }
}
