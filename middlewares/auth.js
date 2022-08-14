const { User, Accomodation } = require("../models");
const { decodeData } = require("../helpers/jwt");

// authentication untuk proses login

const authentication = (request, response, next) => {
  try {
    const { accestoken } = request.headers;

    if (!accestoken) {
      throw { name: "invalidToken" };
    } else {
      const decode = decodeData(accestoken);
      request.userData = decode; //menambah properti userData ke request

      User.findByPk(request.userData.id) // mencari user yang sesuai dengan data dari accessToken
        .then((user) => {
          if (user) {
            next();
          } else {
            throw { name: "Unauthenticated" }; //pesan error jika user tidak ditemukan
          }
        })
        .catch((err) => {
          throw err;
        });
    }
  } catch (error) {
    next(error);
  }
};

const authorization = async (request, response, next) => {
  try {
    if (request.userData.role === "admin") {
      next();
    } else {
      const { id } = request.params;
      console.log(id);
      const user = await User.findByPk(id);
      console.log(user);
      if (!user) {
        throw { name: "NotFound" };
      }
      if (user.id !== request.userData.id) {
        throw { name: "Forbidden" };
      }
      next();
    }
  } catch (error) {
    next(error);
  }
};
const authorizationAccomodation = async (request, response, next) => {
  try {
    if (request.userData.role === "admin") {
      next();
    } else {
      const { id } = request.params;
      console.log(id);
      const accomodation = await Accomodation.findByPk(id);
      console.log(accomodation);
      if (!accomodation) {
        throw { name: "NotFound" };
      }
      if (accomodation.UserId !== request.userData.id) {
        throw { name: "Forbidden" };
      }
      next();
    }
  } catch (error) {
    next(error);
  }
};

const authorizationOnlyAdmin = async (request, response, next) => {
  try {
    if (request.userData.role === "admin") {
      next();
    } else {
      throw { name: "Forbidden" };
    }
  } catch (error) {
    next(error);
  }
};
module.exports = {
  authentication,
  authorization,
  authorizationAccomodation,
  authorizationOnlyAdmin,
};
