//Remoção de elementos repetidos
/*Crie um programa que recebe um array, remove os elementos que estiverem repetidos e retorna um array sem essas repetições.*/

const removeRepetido = (array) =>{

    let novoArray = array.filter((index, i)=> array.indexOf(index) === i)

    console.log(novoArray)
}


removeRepetido([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

removeRepetido(['Marcos','marcos','marcos','marcos', 'vinicus'])


//preciso reforçar o filter 