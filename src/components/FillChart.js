

import React from 'react'

import {useState} from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

export default function FillChart() {
    const [data, setData]= useState({
        labels:["Jan","Feb", "March", "April", "May", "June", "July"],
        datasets:[
          {
            label:"Male",
            data:[550, 250, 450, 260, 551, 500, 517],
            backgroundColor:'#529BD4',
            borderColor:'#529BD4',
            tension:0.4,
            fill:true,
            pointStyle:'rect',
            pointBorderColor:'#529BD4',
            pointBackgroundColor:'#fff',
            showLine:true
          },
          {
            label:"Female",
            data:[1100, 990, 1300, 946, 1531, 482, 1012],
            backgroundColor:'#ED0BAE',
            borderColor:'#BC0086',
            tension:0.4,
            fill:true,
            // pointStyle:'rect',
            // pointBorderColor:'blue',
            // pointBackgroundColor:'#fff',
            showLine:true
          }
        ]
      })

      const options = {
        scales: {
          y: {
            min: 0,
            max: 2000,
            ticks: {
              stepSize: 500,
            },
          },
        },
      };

  return (
    <div className="App" style={{width:'100%', height:'100%',maxHeight:'500px',maxHeight:'320px'}}>
      <Line data={data} options={options}>Hello</Line>
    </div>
  )
}
