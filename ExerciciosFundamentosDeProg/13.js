const teste1 = ["javascript", 1, "3", "web", 20]

const padrao1 = teste1.filter(numero => typeof numero === "number")

console.log(padrao1)

function filtrar(array) {
console.log(array.filter(numero => typeof numero === "number"))
}

filtrar(["javascript", 8, "3", "web", 20])

function filtrar2(array) {
    let reserva = []
    for (let i of array) {
        if(typeof i === "number") {
            reserva.push(i)
        }
    }
    console.log(reserva)
}



filtrar2(["javascript", 8, "3", "web", 20])
