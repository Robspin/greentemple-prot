import React, { useState } from 'react';

import Nav from './components/Nav';
import TradingViewChart from './components/TradingViewChart';
import Header from './components/Header';

const App = () => {
   const [page, setPage] = useState('blog');

   return (
      <div>
         <Header setPage={setPage} page={page} />
         <div className='app-body'>
            {page === 'chart' ? <TradingViewChart /> : undefined}
         </div>
      </div>
   );
};

export default App;
