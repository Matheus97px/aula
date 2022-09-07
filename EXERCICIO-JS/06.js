function jurosSimples(capitalInicial, taxaJuros, tempoApliacao){
    const jurosPorcentagem = taxaJuros / 100
    const juros = capitalInicial * jurosPorcentagem * tempoApliacao
    const montante = juros + capitalInicial;

    return `O resultado do juroz simples é R$${montante}`
}

function jurosCompostos(capitalInicial, taxaJuros, tempoApliacao){
    const jurosPorcentagem = taxaJuros / 100
    const jurosReal = 1 + jurosPorcentagem
    const jurosRealF = jurosReal ** tempoApliacao
    const montante = capitalInicial * jurosRealF
    return montante.toFixed()
}


const JuroSimplesMes = jurosSimples(800, 5, 24)

console.log(JuroSimplesMes)

console.log('O resultado do juroz simples é R$' + jurosCompostos(20000, 5, 4))

