import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const CantidadHome = () => {
    const [totals, setTotals] = useState()
    const [userId, setUserId] = useState(1)
  useEffect(() => {
    getData()
  }, [])

   const getData = () => {
    axios.get('http://127.0.0.1:5000/totals?client_id=' + userId)
      .then((response) => {
        console.log(response.data);
        setTotals(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className='bg-[#B9B8FF] py-8 text-white'>
        <h1 className='max-w-[1000px] w-full  mx-12 md:text-7x1 sm:text.6xl text-4xl font-bold p-2 md:py-3'>¡Bienveni    cliente #{userId}!  </h1>
        <h2 className='flex justify-center items-center w-full my-10 mx-4 md:text-2x1 sm:text-2>l text-2xl  p-2 md:py-0.5'>Este mes gastaste ${totals != null ? totals[Object.keys(totals)[0]] : "Loading..."} , ¡tuviste más de {parseInt(Math.random() * 100)} transacciones al mes! </h2>
    </div>
  )
}

export default CantidadHome
