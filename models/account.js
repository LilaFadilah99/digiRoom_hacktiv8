"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Account.belongsTo(models.UserActivity, { foreignKey: "UserActivityId" });
    }
  }
  Account.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Name cannot null",
          },
          notEmpty: {
            args: true,
            msg: "Name cannot empty",
          },
        },
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Gender cannot null",
          },
          notEmpty: {
            args: true,
            msg: "Gender cannot empty",
          },
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Address cannot null",
          },
          notEmpty: {
            args: true,
            msg: "Address cannot empty",
          },
        },
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Phone Number cannot null",
          },
          notEmpty: {
            args: true,
            msg: "Phone Number cannot empty",
          },
        },
      },
      contackEmergency: DataTypes.STRING,
      UserActivityId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Account",
    }
  );
  return Account;
};
