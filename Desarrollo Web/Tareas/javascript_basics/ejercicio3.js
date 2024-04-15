// Leon Blanga Hasbani | A01784008.

function invertirArreglo(numeros) {
    let invertido = [];
    for (let i = numeros.length - 1; i >= 0; i--) {
        invertido.push(numeros[i]);
    }
    return invertido;
}

function invertirArreglo2(numeros) {
    for (let i = 0; i < numeros.length / 2; i++) {
        let temp = numeros[i];
        numeros[i] = numeros[numeros.length - 1 - i];
        numeros[numeros.length - 1 - i] = temp;
    }
}

// Caso 1
let lista = [1, 2, 3, 4];
let invertido = invertirArreglo(lista);
console.log('1- ' + invertido);

// Caso 2
lista = [4, 3, 2, 1];
invertirArreglo2(lista);
console.log('2- ' + lista);

// Caso 3
lista = [5, 6, 7, 8, 9];
invertirArreglo2(lista);
console.log('3- ' + lista);
