const express = require('express');
const clocks = express();
const models = require('../models');

// Index

clocks.get('/', (req, res) => {
  models.Clock.findAll().then(clocks => {
    res.json(clocks);
  });
});

// Show

clocks.get('/:id', (req, res) => {
  models.Clock.findById(req.params.id).then(clock => {
    res.json(clock);
  });
});

module.exports = clocks;
