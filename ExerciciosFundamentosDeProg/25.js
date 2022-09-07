function buscarPalavras(palavra, Array) {
    console.log(Array.filter(caractere => caractere.includes(palavra)))
}

buscarPalavras("pro",["programação", "mobile", "profissional"])


function buscarPalavrasSemelhantes(inicio, palavras) {
    const resultado = []
    for (let palavra of palavras){
    if (palavra.includes(inicio)){
    resultado.push(palavra)
        }   
    }
    console.log(resultado)
}
buscarPalavrasSemelhantes("pro",["programação", "mobile", "profissional"])
