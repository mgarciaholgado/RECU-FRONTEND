import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tVehiculo } from 'src/app/models/vehiculo';
import { ClienteService } from 'src/app/services/cliente.service';
import { VehiculoService } from 'src/app/services/vehiculos.service';


@Component({
  selector: 'app-crear-vehiculos',
  templateUrl: './crear-vehiculos.component.html',
  styleUrls: ['./crear-vehiculos.component.css'],
})
export class CrearVehiculosComponent implements OnInit {
  propietarios!: any[];
  vehiculoForm: FormGroup;
  titulo = 'Crear Vehiculo';
  matricula: string | null;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _vehiculosService: VehiculoService,
    private clienteService: ClienteService,
    private aRouter: ActivatedRoute
  ) {
    this.clienteService.getClientes().subscribe((dni)=>{
      this.propietarios = dni;
    })

    this.vehiculoForm = this.fb.group({
      DNIpropietario: ['', Validators.required],
      matricula: ['', Validators.required],
      marca: ['', Validators.required],
      color: ['', Validators.required],
      tVehiculo: ['', Validators.required],
    });
    this.matricula = this.aRouter.snapshot.paramMap.get('matricula');
  }

  ngOnInit(): void {
    this.crearVehiculo()
  }

  crearVehiculo() {
    const VEHICULO: tVehiculo = {
      DNIpropietario:this.vehiculoForm.get('DNIpropietario')?.value,
      matricula: this.vehiculoForm.get('matricula')?.value,
      marca: this.vehiculoForm.get('marca')?.value,
      color: this.vehiculoForm.get('color')?.value,
      tipoVehiculo: this.vehiculoForm.get('tVehiculo')?.value,
    };
    if (this.matricula !== null) {
      this._vehiculosService
        .editarVehiculo(this.matricula, VEHICULO)
        .subscribe((data) => {
          this.router.navigate(['/ver-vehiculos']);
        });
    } else {
      this._vehiculosService.crearVehiculo(VEHICULO).subscribe((data) => {
        this.router.navigate(['/ver-vehiculos']);
      });
    }
  }

  
}
