// Leon Blanga Hasbani | A01784008

function quitaDup(n) {
    let sinDup = [];
    for (let i = 0; i < n.length; i++) {
        if (!sinDup.includes(n[i])) {
            sinDup.push(n[i]);
        }
    }
    return sinDup;
}

// Caso 1
let lista = [1, 0, 1, 1, 0, 0];
let sinDup = quitaDup(lista);
console.log('1- ' + sinDup);

// Caso 2
lista = [1, 2, 3, 4, 5];
sinDup = quitaDup(lista);
console.log('2- ' + sinDup);

// Caso 3
lista = [1, 1, 1, 1, 1];
sinDup = quitaDup(lista);
console.log('3- ' + sinDup);

