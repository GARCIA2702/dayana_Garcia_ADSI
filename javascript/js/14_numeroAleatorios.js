"use strict"
//generando numeros aleatorios numero da un nuermo de 0 a 9.99
var numeroAleatorio = Math.random();
console.log(numeroAleatorio);

//generando numeros aleatorios  entre 0 y 9 debe aparecer un numero entre el uno hasta el 9
var numeroAleatorio2 = Math.random() *10;
var numeroAleatorio2round = Math.floor(numeroAleatorio2);
if (numeroAleatorio2round === 0){
    numeroAleatorio2round = 1;
}
console.log(numeroAleatorio2round );

//Generando un numero aleatorio entre numero 0 hasta el 99
var numeroAleatorio3 = Math.random() *100;
var numeroAleatorio3round = Math.floor(numeroAleatorio3);
if (numeroAleatorio3round === 0){
    numeroAleatorio3round = 1;
}
console.log(numeroAleatorio3round);

