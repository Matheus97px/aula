function inversao(valor) {
const tipo = typeof valor

if (tipo == "boolean") {return !valor }
 else if(tipo == "number") {return -valor}
 else {
    return `bolean ou number`
 }
 
}

console.log(inversao(3))
console.log(inversao(-3))
console.log(inversao('2'))
console.log(inversao(true))
console.log(inversao(false))