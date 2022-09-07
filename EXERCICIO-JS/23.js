function notaFinal (n1, n2, n3){
    
    if (n1 > n2 && n1 > n3) {
        media = (n1 * 4) + (n2 * 3) + (n3 * 3)
        mediaF = media / 10
        if(mediaF > 5) {
         console.log(`aluno aprovado com a nota final:${mediaF}`)   
        }else{
            console.log(`aluno reprovado`)
        }
    } else if(n2 > n1 && n2 > n3){
        media =  (n1 * 3) + (n2 * 4) + (n3 * 3)
        mediaF = media / 10
        if(mediaF > 5) {
         console.log(`aluno aprovado com a nota final:${mediaF}`)   
        }else{
            console.log(`aluno reprovado`)
        }
    }else if (n3 > n2 && n3 > n1) {
        media = (n1 * 3) + (n2 * 3) + (n3 * 4) 
        mediaF = media / 10
        if(mediaF > 5) {
         console.log(`aluno aprovado com a nota final:${mediaF}`)   
        }else{
            console.log(`aluno reprovado`)
        }
    }
    else {
        media = n1 + n2 + n3
        mediaF = media / 3
        if(mediaF > 5) {
        console.log(`aluno aprovado com a nota final:${mediaF}`)   
           }else{
        console.log(`aluno reprovado`)
           }
    }

}

notaFinal(5, 5, 6)
notaFinal(5, 6, 5)
notaFinal(6, 5, 5)
notaFinal(5, 5, 5)
notaFinal(2.8, 6, 3.5)

function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularNotaFinal(123, 2.8, 6, 3.5)
