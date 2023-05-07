import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { useState, useEffect } from 'react'
import axios from 'axios'

const BarChart = ({ data }) => {

  const [histograms, setHistograms] = useState()
  const [userId, setUserId] = useState(3423)

  useEffect(() => {
    getData()
  }, [])

   const getData = () => {
    axios.get('http://127.0.0.1:5000/histograms?client_id=' + userId)
      .then((response) => {
        setHistograms(response.data)
      console.log("Histo", response.data[Object.keys(response.data)[0]]["mcc"]);

      })
      .catch((error) => {
        console.log(error);
      });
        

      
  }
    const chartData = {
        labels:   histograms != null ? histograms[Object.keys(histograms)[0]]["mcc"] : data.labels ,
        datasets: [
          {
            label:  data.title,
            data: histograms != null ? histograms[Object.keys(histograms)[0]]["count"]: data.values,
            backgroundColor: data.colors,
          }
        ]
      };


  return (
    <div>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;
