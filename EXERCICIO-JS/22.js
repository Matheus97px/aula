function Anuidade (mes, valor){
    if( mes >= 1 && mes <= 12) {
        atraso = mes - 1
        return (valor * ((1 + (5/100)) ** atraso)).toFixed(2)
    }
        return 'Mes invaliado'
}


console.log(Anuidade(1, 100))
console.log(Anuidade(4, 100))
console.log(Anuidade(2, 150))
console.log(Anuidade(2, 100))