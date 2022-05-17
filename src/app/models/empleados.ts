export class Empleado {
  public _dni: string;
  public _nombre: string;
  public _fechaContratacion: Date;
  public _sueldoMes: number;

  constructor(
    dni: string,
    nombre: string,
    fechaContratacion: Date,
    sueldoMes: number
  ) {
    this._dni = dni;
    this._nombre = nombre;
    this._fechaContratacion = fechaContratacion;
    this._sueldoMes = sueldoMes;
  }

  calcularSueldoAño(): number {
    let sueldo = this._sueldoMes;
    let sueldoAño = sueldo * 12;
    return sueldoAño;
  }
}

export class Mecanico extends Empleado {
  public _horasExtra: number;

  constructor(
    dni: string,
    nombre: string,
    fechaContratacion: Date,
    sueldoMes: number,
    horasExtra: number
  ) {
    super(dni, nombre, fechaContratacion, sueldoMes);
    this._horasExtra = horasExtra;
  }

  //     GETTERS AND SETTERS      //

  get horasExtra() {
    return this._horasExtra;
  }

  override calcularSueldoAño(): number {
    let sueldoAño: number = super.calcularSueldoAño();
    let calculoHoras: number = this.horasExtra * 20;
    let salarioTotal = sueldoAño + calculoHoras;
    return Math.round(salarioTotal);
  }
}

export class Pintor extends Empleado {
  public _empresaContratista: number;

  constructor(
    dni: string,
    nombre: string,
    fechaContratacion: Date,
    sueldoMes: number,
    empresaContratista: number
  ) {
    super(dni, nombre, fechaContratacion, sueldoMes);
    this._empresaContratista = empresaContratista;
  }

  //     GETTERS AND SETTERS      //

  get empresaContratista() {
    return this._empresaContratista;
  }
}

export type tEmpleado = {
  _dni: string;
  _nombre: string;
  _tipoEmpleado: string;
  _fechaContratacion: Date;
  _sueldoMes: number;
  _horasExtra: number;
  _empresaContratista: number;
};

export type tSalario = {
  _dni: string | null;
  _nombre: string | null;
 _sueldoTotal: number | null;
  
  }; 

export class SalarioT {
  public _dni: string | null;
  public _nombre: string | null;
  public _sueldoTotal: number | null;

  public constructor(dni:string,nombre:string,sueldoTotal:number){
    this._dni = dni,
    this._nombre = nombre,
    this._sueldoTotal = sueldoTotal
  }
}

export class SalarioT2 {
  public _dni: string;
  public _nombre: string;
  public _sueldoTotal: number;

  public constructor(dni:string,nombre:string,sueldoTotal:number){
    this._dni = dni,
    this._nombre = nombre,
    this._sueldoTotal = sueldoTotal
  }
}

export type tMecanico = {
  dni: string;
  nombre: string;
  tipoEmpleado: string;
  fechaContratacion: Date;
  sueldoMes: number;
  horasExtra: number;
};

export type tPintor = {
  dni: string;
  nombre: string;
  tipoEmpleado: string;
  fechaContratacion: Date;
  sueldoMes: number;
  empresaContratista: string;
};
