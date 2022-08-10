const jwt = require("jsonwebtoken");

const encodeData = (payload) => {
  return jwt.sign(payload, "onlyForTravellerDeveloper");
};

const decodeData = (token) => {
  return jwt.verify(token, "onlyForTravellerDeveloper");
};

module.exports = {
  encodeData,
  decodeData,
};
