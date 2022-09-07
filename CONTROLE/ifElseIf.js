Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim ;
}

const imprimirReSultado = function (nota) {
    if (nota.entre(9, 10)){
        console.log('Quadro de Honra');
    } else if (nota.entre(7, 8.99)) {
       console.log('Aprovado'); 
    } else if (nota.entre(4, 6.99)) {
       console.log('Recuperação');
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado');
    } else {
        console.log('Invalido')
    }
}


imprimirReSultado(9.1);
imprimirReSultado(8);
imprimirReSultado(5);
imprimirReSultado(2);
imprimirReSultado(-1);
imprimirReSultado(11);