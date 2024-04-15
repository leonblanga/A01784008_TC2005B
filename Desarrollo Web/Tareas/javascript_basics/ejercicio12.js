// Leon Blanga Hasbani | A01784008
function m (lista) {
    let mediana = 0;
    let moda = 0;
    let frecuencia = {};
    let max = 0;
    let modaArray = [];
    let n = lista.length;
    let listaOrdenada = lista.sort((a, b) => a - b);

    // Mediana
    if (n % 2 === 0) {
        mediana = (listaOrdenada[n / 2 - 1] + listaOrdenada[n / 2]) / 2;
    } else {
        mediana = listaOrdenada[Math.floor(n / 2)];
    }

    // Moda
    for (let i = 0; i < n; i++) {
        let numero = lista[i];
        if (frecuencia[numero]) {
            frecuencia[numero]++;
        } else {
            frecuencia[numero] = 1;
        }
        if (frecuencia[numero] > max) {
            moda = numero;
            max = frecuencia[numero];
        }
    }

    for (let x in frecuencia) {
        if (frecuencia[x] === max) {
            modaArray.push(x);
        }
    }

    return [mediana, modaArray];
}

// Caso 1
let lista = [1, 2, 3, 4, 5];
let resultado = m(lista);
console.log('1- ' + resultado);

// Caso 2
lista = [11, 22, 33, 44, 54, 66];
resultado = m(lista);
console.log('2- ' + resultado);

// Caso 3
lista = [13, 24, 39, 41, 2];
resultado = m(lista);
console.log('3- ' + resultado);
