fs = require('fs');

const nodemailer = require('nodemailer');
const prices = require('./prices.json');
const axios = require('axios');
require('dotenv').config();

const currentDate = new Date().toLocaleString('en-GB', {
   timeZone: 'Europe/Amsterdam'
});

const metalsKey = process.env.METALS_KEY;

let fetchedMetals;

// Only 50 calls a month!
axios
   .get(`https://metals-api.com/api/latest?access_key=${metalsKey}`)
   .then(response => (fetchedMetals = response.data))
   .then(() => {
      axios
         .get(`https://api.binance.com/api/v3/ticker/price`)
         .then(response => {
            prices.push({
               date: currentDate,
               BTC: Math.round(response.data[11].price * 100) / 100,
               XAG: Math.round((1 / fetchedMetals.rates.XAG) * 100) / 100,
               gold: Math.round((1 / fetchedMetals.rates.XAU) * 100) / 100
            });

            fs.writeFile('prices.json', `${JSON.stringify(prices)}`, err => {
               if (err) return console.log(err);
            });
         })
         .then(setTimeout(() => readPrice(), 5000));
   });

require('dotenv').config();

const mailAdress = process.env.MAIL_ADDRESS;
const mailPassword = process.env.MAIL_PASSWORD;

const sendMail = () => {
   const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
         user: `${mailAdress}`,
         pass: mailPassword
      }
   });

   const mailOptions = {
      from: `${mailAdress}`,
      to: 'robin_steeman@hotmail.com',
      subject: `Daily Report ${currentDate}`,
      html: `<h2>Today's Data:</h2> <p>${JSON.stringify(prices)}</p>`,
      attachments: [{ filename: 'prices.json', path: './prices.json' }]
   };

   transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
         console.log(err);
      } else {
         console.log(`Email sent: ${info.response}`);
      }
   });
};

const readPrice = async () => {
   return fs.readFile('./prices.json', 'utf8', function (err, contents) {
      // console.log(JSON.parse(contents));
      priceData = JSON.parse(contents);
      sendMail();
   });
};
