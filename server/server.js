import express, { json } from 'express';
import { connect, connection } from 'mongoose';
const app = express();
import router from './routes/FlightRoutes.js';

connect('mongodb://localhost:27017/Flight', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(json());  

app.use('/flights', router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
