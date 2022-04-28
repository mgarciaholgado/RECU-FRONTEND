import { __decorate } from "tslib";
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
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './components/shared/shared.module';
import { ListarVehiculosComponent } from './components/listar-vehiculos/listar-vehiculos.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            LoginComponent,
            ListarVehiculosComponent,
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            ReactiveFormsModule,
            BrowserAnimationsModule,
            HttpClientModule,
            SharedModule,
            RouterModule
        ],
        providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
        bootstrap: [AppComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map