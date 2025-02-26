//Par ou Impar

const parImpar = (n) => n % 2 === 0 ? `${n} é um numero par` : `${n} é um numero impar`

console.log(parImpar(11))

///////////////////////////////////////////////////////////////
const parImpar2 = (n) => {
   if (n % 2 === 0) {
    console.log(`${n} é um numero par` )
   } else{
    console.log(`${n} é um numero impar`)
   }}

parImpar2(10)

//////////////////////////////////////////////////////////////

const parImpar3 = (n = []) => {
    for (let i = 0; i < n.length; i++){
        if (n[i] % 2 === 0){
            console.log(`${n[i]} é um numero par` )
        } else {
            console.log(`${n[i]} é um numero impar`)
           }
    }

}

parImpar3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])