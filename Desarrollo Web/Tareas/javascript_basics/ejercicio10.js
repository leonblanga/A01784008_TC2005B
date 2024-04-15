// Leon Blanga Hasbani | A01784008

function palindromono(string) {
    let stringInv = string.split('').reverse().join('');
    return string === stringInv;
}

// Caso 1
let string = 'anitalavalatina';
let texto = palindromo(string);

// Caso 2
string = 'oso';
texto = palindromo(string);

// Caso 3
string = 'reconocer';
texto = palindromo(string);

