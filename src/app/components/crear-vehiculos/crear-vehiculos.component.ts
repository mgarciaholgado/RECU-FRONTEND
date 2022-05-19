import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tDeportivo, tTodoterreno, tVehiculo } from 'src/app/models/vehiculo';
import { ClienteService } from 'src/app/services/cliente.service';
import { VehiculoService } from 'src/app/services/vehiculos.service';


@Component({
  selector: 'app-crear-vehiculos',
  templateUrl: './crear-vehiculos.component.html',
  styleUrls: ['./crear-vehiculos.component.css'],
})
export class CrearVehiculosComponent implements OnInit {
  propietarios!: any[];
  vehiculoForm: FormGroup;
  titulo = 'Crear Vehiculo';
  matricula: string | null;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _vehiculosService: VehiculoService,
    private clienteService: ClienteService,
    private aRouter: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.clienteService.getClientes().subscribe((dni)=>{
      this.propietarios = dni;
    })

    this.vehiculoForm = this.fb.group({
      DNIpropietario: ['', Validators.required],
      matricula: ['',Validators.required,],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      color: ['', Validators.required],
      precio: ['', Validators.required],
      tVehiculo: ['', Validators.required],
      potencia: ['', Validators.required],
      traccion: ['', Validators.required],
    });
    this.matricula = this.aRouter.snapshot.paramMap.get('matricula');
  }

  ngOnInit(): void {
   
  }

  crearVehiculo() {
    if (this.vehiculoForm.value.tVehiculo == 'Todoterreno'){
      
      const TODOTERRENO: tTodoterreno = {
      DNIpropietario:this.vehiculoForm.get('DNIpropietario')?.value,
      matricula: this.vehiculoForm.get('matricula')?.value,
      marca: this.vehiculoForm.get('marca')?.value,
      modelo: this.vehiculoForm.get('modelo')?.value,
      color: this.vehiculoForm.get('color')?.value,
      precio: this.vehiculoForm.get('precio')?.value,
      tipoVehiculo: this.vehiculoForm.get('tVehiculo')?.value,
      traccion: this.vehiculoForm.get('traccion')?.value,
    };
    this._vehiculosService.crearTodoterreno(TODOTERRENO).subscribe((data) => {
      this.toastr.success('Vehiculo creado con exito!!');
      this.router.navigate(['/ver-vehiculos']);
    });
  } else if (this.vehiculoForm.value.tVehiculo == 'Deportivo'){
    const DEPORTIVO: tDeportivo = {
      DNIpropietario:this.vehiculoForm.get('DNIpropietario')?.value,
      matricula: this.vehiculoForm.get('matricula')?.value,
      marca: this.vehiculoForm.get('marca')?.value,
      modelo: this.vehiculoForm.get('modelo')?.value,
      color: this.vehiculoForm.get('color')?.value,
      precio: this.vehiculoForm.get('precio')?.value,
      tipoVehiculo: this.vehiculoForm.get('tVehiculo')?.value,
      potencia: this.vehiculoForm.get('potencia')?.value,
    };
    this._vehiculosService.crearDeportivo(DEPORTIVO).subscribe((data) => {
      this.toastr.success('Vehiculo creado con exito!!');
      this.router.navigate(['/ver-vehiculos']);
    });
  }
    
 
}
  
}
