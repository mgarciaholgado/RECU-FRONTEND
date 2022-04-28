import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { CrearReparacionComponent } from './components/crear-reparacion/crear-reparacion.component';
import { CrearVehiculosComponent } from './components/crear-vehiculos/crear-vehiculos.component';
import { ListarClientesComponent } from './components/listar-clientes/listar-clientes.component';
import { ListarReparacionComponent } from './components/listar-reparacion/listar-reparacion.component';
import { LoginComponent } from './components/login/login.component';
const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'crear-vehiculo', component: CrearVehiculosComponent },
    { path: 'ver-reparaciones', component: ListarReparacionComponent },
    { path: 'ver-clientes', component: ListarClientesComponent },
    { path: 'crear-cliente', component: CrearClienteComponent },
    { path: 'crear-reparacion', component: CrearReparacionComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(x => x.DashboardModule) },
    { path: 'editar-reparacion/:codigo', component: CrearReparacionComponent },
    { path: 'editar-vehiculo/:matricula', component: CrearVehiculosComponent },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map