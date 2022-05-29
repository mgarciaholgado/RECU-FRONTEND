import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Clientes } from 'src/app/models/cliente';
import { Vehiculos } from 'src/app/models/vehiculo';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {
  listarClientes: Clientes[] = [];
  constructor(private _clienteService: ClienteService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes(){
    this._clienteService.getClientes().subscribe(data => {
      this.listarClientes = data;
    })
  }

  eliminarCliente(dni:any){
    this._clienteService.eliminarCliente(dni).subscribe(data =>{
      this.toastr.error('El cliente fue eliminado correctamente' , 'CLIENTE ELIMINADO')
    this.obtenerClientes();
    })
  }

}
