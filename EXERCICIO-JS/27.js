/*function crescimento (nome1 , altura1, taxaC1, nome2, altura2, taxaC2){
    let ano = 0
    this.porcentagem1 = taxaC1 / 100
    this.porcentagem2 = taxaC2 / 100

    if (altura1 == altura2) {
        let altura1F = altura1 * this.porcentagem1
        let altura2F = altura2 * this.porcentagem2

        console.log(`as duas crianças tem a mesma altura de ${altura1}cm`)
        console.log(`${nome1} tem uma taxa de crescimento de ${altura1F.toFixed()}cm por ano`)
        console.log(`${nome2} tem uma taxa de crescimento de ${altura2F.toFixed()}cm por ano`)
    }else if (altura1 < altura2) {
        let altura1F = altura1 * this.porcentagem1
        let altura2F = altura2 * this.porcentagem2
        while (altura1 < altura2) {
            ano += 1
            altura1 + altura1F
           
        }

        console.log(`${nome1} tem uma altura de ${altura1}  com crescimento de ${altura1F.toFixed()}cm por ano`)
        console.log(`${nome2} tem uma altura de ${altura2}  com crescimento de ${altura2F.toFixed()}cm por ano`)
        console.log(`${nome1} ultrapassara a altura de ${nome2} em ${ano}anos`)
    }

}


crescimento('carlinhos', 180, 5, 'pedrinho', 200, 6)*/

function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
    if(altura1 == altura2){
        if (taxa1 > taxa2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if(taxa1 < taxa2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        }else{
            return 'As crianças tem igual altura e crescimento.'
        }
    } else {
        if (altura1 > altura2) {
            if(taxa1 >= taxa2){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return `A criança menor ultrapassará a maior em ${calcularTempo(altura2, taxa2, altura1, taxa1)} anos` 
            }
        } else {
            if(taxa2 >= taxa1){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return `A criança menor ultrapassará a maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)} anos` 
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    //console.log(qtdAnos)
    return qtdAnos
}

console.log(calcularCrescimento(150, 2, 130, 4));
