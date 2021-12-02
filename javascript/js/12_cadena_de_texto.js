"use strict"

//Convertir todo a mayuscula 
//Con touppercasc podemos convertir toda la palabra a mayuscula

//Un metodo = es lo que va despues de la variable y el punto y el pograma lo informa.

var ciudad = "pitalito";
var ciudadMayuscula = ciudad.toUpperCase();
console.log("ciudad: " + ciudadMayuscula);

//convertir todo a minuscula
//con tolowercase podemos onvertir todo a minuscula

var frase = "esTa Es unA FRAse eN miNUSculas";
var fraseMinuscula = frase.toLowerCase();
console.log(fraseMinuscula);


// charAt me permite extraer una letra cualquiera
//el metodo slice me corta una cadena de texto

//convertir todo en minuscula exceptuando la primera letra
var frase2 = "eSta Es OtRo EjEMplo  De UnA FRase"
var frase2Minuscula = frase.toLowerCase();
var primeraLetra = frase2.charAt(0);
var primeraLetraMayuscula = primeraLetra.toUpperCase();
console.log(primeraLetraMayuscula);
var caracteresFrase = frase2.length;
var fraseCompleta = primeraLetraMayuscula + frase2Minuscula.slice(1, caracteresFrase);
console.log(fraseCompleta);

//Metodo replace
//Este metodo remplaza u texto

var frase3 = "programador de bogota se volvio millonario con este metodo";
var cantLetrasFrase3 = frase3.length;
var localizacion = "pitalito";
var cantLetrasLocalizacion = localizacion.length;
 //for (var i= 0; i<=frase3 -1; i++)  {}
 var frase3Completa = frase3.slice(0, 15) + localizacion + " " + frase3.slice(15, frase3.length);
 console.log(frase3Completa);  
 




