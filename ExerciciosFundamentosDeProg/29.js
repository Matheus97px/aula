function maiorNumero(Array){
   const maior = Math.max(...Array)
   Array = Array.filter(numero => numero != maior)
   const segundoMaior = Math.max(...Array)
   console.log(segundoMaior)
}

maiorNumero([12, 16, 1, 5])

/*function segundoMaior(numeros) {
    let indiceDoMaior = 0
    let segundoMaior
    numeros.forEach( (numero, indice) => {
    if( numero > numeros[indiceDoMaior] )
    indiceDoMaior = indice
    })
    numeros.splice(indiceDoMaior, 1)
    segundoMaior = numeros[0]
    numeros.forEach(numero => {
    if(numero > segundoMaior)
    segundoMaior = numero
    })
    return segundoMaior
    }*/


    
/*function segundoMaior(numeros) {
    const numerosOrdenados = numeros.sort((numeroA, numeroB) => numeroB - numeroA)
    const segundoMaior = numerosOrdenados[1]
    return segundoMaior
}*/
        