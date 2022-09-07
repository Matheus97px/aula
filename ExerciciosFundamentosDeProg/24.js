function contarCaractere(caractere,frase) {
    let recebe = frase.split(caractere)
    console.log(recebe.length-1)

}

contarCaractere("r", "A sorte Favorece os audazes")
contarCaractere("c", "Conhece-te a ti mesmo")
contarCaractere("c", "Conhece-te a si como eu conheço a ti mesmo cordeiro")

// correcao

function contarCaractere2(caractereBuscado, frase) {
    let contador = 0
    for (let i = 0; i < frase.length; i++)
    if (frase.charAt(i) === caractereBuscado)
    contador++
   console.log(contador)
}
    
function contarCaractere3(caractereBuscado, frase) {
console.log([...frase].filter(caractere => caractere === caractereBuscado).length)
}
console.log("////////////")     
contarCaractere2("r", "A sorte Favorece os audazes")
contarCaractere2("c", "Conhece-te a ti mesmo")
contarCaractere2("c", "Conhece-te a si como eu conheço a ti mesmo cordeiro")
console.log("////////////")
contarCaractere3("r", "A sorte Favorece os audazes")
contarCaractere3("c", "Conhece-te a ti mesmo")
contarCaractere3("c", "Conhece-te a si como eu conheço a ti mesmo cordeiro")

