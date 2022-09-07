function retorno (nome) {
    console.log(`Olá, ${nome}!`)
}

retorno('Carlos')

////////////

const retorno1 = n => 'Olá, ' + n + '!'

console.log(retorno1('Juraci'))


////////
const cumprimentar = n => console.log(`Olá, ${n}!`)

cumprimentar('Matheus')


const retorno2 = n => 'Olá, '.concat(n)

console.log(retorno1('Jubileu'))