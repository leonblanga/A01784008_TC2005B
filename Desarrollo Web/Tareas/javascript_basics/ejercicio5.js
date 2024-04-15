// Leon Blanga Hasbani | A01784008


function mcd(a, b) {
    if (a === 0) {
        return b;
    }
    return mcd(b % a, a);
}

// Caso 1
let a = 12;
let b = 18;
let resultado = mcd(a, b);
console.log('1- ' + resultado);

// Caso 2
a = 10;
b = 15;
resultado = mcd(a, b);
console.log('2- ' + resultado);

// Caso 3
a = 20;
b = 25;
resultado = mcd(a, b);
console.log('3- ' + resultado);