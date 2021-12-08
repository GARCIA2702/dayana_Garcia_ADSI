"use strict"
console.log("==FECHA ACTUAL==");

var hora= new Date();
var HoraActual= hora.getHours();
var minutosActual = hora.getMinutes();
var horasMinutos = HoraActual + minutosActual;
if(horasMinutos > 12 )  {
console.log("La hora es : "+ (HoraActual-12) +":" + minutosActual+ "PM");
}else if(horasMinutos < 12){
    console.log("La hora es : "+ (horasMinutos) +  minutosActual + "AM");

} else if (horasMinutos = 12){
    console.log("La hora es:" + horasMinutos)
}

console.log(" ==CUANTO DIAS FALTAN PARA MI PROXIMO CUMPLEAÑOS==");

//estableciuendo las 2 fechas
var fechaActual = new Date();
var fechaCumpleaños= new Date( "marzo 27 2022");
var msfechaActual= fechaActual.getTime();
var msfechaCumpleaños = fechaCumpleaños.getTime();
var difmsfechaCumpleaños = msfechaCumpleaños - msfechaActual;
var diasDif = difmsfechaCumpleaños / (1000 * 60 * 60 * 24);
diasDif =  Math.floor(diasDif); 
console.log("Dias restantes para mis cumpleaños= " + diasDif +" " +"dias.");

console.log("==REGISTRO QUE CARGUE LA FECHA Y GENERAR MENSAJE==");

var mesStr = ["enero", "febrero", "marzo", "abril", "mayo", "junio","julio","agosto","septiembre", "octubre", "noviembre", "diciembre"];
var fechaHoy = new Date ();
var fechaUsuario = new Date("december 8 2021")
var anyoUsuario = fechaUsuario.getFullYear();
var mesUsuario = fechaUsuario.getMonth();
var diaUsuario = fechaUsuario.getDate();
var anyoHoy = fechaHoy.getFullYear();
var mesHoy = fechaHoy.getMonth();
var diaHoy = fechaHoy.getDate();

if(diaUsuario === diaHoy && mesUsuario===mesHoy && anyoUsuario=== anyoHoy){
console.log("Hoy" + " " +  diaHoy + " " +  "de" + " " + mesStr[mesHoy] + " " + "del" + " " + anyoHoy + " "+  "Esta de cumpleaños Ana Lucias Ramirez ¡FELICITACIONES!")
}else{console.log("No hay cumpleañeros hoy!")};

console.log("==CUANTOS AÑOS VOY A CUMPLIR==")

var fechaActual = new Date();
var fechaNacimiento= new Date("marzo 27 2002");
 var anioActual= fechaActual.getFullYear();
 var anioNac=fechaNacimiento.getFullYear();
 var anioDIFF=anioActual-anioNac;
 console.log("Naci en el "+ anioNac);
 console.log( "Naci en el "+ anioNac + " " + " en el año "+  " " + anioActual + " " + "tengo" + " " + anioDIFF + " " + " Y en el 2022 voy a cumplir" + " " + (anioDIFF+1));












