function percorre(vetor){
    let contadorF1 = 0;
    let contadorF= 0;
    for (let i = 0; i < vetor.length; i++) {       
        if(vetor[i] > vetor[i - 1]){
            contadorF = vetor[i]
        }else if (vetor[i] >= contadorF){
            contadorF1 = vetor[i]
        }
        
    }
    
    return `e o maior numero do vetor ${contadorF} e o menor ${contadorF1}`
}

let vetorzin = [2, 1, 3, 6, 7, 9, 11, 15, 19, 14, 12, 21, 10 , 22, 14]

console.log(percorre(vetorzin))

/*console.log(getMaxOfArray(vetorzin))
console.log(getMinOfArray(vetorzin))

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
    
}

function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
    
}
*/