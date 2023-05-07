import React from 'react'

const Categoria = (props) => {
  const datos = props.datos;
  return (
    <div className='bg-[#EFF4F7] w-full py-4 flex'>
    <button className= "bg-[#8DC328] text-xs w-full  md:w-1/2 hover:bg-blue-700 text-white  py-3.5 px-4 mx-1 rounded  pointer-events-none"> {props.name}  </button>
    <button className= "bg-[#95E303] text-xs w-full  md:w-1/4 hover:bg-blue-700 text-white  py-2 px-4 mx-1 rounded  pointer-events-none"> {props.total}  </button>
    <button className= "bg-[#C4E38A] text-xs w-full md:w-1/4 hover:bg-blue-700 text-white  py-2 px-4  mx-1 rounded  pointer-events-none"> {props.veces}  </button>
    </div>
  )
}

export default Categoria
