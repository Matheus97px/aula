const express = require('express')
const app = express() 
const bodyParse = require('body-parser')

app.use(bodyParse.urlencoded({ extended: true}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabens. Usuario Alterado!!!</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabens. Usuario Alterado!!!!</h1>')
})

app.listen(3003)