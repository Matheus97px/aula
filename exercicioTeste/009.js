// calculo de tarifas

const calcularTarifa = (idade, tipo) => {
    let tarifa = 2.50
    if (idade >= 0 && idade < 6) { 
        console.log('Tarifa Zero')
    }else if (idade > 6 && idade < 60) {
        if (tipo === 'Estudante'){
            console.log(`Tarifa de 50% de desconto: ${tarifa - (tarifa * 0.5) }R$`)
        }else if (tipo === 'Regular'){
            console.log(`Tarifa Normal: ${tarifa}R$`)   
        }
    } else if (idade >= 60) {
        if (tipo === 'Estudante'){
            console.log(`Tarifa de 50% de desconto: ${tarifa - (tarifa * 0.5)}R$`)
        }else if (tipo === 'Regular'){
            console.log(`Tarifa de 30% de desconto: ${tarifa - (tarifa * 0.3)}R$`) 
        }
    }
}

calcularTarifa(10, 'Estudante')
calcularTarifa(60, 'Regular')
calcularTarifa(60, 'Estudante')
calcularTarifa(20, 'Regular')
calcularTarifa(40, 'Estudante')
calcularTarifa(4, 'Regular')
calcularTarifa(4, 'Estudante')