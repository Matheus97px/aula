//Máximo e mínimo 
/* Crie duas funções. Ambas irão receber dois número, N e M, como argumentos. Uma deve retornar o maior valor entre os dois números. A outra deve retornar o menor valor. Imprima os resultados na tela. */



const max = (min , max) => max > min ? console.log(`${max} é o numero maior`) : console.log(`${min} é o numero maior`)

const max2 = (max , min) => {
    if (max > min) {
        console.log(`${max} é o numero maior`); 
    } else {
        console.log(`${min} é o numero maior`); 
    }
}

function max3(max, min) {
    if (max > min) {
        console.log(`${max} é o numero maior`); 
    } else {
        console.log(`${min} é o numero maior`); 
    }
}

function min3(max, min) {
    if (max < min) {
        console.log(`${max} é o numero menor`); 
    } else {
        console.log(`${min} é o numero menor`); 
    }
}


const min = (min , max) => max < min ? console.log(`${max} é o numero menor`) : console.log(`${min} é o numero menor`)

const min2 = (max , min) => {
    if (max < min) {
        console.log(`${max} é o numero menor`); 
    } else {
        console.log(`${min} é o numero menor`); 
    }
}


max(10, 5)
max(5, 10)
min(10, 5)
min(5, 10)

max2(10, 5)
max2(5, 10)
min2(10, 5)
min2(5, 10)

max3(10, 5)
max3(5, 10)
min3(10, 5)
min3(5, 10)