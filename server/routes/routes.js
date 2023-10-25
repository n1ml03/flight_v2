// app.js
import express from 'express';
import { json, urlencoded } from 'body-parser';
import { sync } from './config/database';
import Flight from './flight';

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

// Create your /flights GET route here (as shown in the previous response).

const PORT = process.env.PORT || 3000;

sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});