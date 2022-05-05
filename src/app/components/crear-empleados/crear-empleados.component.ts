import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tEmpleado, tMecanico, tPintor } from 'src/app/models/empleados';
import { ClienteService } from 'src/app/services/cliente.service';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-crear-empleados',
  templateUrl: './crear-empleados.component.html',
  styleUrls: ['./crear-empleados.component.css'],
})
export class CrearEmpleadosComponent implements OnInit {
  empleado!: any;
  empleadoForm: any;
  titulo = 'Crear Empleado';
  dni: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private empleadoService: EmpleadosService,
    private aRouter: ActivatedRoute
  ) {
    this.empleadoForm = this.fb.group({
      dni: ['', Validators.required],
      nombre: ['', Validators.required],
      tipoEmpleado: ['', Validators.required],
      fechaContratacion: ['', Validators.required],
    });
    this.dni = this.aRouter.snapshot.paramMap.get('dni');
  }

  ngOnInit(): void {
    //this.editEmpleado();
  }
  crearEmpleado() {
    const MECANICO: tMecanico = {
      dni: this.empleadoForm.get('propietario')?.value,
      nombre: this.empleadoForm.get('matricula')?.value,
      tipoEmpleado: this.empleadoForm.get('marca')?.value,
      fechaContratacion: this.empleadoForm.get('color')?.value,
      sueldoMes: this.empleadoForm.get('sueldoMes')?.value,
    };

    const PINTOR: tPintor = {
      dni: this.empleadoForm.get('propietario')?.value,
      nombre: this.empleadoForm.get('matricula')?.value,
      tipoEmpleado: this.empleadoForm.get('marca')?.value,
      fechaContratacion: this.empleadoForm.get('color')?.value,
      precioHora: this.empleadoForm.get('sueldoMes')?.value,
    };

    switch (this.empleado.tipoEmpleado) {
      case 'mecanico':
        let mecanico = MECANICO
        this.empleadoService.crearMecanico(mecanico).subscribe((data) => {
          this.router.navigate(['/dashboard']);
        });
        break;

      case 'pintor':
        let pintor = PINTOR
        this.empleadoService.crearPintor(pintor).subscribe((data) => {
          this.router.navigate(['/dashboard']);
        });
        break;

      default:
        break;
    }
  }
}
