"use strict"

//improimir fecha y hora del navegador

var currentTime = new Date();
console.log(currentTime);

//Desglozando fechas y horas
var anyo = currentTime.getFullYear();
console.log("Año:" + anyo);

var mes = currentTime.getMonth();
console.log("Mes:" +( mes + 1));

var dia = currentTime.getDay();
//console.log("Dia:" + dia);

// cambiar el numero del dia por texto
var diasStr = ["domingo", "lunes","martes", "miercoles","jueves", "viernes","sabado"];
console.log("Dia:" + diasStr[dia]);

var hora = currentTime.getHours();
console.log("Hora:" + hora);

var minutos = currentTime.getMinutes();
console.log("Minuto:" + minutos);

var segundos = currentTime.getSeconds();
console.log("Segundos:" + segundos);

var milisegundos = currentTime.getMilliseconds();
console.log("milisegundos:" + milisegundos);

//Fecha
var mesStr = ["enero", "febrero", "marzo", "abril", "mayo", "junio","julio","agosto","septiembre", "octubre", "noviembre", "diciembre"];
console.log("fecha:" + dia +" " + mes + " " + " de" + mesStr ) 

// Determinar si ya se vencio el plazo
// UTC  ES LA CONVINACION DE DOS PALABRAS
 

var fechaHoraLimite = new Date(Date.UTC(2021, 11, 9, 9, 30, 0));
fechaHoraLimite.setHours(8);
console.log("fecha y hora de vencimiento:" +fechaHoraLimite);
var anyoActual = new Date();

if (anyoActual <= fechaHoraLimite.getFullYear()&&
mesActual<= fechaHoraLimite.getMonth()&&
diaMes <= fechaHoraLimite.getDate() &&
horaActual <= fechaHoraLimite.getHours() &&
minutosActual <= fechaHoraLimite.getMinutes()){
console.log("falta:" + (diaMes - fechaHoraLimite.getDate()) + " dia," + (horaActual - fechaHoraLimite.getHours()) + "horas")
}