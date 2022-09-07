// par nome/valor
const saudacao = 'opa' // contexto lexico 2

function exec(){
    const   saudacao = 'Falaa'// contexto lexico 2
    return saudacao
}

// objetos sao grupos aninhados de pares nome/valor
const Cliente = {
    nome: 'pedro',
    idade: 32,
    peso: 90,
    endereco : {
        logradouro:'rua muito legal',
        numero:123
    }
}

console.log(saudacao);
console.log(exec());
console.log(Cliente);