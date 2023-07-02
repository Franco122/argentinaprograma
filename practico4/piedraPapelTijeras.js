function obtenerJugadaComputadora(){
    let max = 3;
    let jugada = ["piedra", "papel", "tijera"];
    let numeroComputadora = Math.floor( Math.random() * max);
    return jugada[numeroComputadora];
}

function obtenerJugadaUsuario(){
    const readlineSync = require('readline-sync');
    let jugadaUsuario = readlineSync.question("Ingrese piedra , papel o tijera: ");
    while(jugadaUsuario !== "piedra" && jugadaUsuario !== "tijera" && jugadaUsuario !== "papel") {
        jugadaUsuario = readlineSync.question("Opcion incorrecta. Ingrese piedra, papel o tijera: ");
    }
    return jugadaUsuario;
}

function determinarGanador(computadora, usuario){
    let ganadorComputadora = false;
    if((computadora == "piedra") && (usuario == "tijera")){
        ganadorComputadora = true;
    }else if((computadora == "tijera") && (usuario == "papel")){
        ganadorComputadora = true;
    }else if((computadora == "papel") && (usuario == "piedra")){
        ganadorComputadora = true;
}
    return ganadorComputadora
}

const readlineSync = require('readline-sync');
let numeroJugadas = readlineSync.question("Ingrese el numero de jugadas (1,2,3): ");
let usuarioGanadas = 0;
let computadoraGanadas = 0;

for(let i = 0; i < numeroJugadas; i++){

let computadora = obtenerJugadaComputadora();
let usuario = obtenerJugadaUsuario();
let ganador = determinarGanador(computadora, usuario);

if(computadora == usuario){
    console.log(`La computadora elegio: ${computadora}. El usuario eligio ${usuario}`);
    console.log("Empate")
}else{
    console.log(`La computadora elegio: ${computadora}. El usuario eligio ${usuario}`);
    if(ganador){ // si devuelve true es porque la computadora gano
        computadoraGanadas++;
        console.log("Gana la computadora")
    }else{
        usuarioGanadas++;
        console.log("Gana el usuario")
    }
}

console.log(`Victoria de la computadora: ${computadoraGanadas}`);
console.log(`Victoria del usuario: ${usuarioGanadas}`);
}