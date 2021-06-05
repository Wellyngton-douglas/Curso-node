const express = require('express') //incluindo biblioteca no projeto

const app = express() //criação do objeto

app.set('view engine', 'ejs')

//utilização do objeto criado 
app.listen(3000, () => {
    console.log("Servidor rodadno na porta 3000!")
})

//HTTP - GET
app.get('/', (req, res) =>{
    res.send("Fala corno")
})

app.get('/segundo_caminho', (req, res) =>{
    res.send("Qual foi viado")
})

app.get('/tabuada', (req, res) =>{
    let valor = (req.query.numero === undefined) ? 1 : req.query.numero
    let y = 0
    let resposta = ''
    while (valor > y) {  
        y += 1 
        resposta += valor + '*' + y + '=' + (valor * y) + '</br>'
    }
    res.send(`${resposta}`)
})

app.get('/tabuada/:numero', (req, res) =>{
    let valor = req.params.numero
    let y = 0
    let resposta = ''
    while (valor > y) {  
        y += 1 
        resposta += valor + '*' + y + '=' + (valor * y) + '</br>'
    }
    res.send(`${resposta}`)
})

app.get('/test_ejs', (req, res) =>{
    res.render('teste')
})

app.get('/par_ejs', (req, res) =>{
    let x = 5
    let y = 8
    let z = 1
    let calculo = ''

    if (x < y) {
        calculo = ((x+z) %2 == 0)
    }
    res.render('par', {x : x, y : y, resultado : calculo})
})
