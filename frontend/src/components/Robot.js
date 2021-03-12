import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import TempleContext from '../TempleContext';

const Robot = () => {
   const { trades, botActive } = useContext(TempleContext);
   const [btcPrice, setBtcPrice] = useState(10000);
   const [pnl, setPnl] = useState(0);
   const [openTrade, setOpenTrade] = useState(false);

   useEffect(() => {
      axios
         .get('https://api.binance.com/api/v3/ticker/price')
         .then(res => {
            setBtcPrice(res.data[11].price);
         })
         .catch(err => console.log(err));

      if (trades[0].type === 'LONG' || trades[0].type === 'SHORT') {
         setOpenTrade({
            date: trades[0].date,
            price: trades[0].price,
            type: trades[0].type
         });
      } else {
         setOpenTrade(false);
      }
      // eslint-disable-next-line
   }, [trades, botActive]);

   useEffect(() => {
      if (openTrade.type === 'LONG') {
         setPnl(
            Math.round(
               ((btcPrice - openTrade.price) / openTrade.price) * 10000
            ) / 100
         );
      } else if (openTrade.type === 'SHORT') {
         setPnl(
            Math.round(
               ((openTrade.price - btcPrice) / openTrade.price) * 10000
            ) / 100
         );
      }
   }, [openTrade, btcPrice]);

   return (
      <div className='robot'>
         <div className='stats__header stats__header-top'>
            <div className='stats__header-header'>ROBOT</div>
            <p className='stats__header-text'>
               I wrote a trading bot in NodeJS. <br /> <br />
               It checks every 4 hours for a signal to make a trade. <br /> It
               then checks whether the stop should be moved. <br />
               It uses the Ichimoku Cloud system along with Williams Fractals.{' '}
               <br />
               Below you can find the robot's status and performance.
            </p>
         </div>
         <div className='stats__header'>
            <h2 className='stats__header-header stats__header-header-secondary'>
               CURRENT STATUS
            </h2>
            <div className='stats__container-outer'>
               <div className='stats__container-inner'>
                  <ul>
                     <li className='stats__container-inner--list'>
                        - ROBOT STATUS:{' '}
                        <span
                           className={
                              botActive ? 'stats__pct--green' : 'stats__pct'
                           }
                        >
                           {botActive ? ' IN TRADE' : ' NOT IN TRADE'}
                        </span>
                     </li>
                     {openTrade && (
                        <>
                           <li className='stats__container-inner--list'>
                              - TRADE TYPE:{' '}
                              <span
                                 className={
                                    openTrade.type === 'LONG'
                                       ? 'stats__pct--green'
                                       : 'stats__pct'
                                 }
                              >
                                 {openTrade.type === 'LONG'
                                    ? ' LONG'
                                    : ' SHORT'}
                              </span>
                           </li>
                           <li className='stats__container-inner--list'>
                              - ENTRY PRICE: {openTrade.price}
                           </li>
                           <li className='stats__container-inner--list'>
                              - TRADE PNL:{' '}
                              <span
                                 className={
                                    pnl > 0 ? 'stats__pct--green' : 'stats__pct'
                                 }
                              >
                                 {pnl} %
                              </span>
                           </li>
                        </>
                     )}
                  </ul>
               </div>
               {/* <div className='stats__container-pie'>
            
               </div> */}
            </div>
         </div>
      </div>
   );
};

export default Robot;
