import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Empleados, Mecanico, tMecanico } from 'src/app/models/empleados';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-grafico-empleados',
  templateUrl: './grafico-empleados.component.html',
  styleUrls: ['./grafico-empleados.component.css'],
})
export class GraficoEmpleadosComponent implements OnInit {
  listadoMecanicos: Mecanico[] = [];

  Highcharts: typeof Highcharts = Highcharts;
  
  chartOptions: any = {
    chart:
    {
      backgroundColor: {
        linearGradient: [500, 500, 500, 500],
        stops: [
          [0, 'rgb(255, 255, 255)'],
        ]
      },
      type: 'column'
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: []
    },
    credits: {
      enabled: false
    },
    series: [{
      name: '',
      data: [],
      color: '#B66467',
    }]
  };

  constructor(private empleadoService: EmpleadosService) {}

  ngOnInit(): void {
    this.obtenerSueldoMecanicos();
  }

  obtenerSueldoMecanicos() {
        this.empleadoService.getMecanicos().subscribe((result: any) => {

          this.listadoMecanicos = result.map((renta: any) => {
            return new Mecanico(renta._dni, renta._nombre, renta._fechaContratacion,renta._tipoEmpleado,renta._sueldoMes)
          })





// Creamos los objetos y usamos un método para representar el valor devuelto
const dataSeries = this.listadoMecanicos.map((x: Mecanico) => x._sueldoMes)
const dataCategorias = this.listadoMecanicos.map((x: Mecanico) => x._nombre)

this.chartOptions.title["text"] = "Ganancias de clientes empresariales"
this.chartOptions.series[0]["data"] = dataSeries
this.chartOptions.xAxis["categories"] = dataCategorias
this.chartOptions.series["name"] = "Empresas"

Highcharts.chart("renta", this.chartOptions)
      },
      error => console.log(error)
    );
  }
}
