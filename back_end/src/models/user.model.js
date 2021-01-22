import {Sequelize} from 'sequelize';
import database from '../config/database';

const User = database.define("auth", {
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
},{
  paranoid: true,
  underscored: true,
  underscoredAll: true,
  timestamps: false,
  tableName: "auth",
  freezeTableName: true
});

export default User;
