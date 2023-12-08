require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

//Handlebars
//TODO: require('hbs);
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico
app.use( express.static('public'));

app.get('/', (req, res) => {
  // res.send('Hola Mundo');
  res.render('home', {
    nombre: 'Rogelio Valiente',
    titulo: 'Curso de Node'
  });
});

app.get('/generic', (req, res) => {
  // res.sendFile(__dirname + '/public/generic.html')
  res.render('generic', {
    nombre: 'Rogelio Valiente',
    titulo: 'Curso de Node'
  });
});

app.get('/elements', (req, res) => {
  // res.sendFile(__dirname + '/public/elements.html')
  res.render('elements', {
    nombre: 'Rogelio Valiente',
    titulo: 'Curso de Node'
  });
});

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
});
// app.get('/public/index.html', (req, res) => {
//     res.send('Hello World in their correct route')
// });

app.get('*', (req, res) => {
    res.send('404 | Page not found')
});

// app.listen(3000)
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})