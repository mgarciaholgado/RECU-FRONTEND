import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CrearVehiculosComponent } from '../crear-vehiculos/crear-vehiculos.component';
import { CrearReparacionComponent } from '../crear-reparacion/crear-reparacion.component';
import { ListarReparacionComponent } from '../listar-reparacion/listar-reparacion.component';
import { CrearClienteComponent } from '../crear-cliente/crear-cliente.component';
import { ListarClientesComponent } from '../listar-clientes/listar-clientes.component';
import { EditVehiculoComponent } from '../edit-vehiculo/edit-vehiculo.component';
import { EditReparacionComponent } from '../edit-reparacion/edit-reparacion.component';
import { ListarVehiculosComponent } from '../listar-vehiculos/listar-vehiculos.component';
import { CrearEmpleadosComponent } from '../crear-empleados/crear-empleados.component';
import { ListarEmpleadosComponent } from '../listar-empleados/listar-empleados.component';
import { GraficoEmpleadosComponent } from '../grafico-empleados/grafico-empleados.component';
import { GraficosInicioComponent } from '../graficos-inicio/graficos-inicio.component';
import { GraficoMvsPComponent } from '../grafico-mvs-p/grafico-mvs-p.component';
import { ListarVehiculosClienteComponent } from 'src/app/listar-vehiculos-cliente/listar-vehiculos-cliente.component';

@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    CrearVehiculosComponent,
    CrearReparacionComponent,
    ListarReparacionComponent,
    CrearClienteComponent,
    ListarClientesComponent,
    EditVehiculoComponent,
    EditReparacionComponent,
    ListarVehiculosComponent,
    CrearEmpleadosComponent,
    ListarEmpleadosComponent,
    NavbarComponent,
    GraficoEmpleadosComponent,
    GraficosInicioComponent,
    GraficoMvsPComponent,
    ListarVehiculosClienteComponent
    
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule,HighchartsChartModule,],
})
export class DashboardModule {}
