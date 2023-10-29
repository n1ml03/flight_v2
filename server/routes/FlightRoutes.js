
import { Router } from 'express';
const router = Router();
import { Flight } from '../models/FlightModels.js';

// Get all flights
router.get('/', async (req, res) => {
  try {
    const flights = await Flight();
    res.json(flights);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get flights based on query parameters
router.get('/search', async (req, res) => {
  const {
    Origin,
    Destination,
    Company,
    Departure_Time,
    Arrival_Time,
    Duration_Time,
    Flight_Price,
    Date,
  } = req.query;

  const query = {};

  if (Origin) query.Origin = Origin;
  if (Destination) query.Destination = Destination;
  if (Company) query.Company = Company;
  if (Departure_Time) query.Departure_Time = Departure_Time;
  if (Arrival_Time) query.Arrival_Time = Arrival_Time;
  if (Duration_Time) query.Duration_Time = Duration_Time;
  if (Flight_Price) query.Flight_Price = Flight_Price;
  if (Date) query.Date = Date;

  try {
    const flights = await find(query);
    res.json(flights);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
