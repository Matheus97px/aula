function filtraQuantidadeDeDigitos(numeros, filtro) {
    console.log(numeros.filter(numero => {
        const  quantidadeDeDigitos = String(numero).length
        return quantidadeDeDigitos === filtro
    }))
}

filtraQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2)

function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
    let resultado = []
for(numero of numeros){
    const quantidadeDeDigitos = String(numero).length
    if(quantidadeDeDigitos === quantidadeDesejada){
    resultado.push(numero)}
    }
    console.log(resultado)
    }
    
filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2)
