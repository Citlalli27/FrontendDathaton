import React from 'react'
import PieChart from "./PieChart"
import dataPie from '../dataPie.json'
import BarChart from "./BarChart";
import dataBar from "../dataBar.json"

const Graficas = () => {
  return (
    <div className='w-full py-1 px-10 mx-auto grid md:grid-cols-2 flex space-x-20 md:space-x-0 '>
        {/* Tus mayores gastos por categoría y porcentajes.*/}
        <div  className="container mx-auto py-4">
            <p className="text-1xl  mb-4 text-center">Tus mayores gastos por categoría y porcentajes</p>
            <PieChart data={dataPie} />
        </div>

        {/* Número de veces por categoría*/}
        <div  className="container mx-auto py-4 ">
            <p className="text-1xl  mb-4 text-center">Número de veces por categoría</p>
            <BarChart data={dataBar} />
        </div>
  </div>
   
  )
}

export default Graficas
