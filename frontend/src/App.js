import React, { useState } from 'react';

import Nav from './components/Nav';
import TradingViewChart from './components/TradingViewChart';

const App = () => {
   const [page, setPage] = useState('home');

   return (
      <div>
         <Nav setPage={setPage} page={page} />
         <div className='app-body'>
            <TradingViewChart />
         </div>
      </div>
   );
};

export default App;
