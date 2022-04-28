import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearReparacionComponent } from './components/crear-reparacion/crear-reparacion.component';
import { CrearVehiculosComponent } from './components/crear-vehiculos/crear-vehiculos.component';
import { ListarReparacionComponent } from './components/listar-reparacion/listar-reparacion.component';
import { ListarVehiculosComponent } from './components/listar-vehiculos/listar-vehiculos.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'crear-vehiculo', component: CrearVehiculosComponent },
  { path: 'ver-reparaciones', component: ListarReparacionComponent },
  { path: 'crear-reparacion', component: CrearReparacionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', loadChildren:()=> import('./components/dashboard/dashboard.module').then(x=>x.DashboardModule)},
  { path: 'editar-reparacion/:codigo', component: CrearReparacionComponent },
  { path: 'editar-vehiculo/:matricula', component: CrearVehiculosComponent },
  { path: '**', redirectTo: 'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
