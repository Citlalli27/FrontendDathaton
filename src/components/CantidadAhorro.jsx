import React from 'react'

const CantidadAhorro = () => {
  return (
    <div class="py-4 flex items-center gap-0 p-16 md:flex-row flex-col my-10" >
        <h1 class="md:text-3xl sm:text-2xl text-1xl">Establece tu objetivo de ahorro al mes</h1>
        <input class="border border-gray-300 rounded-lg px-4 py-2 ml-4" type="text" placeholder="$"/>
    </div>
  )
}

export default CantidadAhorro