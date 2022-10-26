// com promise....
const http = require('http')
const { reject } = require('lodash')
const { resolve } = require('path')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            res.on('data', dados => {
                resultado += dados
            })
            
            res.on('end', () => {
            try {
                resolve(JSON.parse(resultado))
            } catch (error) {
                reject(error)
            }
            })
        })    
    })
}

let nomes = []

/*getTurma('A').then(aluno =>{
    nomes = nomes.concat(aluno.map(a => `A: ${a.nome}`))
    getTurma('B').then(aluno =>{
        nomes = nomes.concat(aluno.map(a => `B: ${a.nome}`))
        getTurma('C').then(aluno => {
            nomes = nomes.concat(aluno.map(a => `C: ${a.nome}`))
            console.log(nomes)
        } )
    })
})
*/

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(error => console.log(error.message))

getTurma('D').catch(error => console.log(error.message))