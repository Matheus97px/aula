let progresso = "10, 20, 20, 8, 25, 3, 0, 30, 1"

function percorrer (progresso) {
    let percorre = progresso.split(", ")
    let recorde = 0
    let pior = 1
    let maiorPont = percorre[0]
    let menorPont = percorre[0]
    
    for (let i = 1; i < percorre.length; i++){
        if(percorre[i] > maiorPont){
            maiorPont = percorre[i]
            recorde++
        } else if(percorre[i] < menorPont){
            menorPont = percorre[i]
            pior = i+1;
        }
    }
    return [recorde, pior]
}

console.log(percorrer(progresso))
