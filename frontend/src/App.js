import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import PriceContext from './PriceContext';
import TradingViewChart from './components/TradingViewChart';
import Header from './components/Header';
import Stats from './components/Stats';
import BitcoinTest from './components/BitcoinTest';
import Blog from './components/Blog';

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
   }, []);

   return (
      <Router>
         <PriceContext.Provider value={{ priceData, setPriceData }}>
            <Header />
            <div className='app-body'>
               <Route path='/' component={Stats} exact />
               <Route path='/test' component={BitcoinTest} />
               <Route path='/chart' component={TradingViewChart} />
               <Route path='/blog' component={Blog} />
            </div>
         </PriceContext.Provider>
      </Router>
   );
};

export default App;
