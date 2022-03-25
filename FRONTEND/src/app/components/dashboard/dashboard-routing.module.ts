import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ListarVehiculosComponent } from '../listar-vehiculos/listar-vehiculos.component';
import { CrearVehiculosComponent } from '../crear-vehiculos/crear-vehiculos.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children:[
    { path: '', component: ListarVehiculosComponent},
    //{ path: '/editar-vehiculo', component: CrearVehiculosComponent },
    { path: '/ver-graficos', component: InicioComponent},

  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
