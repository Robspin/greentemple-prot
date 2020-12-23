import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const TradingViewChart = () => {
   return (
      <div className='chart-wrapper'>
         <TradingViewWidget
            symbol='COINBASE:BTCUSD'
            theme={Themes.DARK}
            autosize
         />
      </div>
   );
};

export default TradingViewChart;
