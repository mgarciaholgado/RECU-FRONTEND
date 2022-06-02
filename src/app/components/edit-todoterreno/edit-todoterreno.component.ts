import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tTodoterreno } from 'src/app/models/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-edit-todoterreno',
  templateUrl: './edit-todoterreno.component.html',
  styleUrls: ['./edit-todoterreno.component.css']
})
export class EditTodoterrenoComponent implements OnInit {
  editTodoterrenoForm: FormGroup;
  titulo = 'Editar Vehiculo';
  matricula: string | null;

  constructor(private fb: FormBuilder,
    private router: Router,
    private _vehiculoService: VehiculoService,
    private aRouter: ActivatedRoute,
    private toastr: ToastrService) { 

      this.editTodoterrenoForm = this.fb.group({
        DNIpropietario: ['', Validators.required],
        matricula: ['', Validators.required],
        marca: ['', Validators.required],
        modelo: ['', Validators.required],
        color: ['', Validators.required],
        precio: ['', Validators.required],
        tVehiculo: ['', Validators.required],
        traccion: ['', Validators.required],
  });
  this.matricula = this.aRouter.snapshot.paramMap.get('matricula');
    }

  ngOnInit(): void {
    this.editTodoterreno();
  }

  crearTodoterreno() {
    const TODOTERRENO: tTodoterreno = {
      DNIpropietario: this.editTodoterrenoForm.get('DNIpropietario')?.value,
      matricula: this.editTodoterrenoForm.get('matricula')?.value,
      marca: this.editTodoterrenoForm.get('marca')?.value,
      modelo: this.editTodoterrenoForm.get('modelo')?.value,
      color: this.editTodoterrenoForm.get('color')?.value,
      precio: this.editTodoterrenoForm.get('precio')?.value,
      tipoVehiculo: this.editTodoterrenoForm.get('tVehiculo')?.value,
      traccion: this.editTodoterrenoForm.get('traccion')?.value,
    };

    if (this.matricula !== null) {
      this._vehiculoService
        .editarTodoterreno(this.matricula, TODOTERRENO)
        .subscribe((data) => {
          this.toastr.success('TodoTerreno editado con exito !!');
          this.router.navigate(['/dashboard/ver-vehiculos']);
        });
    }
  }

  editTodoterreno() {
    if (this.matricula !== null) {
      this._vehiculoService
        .getVehiculo(this.matricula)
        .subscribe((data) => {
          this.editTodoterrenoForm.setValue({
            DNIpropietario: data._DNIpropietario,
            matricula: data._matricula,
            marca: data._marca,
            modelo: data._modelo,
            color: data._color,
            precio: data._precio,
            tVehiculo: data._tipoVehiculo,
            traccion: data._traccion
          });
        });
    }
  }

}
