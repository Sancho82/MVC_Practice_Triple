'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Clocks', [{
      manufacturer: 'Casio',
      model: 'Szamologepes',
      type: 'retro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      manufacturer: 'Rolex',
      model: 'sznob',
      type: 'arany',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  down: (queryInterface, Sequelize) => {
  }
};
