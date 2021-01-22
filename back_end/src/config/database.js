import {Sequelize} from 'sequelize';
import config from './config';

const database = new Sequelize(
  config.database.name,
  config.database.user_name,
  config.database.password,
  {
    host: config.database.host,
    dialect: "mysql",
    operatorsAliases: 1,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 20000
    },
    timezone: '+07:00',
    logging: true,
  },
)

export default database;