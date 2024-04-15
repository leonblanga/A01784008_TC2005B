// Leon Blanga Hasbani | A01784008.

function frecuente(lista) {
    let frecuencia = {};
    let max = 0;
    let frecuente = '';

    for (let i = 0; i < lista.length; i++) {
        let palabra = lista[i];
        if (frecuencia[palabra]) {
            frecuencia[palabra]++;
        } else {
            frecuencia[palabra] = 1;
        }
        if (frecuencia[palabra] > max) {
            frecuente = palabra;
            max = frecuencia[palabra];
        }
    }

    return frecuente;
}

// Caso 1
let lista = ['hola', 'adios', 'hello', 'como estas'];
let frecuente = frecuente(lista);

// Caso 2
lista = ['palabras', "muchas palabras", "muchisimas palabras", "string no corto"];
frecuente = frecuente(lista);

// Caso 3
lista = ['corto', 'string muy corto', 'string no tan corto', 'string nada corto'];  
frecuente = frecuente(lista);
