export class Clientes {
    public _dni: string;
    public _nombre: string;
    public _telefono: number;

    constructor(dni:string, nombre:string, telefono:number){
        this._dni = dni,
        this._nombre = nombre,
        this._telefono = telefono
    }

}

export type tCliente = {
    dni: string,
    nombre: string,
    telefono: number
  };