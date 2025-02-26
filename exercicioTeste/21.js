//Array de números aleatórios
/*Crie uma função que gera um array de números aleatórios. A função recebe como argumento: tamanho do array, valor mínimo e valor máximo dos números.*/

const aleatorio = (tamanho, min, max) => {
 min = Math.ceil(min)
 max = Math.floor(max)
 
 let array = []
 for (let i = 0; i < tamanho; i++){
    array.push(Math.floor(Math.random() * (max - min) + min))
 }

 console.log(array)
}


aleatorio(10, 1, 100)
aleatorio(4, 1, 23)
