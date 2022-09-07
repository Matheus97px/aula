const calcularSalario = (h, p) => console.log('Salário igual a R$ '+ (p * h))

calcularSalario(150, 40.5)

function calcularSalario1 (h ,p) {
    let pagamento = p * h
    console.log(`Salário igual a R$ ${pagamento}`)
}

calcularSalario1(180, 60)

// exercicio enunciado diferente do enunciado da correcao

function calcularSalario2 (h ,p) {
    let pagamento = p * h
    let pagamentoLiquido =  pagamento - ( pagamento * (30/100))
    console.log(`Salário igual a R$ ${pagamentoLiquido}`)
}

calcularSalario2(180, 60)

