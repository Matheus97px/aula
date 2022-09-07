function elevado (base, expoente){
        for (i = 0; i < expoente; i++) {
          const  resultado = base * base;
            this.getResultado = resultado * base; 
    }
    return this.getResultado
}

console.log(elevado(2, 3))
console.log(elevado(4, 3))
console.log(elevado(5, 3))
console.log(elevado(9, 7))

function elevado2(base, expoente){
    const resultado = base ** expoente
    console.log(resultado)
}

elevado2(2, 3)
elevado2(4, 3)
elevado2(5, 3)
elevado2(9, 7)