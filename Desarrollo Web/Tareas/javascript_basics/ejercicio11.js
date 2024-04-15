// Leon Blanga Hasbani | A01784008


function ordena(lista) {
    return lista.sort();
}

// Caso 1
let lista = ['hola', 'adios', 'que onda', 'como estasmos'];
let ordenada = ordena(lista);

// Caso 2
lista = ['palabras', "muchas palabras", "muchisimas palabras", "string no corto"];
ordenada = ordena(lista);

// Caso 3
lista = ['corto', 'string muy corto', 'string no tan corto', 'string nada corto'];
ordenada = ordena(lista);