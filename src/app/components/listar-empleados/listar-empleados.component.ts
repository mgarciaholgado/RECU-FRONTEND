import { Component, OnInit } from '@angular/core';
import { Empleados, tEmpleado } from 'src/app/models/empleados';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent implements OnInit {
  listarEmpleados: tEmpleado[] = [];
  constructor(private empleadoService: EmpleadosService) { 

   /* this.empleadoService.calcularSalario(this.dni_empleado).subscribe((respuesta) => {
      this.salario = respuesta.toString()
    })*/
  }

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
