const { User, Accomodation } = require("../models");
const { decodeData } = require("../helpers/jwt");

const authentication = (request, response, next) => {
  try {
    const { accestoken } = request.headers;

    if (!accestoken) {
      throw { name: "invalidToken" };
    } else {
      const decode = decodeData(accestoken);
      request.userData = decode; //menambah properti userData ke request

      console.log(request.userData);

      User.findByPk(request.userData.id)
        .then((user) => {
          if (user) {
            next();
          } else {
            throw { name: "Unauthenticated" };
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

module.exports = {
  authentication,
};
