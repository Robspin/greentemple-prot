import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import PriceContext from './PriceContext';
import TradingViewChart from './components/TradingViewChart';
import Header from './components/Header';
import Stats from './components/Stats';
import Blog from './components/Blog';

const App = () => {
   const [priceData, setPriceData] = useState(null);

   useEffect(() => {
      axios
         .get('http://localhost:5000/api/prices')
         .then(data => {
            console.log(data);
         })
         .catch(err => console.log(err));
   }, []);

   return (
      <Router>
         <PriceContext.Provider value={priceData}>
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
