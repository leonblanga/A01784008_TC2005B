// Leon Blanga Hasbani | A01784008

function encontrar(cadena) {
    
    let frecuencia = {};

    // for que cuenta la frecuencia de cada carácter
    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i];
        if (frecuencia[caracter]) {
            frecuencia[caracter]++;
        } else {
            frecuencia[caracter] = 1;
        }
    }

    // for que encuentra el primer carácter no repetido
    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i];
        if (frecuencia[caracter] === 1) {
            return caracter;
        }
    }

    // return null si no hay carácter no repetido
    return null;
}

// Caso 1
let string = 'abacddbec';
let noRepetido = encontrar(string);
console.log('1- ' + noRepetido);

// Caso 2
string = 'abcbc';
noRepetido = encontrar(string);
console.log('2- ' + noRepetido);

// Caso 3
string = 'aabbcc';
noRepetido = encontrar(string);
console.log('3- ' + noRepetido);