let lista = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
let admitidos = [];
let rechazados = [];
let longitud = lista.length;

for(let i = 0; i < longitud; i ++){
    if((lista[i] == "Jose") || (lista[i] == "Sofia")){
        rechazados.push(lista[i]);
    }else{
        admitidos.push(lista[i]);
    }
}

console.log("La lista de invitados admitidos es: ")
for(let contador1 = 0; contador1 < admitidos.length; contador1++){
    console.log(admitidos[contador1])
}

console.log("La lista de invitados rechazados es: ")
for(let contador2 = 0; contador2 < rechazados.length; contador2++){
    console.log(rechazados[contador2])
}

let listaOrdenada = admitidos.sort();
console.log("La lista ordenada de invitados admitidos es: ")
for(let contador3 = 0; contador3 < listaOrdenada.length; contador3++){
    console.log(listaOrdenada[contador3])
}