function trocaPosicao1(obj) {
    let recebe = {}
    Object.keys(obj).forEach(chave =>{
        recebe[obj[chave]] = chave
    })
    console.log(recebe)
}

trocaPosicao1({a: 1, b: 2, c: 3})
////    /////   ////    //
function trocaPosicao2(obj) {
    let objInverte = {}

    Object.entries(obj).forEach(parChaveValor =>{
        let chave = 0,
            valor = 1

        objInverte[parChaveValor[valor] ] = parChaveValor[chave]
        })
        console.log(objInverte)
    }

trocaPosicao2({a: 1, b: 2, c: 3})
//////  //////  //////  //////  ///
function trocaPosicao3 (obj) {
const paresDeChaveValorInvertidos = Object.entries(obj)
.map( parChaveValor => parChaveValor.reverse())

console.log(Object.fromEntries(paresDeChaveValorInvertidos))
}
// nao fiz pq nao consegui

trocaPosicao3({a: 1, b: 2, c: 3})