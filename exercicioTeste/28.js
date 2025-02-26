//Filtrando propriedades
/*Faça um programa que exiba somente as propriedades de um objeto que o usuário desejar.

Seu programa irá receber um objeto e um array contendo as propriedades desejadas.

Extra: faça uma verificação se a propriedade passada no array existe no objeto.*/




const obj = {
    "age": 32,
    "height": 176,
    "weight": 68,
    "score": 87,
    "temperature": 23
};


const obj2 = {
    oi: 1,
    tudo: 2,
    bem: 3
};

const filtrarPropriedades = (objeto, props) => props.map(prop => {
    if (objeto.hasOwnProperty(prop)){
        console.log(`Propriedade ${prop}, valor ${objeto[prop]}`)
    } else {
    }
})

filtrarPropriedades(obj, ['age', 'score', 'temperature', 'oi'])
filtrarPropriedades(obj2, ['age', 'score', 'temperature', 'oi'])
