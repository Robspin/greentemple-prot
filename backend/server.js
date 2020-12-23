import cron from 'node-cron';
import path from 'path';
import express from 'express';
import dotenv from 'dotenv';

import pricesCall from './pricesCall.js';
import connectDB from './config/db.js';
import pricesRoutes from './routes/pricesRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

const __dirname = path.resolve();

cron.schedule(
   '00 11 * * *',
   () => {
      console.log('Scheduler running...');
      pricesCall();
   },
   {
      timezone: 'Europe/Amsterdam'
   }
);

// redirect http => https middleware
if (process.env.NODE_ENV === 'production') {
   app.use((req, res, next) => {
      if (req.header('x-forwarded-proto') !== 'https')
         res.redirect(`https://${req.header('host')}${req.url}`);
      else next();
   });
}

app.get('/api', (req, res) => {
   res.send('API is running...');
});

app.use('/api/prices', pricesRoutes);

app.use(express.static(path.join(__dirname, '/frontend/build')));

app.get('*', (req, res) =>
   res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
);

// app.use(notFound);
// app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
   PORT,
   console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
