import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const TradingViewChart = () => {
   return (
      <TradingViewWidget
         symbol='COINBASE:BTCUSD'
         theme={Themes.DARK}
         autosize
      />
   );
};

export default TradingViewChart;
