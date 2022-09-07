
function primeiroUltimo (array) {
    const primeiro = array[0]
    const ultimo = array[array.length - 1]
    console.log([primeiro,ultimo])
}

primeiroUltimo([1, 5, 7, 4, 6, 'Casa'])

function primeiroUltimo1 (array) {
    const primeiro = array.shift()
    const ultimo = array.pop()
    console.log([primeiro,ultimo])
}

primeiroUltimo1([1, 5, 7, 4, 6, 'Casa'])