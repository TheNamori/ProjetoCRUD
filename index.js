const express = require('express'); //importa a biblioteca 'express'
const bodyParser = require('body-parser'); //importa a biblioteca 'body-parser'
const app = express(); //transforma o express em uma constante para melhor usabilidade
const path = require('path'); //import a biblioteca 'path'
const PORT = process.env.PORT || 3000; //atribui o processo a porta 3000

app.listen(PORT, () => console.log(`Listening on ${PORT}`)); //retorna no terminal qual a porta utilizada
app.set('view engine', 'ejs') //atribui a engine ejs(express javascript)
app.set('views', path.join(__dirname, 'views')) //transforma o diretório views em uma rota
app.get('/', (req,res) => res.render('index')); //renderiza este arquivo
app.use(express.static('public')); //transforma o diretório public em uma rota estática
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); //transforma o diretório bootstrap/dist/js em uma rota estática
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); //transforma o diretório jquery/dist em uma rota estática
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); //transforma o diretório bootstrap/dist/css em uma rota estática
app.use('/fontawesome', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/')); //transforma o diretório fontawesome-free em uma rota estática
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/show', (req, res) =>{
  console.log(req.body)
})