module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "111111",
  DB: "demo",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  timezone: '+07:00',
  logging: true,
};
