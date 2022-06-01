import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tEmpleado } from 'src/app/models/empleados';
import { Reparaciones, tReparaciones } from 'src/app/models/reparacion';
import { tVehiculo } from 'src/app/models/vehiculo';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { ReparacionService } from 'src/app/services/reparacion.service';
import { VehiculoService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-crear-reparacion',
  templateUrl: './crear-reparacion.component.html',
  styleUrls: ['./crear-reparacion.component.css'],
})
export class CrearReparacionComponent implements OnInit {
  matriculas!: any[];
  
  reparacionForm: FormGroup;
  titulo = 'Crear Reparacion';
  codigo: string | null;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _reparacionesService: ReparacionService,
    private vehiculoService:VehiculoService,
    private aRouter: ActivatedRoute,
    private toastr: ToastrService
  ) 
  {

    this.vehiculoService.getVehiculos().subscribe((matriculas)=>{
      this.matriculas = matriculas;
    });
  
    this.reparacionForm = this.fb.group({
      codigo: ['', Validators.required],
      matricula: ['', Validators.required],
      nombre: ['', Validators.required],
      coste: ['', Validators.required],
    });

    this.codigo = this.aRouter.snapshot.paramMap.get('codigo');
  }

  ngOnInit(): void {
    this.editReparacion();
  }

 

  crearReparacion() {
    const REPARACION: tReparaciones = {
      codigo: this.reparacionForm.get('codigo')?.value,
      matricula: this.reparacionForm.get('matricula')?.value,
      nombre: this.reparacionForm.get('nombre')?.value,
      coste: this.reparacionForm.get('coste')?.value,
    };

    if (this.codigo !== null) {
      this._reparacionesService
        .editarReparacion(this.codigo, REPARACION)
        .subscribe((data) => {
          this.router.navigate(['/ver-reparaciones']);
        });
    } else {
      this._reparacionesService
        .crearReparaciones(REPARACION)
        .subscribe((data) => {
          this.toastr.success('Reparacion creada con exito !!');
          this.router.navigate(['/ver-reparaciones']);
        });
    }
  }

  editReparacion() {
    if (this.codigo !== null) {
      this.titulo = 'Editar reparacion';
      this._reparacionesService
        .obtenerReparacion(this.codigo)
        .subscribe((data) => {
          this.reparacionForm.setValue({
            codigo: data._codReparacion,
            matricula: data._matricula,
            nombre: data._nombreReparacion,
            coste: data._CosteBase,
          });
        });
    }
  }
}
