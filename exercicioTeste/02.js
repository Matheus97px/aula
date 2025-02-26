// calculo imc
calculoImc = (peso, altura) => {
    imc = peso / (altura * altura)
    if(imc <= 18.5){
        console.log('Abaixo do normal')
    } else if(imc > 18.5 && imc <= 24.9){
        console.log('Normal')
    } else if(imc > 24.9 && imc <= 29.9){
        console.log('Sobrepeso')
    } else if(imc > 29.9 && imc <= 34.9){
        console.log('Obesidade Grau I')
    } else if(imc > 34.9 && imc <= 39.9){
        console.log('Obesidade grau II')
    } else if(imc > 39.9){
        console.log('Obesidade grau III')
    }
}

calculoImc(81.5, 1.81)