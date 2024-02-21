let emailBaseDatos = "susieguis@gmail.com";
let claveBaseDatos = "1234*";
let emailIngresado = "sueguis@gmail.com";
let claveIngresada = "1234*";
let nombreUsuario = "Suu";

if(emailIngresado == emailBaseDatos && claveIngresada == claveBaseDatos){
    console.log(`¡Bienvenido/a ${nombreUsuario}!, seleccione opciones del sistema.`);
} else{
    console.log("Acceso denegado.");
}