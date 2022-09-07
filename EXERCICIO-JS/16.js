function calculadora (a, operador, b){
    
    switch(operador){

        case '+': 
         console.log('o resuldo é: ' + (a + b) )
        break
        
        case '-':
            console.log('o resuldo é: ' + (a - b) )
        break

        case '/':
            console.log('o resuldo é: ' + (a / b) )
        break

        case '*':
            console.log('o resuldo é: ' + (a * b) )
        break
        default:
         console.log('operacao invalida')
        break
    }

}

calculadora(2, '+', 2)
calculadora(2, '-', 2)
calculadora(2, '/', 2)
calculadora(2, '*', 2)
calculadora(2, 'c', 2)
calculadora(2, 2, 2)

