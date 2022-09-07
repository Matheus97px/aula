function menorNumero(Array){
    let resultado = Array.reduce((anterior, atual) => anterior < atual ?
    anterior : atual)
    console.log(resultado)
}

menorNumero([10, 5, 35, 65])
menorNumero([5, -15, 50, 3])

function menorNumero2(numeros) {
    console.log(Math.min(...numeros))
    }
    
menorNumero2([10, 5, 35, 65])
menorNumero2([5, -15, 50, 3])

function menorNumero3(numeros) {
    let menor = numeros[0]
    for (let i in numeros)
    if (numeros[i] < menor)
    menor = numeros[i]
    console.log(menor)
    }

menorNumero3([10, 5, 35, 65])
menorNumero3([5, -15, 50, 3])