//Concatenar arrays
 /*Receba dois arrays e retorne um novo array que é a união de todos os elementos dos arrays anteriores.*/

 const concatenar = (...parametros) => {
     console.log([].concat(...parametros))

 }

 concatenar([1, 2], [3, 3], [5, 6])


 const concatenar2 = (array1 , array2) => {
    console.log(array1.concat(array2))

 }

 concatenar2([0, 1, 2], [1, 2, 3])