import React, { useState } from 'react';

import Nav from './components/Nav';
import TradingViewChart from './components/TradingViewChart';

const App = () => {
   const [page, setPage] = useState('chart');

   return (
      <div>
         <Nav setPage={setPage} page={page} />
         <div className='app-body'>
            {page === 'chart' ? <TradingViewChart /> : undefined}
         </div>
      </div>
   );
};

export default App;
