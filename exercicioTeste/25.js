//Interseção de arrays
/*Receba dois arrays e retorne um novo array com os elementos que os dois arrays anteriores têm em comum.*/

const intersecao = (array1, array2) => {
    console.log(array1.filter(item => array2.includes(item)))
}

intersecao([1, 2, 3, 4, 5], [5, 6, 7, 8, 9])
intersecao([1, 2, 3, 6, 5], [5, 6, 7, 3, 9])



const intersecao2 = (array1, array2) => {
    let novoArray = array1.concat(array2)
    let arrayRepetidos =[]

    for(let i = 0; i < novoArray.length; i++){
        for(let j = i + 1; j < novoArray.length; j++){
            if(novoArray[i] == novoArray[j]){
                arrayRepetidos.push(novoArray[i])
            }
        }
    }

    console.log(arrayRepetidos)
}

intersecao2([1, 2, 3, 4, 5], [5, 6, 7, 8, 9])
intersecao2([1, 2, 3, 6, 5], [5, 6, 7, 3, 9])