// Leon Blanga Hasbani | A01784008

function hackerSpeak(cadena) {
    let hacker = '';
    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i];
        switch (caracter) {
            case 'a':
                hacker += '4';
                break;
            case 'e':
                hacker += '3';
                break;
            case 'i':
                hacker += '1';
                break;
            case 'o':
                hacker += '0';
                break;
            case 's':
                hacker += '5';
                break;
            default:
                hacker += caracter;
        }
    }
    return hacker;
}

// Caso 1
let string = 'Javascript es divertido';
let hacker = hackerSpeak(string);
console.log('1- ' + hacker);

// Caso 2
string = 'Caso prueba 2';
hacker = hackerSpeak(string);
console.log('2- ' + hacker);

// Caso 3
string = 'Probando caso 3';
hacker = hackerSpeak(string);
console.log('3- ' + hacker);

