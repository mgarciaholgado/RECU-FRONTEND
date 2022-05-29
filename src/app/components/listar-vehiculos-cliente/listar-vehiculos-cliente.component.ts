import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehiculos } from 'src/app/models/vehiculo';
import { ClienteService } from 'src/app/services/cliente.service';



@Component({
  selector: 'app-listar-vehiculos-cliente',
  templateUrl: './listar-vehiculos-cliente.component.html',
  styleUrls: ['./listar-vehiculos-cliente.component.css']
})
export class ListarVehiculosClienteComponent implements OnInit {
  
  listarVehiculosClientes: Vehiculos [] = []
  dni: any | null;
  
  constructor(private _clienteService: ClienteService, private aRouter: ActivatedRoute) { 
    this.dni = this.aRouter.snapshot.paramMap.get('dni');
  }

  ngOnInit(): void {
    this.obtenerClientesVehiculo();
  }
  obtenerClientesVehiculo(){
    this._clienteService.getClientesVehiculos(this.dni).subscribe(data => {
      this.listarVehiculosClientes = data
      
      console.log(this.listarVehiculosClientes)
      })

      
    
    
  }
  
}
