/*console.log(0.1 + 0.2);
let a = 0.1
let b = 0.2
let resultado = rea + b

console.log(resultado)

console.log(resultado.toString().replace(".", ","));*/
function invRealSoma(x, y) {
    const resultado = x + y
    const casas = resultado.toFixed(2);
    const trocaFinal = casas.toString().replace(".", ",")
    console.log(`R$:${trocaFinal}`)
    
}

function invRealSub(x, y) {
    const resultado = x - y
    const casas = resultado.toFixed(2);
    const trocaFinal = casas.toString().replace(".", ",")
    console.log(`R$:${trocaFinal}`)
    
}

function invRealDiv(x, y) {
    const resultado = x / y
    const casas = resultado.toFixed(2);
    const trocaFinal = casas.toString().replace(".", ",")
    console.log(`R$:${trocaFinal}`)
    
}

function invRealMult(x, y) {
    const resultado = x + y
    const casas = resultado.toFixed(2);
    const trocaFinal = casas.toString().replace(".", ",")
    console.log(`R$:${trocaFinal}`)
    
}

invRealSoma(0.1, 0.2)
invRealSub(0.1, 0.2)
invRealDiv(0.1, 0.2)
invRealMult(0.1, 0.2)
