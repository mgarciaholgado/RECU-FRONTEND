import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let CrearVehiculosComponent = class CrearVehiculosComponent {
    constructor(fb, router, _vehiculosService, aRouter) {
        this.fb = fb;
        this.router = router;
        this._vehiculosService = _vehiculosService;
        this.aRouter = aRouter;
        this.titulo = 'Crear Vehiculo';
        this.vehiculoForm = this.fb.group({
            matricula: ['', Validators.required],
            marca: ['', Validators.required],
            color: ['', Validators.required],
            tVehiculo: ['', Validators.required],
        });
        this.matricula = this.aRouter.snapshot.paramMap.get('matricula');
    }
    ngOnInit() {
        this.editVehiculo();
    }
    crearVehiculo() {
        var _a, _b, _c, _d;
        const VEHICULO = {
            matricula: (_a = this.vehiculoForm.get('matricula')) === null || _a === void 0 ? void 0 : _a.value,
            marca: (_b = this.vehiculoForm.get('marca')) === null || _b === void 0 ? void 0 : _b.value,
            color: (_c = this.vehiculoForm.get('color')) === null || _c === void 0 ? void 0 : _c.value,
            tipoVehiculo: (_d = this.vehiculoForm.get('tVehiculo')) === null || _d === void 0 ? void 0 : _d.value,
        };
        if (this.matricula !== null) {
            this._vehiculosService
                .editarVehiculo(this.matricula, VEHICULO)
                .subscribe((data) => {
                this.router.navigate(['/dashboard']);
            });
        }
        else {
            this._vehiculosService.crearVehiculo(VEHICULO).subscribe((data) => {
                this.router.navigate(['/dashboard']);
            });
        }
    }
    editVehiculo() {
        if (this.matricula !== null) {
            this.titulo = 'Editar Vehiculo';
            this._vehiculosService
                .obtenerVehiculo(this.matricula)
                .subscribe((data) => {
                this.vehiculoForm.setValue({
                    matricula: data._matricula,
                    marca: data._marca,
                    color: data._color,
                    tVehiculo: data._tipoVehiculo,
                });
            });
        }
    }
};
CrearVehiculosComponent = __decorate([
    Component({
        selector: 'app-crear-vehiculos',
        templateUrl: './crear-vehiculos.component.html',
        styleUrls: ['./crear-vehiculos.component.css'],
    })
], CrearVehiculosComponent);
export { CrearVehiculosComponent };
//# sourceMappingURL=crear-vehiculos.component.js.map