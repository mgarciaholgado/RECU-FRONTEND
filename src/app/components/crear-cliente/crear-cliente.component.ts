import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tCliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css'],
})
export class CrearClienteComponent implements OnInit {
  clienteForm: FormGroup;
  titulo = 'Crear Cliente';
  dni: string | null;
  constructor(
    private fb: FormBuilder,
    private router:Router,
    private clienteService:ClienteService,
    private aRouter: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.clienteForm = this.fb.group({
      dni: ['', Validators.required],
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      
    });
    this.dni = this.aRouter.snapshot.paramMap.get('dni');
  }

  ngOnInit(): void {
    this.editCliente();
  }

  crearCliente() {
    const CLIENTE: tCliente = {
      dni: this.clienteForm.get('dni')?.value,
      nombre: this.clienteForm.get('nombre')?.value,
      telefono: this.clienteForm.get('telefono')?.value,
    };

    if (this.dni !== null) {
      this.clienteService
        .editarCliente(this.dni, CLIENTE)
        .subscribe((data) => {
          this.toastr.success('Cliente editado con exito !!');
          this.router.navigate(['/dashboard/ver-clientes']);
        });
    } else {
      this.clienteService
        .crearCliente(CLIENTE)
        .subscribe((data) => {
          this.toastr.success('Cliente creado con exito !!');
          this.router.navigate(['/dashboard/ver-clientes']);
        });
    }
}

editCliente() {
  if (this.dni !== null) {
    this.titulo = 'Editar Cliente';
    this.clienteService
      .obtenerCliente(this.dni)
      .subscribe((data) => {
        this.clienteForm.setValue({
          dni: data._dni,
          nombre: data._nombre,
          telefono: data._telefono,
        });
      });
  }
}
}
