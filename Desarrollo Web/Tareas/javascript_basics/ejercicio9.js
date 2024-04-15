
// Leon Blanga Hasbani | A01784008
function long(lista) {
    let min = lista[0].length;
    for (let i = 1; i < lista.length; i++) {
        if (lista[i].length < min) {
            min = lista[i].length;
        }
    }
    return min;
}

// Caso 1
let lista = ['hola', 'adios', 'que onda', 'como estas?'];
let min = long(lista);

// Caso 2
lista = ['palabras', "muchas palabras", "muchisimas palabras", "string no corto"];
min = long(lista);

// Caso 3
lista = ['corto', 'string muy corto', 'string no tan corto', 'string nada corto'];
min = long(lista);