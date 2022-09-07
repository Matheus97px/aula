function anoBisexto(ano) {
    if(ano >= 100){
    let anoB = ano / 10
    let resultado = anoB % 4
    if(resultado == 0){
        return true
    }else {
        return false
    }
}else {
    let resultado = ano % 4
    if(resultado == 0){
        return true
    }else {
        return false
    }
}

}    

console.log(anoBisexto(100))
console.log(anoBisexto(1000))
console.log(anoBisexto(4))
console.log(anoBisexto(400))

function anoBisextoR(ano){
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

console.log('correcao ' + anoBisextoR(100))
console.log('correcao ' + anoBisextoR(1000))
console.log('correcao ' + anoBisextoR(4))
console.log('correcao ' + anoBisextoR(400))