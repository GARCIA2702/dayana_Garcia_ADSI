"use strict"

console.log( "==CAMBIANDO TODO A MAYUSCULA==");
var turismo = "Neiva, municipio con mas turismo";
var turismoMayuscula = turismo.toUpperCase();
console.log(turismoMayuscula);

console.log( "== CAMBIANDO TODO A MINUSCULA==");
var frase = "cOnOCe TodO LO quE Te pUEde oFREcer eL hERMOso MUnicIpio DE nEIVA";
var fraseMinuscula = frase.toLowerCase();
console.log(fraseMinuscula);


console.log("==PRIMERA LETRAEN MAYUSCULA==");
var primerletramayuscula = "pais hermoso que tenemos es colombia";
primerletramayuscula= primerletramayuscula[0].toUpperCase() + primerletramayuscula.slice(1);
console.log(primerletramayuscula);


console.log("==EXTRAYENDO PARTES DE LA CADENA DE TEXTO (SLICCE)==");
var anyo2 = "10103489";
var auxconsecutivo = anyo2.slice(3,5);
console.log(auxconsecutivo);


console.log("==CONTANDO CARACTERES==");
var materia = "lengua castellana";
console.log(materia);
console.log("longitud:" + materia.length);


console.log("==BUSCANDO ESPACIOS DOBLES==");
var nombres = "Maria,  Carlos,  Manuel";
for (var i = 0; i <= nombres.length; i++){
    if (nombres.slice(i, (i + 2)) ===  "  ") { 
    console.log(" la cadena tiene Espacios dobles");
    break;
}
}
console.log("==REMPLAZANDO TEXTO==");
var convinacion = " naranja y verde";
var cambio = "blanco";
for ( var i = 0; i < convinacion.length; i++){
    if(convinacion.slice(i, i + 6) === "verde"){
        convinacion = convinacion.slice(0, i);
    }
}
console.log(convinacion+ cambio);

console.log("==REEMPLAZANDO TEXTO CON INDEXOF==");
console.log( convinacion + cambio);
var convinacion2 = "Revolver dos colores hasta obtener un color claro";
var cambio2= convinacion2.indexOf( "dos")
if (cambio2 !== -1){
    convinacion2 = convinacion2.slice(0, cambio2) + "tres" + convinacion2.slice(cambio2+ 3);
    console.log(convinacion2);
}
console.log("==EXTRAER PRIMER CARACTER==");
var frase = "Rendirse es la ultima opcion";
var primercaracter = frase.charAt(0);
console.log(primercaracter);

console.log("==EXTRAER EL ULTIMO CARACTER");
var fase2 = "Rendirse es la ultima opcion";
var ultimocaracter = fase2.charAt(fase2.length -1);
console.log(ultimocaracter);

console.log("==BUSCANDO CARACTERES ESPECIALES==");
var frase3 = "¡El cielo se cae! -es muy buena  pelicula!"
for (var i = 0; i < frase3.length; i++){
    if (frase3.charAt(i) === "!"){
        console.log("La cadena tiene signos de admiración.");
    }
}
console.log("==REMPLAZANDO CARACTERES CON EL METODO REPLACE==");
var faunaFlora = "Tenemos diversas variedades de fauna";
faunaFlora = faunaFlora.replace("fauna","flora");
console.log(faunaFlora);
