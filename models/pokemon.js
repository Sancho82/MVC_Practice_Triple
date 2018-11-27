'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pokemon = sequelize.define('Pokemon', {
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    cp: DataTypes.INTEGER
  }, {});
  Pokemon.associate = function(models) {
    // associations can be defined here
  };
  return Pokemon;
};