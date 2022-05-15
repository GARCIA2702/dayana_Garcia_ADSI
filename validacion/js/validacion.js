function validar(nombre,apellido,profesion,correo){
    
    var nom = document.getElementById(nombre).value;
    var ape = document.getElementById(apellido).value;
    var pro = document.getElementById(profesion).value;
    var corr = document.getElementById(correo).value;
    
   if (nom.length===0) {
        alert("Ingrese el Nombre");
      
    }
   if (ape.length===0) {
        alert("Ingrese la Apellido");
    
    }

    if (pro.length===0) {
        alert("Ingrese su Profesion");

    }


    if (corr.length===0) {
        alert("Ingrese su Correo");
       
    }
    
}    