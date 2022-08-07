"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Accomodation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Accomodation.belongsTo(models.User, { foreignKey: "UserId" });
      Accomodation.belongsTo(models.Type, { foreignKey: "TypeId" });
    }
  }
  Accomodation.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "name cannot null",
          },
          notEmpty: {
            args: true,
            msg: "name cannot empty",
          },
        },
      },
      facility: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Facility cannot null",
          },
          notEmpty: {
            args: true,
            msg: "Facility cannot empty",
          },
        },
      },
      roomCapacity: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Room Capacity cannot null",
          },
          notEmpty: {
            args: true,
            msg: "Room Capacity cannot empty",
          },
        },
      },
      imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Image Url cannot null",
          },
          notEmpty: {
            args: true,
            msg: "Image Url cannot empty",
          },
        },
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Location cannot null",
          },
          notEmpty: {
            args: true,
            msg: "Location cannot empty",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Price cannot null",
          },
          notEmpty: {
            args: true,
            msg: "Price cannot empty",
          },
          min: {
            args: 50000,
            msg: "Minimum price is 50000",
          },
        },
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "User cannot null",
          },
          notEmpty: {
            args: true,
            msg: "User cannot empty",
          },
        },
      },
      TypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Type cannot null",
          },
          notEmpty: {
            args: true,
            msg: "Type cannot empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Accomodation",
    }
  );
  return Accomodation;
};
