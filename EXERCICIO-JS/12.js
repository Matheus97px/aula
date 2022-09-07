function fatorial (numero) {
    if (numero === 1 || numero === 0) {
        return 1
    }
    return numero * fatorial(numero - 1)
}



console.log(fatorial(0))
console.log(fatorial(1))
console.log(fatorial(3))
console.log(fatorial(4))
console.log(fatorial(5))
console.log(fatorial(6))
console.log(fatorial(7))
console.log(fatorial(8))
console.log(fatorial(9))
console.log(fatorial(10))
