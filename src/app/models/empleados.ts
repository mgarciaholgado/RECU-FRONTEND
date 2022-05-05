export abstract class Empleado {
    private _dni: string; 
    private _nombre: string;
    private _tipoEmpleado: string;
    private _fechaContratacion: Date;



    constructor(dni: string, nombre: string, tipoEmpleado:string, fechaContratacion: Date) {
        this._dni = dni;
        this._nombre = nombre;
        this._tipoEmpleado = tipoEmpleado;
        this._fechaContratacion = fechaContratacion;
    }

    get dni() {
        return this._dni
    }
    get nombre() {
        return this._nombre
    }
    get tipoEmpleado() {
        return this._tipoEmpleado
    }
    get fechaContratacion(){
        return this._fechaContratacion
    }
}

export class Mecanico extends Empleado {
    private _sueldoMes:number;
 
 
     constructor(dni: string, nombre: string, tipoEmpleado:string, fechaContratacion: Date, sueldoMes:number) {
         
         super(dni,nombre,tipoEmpleado,fechaContratacion);
         this._sueldoMes = sueldoMes;
     }
 
     //     GETTERS AND SETTERS      //
 
     get sueldoMes(){
         return this._sueldoMes
     }
 }

 export class Pintor extends Empleado {
    _precioHora: Number;
    

    constructor(dni: string, nombre: string, tipoEmpleado:string, fechaContratacion: Date, precioHora:number) {
        super(dni,nombre,tipoEmpleado,fechaContratacion);
        this._precioHora = precioHora;
    }

    //     GETTERS AND SETTERS      //

    get precioHora() {
        return this._precioHora
    }
    
}
export type tEmpleado = {
    dni: string;
    nombre: string;
    tipoEmpleado: string;
    fechaContratacion: Date;
  };

export type tMecanico = {
    dni: string;
    nombre: string;
    tipoEmpleado: string;
    fechaContratacion: Date;
    sueldoMes: number;
  };
  
  export type tPintor = {
    dni: string;
    nombre: string;
    tipoEmpleado: string;
    fechaContratacion: Date;
    precioHora: number;
    };