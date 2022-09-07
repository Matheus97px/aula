function compras (trab1, trab2) {
    const comprarSorvete = trab1 || trab2;
    const comprarTV50 = trab1 && trab2;
    const comprarTv32 = trab1 != trab2;
    //const comprarTv32 = !!(trab1 ^ trab2) //bitwise xor
    const manterSaudavel = !comprarSorvete;// operador unário

    return { comprarSorvete, comprarTV50, comprarTv32, manterSaudavel};

}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));