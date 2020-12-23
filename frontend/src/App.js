import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import TradingViewChart from './components/TradingViewChart';
import Header from './components/Header';
import Stats from './components/Stats';

const App = () => {
   return (
      <Router>
         <Header />
         <div className='app-body'>
            <Route path='/' component={Stats} exact />
            <Route path='/chart' component={TradingViewChart} />
         </div>
      </Router>
   );
};

export default App;
