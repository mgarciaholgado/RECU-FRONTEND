import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ListarVehiculosComponent } from '../listar-vehiculos/listar-vehiculos.component';
import { CrearVehiculosComponent } from '../crear-vehiculos/crear-vehiculos.component';
import { ListarReparacionComponent } from '../listar-reparacion/listar-reparacion.component';
import { ListarClientesComponent } from '../listar-clientes/listar-clientes.component';
import { CrearEmpleadosComponent } from '../crear-empleados/crear-empleados.component';
import { GraficoEmpleadosComponent } from '../grafico-empleados/grafico-empleados.component';
import { ListarEmpleadosComponent } from '../listar-empleados/listar-empleados.component';
import { CrearClienteComponent } from '../crear-cliente/crear-cliente.component';
import { GraficosInicioComponent } from '../graficos-inicio/graficos-inicio.component';
import { CrearReparacionComponent } from '../crear-reparacion/crear-reparacion.component';
import { GraficoVehiculosComponent } from '../grafico-vehiculos/grafico-vehiculos.component';
import { EditReparacionComponent } from '../edit-reparacion/edit-reparacion.component';
import { EditDeportivoComponent } from '../edit-deportivo/edit-deportivo.component';
import { EditTodoterrenoComponent } from '../edit-todoterreno/edit-todoterreno.component';
import { EditMecanicoComponent } from '../edit-mecanico/edit-mecanico.component';
import { EditPintorComponent } from '../edit-pintor/edit-pintor.component';
import { ListarVehiculosClienteComponent } from '../listar-vehiculos-cliente/listar-vehiculos-cliente.component';
import { ListarReparacionesVehiculoComponent } from '../listar-reparaciones-vehiculo/listar-reparaciones-vehiculo.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {
    path: '',component: DashboardComponent,children: [
      { path: '', component: InicioComponent },
      { path: 'ver-reparaciones', component: ListarReparacionComponent },
      { path: 'ver-clientes', component: ListarClientesComponent },
      { path: 'ver-vehiculos', component: ListarVehiculosComponent },
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
      { path: 'grafico-2', component: GraficoVehiculosComponent },
      { path: 'editar-reparacion/:codigo', component: EditReparacionComponent },
      { path: 'editar-deportivo/:matricula', component: EditDeportivoComponent },
      { path: 'editar-todoterreno/:matricula', component: EditTodoterrenoComponent },
      { path: 'editar-mecanico/:dni', component: EditMecanicoComponent },
      { path: 'editar-pintor/:dni', component: EditPintorComponent },
      { path: 'editar-cliente/:dni', component:  CrearClienteComponent },
      { path: 'ver-reparaciones-vehiculo/:matricula', component:  ListarReparacionesVehiculoComponent },
      { path: 'ver-vehiculos-cliente/:dni', component:  ListarVehiculosClienteComponent },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
