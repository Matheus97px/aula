function trianguloTipos (x , y, z){
    if (x == y && x == z) {
        console.log('Esse triangulo é um Equilátero')
    } else if(x != y && x == z || x == y && x != z || z == y && z != x) {
        console.log('Esse triangulo é um Isoceles')
    } else {
        console.log('Esse triangulo é um Escaleno')
    }
    
}
trianguloTipos(2, 2, 2)
trianguloTipos(12, 2, 2)
trianguloTipos(2, 22, 2)
trianguloTipos(2, 2, 322)
trianguloTipos(241, 212, 21)