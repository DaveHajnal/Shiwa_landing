const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')
const header = require('./mock/header')
const jumbotron = require('./mock/jumbotron')
const card = require('./mock/card')
const content = require('./mock/content')
const icon = require('./mock/icon')


const app = express()
const handlebars = hbs.create({
  extname: 'hbs',
  defaultLayout: 'layout',
  layoutsDir: path.join(__dirname, '/views/layouts/')
})

app.engine('hbs', handlebars.engine)

app.use(express.static(__dirname))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.get('/', function (req, res) {
  res.render('index', {
    headerElements: header.headerElements,
    jumbotronElements: jumbotron.jumbotronElements,
    cardElements: card.cardElements,
    contentElements: content.contentElements,
    iconElements: icon.iconElements,
  })
})

app.listen(8080)
