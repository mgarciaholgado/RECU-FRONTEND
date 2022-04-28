import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ReparacionService = class ReparacionService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:3000';
    }
    getReparaciones() {
        return this.http.get(this.url + '/verReparacion');
    }
    eliminarReparaciones(codReparacion) {
        return this.http.delete(this.url + '/deleteReparacion/' + codReparacion);
    }
    crearReparaciones(reparacion) {
        console.log(reparacion);
        return this.http.post(this.url + '/addReparacion', reparacion);
    }
    obtenerReparacion(codigo) {
        return this.http.get(this.url + '/verReparacion/' + codigo);
    }
    editarReparacion(codigo, reparacion) {
        return this.http.put(this.url + '/updateReparacion/' + codigo, reparacion);
    }
};
ReparacionService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ReparacionService);
export { ReparacionService };
//# sourceMappingURL=reparacion.service.js.map