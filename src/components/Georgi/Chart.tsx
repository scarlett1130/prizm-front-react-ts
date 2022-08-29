// import React from "react";
// import { Link } from 'react-router-dom'
// import styles from "./Chart.module.scss";

// import PropTypes from 'prop-types';
// import { useState, useEffect } from 'react';

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// import faker from 'faker';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top' as const,
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Line Chart',
//     },
//   },
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

// const Chart = () =>{
//   return(
//     <Line
//       options={options}
//       data={data}
//       // type="line"
//       // width="400"
//     />
//   )
// }

// export default Chart;
import React, { useState } from 'react';
import { Button, Card, Box, CardHeader, CardContent } from '@mui/material';
import ReactApexChart from 'react-apexcharts';
import { state } from './chart/SampleData';

const LineChart = () => {

  const [chartValue, setChartValue] = useState<number>(0);

  return (
    <>
      <Card
        sx={{
          borderRadius: '10px',
          marginTop: '20px',
          background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
          border: '2px solid #323232',
          boxSizing: 'border-box'
        }}
      >
        
        <CardContent sx={{ pt: 0, height: '340px' }}>
          <Box height={'100%'} width={'100%'}>
            <ReactApexChart
              options={state[chartValue].options}
              series={state[chartValue].series}
              height="100%"
              width="100%"
              type="line"
            />
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default LineChart;
