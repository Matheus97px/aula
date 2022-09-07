function ajusteSalarial(nome, salario, plano){
    let ajuste
    switch (plano) {
        case 'A':
            ajuste = salario * 0.10
            console.log(`o funcionario ${nome} tera um ajuste salaria para:${salario + ajuste}`)
            break;
    
        case 'B':
            ajuste = salario * 0.15
            console.log(`o funcionario ${nome} tera um ajuste salaria para:${salario + ajuste}`)
            break;
            
        case 'C':
            ajuste = salario * 0.20
            console.log(`o funcionario ${nome} tera um ajuste salaria para:${salario + ajuste}`)
            break;    

        default:
            console.log('Plano selecionado invalido')
            break;
    }
}

    ajusteSalarial('Carlos', 1000, 'A')
    ajusteSalarial('Bruno', 1000, 'B')
    ajusteSalarial('Joaquin', 1000, 'C')
    ajusteSalarial('Carlos', 1000, 'D')