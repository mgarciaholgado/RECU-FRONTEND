import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let VehiculoService = class VehiculoService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:3000';
    }
    getVehiculos() {
        return this.http.get(this.url + '/verVehiculos');
    }
    eliminarVehiculo(matricula) {
        return this.http.delete(this.url + '/deleteVehiculo/' + matricula);
    }
    crearVehiculo(vehiculo) {
        return this.http.post(this.url + '/addVehiculo', vehiculo);
    }
    obtenerVehiculo(matricula) {
        return this.http.get(this.url + '/verVehiculo/' + matricula);
    }
    editarVehiculo(matricula, vehiculo) {
        return this.http.put(this.url + '/updateVehiculo/' + matricula, vehiculo);
    }
};
VehiculoService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], VehiculoService);
export { VehiculoService };
//# sourceMappingURL=vehiculos.service.js.map