const sequelize = reqire('sequelize');
import configDB from './config';

const config = new sequelize(configDB.DB_NAME, configDB.DB_USER, configDB.DB_PASS, configDB.sequelize_config);

export default config;