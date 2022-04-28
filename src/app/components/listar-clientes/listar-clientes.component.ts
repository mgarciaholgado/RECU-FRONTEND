import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {
  listarClientes: Clientes[] = [];
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.obtenerCliente();
  }

  obtenerCliente(){
    this.clienteService.getClientes().subscribe(data => {
      this.listarClientes = data;
    })
  }

  eliminarCliente(dni:any){
    this.clienteService.eliminarCliente(dni).subscribe(data =>{
    this.obtenerCliente();
    })
  }

}
