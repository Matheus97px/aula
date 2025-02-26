// Calculadora

const calculadora = (a, b, operacao) => {
    switch (operacao) {
        case '+':
            console.log(a + b)
            break
        case '-':
            console.log(a - b)
            break
        case '*':
            console.log(a * b)
            break
        case '/':
            console.log(a / b)
            break
        default:
            console.log('')
    }
}

calculadora(3, 3, '+')
calculadora(3, 3, '-')
calculadora(3, 3, "*")
calculadora(3, 3, '/')