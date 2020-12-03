import React, { useState } from 'react';

import Nav from './components/Nav';
import TradingViewChart from './components/TradingViewChart';
import Header from './components/Header';

const App = () => {
   const [page, setPage] = useState('blog');

   return (
      <div>
         <Nav setPage={setPage} page={page} />
         <div className='app-body'>
            {page === 'chart' ? <TradingViewChart /> : undefined}
            {page === 'blog' ? <Header /> : undefined}
         </div>
      </div>
   );
};

export default App;
