import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tPintor } from 'src/app/models/empleados';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-edit-pintor',
  templateUrl: './edit-pintor.component.html',
  styleUrls: ['./edit-pintor.component.css']
})
export class EditPintorComponent implements OnInit {

  editPintorForm: FormGroup;
  titulo = 'Editar Pintor';
  dni: string | null;

  constructor(private fb: FormBuilder,
    private router: Router,
    private _empleadoService: EmpleadosService,
    private aRouter: ActivatedRoute,
    private toastr: ToastrService) {

      this.editPintorForm = this.fb.group({
        dni: ['', Validators.required],
        nombre: ['', Validators.required],
        tipoEmpleado: ['', Validators.required],
        fechaContratacion: ['', Validators.required],
        sueldoMes: ['', Validators.required],
        empresaContratista: ['', Validators.required],
        
  });
  this.dni = this.aRouter.snapshot.paramMap.get('dni');
     }

  ngOnInit(): void {
    this.editPintor();
  }

  crearPintor() {
    const PINTOR: tPintor = {
      dni: this.editPintorForm.get('dni')?.value,
      nombre: this.editPintorForm.get('nombre')?.value,
      tipoEmpleado: this.editPintorForm.get('tipoEmpleado')?.value,
      fechaContratacion: this.editPintorForm.get('fechaContratacion')?.value,
      sueldoMes: this.editPintorForm.get('sueldoMes')?.value,
      empresaContratista: this.editPintorForm.get('empresaContratista')?.value,
    };

    if (this.dni !== null) {
      this._empleadoService
        .editarPintor(this.dni, PINTOR)
        .subscribe((data) => {
          this.toastr.success('Pintor editado con exito !!');
          this.router.navigate(['/ver-empleados']);
        });
    }
  }

  editPintor() {
    if (this.dni !== null) {
      this._empleadoService
        .getEmpleado(this.dni)
        .subscribe((data) => {
          console.log(data)
          
            
            this.editPintorForm.setValue({
              dni: data._dni,
              nombre: data._nombre,
              tipoEmpleado: data._tipoEmpleado,
              fechaContratacion: data._fechaContratacion,
              sueldoMes: data._sueldoMes,
              empresaContratista: data._empresaContratista,
            });
   
        });
    }
  }

}
