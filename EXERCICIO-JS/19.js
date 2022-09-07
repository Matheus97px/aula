function cardapio(codigo, quantia){
    let precoAPagar
    let preco
    switch (codigo) {
        case 100:
            preco = 3.00
            precoAPagar = preco * quantia
            console.log(`${quantia} Cachorro Quente = R$${precoAPagar.toFixed(2)}`)
            break;
        case 200:
            preco = 4.00 
            precoAPagar = preco * quantia
            console.log(`${quantia} Hambúrguer Simples = R$${precoAPagar.toFixed(2)}`)   
            break;
        
        case 300:
            preco = 5.50
            precoAPagar = preco * quantia
            console.log(`${quantia} Cheeseburguer = R$${precoAPagar.toFixed(2)}`)
            break;
        
        case 400:
            preco = 7.50
            precoAPagar = preco * quantia
            console.log(`${quantia} Bauru = R$${precoAPagar.toFixed(2)}`)
            break;
            
        case 500:
            preco = 3.50
            precoAPagar = preco * quantia
            console.log(`${quantia} Refrigerate = R$${precoAPagar.toFixed(2)}`)
            break;
                
        case 600:
            preco = 2.80
            precoAPagar = preco * quantia
            console.log(`${quantia} Suco = R$${precoAPagar.toFixed(2)}`)
            break;
                                                                
        default:
            console.log('produto não existente')
            break;
    }
}

cardapio(100, 3)
cardapio(200, 3)
cardapio(300, 3)
cardapio(400, 3)
cardapio(500, 3)
cardapio(600, 3)
cardapio(700, 3)
