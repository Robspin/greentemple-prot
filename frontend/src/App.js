import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import TempleContext from './TempleContext';
import TradingViewChart from './components/TradingViewChart';
import Header from './components/Header';
import Stats from './components/Stats';
import BitcoinTest from './components/BitcoinTest';
import Blog from './components/Blog';
import Robot from './components/Robot';

const App = () => {
   const [priceData, setPriceData] = useState({
      latestPriceData: {
         BTC: 3,
         XAG: 3,
         XAU: 3,
         date: '12/28/2020, 10:00:00 AM',
         portfolio: 10000
      },
      priceData: [
         {
            date: '12/28/2020, 10:00:00 AM',
            XAG: 0,
            BTC: 0,
            XAU: 0,
            portfolio: 10000
         },
         {
            date: '12/28/2020, 10:00:00 AM',
            XAG: 0,
            BTC: 0,
            XAU: 0,
            portfolio: 10000
         }
      ]
   });
   const [trades, setTrades] = useState([
      {
         _id: '6046e17a7fc5650ee7319297',
         date: '09/03/2021, 03:46:08',
         type: 'LONG',
         price: 53628,
         quantity: 0.000709,
         tradingBallanceUsdt: 152.0172437794,
         tradingBallanceBTC: 0.00283567,
         __v: 0
      },
      {
         _id: '60482bb55e7b2f1bad2e8657',
         date: '10/03/2021, 03:09:57',
         type: 'STOPPED OUT',
         price: 53611.97,
         quantity: 0.000716,
         tradingBallanceUsdt: 152.4232377108,
         tradingBallanceBTC: 0.00283335,
         __v: 0
      }
   ]);
   const [botActive, setBotActive] = useState(false);

   useEffect(() => {
      axios
         .get('https://greentemple.io/api/prices')
         .then(res => {
            setPriceData({
               priceData: res.data,
               latestPriceData: res.data[res.data.length - 1]
            });
         })
         .catch(err => console.log(err));

      axios
         .get('https://greentemple.io/api/trades')
         .then(res => setTrades(res.data))
         .catch(err => console.log(err));

      axios
         .get('https://greentemple.io/api/trades/active')
         .then(res => setBotActive(res.data[0].active))
         .catch(err => console.log(err));
   }, []);

   return (
      <Router>
         <TempleContext.Provider value={{ priceData, trades, botActive }}>
            <Header />
            <div className='app-body'>
               <Route path='/' component={Stats} exact />
               <Route path='/robot' component={Robot} />
               <Route path='/test' component={BitcoinTest} />
               <Route path='/chart' component={TradingViewChart} />
               <Route path='/blog' component={Blog} />
            </div>
         </TempleContext.Provider>
      </Router>
   );
};

export default App;
