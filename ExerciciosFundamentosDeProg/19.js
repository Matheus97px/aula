function calcularMedia(total) {
 resultado = total.reduce((acumula, atual) => acumula + atual)
 console.log(`a media é ${resultado / total.length} `)
}


calcularMedia([0, 10])
calcularMedia([1, 2, 3, 4, 5])

/// correcao
function calcularMedia2(numeros) {
    const quantidadeDeNumeros = numeros.length
    let somaTotal = 0
    for(numero of numeros) {
    somaTotal += numero
    }
    return somaTotal / quantidadeDeNumeros
    }
    
   console.log(calcularMedia2([0, 10]))
   console.log(calcularMedia2([1, 2, 3, 4, 5]))