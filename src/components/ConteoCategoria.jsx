import React from 'react'

const ConteoCategoria = (props) => {
  const datos = props.datos;
  return (
    <div className='bg-red-600 w-full py-4 flex'>
    <button className= "bg-blue-500 text-xs w-full  md:w-1/2 hover:bg-blue-700 text-white  py-2 px-4 mx-1 rounded  pointer-events-none"> {props.name}  </button>
    <button className= "bg-blue-500 text-xs w-full  md:w-1/4 hover:bg-blue-700 text-white  py-2 px-4 mx-1 rounded  pointer-events-none"> {props.total}  </button>
    <button className= "bg-blue-500 text-xs w-full md:w-1/4 hover:bg-blue-700 text-white  py-2 px-4  mx-1 rounded  pointer-events-none"> {props.veces}  </button>
    </div>
  )
  
}

export default ConteoCategoria
