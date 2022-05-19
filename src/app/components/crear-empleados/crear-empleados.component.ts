import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tMecanico, tPintor } from 'src/app/models/empleados';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-crear-empleados',
  templateUrl: './crear-empleados.component.html',
  styleUrls: ['./crear-empleados.component.css'],
})
export class CrearEmpleadosComponent implements OnInit {
  empleadoForm: any;
  titulo = 'Crear Empleado';
  dni: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private empleadoService: EmpleadosService,
    private aRouter: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.empleadoForm = this.fb.group({
      dni: ['', Validators.required],
      nombre: ['', Validators.required],
      tipoEmpleado: ['', Validators.required],
      fechaContratacion: ['', Validators.required],
      sueldoMes: ['', Validators.required],
      horasExtra: ['',Validators.required],
      empresaContratista: ['',Validators.required]
    });
    this.dni = this.aRouter.snapshot.paramMap.get('dni');
  }

  ngOnInit(): void {
  }

  crearEmpleado() {
    if (this.empleadoForm.value.tVehiculo == 'mecanico') {
      const MECANICO: tMecanico = {
        dni: this.empleadoForm.get('dni')?.value,
        nombre: this.empleadoForm.get('nombre')?.value,
        tipoEmpleado: this.empleadoForm.get('tipoEmpleado')?.value,
        fechaContratacion: this.empleadoForm.get('fechaContratacion')?.value,
        sueldoMes: this.empleadoForm.get('sueldoMes')?.value,
        horasExtra: this.empleadoForm.get('horasExtra')?.value,
      };
      this.empleadoService.crearMecanico(MECANICO).subscribe((data) => {
        console.log(data)
        this.toastr.success('Mecanico creado con exito !!');
        this.router.navigate(['/ver-empleados']);
      });
    }else{
      
      const PINTOR: tPintor = {
        dni: this.empleadoForm.get('dni')?.value,
        nombre: this.empleadoForm.get('nombre')?.value,
        tipoEmpleado: this.empleadoForm.get('tipoEmpleado')?.value,
        fechaContratacion: this.empleadoForm.get('fechaContratacion')?.value,
        sueldoMes: this.empleadoForm.get('sueldoMes')?.value,
        empresaContratista: this.empleadoForm.get('empresaContratista')?.value,
      };

      this.empleadoService.crearPintor(PINTOR).subscribe((data) => {
        this.toastr.success('Pintor creado con exito !!');
        this.router.navigate(['/ver-empleados']);
      });
    }
    
  }

}
