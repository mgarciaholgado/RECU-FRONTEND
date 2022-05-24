import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { CrearEmpleadosComponent } from './components/crear-empleados/crear-empleados.component';
import { CrearReparacionComponent } from './components/crear-reparacion/crear-reparacion.component';
import { CrearVehiculosComponent } from './components/crear-vehiculos/crear-vehiculos.component';

import { EditReparacionComponent } from './components/edit-reparacion/edit-reparacion.component';
import { GraficoEmpleadosComponent } from './components/grafico-empleados/grafico-empleados.component';
import { GraficoVehiculosComponent } from './components/grafico-vehiculos/grafico-vehiculos.component';

import { GraficosInicioComponent } from './components/graficos-inicio/graficos-inicio.component';
import { ListarClientesComponent } from './components/listar-clientes/listar-clientes.component';
import { ListarEmpleadosComponent } from './components/listar-empleados/listar-empleados.component';
import { ListarReparacionComponent } from './components/listar-reparacion/listar-reparacion.component';
import { ListarReparacionesVehiculoComponent } from './components/listar-reparaciones-vehiculo/listar-reparaciones-vehiculo.component';
import { ListarVehiculosComponent } from './components/listar-vehiculos/listar-vehiculos.component';
import { ListarVehiculosClienteComponent } from './listar-vehiculos-cliente/listar-vehiculos-cliente.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'crear-vehiculo', component: CrearVehiculosComponent },
  { path: 'ver-vehiculos', component: ListarVehiculosComponent },
  { path: 'ver-reparaciones', component: ListarReparacionComponent },
  { path: 'crear-empleado', component: CrearEmpleadosComponent },
  { path: 'ver-empleados', component: ListarEmpleadosComponent },
  { path: 'grafico-1', component: GraficoEmpleadosComponent },
  { path: 'ver-clientes', component: ListarClientesComponent },
  { path: 'crear-cliente', component: CrearClienteComponent },
  { path: 'inicio-graficos', component: GraficosInicioComponent },
  { path: 'crear-reparacion', component: CrearReparacionComponent },
  { path: 'grafico-2', component: GraficoVehiculosComponent},
  { path: 'dashboard', loadChildren:()=> import('./components/dashboard/dashboard.module').then(x=>x.DashboardModule)},
  { path: 'editar-reparacion/:codigo', component: EditReparacionComponent },
  { path: 'editar-cliente/:dni', component:  CrearClienteComponent },
  { path: 'ver-reparaciones-vehiculo/:matricula', component:  ListarReparacionesVehiculoComponent },
  { path: 'ver-vehiculos-cliente/:dni', component:  ListarVehiculosClienteComponent },
  { path: '**', redirectTo: 'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
