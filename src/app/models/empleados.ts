export class Empleados {
    public _dni: string; 
    public _nombre: string;
    public _tipoEmpleado: string;
    public _fechaContratacion: Date;
    public _sueldoMes: number;



    constructor(dni: string, nombre: string, tipoEmpleado:string, fechaContratacion: Date,sueldoMes:number) {
        this._dni = dni;
        this._nombre = nombre;
        this._tipoEmpleado = tipoEmpleado;
        this._fechaContratacion = fechaContratacion;
        this._sueldoMes = sueldoMes;
    }

    calcularSueldoAño():number{
      let sueldo = this._sueldoMes;
      let sueldoAño = sueldo * 12
      return sueldoAño
    }

   
}

export class Mecanico extends Empleados {
  public _horasExtra:number;


   constructor(dni: string, nombre: string, tipoEmpleado:string, fechaContratacion: Date, sueldoMes:number, horasExtra:number) {
       
       super(dni,nombre,tipoEmpleado,fechaContratacion, sueldoMes);
       this._horasExtra = horasExtra;
   }

   //     GETTERS AND SETTERS      //

   get horasExtra(){
       return this._horasExtra
   }

   override calcularSueldoAño():number{
    let sueldoAño: number = super.calcularSueldoAño();
    let salarioTotal = sueldoAño + this._horasExtra
    return Math.round(salarioTotal)
   }

}

export class Pintor extends Empleados {
  public _empresaContratista: number;
  

  constructor(dni: string, nombre: string, tipoEmpleado:string, fechaContratacion: Date,sueldoMes:number ,empresaContratista:number) {
      super(dni,nombre,tipoEmpleado,fechaContratacion, sueldoMes);
      this._empresaContratista = empresaContratista;
  }

  //     GETTERS AND SETTERS      //

  get empresaContratista() {
      return this._empresaContratista
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
    horasExtra:number;
  };
  
  export type tPintor = {
    dni: string;
    nombre: string;
    tipoEmpleado: string;
    fechaContratacion: Date;
    sueldoMes: number;
    empresaContratista:string;
    };


