//Soma de propriedades de um objeto
/*Seu programa irá receber um objeto com diversas propriedades contendo valores numéricos. Você deve retornar a soma dos valores dessas propriedades.*/



const obj = {
    "age": 32,
    "height": 146,
    "weight": 68,
    "score": 97,
    "temperature": 23
};

const somaPropriedades = (obj) => {
    let soma = 0
    for (let i in obj){
        soma += obj[i]
    }
    console.log(soma)
}

somaPropriedades(obj)
////////////////////////////////

const total = Object.values(obj).reduce((t, n) => t + n)

console.log(total)

/////////////////////////////////////////////
const somaPropriedades2 = (obj) => Object.values(obj).reduce((t, n) => t + n)

console.log(somaPropriedades2(obj))