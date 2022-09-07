function soma(array) {
    const resultado = array.reduce(function(acumula, atual) {
       
        return acumula + atual
    })
    console.log(resultado)
}
/*
function soma(array) {
    const resultado = array.reduce((acumula, atual)=> acumula + atual)
    console.log(resultado)
}*/

soma([10, 10, 10])
soma([15, 15, 15, 15])

// correcao
function somarNumeros(numeros) {
const quantidadeDeNumeros = numeros.length
return (quantidadeDeNumeros === 0) ? 0 : numeros[0] + somarNumeros(numeros.slice(1))
}
    
function somarNumeros1(numeros) {
let soma = 0
numeros.forEach(numero => soma += numero)
return soma
}
        
function somarNumeros2(numeros) {
const soma = numeros.reduce( (acumulador, numeroAtual) => acumulador + numeroAtual, 0)
return soma
}
            
console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))
console.log(somarNumeros1([10, 10, 10]))
console.log(somarNumeros1([15, 15, 15, 15]))
console.log(somarNumeros2([10, 10, 10]))
console.log(somarNumeros2([15, 15, 15, 15]))