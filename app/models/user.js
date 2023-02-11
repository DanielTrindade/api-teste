"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    static async findAllUsers() {
      return this.findAll();
    }
    static async findUserByPk(id) {
      return this.findByPk(id);
    }
    static async createUser(user) {
      return this.create(user);
    }
    static updateUser(id, updates) {
      return this.update(updates, {
        where: {
          id: id,
        },
      });
    }
    static deleteUser(id) {
      return this.destroy({
        where: {
          id: id,
        },
      });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
