
import { Schema, model } from 'mongoose';

const flightSchema = new Schema({
  Origin: String,
  Destination: String,
  Company: String,
  Departure_Time: String,
  Arrival_Time: String,
  Duration_Time: String,
  Flight_Price: String,
  Date: Date,
});

const Flight = model('Flight', flightSchema);

export default Flight;
