const Sequelize = require("sequelize");
const db =  require("../models");

const Auth = db.define("auth",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    paranoid: true,
    underscored: true,
    underscoredAll: true,
    timestamps: false,
    tableName: "quote",
    freezeTableName: true
  }
);

module.exports = Auth;
