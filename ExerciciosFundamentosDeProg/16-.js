function anoBisexto(ano){
    if (ano <= 0){
        return false
    } else if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(anoBisexto(1997))

/// //// /// /// correcao
function checarAnoBissexto(ano) {
    const divisivelPorQuatro = ano % 4 == 0
    const divisivelPorCem = ano % 100 == 0
    const divisivelPorQuatrocentos = ano % 400 == 0
    return (divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos
    }
    
console.log(checarAnoBissexto(1997))


//// correcao
// checa-se indiretamente, verificando se o mês de fevereiro do dado ano tem 29 dias
function checarAnoBissexto2(ano) {
    return new Date(ano, 1, 29).getDate() === 29;
    }

console.log(checarAnoBissexto2(1997))
