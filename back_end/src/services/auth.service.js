const Sequelize = require("sequelize");
const Auth = require('../models/auth.model');
const Op = Sequelize.Op;

exports.register = async (userData) => {
  try {
    let user = await Auth.create(userData);
    if (!user) {
      throw new Error();
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
