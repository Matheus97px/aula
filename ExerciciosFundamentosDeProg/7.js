function entre (numero, inicio, final, inclusivo = false) {
    if(inclusivo == true){return numero >= inicio && numero <= final}
     else{return numero > inicio && numero < final }
}

console.log(entre(10, 10 ,200))
console.log(entre(5, 10 ,200))
console.log(entre(50, 10 ,200))
console.log(entre(10, 10, 200, true))

function entre1 (numero, inicio, final, inclusivo = false) {
    return inclusivo ? numero >= inicio && numero <= final : numero > inicio && numero < final 
}

console.log(entre1(10, 10 ,200))
console.log(entre1(5, 10 ,200))
console.log(entre1(50, 10 ,200))
console.log(entre1(10, 10, 200, true))