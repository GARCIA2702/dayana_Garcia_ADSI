function validar(){
var nombre, apellido, profesion, correo;
  
nombre = document.getElementById("nombre").Value;
apellido = document.getElementById("apellido").Value;
profesion= document.getElementById("profesion").Value;
correo= document.getElementById("correo").Value;

if(nombre ===""){
    alert("Rellenar el campo de nombre");
    return false;
}
else if (apellido ===""){
    alert("Rellenar el campo de apellido");
    return false;
}

else if (profesion ===""){
    alert("Rellenar el campo de apellido");
    return false;
}
else if (correo ===""){
    alert("Rellenar el campo de apellido");
    return false;
}

}