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

const Stats = () => {
   const { priceData } = useContext(PriceContext);
   const [latestAllocationData, setLatestAllocationData] = useState({});
   const [totalWorthData, setTotalWorthData] = useState({});

   useEffect(() => {
      setLatestAllocationData({
         labels: ['GOLD', 'SILVER', 'BITCOIN'],
         datasets: [
            {
               label: 'Portfolio Allocation',
               data: [
                  Math.round(0.44 * priceData.latestPriceData.XAU * 100) / 100,
                  Math.round(97 * priceData.latestPriceData.XAG * 100) / 100,
                  Math.round(0.25 * priceData.latestPriceData.BTC * 100) / 100
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
   }, [priceData]);

   return (
      <div className='stats'>
         <div className='stats__header'>
            <h2 className='stats__header-header'>10K PORTFOLIO TRACKING</h2>
            <p className='stats__header-text'>
               We are going to track a portfolio with a worth of 10000 usd in
               these commodities.
            </p>
         </div>
         <div className='stats__container-outer'>
            <div className='stats__container-inner'>
               <p>
                  We are going to track a portfolio with a worth of 10000 usd in
                  these commodities:
               </p>
               <ul>
                  <li>2500 in silver (97oz)</li>
                  <li>800 in gold (0,44oz)</li>
                  <li>6700 in bitcoin (0.24 BTC)</li>
               </ul>
            </div>
            <div className='stats__container-pie'>
               <PieChart data={allocationData} />
            </div>
         </div>
         <div className='stats__container-outer'>
            <div className='stats__container-inner'>
               <p>
                  We are going to track a portfolio with a worth of 10000 usd in
                  these commodities:
               </p>
               <ul>
                  <li>2500 in silver (97oz)</li>
                  <li>800 in gold (0,44oz)</li>
                  <li>6700 in bitcoin (0.24 BTC)</li>
               </ul>
            </div>
            <div className='stats__container-pie'>
               <PieChart data={latestAllocationData} />
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
