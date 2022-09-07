function semana (dia) {
    
    switch (Math.floor(dia)) {
       
        case 7:
            console.log('sabado: fim de semana')
        break
        case 6:
            console.log('sexta: dia util')   
        break
        case 5:
            console.log('quinta: dia util')
        break
        case 4:
            console.log('quarta: dia util')
        break
        case 3:
            console.log('terça: dia util')
        break
        case 2:
            console.log('segunda: dia util')
        break
        case 1:
            console.log('domingo: fim de semana')
        break
        default:
            console.log('dia invalido')
        break

    }
}

semana(1)
semana(2)
semana(3)
semana(4)
semana(5)
semana(6)
semana(7)
semana(8)
semana(0)