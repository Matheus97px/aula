function semVogal(palavra) {
    let resultado = palavra.replace(/(a|e|i|o|u)/gi,'')
    console.log(resultado)
}

semVogal('Cod3r')

function semVogal2(palavra){
    let vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    vogais.forEach(vogal => palavra = palavra.replace(vogal, ''))
    console.log(palavra)
}

semVogal2("Fundamentos")