import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    CrearVehiculosComponent,
    CrearReparacionComponent,
    ListarReparacionComponent,
    CrearClienteComponent,
    ListarClientesComponent,
    EditVehiculoComponent,
    EditReparacionComponent
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
