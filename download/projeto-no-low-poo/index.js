const express = require('express')
const mongoose = require('mongoose')
const port = 8080
const app = express()

mongoose.connect('mongodb://localhost/bancodedadosConsultoria', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

app.use(express.json())

app.use(express.static('publico'))
app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
  res.set({
    'Allow-access-Allow-Origin': '*'
  })
  //O Access-Control-Allow-Origin é incluído na resposta de um site a uma solicitação originada de outro site e identifica a origem permitida da solicitação. Um navegador da Web compara o Access-Control-Allow-Origin com a origem do site solicitante e permite o acesso à resposta se eles corresponderem.

  //esta solicitando acesso a página de origem

  return res.redirect(index.html)
})

app.post('/formulario', (req, res) => {
  var nome = req.body.nome
  var telefone = req.body.telefone
  var consultora = req.body.consultora
  var tratamento = req.body.tratamento

  var data = {
    nome: nome,
    telefone: telefone,
    consultora: consultora,
    tratamento: tratamento
  }

  db.collection('cadastros').insertOne(data, (err, collection) => {
    if (err) {
      throw err
    }
    console.log("Dados inseridos com sucesso!")
  })

    return res.redirect('form.html')
})


app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`)
})