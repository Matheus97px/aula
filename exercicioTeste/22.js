//Elemento mais frequente
/*Crie uma função que recebe um array como argumento e retorna o elemento que mais aparece no array.*/

const maisFrequente = (array) => {
    let maior = null
    let ocorrenciasMaior = -1

    for(let i = 0; i < array.length; i++){
        let ocorrencias = 1
        for(let j = i + 1; j < array.length; j++){
            if(array[i] == array[j]){
                ocorrencias++
                if(ocorrencias > ocorrenciasMaior){
                    maior = array[i]
                    ocorrenciasMaior = ocorrencias
                }
            }
        }
    }
    console.log(`o elemento ${maior} é o que mais aparece sendo um total de ${ocorrenciasMaior} vezes`)
                }


maisFrequente([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4])
