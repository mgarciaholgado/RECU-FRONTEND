import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Empleados, Mecanico, SalarioT, tMecanico } from 'src/app/models/empleados';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-grafico-empleados',
  templateUrl: './grafico-empleados.component.html',
  styleUrls: ['./grafico-empleados.component.css'],
})
export class GraficoEmpleadosComponent implements OnInit {
  arraySueldo: tMecanico[] = [];
  listadoSalarios: SalarioT [] = [];

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: any = {
    chart: {
      backgroundColor: {
        linearGradient: [500, 500, 500, 500],
        stops: [[0, 'rgb(255, 255, 255)']],
      },
      type: 'column',
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: [],
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: 'Salario al Año',
        data1: [],
        color: '#68A7AD',
      },
    ],
  };

  constructor(private empleadoService: EmpleadosService) {}

  ngOnInit(): void {
    this.obtenerSueldoMecanicosAnual();
  }

  obtenerSueldoMecanicosAnual(){
    this.empleadoService.getAnualSalario().subscribe((data) =>{
      this.listadoSalarios = data.map((salary:any)=>{
        return new SalarioT(salary._dni,salary._nombre,salary._sueldoTotal)
      })

      const dataSeries = this.listadoSalarios.map((x: SalarioT)=> x._sueldoTotal)
      const dataCategorias = this.listadoSalarios.map((x: SalarioT)=> x._nombre)

      this.chartOptions.title["text"] = "Salario Año Mecanicos"
      this.chartOptions.series[0]["data"] = dataSeries
      this.chartOptions.xAxis["categories"] = dataCategorias
      this.chartOptions.series["name"] = "Mecanicos"


      Highcharts.chart("mecanico",this.chartOptions)
      
      
    })

    }
}
