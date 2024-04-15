
// Leon Blanga Hasbani | A01784008

function descendente(lista) {
    return lista.sort((a, b) => b - a);
}

// Caso 1
let lista = [129, 27, 54, 13, 88];
console.log('1- ' + descendente(lista));

// Caso 2
lista = [72, 52, 40, 31, 1];
console.log('2- ' + descendente(lista));

// Caso 3
lista = [103, 176, 93, 8, 33];
console.log('3- ' + descendente(lista));