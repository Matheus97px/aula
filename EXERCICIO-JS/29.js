function percorre(vetor){
    let contador = 0;
    let contadorF= 0;
    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] >= 10 && vetor[i] <= 20){
            contador++;
        }else{
            contadorF++;
        }

    }
    return `${contador} numeros dentro do intervalo e ${contadorF} estão fora` 
}

let vetorzin = [1, 2, 3, 6, 7, 9, 11, 15, 19, 14, 12, 21, 10 , 22]

console.log(percorre(vetorzin))
