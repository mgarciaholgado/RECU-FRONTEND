import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { CrearEmpleadosComponent } from './components/crear-empleados/crear-empleados.component';
import { CrearReparacionComponent } from './components/crear-reparacion/crear-reparacion.component';
import { CrearVehiculosComponent } from './components/crear-vehiculos/crear-vehiculos.component';
import { EditDeportivoComponent } from './components/edit-deportivo/edit-deportivo.component';
import { EditMecanicoComponent } from './components/edit-mecanico/edit-mecanico.component';
import { EditPintorComponent } from './components/edit-pintor/edit-pintor.component';

import { EditReparacionComponent } from './components/edit-reparacion/edit-reparacion.component';
import { EditTodoterrenoComponent } from './components/edit-todoterreno/edit-todoterreno.component';
import { GraficoEmpleadosComponent } from './components/grafico-empleados/grafico-empleados.component';
import { GraficoVehiculosComponent } from './components/grafico-vehiculos/grafico-vehiculos.component';

import { GraficosInicioComponent } from './components/graficos-inicio/graficos-inicio.component';
import { ListarClientesComponent } from './components/listar-clientes/listar-clientes.component';
import { ListarEmpleadosComponent } from './components/listar-empleados/listar-empleados.component';
import { ListarReparacionComponent } from './components/listar-reparacion/listar-reparacion.component';
import { ListarReparacionesVehiculoComponent } from './components/listar-reparaciones-vehiculo/listar-reparaciones-vehiculo.component';
import { ListarVehiculosClienteComponent } from './components/listar-vehiculos-cliente/listar-vehiculos-cliente.component';
import { ListarVehiculosComponent } from './components/listar-vehiculos/listar-vehiculos.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
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
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', loadChildren:()=> import('./components/dashboard/dashboard.module').then(x=>x.DashboardModule)},
  { path: 'editar-reparacion/:codigo', component: EditReparacionComponent },
  { path: 'editar-deportivo/:matricula', component: EditDeportivoComponent },
  { path: 'editar-todoterreno/:matricula', component: EditTodoterrenoComponent },
  { path: 'editar-mecanico/:dni', component: EditMecanicoComponent },
  { path: 'editar-pintor/:dni', component: EditPintorComponent },
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
