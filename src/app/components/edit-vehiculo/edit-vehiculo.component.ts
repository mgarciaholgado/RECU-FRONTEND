import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tVehiculo } from 'src/app/models/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-edit-vehiculo',
  templateUrl: './edit-vehiculo.component.html',
  styleUrls: ['./edit-vehiculo.component.css'],
})
export class EditVehiculoComponent implements OnInit {
  editvehiculoForm: FormGroup;
  titulo = 'Editar Vehiculo';
  matricula: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _vehiculosService: VehiculoService,
    private aRouter: ActivatedRoute
  ) {
    this.editvehiculoForm = this.fb.group({
      DNIpropietario: ['', Validators.required],
      matricula: ['', Validators.required],
      marca: ['', Validators.required],
      color: ['', Validators.required],
      tVehiculo: ['', Validators.required],
    });
    this.matricula = this.aRouter.snapshot.paramMap.get('matricula');
  }

  ngOnInit(): void {
    this.editVehiculo();
  }
  crearVehiculo() {
    const VEHICULO: tVehiculo = {
      DNIpropietario:this.editvehiculoForm.get('propietario')?.value,
      matricula: this.editvehiculoForm.get('matricula')?.value,
      marca: this.editvehiculoForm.get('marca')?.value,
      color: this.editvehiculoForm.get('color')?.value,
      tipoVehiculo: this.editvehiculoForm.get('tVehiculo')?.value,
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

  editVehiculo() {
    if (this.matricula !== null) {
      this._vehiculosService
        .obtenerVehiculo(this.matricula)
        .subscribe((data) => {
          this.editvehiculoForm.setValue({
            DNIpropietario: data._DNIpropietario,
            matricula: data._matricula,
            marca: data._marca,
            color: data._color,
            tVehiculo: data._tipoVehiculo,
          });
        });
    }
  }
}
