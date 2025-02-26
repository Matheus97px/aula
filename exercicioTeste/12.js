//Numeros primos

const numPrimos = (n) => {
    for (let i = 2; i <= n; i++) {
        let primo = true
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                primo = false
                break
            }
        }
        if (primo) {
            console.log(i)
        }
    }
}

numPrimos(1000)
