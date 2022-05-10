import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { Empleados, Mecanico, Pintor, tMecanico } from 'src/app/models/empleados';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-grafico-empleados',
  templateUrl: './grafico-empleados.component.html',
  styleUrls: ['./grafico-empleados.component.css'],
})
export class GraficoEmpleadosComponent implements OnInit {
  listadoMecanicos: Mecanico[] = [];
  listadoPintores: Pintor[] = [];

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
      categories1: [],
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: 'Salario Mes',
        data1: [],
        color: '#68A7AD',
      },
      {
        name: 'Salario Mes',
        data1: [],
        color: '#BABD42',
      },
    ],
  };

  constructor(private empleadoService: EmpleadosService) {}

  ngOnInit(): void {
    this.obtenerSueldoMecanicos();
  }

  obtenerSueldoMecanicos() {
    this.empleadoService.getMecanicos().subscribe(
      (result: any) => {
        this.listadoMecanicos = result.map((renta: any) => {
          return new Mecanico(
            renta._dni,
            renta._nombre,
            renta._fechaContratacion,
            renta._tipoEmpleado,
            renta._sueldoMes
          );
        });
        
        const dataSeries = this.listadoMecanicos.map(
          (x: Mecanico) => x._sueldoMes
        );

        const dataCategorias = this.listadoMecanicos.map(
          (x: Mecanico) => x._nombre
        );

        this.chartOptions.title['text'] = 'Ganancias de clientes empresariales';
        this.chartOptions.series[0]['data'] = dataSeries;
        this.chartOptions.xAxis['categories'] = dataCategorias;
        this.chartOptions.series['name'] = 'Empresas';

        Highcharts.chart('renta', this.chartOptions);
      },
      (error) => console.log(error)
    );
  }

  obtenerSueldoPintores(){

  }

}
