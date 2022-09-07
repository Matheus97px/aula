function objArray(objeto) {
    const resultado = []
    for (let i in objeto)
    resultado.push([ i , objeto[i] ])
    console.log(resultado)
}

objArray({
    nome:"Maria",
    profissao: "Desenvolvedora de software"
 })
////        /////           /////           /////
 function objArray1(objeto) {
    const chaves = Object.keys(objeto)
    const resultado = chaves.map( chave => [chave, objeto[chave]] )
    console.log(resultado)
    
}

objArray1({
    nome:"Maria",
    profissao: "Desenvolvedora de software"
 })
////            //////          //////      //////  ///
function objArray2 (objeto) {
    console.log(Object.entries(objeto))
}

objArray2({
    nome:"Maria",
    profissao: "Desenvolvedora de software"
 })