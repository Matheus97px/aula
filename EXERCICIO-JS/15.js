function revenda (carro){

    switch(carro) {

     case 'Hatch':
        console.log("Compra efetuada com sucesso")
        break
    case "Sedans":
        console.log('Tem certeza que não prefere este modelo? ' + 'carro hatch')   
        break
    case 'Motocicletas':
        console.log(`Tem certeza que não prefere este modelo? carro hatch`)
        break
    case "Caminhonetes":
        console.log("Tem certeza que não prefere este modelo? " + "carro hatch")
        break
    default:
        console.log('Não trabalhamos com este tipo de automóvel aqui' + " somente com " + 
        ' Hatch,' + " Sedans," + ' Motocicletas e' +" Caminhonetes" )
        break
    }
}

revenda('Hatch')
revenda("Sedans")
revenda("Motocicletas")
revenda('Caminhonetes')
revenda('carro Zika')
revenda(4)
