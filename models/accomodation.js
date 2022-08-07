'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Accomodation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Accomodation.init({
    name: DataTypes.STRING,
    facility: DataTypes.STRING,
    roomCapacity: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING,
    location: DataTypes.STRING,
    price: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    TypeId: DataTypes.INTEGER,
    UserActivityId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Accomodation',
  });
  return Accomodation;
};