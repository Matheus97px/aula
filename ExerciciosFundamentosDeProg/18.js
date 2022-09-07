function despesa(despesas) {
    let resultado = despesas.map(d => d.preco).reduce(
        (acumula, atual) => acumula +atual)
        console.log('total é de R$' + resultado)
}

despesa([{
    nome:"Jornal Online", categoria: "Informaçao", preco: 89.99
}, {
    nome:"Cinema", categoria: "Entretenimento", preco: 150
}
])

despesa([{
    nome:"Galaxy S20", categoria: "Eletronico", preco: 3599.99
}, {
    nome:"MacBook Pro", categoria: "Eletronico", preco: 30999.90
}])

// correcao
function despesasTotais(itens) {
var total = 0
for (let item of itens)
total += item.preco
return total
}

function despesasTotais2(itens) {
return itens.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0)
}
console.log(despesasTotais([{
    nome:"Jornal Online", categoria: "Informaçao", preco: 89.99
}, {
    nome:"Cinema", categoria: "Entretenimento", preco: 150
}
]))

console.log(despesasTotais([{
    nome:"Galaxy S20", categoria: "Eletronico", preco: 3599.99
}, {
    nome:"MacBook Pro", categoria: "Eletronico", preco: 30999.90
}]))


console.log(despesasTotais2([{
    nome:"Jornal Online", categoria: "Informaçao", preco: 89.99
}, {
    nome:"Cinema", categoria: "Entretenimento", preco: 150
}
]))

console.log(despesasTotais2([{
    nome:"Galaxy S20", categoria: "Eletronico", preco: 3599.99
}, {
    nome:"MacBook Pro", categoria: "Eletronico", preco: 30999.90
}]))