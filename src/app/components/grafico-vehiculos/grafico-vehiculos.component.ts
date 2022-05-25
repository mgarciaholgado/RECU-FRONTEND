import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { tValor, tValor2, tVehiculo } from 'src/app/models/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-grafico-vehiculos',
  templateUrl: './grafico-vehiculos.component.html',
  styleUrls: ['./grafico-vehiculos.component.css']
})
export class GraficoVehiculosComponent implements OnInit {
    arrayVehiculosDeportivos: tValor[] = [];
    arrayVehiculosTodoTerreno: tValor[] = [];
    vehiculo!: tValor2 ;
    sum!: number
    tmpVehiculo: tValor = new tValor("", "", "",  0);
    Highcharts: typeof Highcharts = Highcharts;

  chartOptions: any = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  title: {
      text: 'Coches con mas valor del taller'
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
      }
  },
  series: [{
      name: 'Valor',
      colorByPoint: true,
      data: []
  }]
  }
  

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit(): void {
      this.obtenerSueldoEmpleados();
  }

  obtenerSueldoEmpleados(){
    
    this.vehiculoService.getVehiculosValor().subscribe((data) => {
        for(this.vehiculo of data){
            if (this.vehiculo._tipoVehiculo == 'Deportivo') {
                this.arrayVehiculosDeportivos.push(this.vehiculo);
                
            }else if (this.vehiculo._tipoVehiculo == 'Todoterreno'){
                this.arrayVehiculosTodoTerreno.push(this.vehiculo);
            } 
        }
        let length = this.arrayVehiculosDeportivos.length;
        let length2 = this.arrayVehiculosTodoTerreno.length;
        console.log(length)
        
         
            this.chartOptions.series[0]["data"].push({
                 name: 'Deportivos',
                 y: length
             })

             this.chartOptions.series[0]["data"].push({
                name: 'TodoTerrenos',
                y: length2
            })

             Highcharts.chart("vehiculos",this.chartOptions)
         

         

    })
      
    }

}
