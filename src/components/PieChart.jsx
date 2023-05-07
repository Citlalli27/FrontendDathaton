import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { useState, useEffect , useContext} from 'react'
import axios from 'axios'
import { UserIdContext } from "../App";


const PieChart = ({ data }) => {

  const [pies, setPies] = useState()
  const currentUserId = useContext(UserIdContext);


  useEffect(() => {
    getData()
  }, [])

   const getData = () => {
    axios.get('http://127.0.0.1:5000/pies?client_id=' + currentUserId)
      .then((response) => {
        setPies(response.data)
      console.log("sjksjs", response.data);

      })
      .catch((error) => {
        console.log(error);
      });
   }

  data = {
    "labels": pies != null ? pies[Object.keys(pies)[0]]["mcc"] : ["Enero", "Febrero", "Marzo", "Abril", "Mayo","Junio", "Julio", "Agosto", "Septiembre", "Octubre"],
    "datasets": [
      {
        "data": pies != null ? pies[Object.keys(pies)[0]]["count"] : [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1,0.1],
        "backgroundColor": [
          "#FC63FA",
          "#FEDFDD",
          "#D6D5FF",
          "#B9B8FF",
          "#77B6E9",
          "#16E7FC",
          "#EAF8AE",
          "#BDFF40",
          "#01E07A",
          "#F0D024"
        ]
      }
    ]
  }
  
  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
