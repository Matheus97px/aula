function simboloMais (repetidor) {
    let armazena = ''
    for (let i = 0; i < repetidor; i++) {
        armazena += '+'
    }
        console.log(armazena)
}

simboloMais(2)
simboloMais(8)

function simboloMais1(quantidade) {
  console.log("+".repeat(quantidade))
    }
    
simboloMais1(2)
simboloMais1(8)
    
function simboloMais2(quantidade) {
    return Array(quantidade).fill('+').join('')
    }
    
console.log(simboloMais2(2))
console.log(simboloMais2(8))