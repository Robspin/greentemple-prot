import React from 'react';

import { Doughnut } from 'react-chartjs-2';

const options = {
   legend: {
      labels: {
         fontFamily: 'montserrat',
         fontColor: 'black'
      }
   },
   maintainAspectRatio: false
};

const PieChart = ({ data }) => (
   <>
      <Doughnut data={data} options={options} />
   </>
);

export default PieChart;
