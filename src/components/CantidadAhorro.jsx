import React from 'react'

const CantidadAhorro = (props) => {
  return (
    <div class="bg-[#BDFF40] md:px-52 flex items-center gap-0 p-1 md:flex-row sm:flex-col flex-col my-10" >
        <h1 class="bg-[#BDFF40] md:text-3xl sm:text-2xl text-1xl">Establece tu objetivo de ahorro al mes</h1>
        <input class=" border-[#6700C3] border-2 rounded-lg px-4 py-2 ml-4 " type="number" placeholder="$" />
    </div>
  )
}

export default CantidadAhorro
