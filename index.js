const express = require('express');
const app = express();
const clocks = require('./controllers/clocks');
const videogames = require('./controllers/videogames');
const pokemons = require('./controllers/pokemons');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/clocks', clocks);
app.use('/videogames', videogames);
app.use('/pokemons', pokemons);
app.listen(process.env.PORT);
