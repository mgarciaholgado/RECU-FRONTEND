import { Component, OnInit } from '@angular/core';
import { Empleados } from 'src/app/models/empleados';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent implements OnInit {
  listarEmpleados: Empleados[] = [];
  constructor(private empleadoService: EmpleadosService) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  obtenerEmpleados(){
    this.empleadoService.getEmpleados().subscribe(data => {
      this.listarEmpleados = data;
    })
  }

  eliminarEmpleado(dni:any){
    this.empleadoService.eliminarEmpleado(dni).subscribe(data =>{
    this.obtenerEmpleados();
    })
  }

}
