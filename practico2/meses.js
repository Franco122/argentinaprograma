const readlineSync = require('readline-sync');

let mes = readlineSync.question("Ingrese un numero del 1 al 12 (mes): ");

const meses = ["enero","febrero","marzo","abril","mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

 const totalDiaMes = [
    31, // enero
    28, // febrero
    31, // marzo 
    30, // abril
    31, // mayo
    30, // junio
    31, // julio
    31, // agosto
    30, // septiembre
    31, // octubre
    30, // noviembre
    31 // diciembre
]

if(mes >= 1 && mes <= 12){
    console.log(`"La cantidad de dias del mes de ${meses[mes - 1]} es ${totalDiaMes[mes - 1]}"`)
}