export class Reparaciones {
    public _codReparacion: number;
    public _matricula: string;
    public _nombreReparacion: string;
    public _CosteBase: number;

    constructor(codigo:number, matricula:string,nombre: string, coste: number){
        this._codReparacion = codigo;
        this._matricula = matricula;
        this._nombreReparacion = nombre;
        this._CosteBase = coste;
    }

}

export type tReparaciones = {
    codigo: number;
    matricula: string;
    nombre: string;
    coste: number;
  };