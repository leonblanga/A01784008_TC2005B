// Leon Blanga Hasbani | A01784008.

function factoriza(n) {
  let factor = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      factor.push(i);
    }
  }
  return factor;
}

//Caso 1
console.log(factoriza(12));

//Caso 2
console.log(factoriza(18));

//Caso 3
console.log(factoriza(26)); 