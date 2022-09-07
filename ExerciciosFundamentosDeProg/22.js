function funcaoDaSorte (numero) {
    let resultado = (Math.random() * 11)
    if(numero == Math.floor(resultado)){
    console.log('Parabéns! O numero sorteado foi o  '+Math.floor(resultado))
    }else if(numero !== Math.floor(resultado)){
    console.log('Que pena! O numero sorteado foi o  '+Math.floor(resultado))
    }
}
funcaoDaSorte(10)
funcaoDaSorte(5)
funcaoDaSorte(5)

function funcaoDaSorte2 (numero) {
    let resultado = Math.floor((Math.random() * 11))
    
    console.log(numero === resultado ? 
'Parabéns! O numero sorteado foi o  '+resultado :
'Que pena! O numero sorteado foi o  '+resultado)
}

funcaoDaSorte2(10)
funcaoDaSorte2(5)
funcaoDaSorte(5)