function forEach2 (array){
    let a = 0
    for (const i in array) {
        console.log(`${a += 1}) ${array[i]}`)
        }
    }


const aprovados = ['Naldo', 'Barbosa', 'Carlinhos', 'Chicao']

forEach2(aprovados)
//              ///         ///             ///             ///             ///             //
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
    
})

//      ////                /////           ////            ////        ////    
// exemplo professor

Array.prototype.forEach3 = function(callback){
    for (let i = 0; i < this.length; i++) {
       callback(this[i], i, this)
        
    }
}

aprovados.forEach3(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
    
})