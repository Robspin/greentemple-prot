const cron = require('node-cron');
const shell = require('shelljs');

cron.schedule(
   '53 11 * * *',
   () => {
      console.log('Scheduler running...');
      if (shell.exec('node prices.js').code !== 0) {
         console.log('Something went wrong');
      }
   },
   {
      timezone: 'Europe/Amsterdam'
   }
);