import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const App = () => (
   <TradingViewWidget
      symbol='COINBASE:BTCUSD'
      theme={Themes.DARK}
      locale='fr'
   />
);

export default App;
