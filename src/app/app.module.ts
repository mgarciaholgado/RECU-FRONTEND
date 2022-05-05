import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';



// COMPONENTES
import { AppComponent } from './app.component';
import { CrearReparacionComponent } from './components/crear-reparacion/crear-reparacion.component';
import { ListarReparacionComponent } from './components/listar-reparacion/listar-reparacion.component';
import { SharedModule } from './components/shared/shared.module';
import { ListarVehiculosComponent } from './components/listar-vehiculos/listar-vehiculos.component';
import { CrearVehiculosComponent } from './components/crear-vehiculos/crear-vehiculos.component';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { ListarClientesComponent } from './components/listar-clientes/listar-clientes.component';
import { EditVehiculoComponent } from './components/edit-vehiculo/edit-vehiculo.component';
import { EditReparacionComponent } from './components/edit-reparacion/edit-reparacion.component';
import { ListarEmpleadosComponent } from './components/listar-empleados/listar-empleados.component';
import { CrearEmpleadosComponent } from './components/crear-empleados/crear-empleados.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarEmpleadosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
