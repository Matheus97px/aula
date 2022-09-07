function repetir (valor, repetidor) {
    let array = []
    for (let i = 0; i < repetidor; i++) {
        array[i] = valor
    }
        console.log(array)
}
repetir(1, 4)
repetir('casa', 4)
repetir(7, 4)

function repetir2 (valor, repetidor) {
    let array = []
    for (let i = 0; i < repetidor; i++) {
        array.push(valor)
    }
        console.log(array)
}

repetir2(1, 4)
repetir2('casa', 4)
repetir2(7, 4)

function repetir3(item, quantidade) {
    console.log(Array(quantidade).fill(item))
    }

    
repetir3(1, 4)
repetir3('casa', 4)
repetir3(7, 4)