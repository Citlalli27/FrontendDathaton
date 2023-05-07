import React from 'react'
import Header from './Header'
import CantidadAhorro from './CantidadAhorro'

const SegundaPantalla = () => {
  return (
    <div>
      <Header />
      <CantidadAhorro />
      <h1 className= 'flex justify-center items-center md:text-4x1 sm:text-4x1 text-x1 font-bold py-5'> ¡Ahorra más y haz que tu dinero trabaje para ti!  </h1>
      <h1 className= 'flex justify-center items-center md:text-3x1 sm:text-3x1 text-x1 py-2'> Elige sabiamente las categorías en las en las que no deseas reducir gastos y cuida tu salud financiera </h1>
    </div>
  )
}

export default SegundaPantalla
