//Média dos elementos
/*Crie um programa que recebe um array numérico e retorna a média dos valores desses elementos.*/

const mediaArray = (array) => {
    let soma = 0
    for (let i = 0 ; i < array.length; i++){
        soma += array[i]
    }
    console.log(`a média do array é ${soma / array.length}`)
}

mediaArray([10, 4, 8, 4, 5])


const mediaArray2 = (array) => array.reduce((total, atual) => total + atual, 0) / array.length 


console.log('a média do array é ' + mediaArray2([10, 4, 8, 4, 5]))