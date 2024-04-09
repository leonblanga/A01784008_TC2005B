function encontrar(cadena) {
    const frecuencia = {};

    // Recorrer la cadena y contar la frecuencia de cada carácter
    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];
        if (frecuencia[caracter]) {
            frecuencia[caracter]++;
        } else {
            frecuencia[caracter] = 1;
        }
    }

    // Recorrer la cadena nuevamente y encontrar el primer carácter no repetido
    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];
        if (frecuencia[caracter] === 1) {
            return caracter;
        }
    }

    // Si no se encuentra ningún carácter no repetido
    return null;
}

// Prueba 1 de la función
let string = 'abacddbecx';
let noRepetido = encontrar(string);
console.log('1) ' + noRepetido);

// Prueba 2 de la función
string = 'abcbc';
noRepetido = encontrar(string);
console.log('2) ' + noRepetido);

// Prueba 3 de la función
string = 'aabbcc';
noRepetido = encontrar(string);
console.log('3) ' + noRepetido);