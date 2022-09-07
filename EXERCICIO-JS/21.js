function plano (idade){
    
    let valorPadrao = 100
    let plano
    
    if (idade <= 10 && idade >= 0) {
        plano = 80
        let resultado  = valorPadrao + plano
        return `seu plano de saude ficou no valor de R$${resultado.toFixed(2)}`    
    } else if(idade >= 10 && idade <= 30){
        plano = 50
        let resultado  = valorPadrao + plano
        return `seu plano de saude ficou no valor de R$${resultado.toFixed(2)}`     
    } else if(idade >= 30 && idade <= 60){
        plano = 95
        let resultado  = valorPadrao + plano
        return `seu plano de saude ficou no valor de R$${resultado.toFixed(2)}`  
    } else if(idade >= 60){
        plano = 130
        let resultado  = valorPadrao + plano
        return `seu plano de saude ficou no valor de R$${resultado.toFixed(2)}` 
 }    else{
    return `retorne uma idade valida`
 }

}

console.log(plano(9))
console.log(plano(15))
console.log(plano(28))
console.log(plano(37))
console.log(plano(55))
console.log(plano(69))
console.log(plano(-15))