import React from 'react'
import Header from './Header'
import CantidadAhorro from './CantidadAhorro'
import CategoriaContainer from './CategoriaContainer'
import Categoria from './Categoria'
import ConteoCategoria from './ConteoCategoria'
import ContadorCategoriaContainer from './ContadorCategoriaContainer'
import FooterDos from './FooterDos'
import dataCategoria from '../categoria.json'
import { useState, useEffect } from 'react'
import axios from 'axios'

function SegundaPantalla () {

  const [savings, setSavings] = useState()
  const [userId, setUserId] = useState(3423)
  const [savingGoal, setSavingGoal] = useState()

  const handleSavingGoalChange = (event) => {
    setSavingGoal(event.target.value);
  };



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
       <div class="md:px-52 flex items-center gap-0 p-1 md:flex-row sm:flex-col flex-col my-10" >
        <h1 class="md:text-3xl sm:text-2xl text-1xl">Establece tu objetivo de ahorro al mes</h1>
        <input class="border border-gray-300 rounded-lg px-4 py-2 ml-4" type="number" placeholder="$" value={savingGoal} onChange={handleSavingGoalChange}/>
      </div>
      <h1 className= 'flex justify-center items-center md:text-2xl sm:text-1xl text-1xl font-bold py-5'> ¡Ahorra más y haz que tu dinero trabaje para ti!  </h1>
      <h1 className= 'flex justify-center items-center md:text-2xl sm:text-1xl text-1xl mx-5 py-5'> Elige sabiamente las categorías en las en las que no deseas reducir gastos y cuida tu salud financiera </h1>
      
      <div className='w-full flex flex-wrap '>

        <CategoriaContainer> 
          <p className='text-center md:text-2xl font-semibold py-5'> Gastos Mensuales</p>
          <div className='flex font-semibold justify-end md:text-base sm:text-base sm:gap-4 gap-5 text-xs'>
            <p className=''>Total de Dinero Gastado</p>
            <p className=''>Número de Transacciones</p>
          </div>
          

          {savings != null ? Object.keys(savings[Object.keys(savings)[0]]).map((cat) => <Categoria name={cat} total={savings[Object.keys(savings)[0]][cat]["monto"]} veces={savings[Object.keys(savings)[0]][cat]["transaccion"]}/>) : <p> js </p>}
      
        </CategoriaContainer>


         <ContadorCategoriaContainer> 
         <p className='text-center md:text-2xl font-semibold py-5'> Plan de Ahorro</p>
         <div className='flex font-semibold justify-end md:text-base sm:text-base sm:gap-4 gap-5 text-xs'>
            <h1>Nuevas Transacciones</h1>
            <h1>Promedio de Dinero </h1>
          </div> 

          {

          savings != null ? Object.keys(savings[Object.keys(savings)[0]]).map((cat) => <ConteoCategoria name={cat} total={savings[Object.keys(savings)[0]][cat]["monto"]} veces={savings[Object.keys(savings)[0]][cat]["transaccion"]}/>) : <p> js </p>}
      
        </ContadorCategoriaContainer>
        
      </div>

      <FooterDos total={savingGoal}/>


    </div>

  )
}

export default SegundaPantalla
