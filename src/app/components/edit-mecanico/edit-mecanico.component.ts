import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tMecanico } from 'src/app/models/empleados';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-edit-mecanico',
  templateUrl: './edit-mecanico.component.html',
  styleUrls: ['./edit-mecanico.component.css']
})
export class EditMecanicoComponent implements OnInit {

  editMecanicoForm: FormGroup;
  titulo = 'Editar Mecanico';
  dni: string | null;

  constructor(private fb: FormBuilder,
    private router: Router,
    private _empleadoService: EmpleadosService,
    private aRouter: ActivatedRoute,
    private toastr: ToastrService) {

      this.editMecanicoForm = this.fb.group({
        dni: ['', Validators.required],
        nombre: ['', Validators.required],
        tipoEmpleado: ['', Validators.required],
        fechaContratacion: ['', Validators.required],
        sueldoMes: ['', Validators.required],
        horasExtra: ['', Validators.required],
        
  });
  this.dni = this.aRouter.snapshot.paramMap.get('dni');
}

  ngOnInit(): void {
    this.editMecanico();
  }

  crearMecanico() {
    const MECANICO: tMecanico = {
      dni: this.editMecanicoForm.get('dni')?.value,
      nombre: this.editMecanicoForm.get('nombre')?.value,
      tipoEmpleado: this.editMecanicoForm.get('tipoEmpleado')?.value,
      fechaContratacion: this.editMecanicoForm.get('fechaContratacion')?.value,
      sueldoMes: this.editMecanicoForm.get('sueldoMes')?.value,
      horasExtra: this.editMecanicoForm.get('horasExtra')?.value,
    };

    if (this.dni !== null) {
      this._empleadoService
        .editarMecanico(this.dni, MECANICO)
        .subscribe((data) => {
          this.toastr.success('Mecanico editado con exito !!');
          this.router.navigate(['/dashboard/ver-empleados']);
        });
    }
  }

  editMecanico() {
    if (this.dni !== null) {
      this._empleadoService
        .getEmpleado(this.dni)
        .subscribe((data) => {
          console.log(data)
          
            
            this.editMecanicoForm.setValue({
              dni: data._dni,
              nombre: data._nombre,
              tipoEmpleado: data._tipoEmpleado,
              fechaContratacion: data._fechaContratacion,
              sueldoMes: data._sueldoMes,
              horasExtra: data._horasExtra,
            });
   
        });
    }
  }

}
