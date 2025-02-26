//Palíndromo
/* Crie uma função que identifica se uma palavra ou frase é palíndromo.*/

const palidromo = (palavra) => {
 let inverso = palavra.split('').reverse().join('').toLowerCase().replaceAll(' ', '').replaceAll('-', '').replaceAll('.', '')
 
 let naoInverso= palavra.toLowerCase().replaceAll(' ', '').replaceAll('.', '').replaceAll('-', '')


 if (naoInverso === inverso) {
    console.log(`"${palavra}" é um palindromo`)
 } else {
    console.log(`"${palavra}" nao é um palindromo`)
 }
}


palidromo('arara')
palidromo('A gorda ama a droga')
palidromo('Hanah')
palidromo('A diva em Argel alegra-me a vida.')
palidromo('A base do teto desaba')
palidromo('A pateta ama até tapa.')
palidromo('Luz azul.')
