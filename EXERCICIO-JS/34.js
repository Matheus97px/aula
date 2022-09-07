function compara(palavra1, palavra2){
    let estaContido = true;
    for (let i = 0; i < palavra1.length; i++) {
        let caracterepalavra1 = palavra1.charAt(i).toLowerCase()
        for (let j = 0; j < palavra2.length; j++) {
            let caracterepalavra2 = palavra2.charAt(j).toLowerCase()
            if (caracterepalavra1 == caracterepalavra2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if (!estaContido) {
            return estaContido
        }
    }
    for (let i = 0; i < palavra2.length; i++) {
        let caracterepalavra2 = palavra2.charAt(i).toLowerCase()

        for (let j = 0; j < palavra1.length; j++) {
            let caracterepalavra1 = palavra1.charAt(j).toLowerCase()

            if (caracterepalavra1 == caracterepalavra2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if (!estaContido) {
            return estaContido
        }
    }
    return estaContido
}

console.log(compara('casa', 'carro'))
console.log(compara('Carro', 'carro'))
console.log(compara('sequencia', 'carro'))