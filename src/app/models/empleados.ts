export class Empleados {
    public _dni: string; 
    public _nombre: string;
    public _tipoEmpleado: string;
    public _fechaContratacion: Date;



    constructor(dni: string, nombre: string, tipoEmpleado:string, fechaContratacion: Date) {
        this._dni = dni;
        this._nombre = nombre;
        this._tipoEmpleado = tipoEmpleado;
        this._fechaContratacion = fechaContratacion;
    }

   
}

export class Mecanico extends Empleados {
  public _sueldoMes:number;


   constructor(dni: string, nombre: string, tipoEmpleado:string, fechaContratacion: Date, sueldoMes:number) {
       
       super(dni,nombre,tipoEmpleado,fechaContratacion);
       this._sueldoMes = sueldoMes;
   }

   //     GETTERS AND SETTERS      //

   get sueldoMes(){
       return this._sueldoMes
   }
}

export class Pintor extends Empleados {
  _precioHora: number;
  

  constructor(dni: string, nombre: string, tipoEmpleado:string, fechaContratacion: Date, precioHora:number) {
      super(dni,nombre,tipoEmpleado,fechaContratacion);
      this._precioHora = precioHora;
  }

  //     GETTERS AND SETTERS      //

  get precioHora() {
      return this._precioHora
  }

  calcularSueldoMes():number{
    let precioHora = this._precioHora;
    let salarioMes = precioHora * 28;

    return Math.round(salarioMes)
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