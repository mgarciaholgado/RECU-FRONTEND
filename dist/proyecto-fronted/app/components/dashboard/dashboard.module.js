import { __decorate } from "tslib";
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
let DashboardModule = class DashboardModule {
};
DashboardModule = __decorate([
    NgModule({
        declarations: [
            DashboardComponent,
            InicioComponent,
            NavbarComponent,
            CrearVehiculosComponent,
            CrearReparacionComponent,
            ListarReparacionComponent,
            CrearClienteComponent,
            ListarClientesComponent,
        ],
        imports: [CommonModule, DashboardRoutingModule, SharedModule],
    })
], DashboardModule);
export { DashboardModule };
//# sourceMappingURL=dashboard.module.js.map