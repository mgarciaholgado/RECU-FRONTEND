import { Component, OnInit } from '@angular/core';
import { Vehiculos } from 'src/app/models/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.component.html',
  styleUrls: ['./listar-vehiculos.component.css'],
})
export class ListarVehiculosComponent implements OnInit {
  listarVehiculos: Vehiculos[] = [];
  constructor(private _vehiculosService: VehiculoService) {}

  ngOnInit(): void {
    this.obtenerVehiculos();
  }

  obtenerVehiculos() {
    this._vehiculosService.getVehiculos().subscribe((data) => {
      this.listarVehiculos = data;
    });
  }

  eliminarVehiculo(matricula: any) {
    this._vehiculosService.eliminarVehiculo(matricula).subscribe((data) => {
      this.obtenerVehiculos();
    });
  }
}
