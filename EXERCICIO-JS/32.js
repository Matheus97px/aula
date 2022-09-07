function mediaAritimetica (vetor) {
    let media = vetor.length
    let soma = 0

    for (let i = 0; i < vetor.length; i++) {
       soma += vetor[i]
    }
    let resultado = soma / media
    return `resultado é ${resultado}`
}

let vetor = [1, 2, 3, 4, 5, 6, 7, 8]
let vetor1 = [5, 5, 5, 5, 5, 5, 5, 5]

console.log(mediaAritimetica(vetor))
console.log(mediaAritimetica(vetor1))
