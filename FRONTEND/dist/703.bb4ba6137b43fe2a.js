"use strict";(self.webpackChunkPROYECTO_FRONTED=self.webpackChunkPROYECTO_FRONTED||[]).push([[703],{6703:(q,i,r)=>{r.r(i),r.d(i,{DashboardModule:()=>A});var s=r(9808),c=r(1083),t=r(5e3),u=r(6367),l=r(1377),p=r(6536);let m=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-navbar"]],decls:16,vars:0,consts:[["color","accent"],[1,"example-spacer"],["mat-button","","routerLink","/dashboard"],["mat-button","","routerLink","/crear-vehiculo"],["mat-button","","routerLink","/ver-reparaciones"],["mat-button",""],["routerLink","/logout","mat-icon-button","","aria-label","Example icon-button with menu icon",1,"example-icon"]],template:function(e,a){1&e&&(t.TgZ(0,"mat-toolbar",0),t.TgZ(1,"span"),t._uU(2,"Taller Dils"),t.qZA(),t._UZ(3,"span",1),t.TgZ(4,"button",2),t._uU(5,"Home"),t.qZA(),t.TgZ(6,"button",3),t._uU(7,"Nuevo vehiculo"),t.qZA(),t.TgZ(8,"button",4),t._uU(9,"Reparaciones"),t.qZA(),t.TgZ(10,"button",5),t._uU(11,"Graficos"),t.qZA(),t._UZ(12,"span",1),t.TgZ(13,"button",6),t.TgZ(14,"mat-icon"),t._uU(15,"logout"),t.qZA(),t.qZA(),t.qZA())},directives:[u.Ye,l.lW,c.rH,p.Hw],styles:[".example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}"]}),o})(),h=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-dashboard"]],decls:2,vars:0,template:function(e,a){1&e&&(t._UZ(0,"app-navbar"),t._UZ(1,"router-outlet"))},directives:[m,c.lC],styles:[""]}),o})(),Z=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-inicio"]],decls:2,vars:0,template:function(e,a){1&e&&(t.TgZ(0,"p"),t._uU(1,"inicio works!"),t.qZA())},styles:[""]}),o})();var d=r(2900);const g=function(o){return["/editar-vehiculo",o]};function v(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"th",10),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._UZ(10,"i",11),t.TgZ(11,"i",12),t.NdJ("click",function(){const C=t.CHM(e).$implicit;return t.oxw().eliminarVehiculo(C._matricula)}),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=n.$implicit;t.xp6(2),t.Oqu(e._matricula),t.xp6(2),t.Oqu(e._marca),t.xp6(2),t.Oqu(e._color),t.xp6(2),t.Oqu(e._tipoVehiculo),t.xp6(2),t.Q6J("routerLink",t.VKq(5,g,e._matricula))}}const T=[{path:"",component:h,children:[{path:"",component:(()=>{class o{constructor(e){this._vehiculosService=e,this.listarVehiculos=[]}ngOnInit(){this.obtenerVehiculos()}obtenerVehiculos(){this._vehiculosService.getVehiculos().subscribe(e=>{this.listarVehiculos=e})}eliminarVehiculo(e){this._vehiculosService.eliminarVehiculo(e).subscribe(a=>{this.obtenerVehiculos()})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d.x))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-listar-vehiculos"]],decls:21,vars:1,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-lg-6","offset-lg-3"],[1,"card"],[1,"card-body","text-center"],[1,"titulo"],[1,"table","mt-3"],[1,"table-dark"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],[1,"fas","fa-pen-to-square",3,"routerLink"],[1,"fas","fa-trash-can","text-danger",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"span",5),t._uU(6,"LISTADO DE VEHICULOS"),t.qZA(),t.TgZ(7,"table",6),t.TgZ(8,"thead",7),t.TgZ(9,"tr"),t.TgZ(10,"th",8),t._uU(11,"Matricula"),t.qZA(),t.TgZ(12,"th",8),t._uU(13,"Marca"),t.qZA(),t.TgZ(14,"th",8),t._uU(15,"Color"),t.qZA(),t.TgZ(16,"th",8),t._uU(17,"Tipo de coche"),t.qZA(),t._UZ(18,"th"),t.qZA(),t.qZA(),t.TgZ(19,"tbody"),t.YNc(20,v,12,7,"tr",9),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(20),t.Q6J("ngForOf",a.listarVehiculos))},directives:[s.sg,c.rH],styles:[".fas[_ngcontent-%COMP%]{cursor:pointer;margin-left:7px}"]}),o})()},{path:"/ver-graficos",component:Z}]}];let f=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.Bz.forChild(T)],c.Bz]}),o})();var b=r(7314);let A=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[s.ez,f,b.m]]}),o})()}}]);