const escola = 'Cod3r'
let a = 2
console.log(escola.charAt(4));
console.log(escola.charAt(5)); 
console.log(escola.charCodeAt(3));
console.log(escola.indexOf('3'));

console.log(escola.substring(1));
console.log(escola.substring(0, 4));

console.log('escola '.concat(escola).concat("!"));
console.log('escola '+ escola +"!");
console.log(escola.replace(3, 'e'));
console.log(escola.replace(/\d/, 'e')); // substitua todos os 
                                        //digitos pela letra e

console.log(escola.replace(/\w/g, 'e')); // subtitua todos os
                                         //digitos e letras
                                         // pela letra


console.log('ana, maria , pedro'.split('.'));                                         
