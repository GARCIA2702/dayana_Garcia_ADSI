"use strict"
console.log("==Caracterres permitidos==");
var nombre1 ="orlando";
 var apellido1 ="gutierrez";
 var nombre2 ="federico";
var apellido2 = "ordoñez";
 var direccion = "cll 5 n 45-b32 los pinos";

 var nombreApellido = nombre1 + apellido1 + nombre2 + apellido2 + direccion;

if (nombreApellido.length>50){
    console.log("advertencia: ha excedido el numero de caracteres, debe ser menor de 50 y contiene numero de caracteres:" + nombreApellido.length);
}

console.log("==Elementos de un arreglo==");
 var nombres = new Array("pedro", "Luisa", "karla", "yesica");
 
   if (nombres[2] = nombres[2]);{
    console.log("El nombre coincide con la busqueda. El nombre es:"  + nombres[2]) }

console.log("==Lista de aprendices==");

var Aprendices=[ " ", "Natalia Castro"," Maria Lopez","Sebastian Reyes","Jesus Muñoz", "Carlos Figueroa", "Brenda Ordoñez", "Gerardo Garcia" ];
for(  var i = 1; i <= Aprendices.length -1; i++){
    console.log(i+ " " + Aprendices[i])
}
