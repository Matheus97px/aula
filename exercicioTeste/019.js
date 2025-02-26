//Contagem de vogais
/*Crie uma função que recebe uma string e retorna a quantidade de vogais no texto recebido. Imprima o resultado na tela.*/


const contaVogal = (texto) => {
    let vogal = 0
    for (let i = 0 ; i < texto.length; i++){
        if(texto[i] == 'a'||texto[i] == 'e'||texto[i] == 'i'||texto[i] == 'o'||texto[i] == 'u'||texto[i] == 'A'||texto[i] == 'E'||texto[i] == 'I'||texto[i] == 'O'||texto[i] == 'U'){
            vogal++
        }
    }

    console.log(`${texto} tem ${vogal} vogais`)
}



contaVogal('Matheus')
contaVogal('Jubileu')
contaVogal('Abacaxi')

