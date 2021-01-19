const config = {
    DB_NAME: 'demo',
    DB_PASS: '1111',
    DB_USER: 'root',

    sequelize_config: {
      host: 'localhost',
      port: '3306', //default
      dialect: 'mysql',
      // operatorsAliases: false,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
      dialectOptions: {
        dateStrings: true,
      },
      logging: true,
    },
  };

export default config;