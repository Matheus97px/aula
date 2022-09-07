function meses (numero){
    switch (numero) {
        
        case 1:
        console.log('Janeiro')
        break
        
        case 2:
        console.log('Fevereiro')
        break
        
        case 3:
        console.log('Março')
        break
        
        case 4:
        console.log('Abril')
        break
        
        case 5:
        console.log('Maio')
        break
        
        case 6:
        console.log('Junho')
        break
        
        case 7:
        console.log('Julho')
        break
        
        case 8:
        console.log('Agosto')
        break
        
        case 9:
        console.log('Setembro')
        break
        
        case 10:
        console.log('Outubro')
        break
        
        case 11:
        console.log('Novembro')
        break

        case 12:
        console.log('Dezembro')
        break
        
        default:
        console.log('Insira um mes valido')
        break
    }
}

meses(1)
meses(2)
meses(3)
meses(4)
meses(5)
meses(6)
meses(7)
meses(8)
meses(9)
meses(10)
meses(11)
meses(12)
meses(13)

////correcao do professor

function receberNomeDoMes(numero) {
    const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
    'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return mapeamento[--numero];
    }

    console.log(receberNomeDoMes(12))