// noivo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco : {
        logradouro: 'Rua Abc',
        numero: 1000 
    }
}

const {nome , idade} = pessoa;
const {nome: n , idade: i} = pessoa;
const {sobrenome, bemHumorada = true} = pessoa;
const {endereco: {logradouro, numero, cep } } = pessoa;

console.log(nome, idade);
console.log(n, i);
console.log(sobrenome, bemHumorada);
console.log(logradouro, numero, cep);


//const {conta: {ag, num} } = pessoa;
//console.log(ag, num);

