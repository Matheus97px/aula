function Pessoa(nome) {    
    this.nome = nome;

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`);
    } 
}

const p1 = new Pessoa('João');
p1.falar();

/*function Pessoa1(nome){
    let nomezin
    this.chamarPessoa = function(){
       if(nome !== String){
        console.log(`Meu Nome é ${nome}`)
       }else {
        console.log('Isso não é um nome por favor coloque um nome valido')
       } 
    }
}
 
const carinha = new Pessoa1('Carlao');
carinha.chamarPessoa();*/