import nodemailer from 'nodemailer';
import axios from 'axios';
import dotenv from 'dotenv';

import Prices from './models/pricesModel.js';

let prices = [];

(async function getAllPrices() {
   const data = await Prices.find({});
   prices = data;
   // console.log(`prices: ${prices[prices.length - 1]['XAG']}`);
})();

dotenv.config();

const metalsKey = process.env.METALS_KEY;

let fetchedMetals;

// Only 50 calls a month!
export default function pricesCall() {
   const currentDate = new Date().toLocaleString('en-GB', {
      timeZone: 'Europe/Amsterdam'
   });

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
                  XAG: 25,
                  XAU: 1800,
                  portfolio:
                     0.44 * 1800 +
                     25 * 97 +
                     0.25 * (Math.round(response.data[11].price * 100) / 100)
               });

               // @desc    Insert prices in database
               // @access  Backend only
               const postIt = async () => {
                  const insertPrices = new Prices({
                     date: currentDate,
                     BTC: Math.round(response.data[11].price * 100) / 100,
                     XAU: prices[prices.length - 1]['XAU'],
                     XAG: prices[prices.length - 1]['XAG'],
                     portfolio: prices[prices.length - 1]['portfolio']
                  });

                  const insertedPrices = await insertPrices.save();
               };
               postIt();
            })
            .then(setTimeout(() => sendMail(), 5000));
      });

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
         html: `<h2>Today's Data:</h2> 
            <h3>Today:</h3>
            <ul><li>BITCOIN:  ${JSON.stringify(
               prices[prices.length - 1]['BTC']
            )}</li>
      <li>GOLD:  ${JSON.stringify(prices[prices.length - 1]['XAU'])}</li>
      <li>SILVER:  ${JSON.stringify(prices[prices.length - 1]['XAG'])}</li>
      <br>
      <h3>All:</h3>
      <p>${JSON.stringify(prices)}</p>
      `
         // attachments: [
         //    { filename: 'prices.json', path: './backend/prices.json' }
         // ]
      };

      transporter.sendMail(mailOptions, (err, info) => {
         if (err) {
            console.log(err);
         } else {
            console.log(`Email sent: ${info.response}`);
         }
      });
   };

   // const readPrice = async () => {
   //    return fs.readFile(
   //       './backend/prices.json',
   //       'utf8',
   //       function (err, contents) {
   //          // console.log(JSON.parse(contents));
   //          prices = JSON.parse(contents);
   //          sendMail();
   //       }
   //    );
   // };
}
