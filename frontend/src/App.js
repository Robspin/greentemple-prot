import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import PriceContext from './PriceContext';
import TradingViewChart from './components/TradingViewChart';
import Header from './components/Header';
import Stats from './components/Stats';
import Blog from './components/Blog';

const App = () => {
   const [priceData, setPriceData] = useState({});

   let currentPrices;

   useEffect(() => {
      axios
         .get('https://greentemple.io/api/prices')
         .then(res => {
            console.log(res.data[res.data.length - 1]);
            currentPrices = res.data[res.data.length - 1];
            setPriceData({
               priceData: res.data,
               currentPortfolio:
                  0.44 * currentPrices['XAU'] +
                  97 * currentPrices['XAG'] +
                  0.24 * currentPrices['BTC']
            });
         })
         .catch(err => console.log(err));
      console.log(priceData);
   }, []);

   return (
      <Router>
         <PriceContext.Provider value={(priceData, setPriceData)}>
            <Header />
            <div className='app-body'>
               <Route path='/' component={Stats} exact />
               <Route path='/chart' component={TradingViewChart} />
               <Route path='/blog' component={Blog} />
            </div>
         </PriceContext.Provider>
      </Router>
   );
};

export default App;
