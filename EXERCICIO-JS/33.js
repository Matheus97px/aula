let vetorInteiro = [1, 2, 3, 4 ]
let vetorString = ['1', '2', '3', '4']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

function concatenar (vetor1, vetor2) { //pode usar arguments   args
    resultado = []
    for(let i = 0; i<vetor1.length; i++){
        resultado = resultado.concat(vetor1[i])
    }
    for(let i = 0; i<vetor2.length; i++){
        resultado = resultado.concat(vetor2[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))
