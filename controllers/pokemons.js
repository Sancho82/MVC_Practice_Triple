const express = require('express');
const pokemons = express();
const models = require('../models');

// Index

pokemons.get('/', (req, res) => {
  models.Pokemon.findAll().then(pokemons => {
    res.json(pokemons);
  });
});

// Show

pokemons.get('/:id', (req, res) => {
  models.Pokemon.findById(req.params.id).then(pokemons => {
    if (pokemons === null) {
      res.status(400).send('Nincs ilyen Pokemon!');
    } else {
      res.json(pokemons);
    }
  });
});

// Create

pokemons.post('/', (req, res) => {
  models.Pokemon.findOne({ where: { name: req.body.name } }).then(preResult => {
    if (preResult) {
      return res.status(400).send('Már van ilyen Pokemon!')
    } else {
      models.Pokemon.create({
        type: req.body.type,
        name: req.body.name,
        cp: req.body.cp
      }).then(result => {
        res.json(result);
      });
    }
  });
});

// Update

pokemons.put('/:id', (req, res) => {
  models.Pokemon.findById(req.params.id).then(preResult => {
    if (!preResult) {
      return res.status(400).send('Nincs ilyen Pokemon!');
    }
    models.Pokemon.findOne({ where: { name: req.body.name } }).then(preResult2 => {
      if (preResult2) {
        return res.status(400).send('Már van ilyen nevű Pokemon!');
      } else {
        models.Pokemon.update({
          type: req.body.type,
          name: req.body.name,
          cp: req.body.cp
        }, {
          where: { id: req.params.id }
        }).then(result => {
          res.json(result);
        });
      }
    });
  });
});

// Delete

pokemons.delete('/:id', (req, res) => {
  models.Pokemon.destroy({ where: { id: req.params.id } }).then(result => {
    if (!result) {
      return res.status(400).send('Nincs ilyen Pokemon!');
    } else {
      res.json(result);
    }
  });
});

module.exports = pokemons;
