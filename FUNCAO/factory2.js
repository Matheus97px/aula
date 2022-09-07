 function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        deconto: 0.1
    }
 }
 console.log(criarProduto('carro 0', 130000.00))
 console.log(criarProduto('çasa', 47500.00))
 console.log(criarProduto('TV', 1300.00))