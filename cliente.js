let tipoCliente = "normal";
if(tipoCliente == "normal"){
    console.log(`Va a ser atendido en el módulo 1, por ser cliente ${tipoCliente}`);
} else if(tipoCliente == "preferencial"){
    console.log(`Están habilitados los módulos 2 o 3 por ser cliente ${tipoCliente}`);
} else{
    console.log("Usted no es cliente del banco, por favor diríjase al módulo 4.");
}