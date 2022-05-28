import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tDeportivo } from 'src/app/models/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-edit-deportivo',
  templateUrl: './edit-deportivo.component.html',
  styleUrls: ['./edit-deportivo.component.css']
})
export class EditDeportivoComponent implements OnInit {
  editDeportivoForm: FormGroup;
  titulo = 'Editar Vehiculo';
  matricula: string | null;

  constructor(private fb: FormBuilder,
    private router: Router,
    private _vehiculoService: VehiculoService,
    private aRouter: ActivatedRoute,
    private toastr: ToastrService) { 

      this.editDeportivoForm = this.fb.group({
            DNIpropietario: ['', Validators.required],
            matricula: ['', Validators.required],
            marca: ['', Validators.required],
            modelo: ['', Validators.required],
            color: ['', Validators.required],
            precio: ['', Validators.required],
            tVehiculo: ['', Validators.required],
            potencia: ['', Validators.required],
      });
      this.matricula = this.aRouter.snapshot.paramMap.get('matricula');
    }

  ngOnInit(): void {
    this.editDeportivo();
  }

  crearDeportivo() {
    const DEPORTIVO: tDeportivo = {
      DNIpropietario: this.editDeportivoForm.get('DNIpropietario')?.value,
      matricula: this.editDeportivoForm.get('matricula')?.value,
      marca: this.editDeportivoForm.get('marca')?.value,
      modelo: this.editDeportivoForm.get('modelo')?.value,
      color: this.editDeportivoForm.get('color')?.value,
      precio: this.editDeportivoForm.get('precio')?.value,
      tipoVehiculo: this.editDeportivoForm.get('tVehiculo')?.value,
      potencia: this.editDeportivoForm.get('potencia')?.value,
    };

    if (this.matricula !== null) {
      this._vehiculoService
        .editarDeportivo(this.matricula, DEPORTIVO)
        .subscribe((data) => {
          this.toastr.success('Deportivo editado con exito !!');
          this.router.navigate(['/ver-vehiculos']);
        });
    }
  }

  editDeportivo() {
    if (this.matricula !== null) {
      this._vehiculoService
        .getVehiculo(this.matricula)
        .subscribe((data) => {
          console.log(data)
          this.editDeportivoForm.setValue({
            DNIpropietario: data._DNIpropietario,
            matricula: data._matricula,
            marca: data._marca,
            modelo: data._modelo,
            color: data._color,
            precio: data._precio,
            tVehiculo: data._tipoVehiculo,
            potencia: data._potencia
          });
        });
    }
  }

}
