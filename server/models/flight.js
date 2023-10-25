// flight.js
import { DataTypes } from 'sequelize';
import { define } from './config/database.js'; // Import your database connection

const Flight = define('Flight', {
  Origin: DataTypes.STRING,
  Destination: DataTypes.STRING,
  Company: DataTypes.STRING,
  Departure_Time: DataTypes.STRING,
  Arrival_Time: DataTypes.STRING,
  Duration_Time: DataTypes.STRING,
  Flight_Price: DataTypes.FLOAT,
  Date: DataTypes.DATA,
});

export default Flight;