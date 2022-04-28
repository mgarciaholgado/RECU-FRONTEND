import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ListarClientesComponent = class ListarClientesComponent {
    constructor(clienteService) {
        this.clienteService = clienteService;
        this.listarClientes = [];
    }
    ngOnInit() {
        this.obtenerCliente();
    }
    obtenerCliente() {
        this.clienteService.getClientes().subscribe(data => {
            this.listarClientes = data;
        });
    }
    eliminarCliente(dni) {
        this.clienteService.eliminarCliente(dni).subscribe(data => {
            this.obtenerCliente();
        });
    }
};
ListarClientesComponent = __decorate([
    Component({
        selector: 'app-listar-clientes',
        templateUrl: './listar-clientes.component.html',
        styleUrls: ['./listar-clientes.component.css']
    })
], ListarClientesComponent);
export { ListarClientesComponent };
//# sourceMappingURL=listar-clientes.component.js.map