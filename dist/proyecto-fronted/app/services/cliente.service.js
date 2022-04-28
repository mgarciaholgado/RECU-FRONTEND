import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ClienteService = class ClienteService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:3000';
    }
    getClientes() {
        return this.http.get(this.url + '/verClientes');
    }
    eliminarCliente(dni) {
        return this.http.delete(this.url + '/deleteCliente/' + dni);
    }
    crearCliente(cliente) {
        return this.http.post(this.url + '/addCliente', cliente);
    }
    obtenerCliente(dni) {
        return this.http.get(this.url + '/verCliente/' + dni);
    }
    editarCliente(dni, cliente) {
        return this.http.put(this.url + '/updateCliente/' + dni, cliente);
    }
};
ClienteService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ClienteService);
export { ClienteService };
//# sourceMappingURL=cliente.service.js.map