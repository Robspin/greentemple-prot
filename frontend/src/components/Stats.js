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
   legend: {
      labels: {
         fontColor: 'black'
      }
   },
   scales: {
      yAxes: [
         {
            ticks: {
               beginAtZero: true
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
         labels: priceData.priceData.map(date => date.date.split(',')[0]),
         datasets: [
            {
               label: 'Portfolio Change in Dollars',
               data: priceData.priceData.map(
                  portfolio => portfolio.portfolio - 10000
               ),
               fill: false,
               backgroundColor: 'rgb(255, 99, 132)',
               borderColor: 'rgba(255, 99, 132, 0.2)'
            }
         ]
      });
      console.log(priceData);
   }, [priceData]);

   return (
      <>
         <div className='stats'>
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
         <div>
            <PieChart data={allocationData} />
         </div>
         <div>
            <PieChart data={latestAllocationData} />
         </div>
         <div className='stats__line-div'>
            <Line data={totalWorthData} options={lineOptions} />
         </div>
      </>
   );
};

export default Stats;
