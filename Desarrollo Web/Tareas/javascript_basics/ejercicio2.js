// Leon Blanga Hasbani | A01784008

function bubbleSort(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        for (let j = 0; j < numeros.length - 1; j++) {
            if (numeros[j] > numeros[j + 1]) {
                let temp = numeros[j];
                numeros[j] = numeros[j + 1];
                numeros[j + 1] = temp;
            }
        }
    }
}

// Caso 1
let lista = [47, 211, 1, 33];
bubbleSort(lista);
console.log('1- ' + lista);

// Caso 2
lista = [15, 8, 76, 92];
bubbleSort(lista);
console.log('2- ' + lista);

// Caso 3
lista = [375, 629, 5, 92];
bubbleSort(lista);
console.log('3- ' + lista);