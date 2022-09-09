const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    const apenasChineses = funcionario => funcionario.pais === 'China'
    const apenasMulheres = funcionario => funcionario.genero === 'F'
    
    console.log(funcionarios.filter(apenasChineses).filter(apenasMulheres).reduce((a, b) => {
      return a.salario < b.salario ? a : b
    })) 
 })

