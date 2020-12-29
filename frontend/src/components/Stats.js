import React, { useContext, useEffect, useState } from 'react';

import { Line } from 'react-chartjs-2';

import PriceContext from '../PriceContext';
import PieChart from './PieChart';

const allocationData = {
   labels: ['GOLD', 'SILVER', 'BITCOIN'],
   datasets: [
      {
         label: 'Portfolio Allocation',
         data: [800, 2500, 6700],
         backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            '#F7931A'
         ],
         borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
         ],
         borderWidth: 1
      }
   ]
};

const lineOptions = {
   defaults: {
      global: {
         defaultFontColor: 'white'
      }
   },
   legend: {
      labels: {
         fontColor: 'black',
         fontFamily: 'montserrat',
         fontStyle: 'normal'
      }
   },
   ticks: {
      fontColor: 'red'
   },
   scales: {
      yAxes: [
         {
            ticks: {
               beginAtZero: true,
               fontColor: 'black'
            }
         }
      ],
      xAxes: [
         {
            ticks: {
               fontColor: 'black'
            }
         }
      ]
   }
};

const initialValues = {
   BTC: 0.25,
   XAG: 97,
   XAU: 0.44
};

const Stats = () => {
   const { priceData } = useContext(PriceContext);
   const [latestAllocationData, setLatestAllocationData] = useState({});
   const [totalWorthData, setTotalWorthData] = useState({});
   const [pct, setPct] = useState({ BTC: 0, XAU: 0, XAG: 0 });
   const [currentPrices, setCurrentPrices] = useState({
      BTC: 0,
      XAU: 0,
      XAG: 0
   });

   useEffect(() => {
      setLatestAllocationData({
         labels: ['GOLD', 'SILVER', 'BITCOIN'],
         datasets: [
            {
               label: 'Portfolio Allocation',
               data: [
                  Math.round(
                     initialValues.XAU * priceData.latestPriceData.XAU * 100
                  ) / 100,
                  Math.round(
                     initialValues.XAG * priceData.latestPriceData.XAG * 100
                  ) / 100,
                  Math.round(
                     initialValues.BTC * priceData.latestPriceData.BTC * 100
                  ) / 100
               ],
               backgroundColor: [
                  'rgba(255, 99, 132, 0.7)',
                  'rgba(54, 162, 235, 0.7)',
                  '#F7931A'
               ],
               borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
               ],
               borderWidth: 1
            }
         ]
      });

      setTotalWorthData({
         labels: priceData.priceData.map(date => date.date.split('/2020')[0]),
         datasets: [
            {
               label: 'Portfolio Change in Dollars',
               data: priceData.priceData.map(
                  portfolio =>
                     Math.round((portfolio.portfolio - 10000) * 100) / 100
               ),
               fill: false,
               backgroundColor: '#a8dba8',
               borderColor: '#79bd9a'
            }
         ]
      });

      setCurrentPrices({
         XAU: priceData.latestPriceData.XAU,
         XAG: priceData.latestPriceData.XAG,
         BTC: priceData.latestPriceData.BTC
      });
   }, [priceData]);

   useEffect(() => {
      if (currentPrices.BTC > 0) {
         setPct({
            XAU:
               Math.round(
                  (((
                     Math.round(initialValues.XAU * currentPrices.XAU * 100) /
                     100
                  ).toFixed(2) -
                     800) /
                     800) *
                     10000
               ) / 100,
            XAG:
               Math.round(
                  (((
                     Math.round(initialValues.XAG * currentPrices.XAG * 100) /
                     100
                  ).toFixed(2) -
                     2500) /
                     2500) *
                     10000
               ) / 100,
            BTC:
               Math.round(
                  (((
                     Math.round(initialValues.BTC * currentPrices.BTC * 100) /
                     100
                  ).toFixed(2) -
                     6700) /
                     6700) *
                     10000
               ) / 100
         });
      }
   }, [currentPrices]);

   return (
      <div className='stats'>
         <div className='stats__header stats__header-top'>
            <h2 className='stats__header-header'>10K PORTFOLIO TRACKING</h2>
            <p className='stats__header-text'>
               We are going to follow how a 10k USD portfolio performs in these
               turbulent times.
               <br />
               This is a high risk/high reward allocation which at the time of
               starting this project was somewhat similar as my own portfolio.
               <br />
               These statistics will be updated once a day.
            </p>
         </div>

         <div className='stats__header'>
            <h2 className='stats__header-header stats__header-header-secondary'>
               INITIAL ALLOCATION
            </h2>
            <div className='stats__container-outer'>
               <div className='stats__container-inner'>
                  <ul>
                     <li className='stats__container-inner--list'>
                        - $2500 in silver{' '}
                        <span className='stats__container-inner--list-grey'>
                           ({initialValues.XAG}oz)
                        </span>
                     </li>
                     <li className='stats__container-inner--list'>
                        - $800 in gold{' '}
                        <span className='stats__container-inner--list-grey'>
                           ({initialValues.XAU}oz)
                        </span>
                     </li>
                     <li className='stats__container-inner--list'>
                        - $6700 in bitcoin{' '}
                        <span className='stats__container-inner--list-grey'>
                           ({initialValues.BTC} BTC)
                        </span>
                     </li>
                  </ul>
               </div>
               <div className='stats__container-pie'>
                  <PieChart data={allocationData} />
               </div>
            </div>
         </div>
         <div className='stats__header'>
            <h2 className='stats__header-header stats__header-header-secondary'>
               TODAY'S ALLOCATION VALUE
            </h2>
            <div className='stats__container-outer'>
               <div className='stats__container-inner'>
                  <ul>
                     <li className='stats__container-inner--list'>
                        - $
                        {(
                           Math.round(
                              initialValues.XAG * currentPrices.XAG * 100
                           ) / 100
                        ).toFixed(2)}{' '}
                        in silver{' '}
                        <span
                           className={
                              pct.XAG > 0
                                 ? 'stats__pct stats__pct--green'
                                 : 'stats__pct'
                           }
                        >
                           ({pct.XAG} %)
                        </span>
                     </li>
                     <li className='stats__container-inner--list'>
                        - $
                        {(
                           Math.round(
                              initialValues.XAU * currentPrices.XAU * 100
                           ) / 100
                        ).toFixed(2)}{' '}
                        in gold{' '}
                        <span
                           className={
                              pct.XAU > 0
                                 ? 'stats__pct stats__pct--green'
                                 : 'stats__pct'
                           }
                        >
                           ({pct.XAU} %)
                        </span>
                     </li>
                     <li className='stats__container-inner--list'>
                        - $
                        {(
                           Math.round(
                              initialValues.BTC * currentPrices.BTC * 100
                           ) / 100
                        ).toFixed(2)}{' '}
                        in bitcoin{' '}
                        <span
                           className={
                              pct.BTC > 0
                                 ? 'stats__pct stats__pct--green'
                                 : 'stats__pct'
                           }
                        >
                           ({pct.BTC} %)
                        </span>
                     </li>
                  </ul>
               </div>

               <div className='stats__container-pie'>
                  <PieChart data={latestAllocationData} />
               </div>
            </div>
         </div>
         <div className='stats__header'>
            <h2 className='stats__header-header stats__header-header-secondary'>
               PORTFOLIO CHANGE
            </h2>
            <div className='stats__container-inner stats__container-inner--bottom'>
               <ul>
                  <li className='stats__container-inner--list'>
                     - ${`10000 total portfolio`}
                  </li>
               </ul>
            </div>
         </div>
         <div className='stats__line-div'>
            <Line
               data={totalWorthData}
               options={lineOptions}
               defaults={{ global: { defaultFontColor: 'red' } }}
            />
         </div>
      </div>
   );
};

export default Stats;
