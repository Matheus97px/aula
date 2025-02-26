//comparaçao de numeros

const compararNum = (a, b) => {
    if (a == b){
        console.log('Numeros iguais')
    }else if (a > b){
        console.log(`${a} maior que ${b}`)
    }else if (a < b){
        console.log(`${a} menor que ${b}`)
    }
}

compararNum(3, 3)
compararNum(2, 3)
compararNum(3, 2)
