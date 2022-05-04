import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { CrearReparacionComponent } from './components/crear-reparacion/crear-reparacion.component';
import { CrearVehiculosComponent } from './components/crear-vehiculos/crear-vehiculos.component';
import { EditReparacionComponent } from './components/edit-reparacion/edit-reparacion.component';
import { EditVehiculoComponent } from './components/edit-vehiculo/edit-vehiculo.component';
import { ListarClientesComponent } from './components/listar-clientes/listar-clientes.component';
import { ListarReparacionComponent } from './components/listar-reparacion/listar-reparacion.component';
import { ListarVehiculosComponent } from './components/listar-vehiculos/listar-vehiculos.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'crear-vehiculo', component: CrearVehiculosComponent },
  { path: 'ver-reparaciones', component: ListarReparacionComponent },
  { path: 'ver-clientes', component: ListarClientesComponent },
  { path: 'crear-cliente', component: CrearClienteComponent },
  { path: 'crear-reparacion', component: CrearReparacionComponent },
  { path: 'dashboard', loadChildren:()=> import('./components/dashboard/dashboard.module').then(x=>x.DashboardModule)},
  { path: 'editar-reparacion/:codigo', component: EditReparacionComponent },
  { path: 'editar-vehiculo/:matricula', component: EditVehiculoComponent },
  { path: 'editar-cliente/:dni', component:  CrearClienteComponent },
  { path: '**', redirectTo: 'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
