const operando1 = document.getElementById("operando1");
const operando2 = document.getElementById("operando2");
const operador = document.getElementById("operador");
const boton = document.getElementById("calcular");
const resetButton = document.getElementById("reset");
const resultado = document.getElementById("resultado");

function suma(num1, num2) {
    return num1 + num2;
}

function resta(num1, num2) {
    return num1 - num2;
}

function producto(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    if (num2 === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return num1 / num2;
}

boton.addEventListener("click", () => {
    try {
        const numero1 = parseFloat(operando1.value);
        const numero2 = parseFloat(operando2.value);
        const operadorSeleccionado = operador.value;

        let resultadoCalculado;

        switch (operadorSeleccionado) {
            case "+":
                resultadoCalculado = suma(numero1, numero2);
                break;
            case "-":
                resultadoCalculado = resta(numero1, numero2);
                break;
            case "*":
                resultadoCalculado = producto(numero1, numero2);
                break;
            case "/":
                resultadoCalculado = division(numero1, numero2);
                break;
            default:
                throw new Error("**Operador no disponible**");
        }

        resultado.textContent = `El resultado es: ${resultadoCalculado}`;
    } catch (error) {
        resultado.textContent = `Error: ${error.message}`;
    }
});

resetButton.addEventListener("click", () => {
    operando1.value = "";
    operando2.value = "";
    resultado.textContent = "El resultado es: ";
});
