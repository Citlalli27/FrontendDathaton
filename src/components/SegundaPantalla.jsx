import React from 'react'
import Header from './Header'
import CantidadAhorro from './CantidadAhorro'
import CategoriaContainer from './CategoriaContainer'

const SegundaPantalla = () => {
  return (
    <div>
      <Header />
      <CantidadAhorro />
      <h1 className= 'flex justify-center items-center md:text-2xl sm:text-1xl text-1xl font-bold py-5'> ¡Ahorra más y haz que tu dinero trabaje para ti!  </h1>
      <h1 className= 'flex justify-center items-center md:text-2xl sm:text-1xl text-1xl mx-5 py-5'> Elige sabiamente las categorías en las en las que no deseas reducir gastos y cuida tu salud financiera </h1>
      <CategoriaContainer />
  

    </div>
  )
}

export default SegundaPantalla
