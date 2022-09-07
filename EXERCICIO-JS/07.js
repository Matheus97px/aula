function bhaskara(ax2, bx, c) {
    let resultado = []
    const delta = (bx ** 2) - (4 * ax2 * c)
    if(delta < 0) {
        return "Delta é negativo"
    } 
       let x1 = (-bx + Math.sqrt(delta)) / (2 *ax2)
       let x2 = (-bx - Math.sqrt(delta)) / (2 *ax2)
    
    resultado.push(x1)
    resultado.push(x2)
    return resultado
}

function bhaskara1(ax2, bx, c) {
    let resultado = []
    const delta = (bx ** 2) - (4 * ax2 * c)
    if(delta < 0) {
        return negativo = "Delta é negativo"
    } else {
        this.x1 = (-bx + Math.sqrt(delta)) / (2 *ax2)
        this.x2 = (-bx - Math.sqrt(delta)) / (2 *ax2)
    }
    resultado.push(this.x1)
    resultado.push(this.x2)
    console.log(resultado)
}
console.log(bhaskara(3, -5, 12))
bhaskara1(3, -5, 12)

console.log(bhaskara(2, -16, -18))
bhaskara1(2, -16, -18)

console.log(bhaskara(1, 12, -13))
bhaskara1(1, 12, -13)