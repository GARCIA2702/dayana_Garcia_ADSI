"use strict"
//redondear de forma automatica conel metodo round

var number1 = 4.4;//redondea hacia abajo
var number2 = 4.6;//redondea hacia arriba
var number3 = 4.5;//redondea hacia arriba
var number1Round = Math.round(number1);
var number2Round = Math.round(number2);
var number3Round = Math.round(number3);

console.log("variable 1:"  + number1Round + "\n" + "variable 2:"  + number2Round + "\n" + " variable 3:"  + number3Round);
//Redondear hacia el pisocon el metodo foor
console.log("==redondear con el metodo floor==");
var number4 = 4.9;
var number4floor = Math.floor(number4);
console.log("variable 4:" + number4floor);
//redondondear hacia el techo
console.log("==redondear con el metodo ceil ==");
var number5 = 6.7;
var number5ceil = Math.ceil(number5);
console.log("variable 5:" + number5ceil);



