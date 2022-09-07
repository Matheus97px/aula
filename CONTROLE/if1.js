function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com '+ nota);
    };
};

soBoaNoticia(7.4);
soBoaNoticia(4.7);

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade .....' + valor);
    }
}

seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo('');
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(' ');
seForVerdadeEuFalo('?');
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1, 2]);
seForVerdadeEuFalo({});