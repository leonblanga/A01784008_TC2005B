// Leon Blanga Hasbani | A01784008.

function potenciaDeDos(n) {
    let potencia = 1;
    while (potencia < n) {
        potencia *= 2;
    }
    return potencia === n;
}

// Caso 1
console.log(potenciaDeDos(152));

// Caso 2
console.log(potenciaDeDos(36));

// Caso 3
console.log(potenciaDeDos(27));
