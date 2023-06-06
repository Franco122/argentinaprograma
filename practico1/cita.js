let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";

//  a)

let tamanioDeCita = cita.length;
console.log("El tamaño de la cita es: " + tamanioDeCita);

// b)

let indice = cita.indexOf(substring);
console.log("El indice del substring es: " + indice);

//  c)

let citaRevisada = cita.slice(0, indice) + substring + cita.slice(indice + substring.length);
console.log(citaRevisada);