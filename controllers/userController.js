const { User } = require("../models");
const { checkPassword } = require("../helpers/bcrypt");

class UserController {
  static async userRegister(request, response, next) {
    const { username, email, password, role } = request.body;

    try {
      const newUser = await User.create({ username, email, password, role });
      response.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
  static async userLogin(request, response, next) {
    const { email, password } = request.body;
    // console.log(request.body);

    if (!email || !password) {
      next({ name: "Email and Password is required" });
    } else {
      try {
        const user = await User.findOne({ where: { email } });
        // console.log(user);
        const check = checkPassword(password, user.password);

        if (user && check) {
        }
      } catch (error) {}
    }
  }
  static async getAllUser(request, response, next) {}
  static async getUserById(request, response, next) {}
  static async updateUserData(request, response, next) {}
  static async deleteUser(request, response, next) {}
}

module.exports = UserController;
