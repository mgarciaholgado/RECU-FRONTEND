import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { SalarioT, tMecanico } from 'src/app/models/empleados';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-grafico-mvs-p',
  templateUrl: './grafico-mvs-p.component.html',
  styleUrls: ['./grafico-mvs-p.component.css']
})
export class GraficoMvsPComponent implements OnInit {
  arraySueldo: tMecanico[] = [];
  listadoSalarios: SalarioT [] = [];
  
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: any = {
    chart: {
      renderTo: 'container',
      type: 'column',
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        depth: 50,
        viewDistance: 25
      }
  },
  title: {
      text: 'Chart rotation demo'
  },
  subtitle: {
      text: 'Test options by dragging the sliders below'
  },
  xAxis: {
    categories: [],
    crosshair: true
  },
  plotOptions: {
      column: {
          depth: 25
      }
  },
  series: [{
    type: "column",
      name: 'Empleado',
      colorByPoint: true,
      data: []
  },
  {
    type: "column",
      name: 'Hola',
      colorByPoint: true,
      data: [244]
  }],
  exporting: {
    enabled: true
  },
  };

  constructor(private empleadoService: EmpleadosService) { }

  ngOnInit(): void {
    this.obtenerSueldoMecanicosAnual()
  }

  obtenerSueldoMecanicosAnual(){
    this.empleadoService.getAnualSalario().subscribe((data) =>{
      this.listadoSalarios = data.map((salary:any)=>{
        return new SalarioT(salary._dni,salary._nombre,salary._sueldoTotal)
      })

      const dataSeries = this.listadoSalarios.map((x: SalarioT)=> x._sueldoTotal)
      const dataCategorias = this.listadoSalarios.map((x: SalarioT)=> x._dni)

      this.chartOptions.title["text"] = "Salario Año Mecanicos"
      this.chartOptions.series[0]["data"] = dataSeries
      this.chartOptions.xAxis.categories = dataCategorias
      this.chartOptions.series["name"] = "Mecanicos"


      Highcharts.chart("comparativa",this.chartOptions)
      
      
    })

    }

}