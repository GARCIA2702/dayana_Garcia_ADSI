"use strict"
var voto ="luisa";
var candidatos = ["Luisa", "Jesus", "Yolanda", "Hamir","Nulo", "En blanco"];
var votos = [0, 0, 0, 0, 0, 0,];
for(let i=0; i< candidatos.length; i++){
    if (voto === candidatos[i]){
        votos[i]++;
    }
}
console.log("==Resultados==");
for (let i=0; i< candidatos.length; i++){
    console.log(candidatos[i] + ":" + vatos[i]);
}
