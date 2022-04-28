import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ListarReparacionComponent = class ListarReparacionComponent {
    constructor(_reparacionesService) {
        this._reparacionesService = _reparacionesService;
        this.listarReparaciones = [];
    }
    ngOnInit() {
        this.obtenerReparaciones();
    }
    obtenerReparaciones() {
        this._reparacionesService.getReparaciones().subscribe(data => {
            this.listarReparaciones = data;
        });
    }
    eliminarReparaciones(codReparacion) {
        this._reparacionesService.eliminarReparaciones(codReparacion).subscribe(data => {
            this.obtenerReparaciones();
        });
    }
};
ListarReparacionComponent = __decorate([
    Component({
        selector: 'app-listar-reparacion',
        templateUrl: './listar-reparacion.component.html',
        styleUrls: ['./listar-reparacion.component.css']
    })
], ListarReparacionComponent);
export { ListarReparacionComponent };
//# sourceMappingURL=listar-reparacion.component.js.map