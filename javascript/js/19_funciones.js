"use strict"

function llamarHora(){
    var fechaActual = new Date();
    var horaActual = fechaActual.getHours();
    var minutosActual = fechaActual.getMinutes();

    if ( horaActual <10){
        horaActual = "0" + minutosActual;
}

if (minutosActual < 10) {
    minutosActual = "0" + minutosActual;
}
alert("hora actual:" + horaActual + " " + minutosActual);
}

function presentacion(nombre, titulado){
    alert ("¬°BIENVENIDO!"+" " + nombre +" del ADSI"+" "+  titulado);
}

function validarDescuento(compra){
    var total = 0;
}
//si la compra es superior a $10000 tiene descuento del 10%

if (compra >= 10000){
    total = compra * .95;
}
else if (compra>= 5000 && compra <=9999){
    total = compra;
}
else{
    total = compra;
}
return total;


function calcaularDescuento(compra){
    alert("costo total: $" + validarDescuento(compra));
}

