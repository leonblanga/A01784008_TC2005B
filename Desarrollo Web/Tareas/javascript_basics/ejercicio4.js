// Leon Blanga Hasbani | A01784008

function cap(string) {
    let palabras = string.split(' ');
    let mayuscula = '';
    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];
        mayuscula += palabra[0].toUpperCase() + palabra.slice(1) + ' ';
    }
    return mayuscula.trim();
}

// Caso 1
let palabra = 'hola mundo';
let mayuscula = cap(palabra);
console.log('1- ' + mayuscula);

// Caso 2
palabra = 'hola como estas';
mayuscula = cap(palabra);
console.log('2- ' + mayuscula);

// Caso 3
palabra = 'hola';
mayuscula = cap(palabra);
console.log('3- ' + mayuscula);

