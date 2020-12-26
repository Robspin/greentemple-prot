import React from 'react';

import { Pie } from 'react-chartjs-2';

const data = {
   labels: ['GOLD', 'SILVER', 'BITCOIN'],
   datasets: [
      {
         label: '# of Votes',
         data: [1, 16, 50],
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

const options = {
   legend: {
      labels: {
         fontColor: 'black'
      }
   },
   maintainAspectRatio: false
};

const PieChart = () => (
   <>
      <Pie data={data} options={options} height={200} />
   </>
);

export default PieChart;
