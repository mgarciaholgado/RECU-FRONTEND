import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ListarVehiculosComponent } from '../listar-vehiculos/listar-vehiculos.component';
import { ListarReparacionComponent } from '../listar-reparacion/listar-reparacion.component';
import { ListarClientesComponent } from '../listar-clientes/listar-clientes.component';
const routes = [
    { path: '', component: DashboardComponent, children: [
            { path: '', component: ListarVehiculosComponent },
            { path: '/ver-reparaciones', component: ListarReparacionComponent },
            { path: '/ver-clientes', component: ListarClientesComponent },
        ] },
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], DashboardRoutingModule);
export { DashboardRoutingModule };
//# sourceMappingURL=dashboard-routing.module.js.map