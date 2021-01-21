const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config");

const db = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 1,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

// const db = {};
//
// db.Sequelize = Sequelize;
// db.sequelize = sequelize;
//
// db.tutorials = require("./auth.model")(sequelize, Sequelize);

module.exports = db;
