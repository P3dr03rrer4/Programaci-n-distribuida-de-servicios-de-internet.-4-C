require('dotenv').config()

const express = require ('express')
const app = express()
const bodyParser = require('body parser')
const md5 = require('md5')
const {appConfig} = require('./lib/config') 

app.use(bodyParser.urlencoded({ extended: false}))
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/practica', function(req, res) {
    res.render('index');
});

app.get('/practica', function(req, res){
    res.render('practica');
});
app.post('/ingreso', function(req,res) {
    let pass = md5(req.body.pass)
    res.render('ingreso', {correo: req.body.email, pass:pass});
});

app.listen(appConfig.port, () => console.log('piesto en  marcha puerto 5 ${appConfig.port}' ))