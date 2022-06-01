export class Reparaciones {
    public _codReparacion: number;
    public _matricula: string;
    public _nombreReparacion: string;
    public _CosteBase: number;

    constructor(codReparacion:number,matricula:string,  nombreReparacion:string,costeBase:number) {
        this._codReparacion = codReparacion;
        this._matricula = matricula;
        this._nombreReparacion = nombreReparacion;
        this._CosteBase = costeBase;
    }

}

export type tReparaciones = {
    codigo: number;
    matricula: string;
    nombre: string;
    coste: number;
  };