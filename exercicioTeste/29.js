//União de objetos

/*Seu programa irá receber dois objetos com propriedades variadas. Você deve retornar um novo objeto que contenha todas as propriedades dos dois objetos anteriores.*/


const obj = {
    "idade": 32,
    "peso": 68,
  "temperatura": 23,
  "oi":4
};

const obj2 = {
    "oi": 1,
    "tudo": 2,  
    "bem": 3
};

const uniaoObjetos = (obj1, obj2) => ({...obj1, ...obj2})


console.log(uniaoObjetos(obj, obj2));

const uniaoObjetos2 = (obj1, obj2, array = []) => array.concat(obj1, obj2)

console.log(uniaoObjetos2(obj, obj2));
