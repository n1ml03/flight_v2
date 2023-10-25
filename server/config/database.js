// db.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('flight', 'root', 'namlepaylak', {
  dialect: 'mysql',
});

export default sequelize;