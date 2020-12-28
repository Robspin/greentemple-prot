import React, { useContext, useEffect, useState } from 'react';
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

const Stats = () => {
   const { priceData } = useContext(PriceContext);
   const [latestAllocationData, setLatestAllocationData] = useState({});

   useEffect(() => {
      setLatestAllocationData({
         labels: ['GOLD', 'SILVER', 'BITCOIN'],
         datasets: [
            {
               label: 'Portfolio Allocation',
               data: [
                  0.44 * priceData.latestPriceData.XAU,
                  97 * priceData.latestPriceData.XAG,
                  0.25 * priceData.latestPriceData.BTC
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
      </>
   );
};

export default Stats;
