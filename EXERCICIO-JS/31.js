function percorre(vetor){
    let contador = 0;
    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] < 0){
            contador++;
        }      
        

    }
    return `${contador} numeros negativos` 
}

let vetorzin = [1, -2, 3, -6, 7, 9, -11, 15, 19, -14, -12, 21, 10 , 22]

console.log(percorre(vetorzin))