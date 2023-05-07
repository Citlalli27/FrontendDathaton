import React from 'react'
import { useState, useEffect , useContext} from 'react'
import MyContext from '../App'
import axios from 'axios'
import { UserIdContext } from "../App";

const CantidadHome = () => {
    const [totals, setTotals] = useState()
    const [userId, setUserId] = useState(1)
    const currentUserId = useContext(UserIdContext);

  useEffect(() => {
    getData()
  }, [])

   const getData = () => {
    axios.get('http://127.0.0.1:5000/totals?client_id=' + currentUserId)
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
        <h1 className='max-w-[1000px] w-full  mx-12 md:text-5xl sm:text-4xl text-3xl font-bold p-2 md:py-3'>¡Bienvenido cliente #{currentUserId}!  </h1>
        <h2 className='flex justify-center items-center w-full my-10 mx-4 md:text-2x1 sm:text-2>l text-2xl  p-2 md:py-0.5'>Este mes gastaste ${totals != null ? totals[Object.keys(totals)[0]] : "Loading..."} , te presentamos el desglose para que tu no tengas que hacerlo. </h2>
    </div>
  )
}

export default CantidadHome
