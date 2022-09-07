function soma() {
    let soma = 0;
    for (i in arguments) {
        soma += arguments[i];
    }
    return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1.1, 2.2, 3.3));
console.log(soma(15, 47, 34));
console.log(soma(1.1, 2.2, "TESTE"));
console.log(soma('A', 'B', 'C'));