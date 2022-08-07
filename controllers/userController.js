const { User } = require("../models");

class UserController {
  static async userRegister(request, response) {
    const { username, email, password, role } = request.body;

    try {
      const newUser = await User.create({ username, email, password, role });
      response.status(200).json(newUser);
    } catch (error) {
      response.status(500).json(error);
    }
  }
  static async userLogin(request, response) {}
  static async getAllUser(request, response) {}
  static async getUserById(request, response) {}
  static async updateUserData(request, response) {}
  static async deleteUser(request, response) {}
}

module.exports = UserController;
