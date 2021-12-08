"use strict"
//conversion temporar de forma implicita
var num1 = "12";
var num2 = 4;
console.log("El resultado de la suma es: " +(num2 + num1));
console.log("El resultado de la resta es:" +( num2 + num1));

//conversion Explicita
var num3 = "20";
var num4 = 2;
var num3Int = parseInt(num3);
console.log("El resultado de la suma es:" + (num3Int + num4));

var num5 = "12.2";
var num6 = 4.5;
console.log("El resultado de la suma es:" + (parseFloat(num5) + num6));

var num7 =12;
var num8 = 10;
var num7str = num7.toString();
var num8str = num8.toString();
console.log("El rsultado de la suma es " + (num7str + num8str));

var num9 = "8";
var num10 = 3;
console.log("El resultado de la suma es:" + (Number(num9) + num10));
console.log("El resultado de la suma es:" + (num9 + num10));

