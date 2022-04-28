import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let CrearReparacionComponent = class CrearReparacionComponent {
    constructor(fb, router, _reparacionesService, vehiculoService, aRouter) {
        this.fb = fb;
        this.router = router;
        this._reparacionesService = _reparacionesService;
        this.vehiculoService = vehiculoService;
        this.aRouter = aRouter;
        this.titulo = 'Crear Reparacion';
        this.vehiculoService.getVehiculos().subscribe((matriculas) => {
            this.matriculas = matriculas;
        });
        this.reparacionForm = this.fb.group({
            codigo: ['', Validators.required],
            matricula: ['', Validators.required],
            nombre: ['', Validators.required],
            coste: ['', Validators.required],
        });
        this.codigo = this.aRouter.snapshot.paramMap.get('codigo');
    }
    ngOnInit() {
        this.editReparacion();
    }
    crearReparacion() {
        var _a, _b, _c, _d;
        const REPARACION = {
            codigo: (_a = this.reparacionForm.get('codigo')) === null || _a === void 0 ? void 0 : _a.value,
            matricula: (_b = this.reparacionForm.get('matricula')) === null || _b === void 0 ? void 0 : _b.value,
            nombre: (_c = this.reparacionForm.get('nombre')) === null || _c === void 0 ? void 0 : _c.value,
            coste: (_d = this.reparacionForm.get('coste')) === null || _d === void 0 ? void 0 : _d.value,
        };
        if (this.codigo !== null) {
            this._reparacionesService
                .editarReparacion(this.codigo, REPARACION)
                .subscribe((data) => {
                this.router.navigate(['/ver-reparaciones']);
            });
        }
        else {
            this._reparacionesService
                .crearReparaciones(REPARACION)
                .subscribe((data) => {
                this.router.navigate(['/ver-reparaciones']);
            });
        }
    }
    editReparacion() {
        if (this.codigo !== null) {
            this.titulo = 'Editar reparacion';
            this._reparacionesService
                .obtenerReparacion(this.codigo)
                .subscribe((data) => {
                this.reparacionForm.setValue({
                    codigo: data._codReparacion,
                    matricula: data._matricula,
                    nombre: data._nombreReparacion,
                    coste: data._CosteBase,
                });
            });
        }
    }
};
CrearReparacionComponent = __decorate([
    Component({
        selector: 'app-crear-reparacion',
        templateUrl: './crear-reparacion.component.html',
        styleUrls: ['./crear-reparacion.component.css'],
    })
], CrearReparacionComponent);
export { CrearReparacionComponent };
//# sourceMappingURL=crear-reparacion.component.js.map