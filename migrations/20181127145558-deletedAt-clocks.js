'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Clocks', 'deletedAt', Sequelize.DATE);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropColumn('Clocks', 'deletedAt');
  }
};
