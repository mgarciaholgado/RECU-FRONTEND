export  class Vehiculos {
  public _DNIpropietario: string;
  public _matricula: string; 
  public _marca: string;
  public _modelo: string;
  public _color: string;
  public _precio: number;
  public _tipoVehiculo: string;


  constructor(DNIpropietario: string, matricula: string, marca: string, modelo: string, color: string, precio: number,tipoVehiculo:string) {
      this._DNIpropietario = DNIpropietario
      this._matricula = matricula;
      this._marca = marca;
      this._modelo = modelo
      this._color = color;
      this._precio = precio;
      this._tipoVehiculo = tipoVehiculo;
  }

  //     GETTERS AND SETTERS      //

  get DNIpropietario() {
      return this._DNIpropietario
  }

  get matricula() {
      return this._matricula
  }
  get marca() {
      return this._marca
  }

  get modelo() {
      return this._modelo
  }

  get color() {
      return this._color
  }

  get precio(){
      return this._precio
  }
  
  get tipoVehiculo(){
      return this._tipoVehiculo
  }
}
export type tVehiculo = {
 _DNIpropietario:string;
  _matricula: string;
  _marca: string;
  _modelo: string;
  _color: string;
  _precio: number;
  _tipoVehiculo: string;
  _traccion:string;
  _potencia:number;
};



export type tDeportivo = {
    DNIpropietario:string;
     matricula: string;
     marca: string;
     modelo: string;
     color: string;
     precio: number;
     tipoVehiculo: string;
     potencia:number;
   };

   export type tTodoterreno = {
    DNIpropietario:string;
     matricula: string;
     marca: string;
     modelo: string;
     color: string;
     precio: number;
     tipoVehiculo: string;
     traccion:string;
     
   };

   export type tValor2 = {
    _matricula: string | null;
  _tipoVehiculo: string | null;
  _modelo: string | null;
  _valor: number | null;
     
   };



export class tValor {
  public _matricula: string | null;
  public _tipoVehiculo: string | null;
  public _modelo: string | null;
  public _valor: number | null;
 
  

  public constructor(matricula: string | null,
    tipoVehiculo: string | null,
    modelo: string | null,
    valor: number | null){
      this._matricula = matricula;
      this._tipoVehiculo = tipoVehiculo;
      this._modelo = modelo;
      this._valor = valor;
      
  }
}
