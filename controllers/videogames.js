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
    if (videogame === null) {
      res.status(400).send('Nincs ilyen játék!');
    } else {
      res.json(videogame);
    }
  });
});

// Create

videogames.post('/', (req, res) => {
  models.Videogame.create({
    distributor: req.body.distributor,
    name: req.body.name,
    type: req.body.type
  }).then(result => {
    res.json(result);
  });
});

// Update

videogames.put('/:id', (req, res) => {
  models.Videogame.update({
    distributor: req.body.distributor,
    name: req.body.name,
    type: req.body.type
  }, {
      where: { id: req.params.id }
    }).then(result => {
      res.json(result);
    });
});

// Delete

videogames.delete('/:id', (req, res) => {
  models.Videogame.destroy({ where: { id: req.params.id } }).then(result => {
    res.json(result);
  });
});

module.exports = videogames;
