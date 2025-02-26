//fibonacci

const fibonacci = (n) => {
    let fib = [0, 1]
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    console.log(fib.join(' '))
    return fib
}

fibonacci(10)

function fibonacci2(x) {
    if (x < 0) throw new Error ('Foi digitado um valor negativo');

    if (x === 0) return 0;

    if (x === 1) return 1;

    return (fibonacci2(x-2) + fibonacci2(x-1));
}

function showFibonacci(x) {
    if (x < 0) {
        console.log('Por favor, entre com um número maior que zero');
        return;
    }
    
    let i = 0;
    const list = [];

    while (fibonacci2(i) <= x) {
        list.push(fibonacci(i));
        i++;
    }

    console.log(list.join(', '));
}

const N = 500;
showFibonacci(55);

//nao foi feito por mim ;-; estou truaste
