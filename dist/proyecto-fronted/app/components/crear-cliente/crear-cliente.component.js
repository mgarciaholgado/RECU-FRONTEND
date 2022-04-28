import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let CrearClienteComponent = class CrearClienteComponent {
    constructor(fb, router, clienteService, aRouter) {
        this.fb = fb;
        this.router = router;
        this.clienteService = clienteService;
        this.aRouter = aRouter;
        this.titulo = 'Crear Cliente';
        this.clienteForm = this.fb.group({
            dni: ['', Validators.required],
            nombre: ['', Validators.required],
            telefono: ['', Validators.required],
        });
        this.dni = this.aRouter.snapshot.paramMap.get('dni');
    }
    ngOnInit() {
        this.editCliente();
    }
    crearCliente() {
        var _a, _b, _c;
        const CLIENTE = {
            dni: (_a = this.clienteForm.get('dni')) === null || _a === void 0 ? void 0 : _a.value,
            nombre: (_b = this.clienteForm.get('nombre')) === null || _b === void 0 ? void 0 : _b.value,
            telefono: (_c = this.clienteForm.get('telefono')) === null || _c === void 0 ? void 0 : _c.value,
        };
        if (this.dni !== null) {
            this.clienteService
                .editarCliente(this.dni, CLIENTE)
                .subscribe((data) => {
                this.router.navigate(['/ver-clientes']);
            });
        }
        else {
            this.clienteService
                .crearCliente(CLIENTE)
                .subscribe((data) => {
                this.router.navigate(['/ver-clientes']);
            });
        }
    }
    editCliente() {
        if (this.dni !== null) {
            this.titulo = 'Editar Cliente';
            this.clienteService
                .obtenerCliente(this.dni)
                .subscribe((data) => {
                this.clienteForm.setValue({
                    dni: data._dni,
                    nombre: data._nombre,
                    telefono: data._telefono,
                });
            });
        }
    }
};
CrearClienteComponent = __decorate([
    Component({
        selector: 'app-crear-cliente',
        templateUrl: './crear-cliente.component.html',
        styleUrls: ['./crear-cliente.component.css'],
    })
], CrearClienteComponent);
export { CrearClienteComponent };
//# sourceMappingURL=crear-cliente.component.js.map