const express = require('express');
const videogames = express();
const models = require('../models');

// Index

videogames.get('/', (req, res) => {
  models.Videogame.findAll().then(videogames => {
    res.json(videogames);
  });
});

// Show

videogames.get('/:id', (req, res) => {
  models.Videogame.findById(req.params.id).then(videogame => {
    res.json(videogame);
  });
});

module.exports = videogames;
