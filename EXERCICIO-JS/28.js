let total = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let impar = []
let par = []

for (let i in total) {
    let resto = total[i] % 2
    if (resto == 0) {
        par.push(total[i])        
    }else{
        impar.push(total[i])
    }
    
}

console.log('os impares são ' + impar)
console.log('os pares são ' + par)
console.log(impar.length + ' numeros impares e ' + par.length +' numeros pares' )

// codigo do professor
/* 
function paresImpares(vetorNumeros) {
    let qtdPares = 0
    let qtdImpares = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] % 2 == 0) {
            qtdPares++
        } else {
            qtdImpares++
        }
    }
    console.log(`${qtdPares} números pares e ${qtdImpares} números ímpares.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
paresImpares(vetor)
*/