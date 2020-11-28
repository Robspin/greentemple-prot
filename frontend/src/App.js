import React from 'react';

import Nav from './components/Nav';
import TradingViewChart from './components/TradingViewChart';

const App = () => (
   <div>
      <Nav />
      <div className='app-body'>
         <TradingViewChart />
      </div>
   </div>
);

export default App;
