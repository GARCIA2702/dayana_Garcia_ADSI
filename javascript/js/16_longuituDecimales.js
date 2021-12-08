"use strict"

//Metodo tofixed para recortar decimales
var promedio = 2.98454945890095;
promedio = promedio.toFixed(2);
console.log(promedio);

//forzando el redondeo
//Metodo slice para redondear
var  promedio2 = 2.45345676;
var promedio2Str = promedio2.toString();
var promedio2conv = promedio2Str.slice(0, 4);
var promedio2conv = parseFloat(promedio2conv);
console.log(promedio2conv);