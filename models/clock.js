'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clock = sequelize.define('Clock', {
    manufacturer: DataTypes.STRING,
    model: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Clock.associate = function(models) {
    // associations can be defined here
  };
  return Clock;
};