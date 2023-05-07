import React from 'react'
import Header from './Header'
import CantidadAhorro from './CantidadAhorro'
import CategoriaContainer from './CategoriaContainer'
import Categoria from './Categoria'
import ConteoCategoria from './ConteoCategoria'
import ContadorCategoriaContainer from './ContadorCategoriaContainer'
import dataCategoria from '../categoria.json'
import { useState, useEffect } from 'react'
import axios from 'axios'

function SegundaPantalla () {

  const [savings, setSavings] = useState()
  const [userId, setUserId] = useState(1000)

  useEffect(() => {
    getData()
  }, [])

   const getData = () => {
    axios.get('http://127.0.0.1:5000/savings?client_id=' + userId)
      .then((response) => {
        setSavings(response.data)
      console.log("Savings", response.data);

      })
      .catch((error) => {
        console.log(error);
      });
   }
    
  return (
    <div>
      <Header />
      <CantidadAhorro />
      <h1 className= 'flex justify-center items-center md:text-2xl sm:text-1xl text-1xl font-bold py-5'> ¡Ahorra más y haz que tu dinero trabaje para ti!  </h1>
      <h1 className= 'flex justify-center items-center md:text-2xl sm:text-1xl text-1xl mx-5 py-5'> Elige sabiamente las categorías en las en las que no deseas reducir gastos y cuida tu salud financiera </h1>
      
      <div className='w-full bg-purple-400 flex flex-wrap'>

            
        

        <CategoriaContainer> 
          <p className='text-center'> Gastos Mensuales</p>
          {

          savings != null ? Object.keys(savings[Object.keys(savings)[0]]).map((cat) => <Categoria name={cat} total={savings[Object.keys(savings)[0]][cat]["monto"]} veces={savings[Object.keys(savings)[0]][cat]["transaccion"]}/>) : <p> js </p>}
      
        </CategoriaContainer>


         <ContadorCategoriaContainer> 
         <p className='text-center'> Plan de Ahorro</p>
          {

          savings != null ? Object.keys(savings[Object.keys(savings)[0]]).map((cat) => <ConteoCategoria name={cat} total={savings[Object.keys(savings)[0]][cat]["monto"]} veces={savings[Object.keys(savings)[0]][cat]["transaccion"]}/>) : <p> js </p>}
      
        </ContadorCategoriaContainer>
        
      </div>

    </div>
  )
}

export default SegundaPantalla
