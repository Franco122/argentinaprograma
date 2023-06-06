/* a. Crea cuatro variables que contengan valores numéricos. */

let numeroUno = 9;
let numeroDos = 2;
let numeroTres = 6;
let numeroCuatro = 10;

/* b. Suma las dos primeras variables y guarda el resultado en otra variable. */

let resultadoSuma = numeroUno + numeroDos;
/* c. Resta la cuarta variable de la tercera y almacena el resultado en otra variable. */

let resultadoResta = numeroCuatro - numeroTres;

/* d. Multiplica los resultados de los dos últimos pasos juntos, almacenando el
resultado en una variable llamada resultadoFinal. El producto debe ser
44. Si no lo es, deberá ajustar algunos de los valores de entrada iniciales. */

let resultadoFinal = resultadoSuma * resultadoResta;

let esPar = false;
if(resultadoFinal % 2 == 0){
   esPar = true;
}

console.log("Mis variables iniciales fueron: "+ numeroUno + " " + numeroDos + " " + numeroTres +  " y " + numeroCuatro);
console.log("La respuesta a verificar si el resultado final es par es: "+ esPar);