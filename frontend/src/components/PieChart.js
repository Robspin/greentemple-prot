import React from 'react';

import { Pie } from 'react-chartjs-2';

const options = {
   legend: {
      labels: {
         fontColor: 'black'
      }
   },
   maintainAspectRatio: false
};

const PieChart = ({ data }) => (
   <>
      <Pie data={data} options={options} height={200} />
   </>
);

export default PieChart;
