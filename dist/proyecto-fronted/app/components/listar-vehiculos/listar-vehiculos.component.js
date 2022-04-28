import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ListarVehiculosComponent = class ListarVehiculosComponent {
    constructor(_vehiculosService) {
        this._vehiculosService = _vehiculosService;
        this.listarVehiculos = [];
    }
    ngOnInit() {
        this.obtenerVehiculos();
    }
    obtenerVehiculos() {
        this._vehiculosService.getVehiculos().subscribe((data) => {
            this.listarVehiculos = data;
        });
    }
    eliminarVehiculo(matricula) {
        this._vehiculosService.eliminarVehiculo(matricula).subscribe((data) => {
            this.obtenerVehiculos();
        });
    }
};
ListarVehiculosComponent = __decorate([
    Component({
        selector: 'app-listar-vehiculos',
        templateUrl: './listar-vehiculos.component.html',
        styleUrls: ['./listar-vehiculos.component.css'],
    })
], ListarVehiculosComponent);
export { ListarVehiculosComponent };
//# sourceMappingURL=listar-vehiculos.component.js.map