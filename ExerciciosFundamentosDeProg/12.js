function remover (objeto, removedor) {
    const copia = objeto
    delete copia[removedor]
    console.log(copia)
    
}

remover({a:1, b:2, c:3}, "b")

