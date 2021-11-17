"use stric"
//producto mas costoso y menos costoso s
console.log("producto costoso y menos costoso");
var producto1 = 50000;
var producto2 = 40000;
var producto3 = 30000;
var producto4 = 20000;
if (producto1 > producto4){
    console.log("El producto mas costoso es de: $" + producto1 );
}
if (producto4 < producto3){
    console.log("El producto menos costoso es de: $" + producto4 );
}


//Usuario y Contraseña
console.log("usuario - contraseña");
var usuario1 = "andres felipe";
 var contraseña1 = 45345687;
 var usuario2 =  "rodrigo";
 var contraseña2 = 33354678;

  if(usuario1 === contraseña1 !== usuario2) {
     console.log("Bienvenido, disfruta de tu busqueda!");
 }

 else if(contraseña2 === contraseña1  && usuario2 === usuario1){
     console.log("error contraseña incorrecta");
 }
 else {
 console.log("contraseña y usuario incorrecto");
}


//Descuentos por compras
console.log("descuento por compras");
var cantidad1 = 1
var compra1 = 100000;
var descuento1 = 3;
var compra2 = 200000;
var descuento2 = 6000;
var comprar3 = 300000;
var descuento3 = 9000;
 var cantidadcompra = cantidad1  * compra1;
 var descuentocompra = compra1 / descuento1;
 var compradescuento = compra1 + descuentocompra;

console.log("el valor total sin descuento es $" + cantidadcompra);
console.log("El descuento total es $" + descuentocompra);
console.log("El valor total con descuento es $" + compradescuento);