function maiorOuIgual(n1, n2) {
    if (n1 >= n2 && typeof n1 === typeof n2) {
        return true
    } else {
        return false
    }
}

console.log(maiorOuIgual(6, 1))
console.log(maiorOuIgual(6, 6))
console.log(maiorOuIgual(6, 8))
console.log(maiorOuIgual(6, "3"))

function maiorOuIgual1(primeiro, segundo) {
    if(typeof primeiro != typeof segundo) return false
    return primeiro >= segundo
    }
    
    console.log(maiorOuIgual1(6, 1))
    console.log(maiorOuIgual1(6, 6))
    console.log(maiorOuIgual1(6, 8))
    console.log(maiorOuIgual1(6, "3"))
    