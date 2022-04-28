export class Vehiculos {
  public _matricula: string;
  public _marca: string;
  public _color: string;
  public _tipoVehiculo: string;

  constructor(
    matricula: string,
    marca: string,
    color: string,
    tipoVehiculo: string
  ) {
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
export type tVehiculo = {
  matricula: string;
  marca: string;
  color: string;
  tipoVehiculo: string;
};
