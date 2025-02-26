//Padrao de asteriscos

const padrao = (n) =>{
    let asterisco = ''
    for (let i = 1; i <= n; i++){
        console.log(asterisco += '*')
    }
}


padrao(8)