// Inversão de string
 /*Crie uma função que recebe uma string e retorna seu inverso. Imprima o resultado na tela. */

 //foi a ia que criou
/*O método split() divide um objeto de string em um array de string separando a string em substrings.

O método reverse() inverte um array diretamente. O primeiro elemento do array passa a ser o último e o último se torna o primeiro.

O método join() une todos os elementos de um array em uma string.
por ser string o uso do ' ' */

 const inversao = (string) => console.log(string.split('').reverse().join(''))
 
 inversao('Matheus')


 let palavra = 'Matheus'
 console.log( palavra.split(''))
 
 console.log(palavra.split('').reverse())
 
 console.log(palavra.split('').reverse().join(''))


 const inversao2 = (string) =>{
    let palavra = ''
    for (let i = string.length -1; i >= 0; i--){
        palavra += string[i]
    }
    console.log(palavra)
 }
 
 inversao2('Matheus')