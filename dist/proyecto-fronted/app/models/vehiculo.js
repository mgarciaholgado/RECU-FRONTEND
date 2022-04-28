export class Vehiculos {
    constructor(matricula, marca, color, tipoVehiculo) {
        this._matricula = matricula;
        this._marca = marca;
        this._color = color;
        this._tipoVehiculo = tipoVehiculo;
    }
    get matricula() {
        return this._matricula;
    }
    get color() {
        return this._color;
    }
    get marca() {
        return this._marca;
    }
    get tipoVehiculo() {
        return this._tipoVehiculo;
    }
}
//# sourceMappingURL=vehiculo.js.map