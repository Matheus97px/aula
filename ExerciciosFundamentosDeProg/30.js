function melhorEstudante(obj){
const soma = array => array.reduce((acumlador, atual) => acumlador + atual)
const media = array => soma(array) / array.length
const estudanteMedias = Object.entries(obj).map(estudante => {
    const chave = 0, valor = 1
    return { nome: estudante[chave], media: media(estudante[valor])}
})
const estudanteOrdenados = estudanteMedias.sort( (estudanteA, estudanteB) => estudanteB.media - estudanteA.media )
const melhorEstudante = estudanteOrdenados[0]
console.log(melhorEstudante)
}

melhorEstudante({
    joao: [8, 7.6, 8.9, 6],
    Marianha: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
})