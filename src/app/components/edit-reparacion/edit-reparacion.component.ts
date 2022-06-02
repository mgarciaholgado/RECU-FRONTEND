import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Reparaciones, tReparaciones } from 'src/app/models/reparacion';
import { ReparacionService } from 'src/app/services/reparacion.service';

@Component({
  selector: 'app-edit-reparacion',
  templateUrl: './edit-reparacion.component.html',
  styleUrls: ['./edit-reparacion.component.css'],
})
export class EditReparacionComponent implements OnInit {
  editReparacionForm: FormGroup;
  titulo = 'Editar Reparacion';
  codigo: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _reparacionesService: ReparacionService,
    private aRouter: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.editReparacionForm = this.fb.group({
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
      codigo: this.editReparacionForm.get('codigo')?.value,
      matricula: this.editReparacionForm.get('matricula')?.value,
      nombre: this.editReparacionForm.get('nombre')?.value,
      coste: this.editReparacionForm.get('coste')?.value,
    };

    if (this.codigo !== null) {
      this._reparacionesService
        .editarReparacion(this.codigo, REPARACION)
        .subscribe((data) => {
          this.toastr.success('Reparacion editada con exito !!');
          this.router.navigate(['/dashboard/ver-reparaciones']);
        });
    } else {
      this._reparacionesService
        .crearReparaciones(REPARACION)
        .subscribe((data) => {
          this.toastr.success('Reparacion creada con exito !!');
          this.router.navigate(['/dashboard/ver-reparaciones']);
        });
    }
  }

  editReparacion() {
    if (this.codigo !== null) {
      this._reparacionesService
        .obtenerReparacion(this.codigo)
        .subscribe((data) => {
          this.editReparacionForm.setValue({
            codigo: data._codReparacion,
            matricula: data._matricula,
            nombre: data._nombreReparacion,
            coste: data._CosteBase,
          });
        });
    }
  }
}
