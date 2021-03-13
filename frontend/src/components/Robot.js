import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import TempleContext from '../TempleContext';

const Robot = () => {
   const { trades, botActive } = useContext(TempleContext);
   const [btcPrice, setBtcPrice] = useState(10000);
   const [pnl, setPnl] = useState(0);
   const [openTrade, setOpenTrade] = useState(false);
   const [prevTrade, setPrevTrade] = useState(false);

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
         setPrevTrade({
            date: trades[2].date,
            exitDate: trades[1].date,
            entry: trades[2].price,
            exit: trades[1].price,
            type: trades[2].type,
            result:
               ((trades[1].tradingBallanceBTC - trades[2].tradingBallanceBTC) /
                  trades[1].tradingBallanceBTC) *
               100
         });
      } else {
         setOpenTrade(false);
         setPrevTrade({
            date: trades[1].date,
            exitDate: trades[0].date,
            entry: trades[1].price,
            exit: trades[0].price,
            type: trades[1].type,
            result:
               ((trades[0].tradingBallanceBTC - trades[1].tradingBallanceBTC) /
                  trades[0].tradingBallanceBTC) *
               100
         });
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
                     <li className='stats__container-inner--list robot__inner'>
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
                           <li className='stats__container-inner--list robot__inner'>
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
                           <li className='stats__container-inner--list robot__inner'>
                              - ENTRY DATE:{' '}
                              <div>{openTrade.date.slice(0, 10)}</div>
                           </li>
                           <li className='stats__container-inner--list robot__inner'>
                              - ENTRY PRICE: <div>{openTrade.price}</div>
                           </li>
                           <li className='stats__container-inner--list robot__inner'>
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
            <div className='stats__header'>
               <h2 className='stats__header-header stats__header-header-secondary'>
                  Previous Trade
               </h2>
               <div className='stats__container-outer'>
                  {prevTrade && (
                     <div className='stats__container-inner'>
                        <ul>
                           <li className='stats__container-inner--list robot__inner'>
                              - TRADE TYPE:
                              <span
                                 className={
                                    prevTrade.type === 'LONG'
                                       ? 'stats__pct--green'
                                       : 'stats__pct'
                                 }
                              >
                                 {prevTrade.type === 'LONG'
                                    ? ' LONG'
                                    : ' SHORT'}
                              </span>
                           </li>
                           <li className='stats__container-inner--list robot__inner'>
                              - ENTRY DATE:{' '}
                              <div>{prevTrade.date.slice(0, 10)}</div>
                           </li>
                           <li className='stats__container-inner--list robot__inner'>
                              - EXIT DATE:{' '}
                              <div>{prevTrade.exitDate.slice(0, 10)}</div>
                           </li>
                           <li className='stats__container-inner--list robot__inner'>
                              - ENTRY PRICE: <div>{prevTrade.entry}</div>
                           </li>
                           <li className='stats__container-inner--list robot__inner'>
                              - EXIT PRICE: <div>{prevTrade.exit}</div>
                           </li>
                           <li className='stats__container-inner--list robot__inner'>
                              - TRADE PNL:{' '}
                              <span
                                 className={
                                    prevTrade.result > 0
                                       ? 'stats__pct--green'
                                       : 'stats__pct'
                                 }
                              >
                                 {Math.round(prevTrade.result * 100) / 100} %
                              </span>
                           </li>
                        </ul>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Robot;
