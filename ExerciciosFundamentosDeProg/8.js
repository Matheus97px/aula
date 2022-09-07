function multiplicar (n1, n2) {
    let resultado = 0
    if(n1 > 0 && n2 > 00){
    for (let i = 0; i < n2; i++) {
        resultado += n1      
    }
    console.log(`o resulltado é ${resultado}`)
    }else{
        console.log(`Por favor insira numeros validos`)
    }
}

multiplicar(1, 5)
multiplicar(5, 5)
multiplicar(130, 447)
multiplicar(1, -5)
multiplicar(-1, -5)