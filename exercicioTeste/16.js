// Fatorial 
//Crie uma função que retorne o fatorial de um número, passado como parâmetro. Imprima o resultado na tela.

/* no codigo abaixo no laço de repeticao o 'for'no caso em questao 
ele esta percorrendo o numero de 1 até o numero selecionado(n)
porem o fatorial é o contrario, ele vai percorrendo o numero de n ate 1 
entretando como tudo é uma multiplicaçao a ordem nao é importante entao ambos daram o mesmo resultado
a alteraçao seria que o 'for' fosse percorrendo o numero de n ate 1
tera que haver um tratamento para o caso de numero 0
e umas leves alteracoes no escopo do codigo*/

const fatorial = (n) => {
    if(n < 0) {
        console.log('numeros negativos nao tem fatorial')
    }else {
  let fat = 1 
  for(let i = 1 ; i <= n ; i++){
    fat *= i
  }
  console.log(`o numero ${n} tem como fatorial o ${fat}`)
}
}

const fatorial2 = (n) => {
    if(n < 0) {
        console.log('numeros negativos nao tem fatorial')
    }else if(n == 0){
        console.log(`o numero ${n} tem como fatorial o 1`)
    }else {
  let fat = n 
  for(let i = n-1 ; i > 0 ; i--){
    fat *= i
  }
  console.log(`o numero ${n} tem como fatorial o ${fat}`)
}
}

 fatorial(0)
fatorial(4)
fatorial(5)
fatorial(7)
fatorial(-16)

fatorial2(0)
fatorial2(4)
fatorial2(5)
fatorial2(7)
fatorial2(-16)

