"use strict"
let valorUnitario =document.getElementById("costoFijo").innerHTML;
mostrarTotal();

function pruebaSuma(){
    let cantidadLibro = document.getElementById("cantidadLibro").innerHTML;
    if(cantidadLibro<=9){
    cantidadLibro=Number(cantidadLibro)+ 1;
    document.getElementById("cantidadLibro").innerHTML = cantidadLibro;
}else{
    alert("no puedes pedir agregar mas libros");
}
    mostrarTotal();
    modificarTotal();
}
function pruebaResta(){
    
    let cantidadLibro = document.getElementById("cantidadLibro").innerHTML;
    if(cantidadLibro>=1){
    cantidadLibro=Number(cantidadLibro)- 1;
    document.getElementById("cantidadLibro").innerHTML = cantidadLibro;
}else{
    alert("no puedes pedir menos libros");
}
mostrarTotal();
modificarTotal();

}

function mostrarTotal(){
    let cantidadLibro = document.getElementById("cantidadLibro").innerHTML;
    let costo= Number(cantidadLibro) * Number(valorUnitario);
   
    document.getElementById("precioTotalNoFijo").innerHTML = costo;
}
function modificarTotal(){
    let cantidadLibro = document.getElementById("cantidadLibro").innerHTML;
    if (cantidadLibro ==1){
        document.getElementById("producto").innerHTML = cantidadLibro.toString() + "producto";
    }
    else{
        document.getElementById("producto").innerHTML = cantidadLibro.toString() + "productos";
    }
    mostrarTotal();
}

