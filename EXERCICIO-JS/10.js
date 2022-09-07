function divisivel(numero) {
    let resultado = numero % 3
    if(resultado == 0){
        return true
    }else {
        return false
    }
    
}

console.log(divisivel(3))
console.log(divisivel(8))
console.log(divisivel(15))
console.log(divisivel(37))

