let encendido = true;
let velocidad = 32;

if(encendido){
    console.log(`Su carro está encendido.`);
    if(velocidad == 0){
        console.log(`Carro en freno.`);
    } else if(velocidad > 0 && velocidad <= 100){
        console.log(`Carro en marcha.`);
    } else{
        console.log(`Evítese un accidente, exceso de velocidad.`)
    }
} else{
    console.log(`Encienda su vehículo.`);
}