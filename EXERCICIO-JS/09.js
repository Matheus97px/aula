Number.prototype.entre = function(notaAprov, notaAprovMax) {
    return this >= notaAprov && this <= notaAprovMax ;
}

function arredondamento (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

/*function arredondamento (nota){
    let armazena = nota / 10
    let armazenaInt = armazena.toFixed()
    let armazena1 = armazena - armazenaInt
    let ArmazenaReal = armazena1.toFixed(2)
        
    if (ArmazenaReal <= 0.3) {
        let arredonda = Math.floor(ArmazenaReal)
        let arredondaF = arredonda + armazenaInt
        let resultado =arredondaF * 10
     console.log(`aluno aprovado com a nota = ${resultado}`)
     }          
     else if (ArmazenaReal >= 0.4 && ArmazenaReal <= 0.7) {
        let arredondaConv = 0.5
        let arredonda =arredondaConv.toFixed(2)
        let arredondaF = arredonda + armazenaInt
        let resultado =arredondaF * 10
     console.log(`aluno aprovado com a nota = ${resultado}`)
    }
                 
     else if (ArmazenaReal >= 0.8){
        let arredonda = Math.round(ArmazenaReal)
        let arredondaF = arredonda + armazenaInt
        let resultado =arredondaF * 10
     console.log(`aluno aprovado com a nota = ${resultado}}`)
      }
}*/

const imprimirReSultado = function (nota) {
    let notaCorrigida = arredondamento(nota) 
    if(nota.entre(38, 100)){
           
           console.log(`aluno aprovado com nota = ${notaCorrigida}`)       
    } else{
        console.log(`aluno reprovado com nota = ${notaCorrigida}`)
    }
}

imprimirReSultado(74);
imprimirReSultado(42);
imprimirReSultado(58);
imprimirReSultado(38);
imprimirReSultado(37);


