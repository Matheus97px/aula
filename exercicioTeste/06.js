//Classificação de faixa etária
const faixaEtaria = (idade) =>{
    if(idade >= 0 && idade <= 12){
        console.log('Criança')
    }else if(idade >= 13 && idade <= 17){
        console.log('Adolecente')
    }else if(idade >= 18 && idade <= 59){
        console.log('Adulto')
    }else if (idade >= 60){
        console.log('Idoso')
    }else{
        console.log('Idade Invalida')
    }
}

faixaEtaria(10)
faixaEtaria(17)
faixaEtaria(18)
faixaEtaria(59)
faixaEtaria(60)
faixaEtaria(-1)
