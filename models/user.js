"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Accomodation, { foreignKey: "UserId" });
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Username cannot null",
          },
          notEmpty: {
            args: true,
            msg: "Username cannot empty",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Email cannot null",
          },
          notEmpty: {
            args: true,
            msg: "Email cannot empty",
          },
          isEmail: {
            args: true,
            msg: "Invalid email",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Password cannot null",
          },
          notEmpty: {
            args: true,
            msg: "Password cannot empty",
          },
          checkPasswordLength(value) {
            if (value.length < 5) {
              throw new Error("minimum password length is 5");
            }
          },
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Role cannot null",
          },
          notEmpty: {
            args: true,
            msg: "Role cannot empty",
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate: (user) => {
          user.password = hashPassword(user.password);
        },
        beforeUpdate: (user) => {
          user.password = hashPassword(user.password);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
