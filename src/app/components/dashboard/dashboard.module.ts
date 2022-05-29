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
import { EditReparacionComponent } from '../edit-reparacion/edit-reparacion.component';
import { ListarVehiculosComponent } from '../listar-vehiculos/listar-vehiculos.component';
import { CrearEmpleadosComponent } from '../crear-empleados/crear-empleados.component';
import { ListarEmpleadosComponent } from '../listar-empleados/listar-empleados.component';
import { GraficoEmpleadosComponent } from '../grafico-empleados/grafico-empleados.component';
import { GraficosInicioComponent } from '../graficos-inicio/graficos-inicio.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListarReparacionesVehiculoComponent } from '../listar-reparaciones-vehiculo/listar-reparaciones-vehiculo.component';
import { GraficoVehiculosComponent } from '../grafico-vehiculos/grafico-vehiculos.component';
import { EditDeportivoComponent } from '../edit-deportivo/edit-deportivo.component';
import { EditTodoterrenoComponent } from '../edit-todoterreno/edit-todoterreno.component';
import { EditMecanicoComponent } from '../edit-mecanico/edit-mecanico.component';
import { EditPintorComponent } from '../edit-pintor/edit-pintor.component';
import { ListarVehiculosClienteComponent } from '../listar-vehiculos-cliente/listar-vehiculos-cliente.component';

@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    CrearVehiculosComponent,
    CrearReparacionComponent,
    ListarReparacionComponent,
    CrearClienteComponent,
    ListarClientesComponent,
    EditReparacionComponent,
    ListarVehiculosComponent,
    CrearEmpleadosComponent,
    ListarEmpleadosComponent,
    NavbarComponent,
    GraficoEmpleadosComponent,
    GraficosInicioComponent,
    ListarVehiculosClienteComponent,
    ListarReparacionesVehiculoComponent,
    GraficoVehiculosComponent,
    GraficosInicioComponent,
    EditDeportivoComponent,
    EditTodoterrenoComponent,
    EditMecanicoComponent,
    EditPintorComponent,
   
    
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule,HighchartsChartModule,],
})
export class DashboardModule {}
