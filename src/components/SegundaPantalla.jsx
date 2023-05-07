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
  const [savingGoal, setSavingGoal] = useState(1000)
  const [savingMods, setSavingsMods] = useState()
  const [realTotal, setRealTotal] = useState()
  const [savedTotal, setSavedTotal] = useState()

  const handleSavingGoalChange = (event) => {
    setSavingGoal(event.target.value);
  };

 const handleInputChange = ( key, event) => {
    // console.log(key,savingMods[key])
    // console.log("event", event)

  setSavingsMods({...savingMods,  [key]: {
        monto:  savings[Object.keys(savings)[0]][key]["monto"] -  ((savings[Object.keys(savings)[0]][key]["monto"] / savings[Object.keys(savings)[0]][key]["transaccion"]) * (savings[Object.keys(savings)[0]][key]["transaccion"] - parseInt(event.target.value))),
        transaccion: event.target.value,
      }})

    // let rSaved = 0
    //   for (const key of Object.keys(savings[Object.keys(savings)[0]])){
    //     console.log(savings[Object.keys(savings)[0]][key]["monto"] -  ((savings[Object.keys(savings)[0]][key]["monto"] / savings[Object.keys(savings)[0]][key]["transaccion"]) * (savings[Object.keys(savings)[0]][key]["transaccion"] - parseInt(event.target.value))))
    //     rSaved = rSaved + savings[Object.keys(savings)[0]][key]["monto"] -  ((savings[Object.keys(savings)[0]][key]["monto"] / savings[Object.keys(savings)[0]][key]["transaccion"]) * (savings[Object.keys(savings)[0]][key]["transaccion"] - parseInt(event.target.value)))
    //   // console.log([Object.keys(savings)[0]][key]["monto"] -  ((savings[Object.keys(savings)[0]][key]["monto"] / savings[Object.keys(savings)[0]][key]["transaccion"]) * (savings[Object.keys(savings)[0]][key]["transaccion"] - parseInt(event.target.value))))
    //   }

      // for (const key of Object.keys(savingMods)){
      // console.log(savingMods[key]["monto"])
      // }

      // setSavedTotal(rSaved)
      // setSavedTotal(rSaved)
      // console.log("RToyal", realTotal )

      // console.log("Rsaved",  rSaved)
    }

  useEffect(() => {
    getData()

  }, [])

  useEffect(() => {
    console.log(savingMods)
    if(savingMods != null){
    let rSaved = 0

      for (const key of Object.keys(savingMods)){
      rSaved = rSaved + savingMods[key]["monto"]
      console.log("UE", key)
    }
    setSavedTotal(rSaved)
    }
  
  }, [savingMods])

   const getData = () => {
    axios.get('http://127.0.0.1:5000/savings?client_id=' + userId)
      .then((response) => {
        setSavings(response.data)
        setSavingsMods(response.data[Object.keys(response.data)[0]])
        
      // console.log("Savings", Object.keys(response.data[Object.keys(response.data)[0]]));
      let rTotal = 0
      for (const key of Object.keys(response.data[Object.keys(response.data)[0]])){
        // console.log(response.data[Object.keys(response.data)[0]][key])
        rTotal = rTotal + response.data[Object.keys(response.data)[0]][key]["monto"]
      }
      setRealTotal(rTotal)
     
      })
      .catch((error) => {
        console.log(error);
      });
   } 
    
  return (
    <div> 
      <Header />
       <div class="bg-[#BDFF40] py-10 md:px-52 flex items-center gap-0 p-1 md:flex-row sm:flex-col flex-col" >
        <h1 class="bg-[#BDFF40] md:text-3xl sm:text-2xl text-1xl">Establece tu objetivo de ahorro al mes</h1>
        <input class="border border-gray-300 rounded-lg px-4 py-2 ml-4" type="number" placeholder="$" value={savingGoal} onChange={handleSavingGoalChange}/>
      </div>
      <h1 className= 'bg-[#B9B8FF] flex justify-center items-center md:text-2xl sm:text-1xl text-1xl font-bold py-5'> ¡Ahorra más y haz que tu dinero trabaje para ti!  </h1>
      <h1 className= 'bg-[#B9B8FF] flex justify-center items-center md:text-1xl sm:text-0.5xl text-0.5 xl  py-5'> Elige sabiamente las categorías en las en las que NO deseas reducir gastos y cuida tu salud financiera </h1>
      
      <div className='w-full flex flex-wrap '>

        <CategoriaContainer> 
          <p className='text-center md:text-2xl font-semibold py-5 p-4 my-0 text-[#FC6DFB]'> Gastos Mensuales</p>
          <div className='bg-[#EFF4F7] w-full flex text-center justify-end md:text-base sm:text-base sm:gap-4 gap-5'>
            <p className=' text-s w-full  md:w-1/2  text-black font-semibold py-3.5 px-4 mx-1 rounded pointer-events-none'>Categoría</p>
            <p className=' text-s w-full  md:w-1/2  text-black font-semibold py-3.5 px-4 mx-1 rounded pointer-events-none'>Total</p>
            <p className=' text-s w-full  md:w-1/2  text-black font-semibold py-3.5 px-4 mx-1 rounded pointer-events-none'>Número de Transacciones</p>
          </div>
          

          {savings != null ? Object.keys(savings[Object.keys(savings)[0]]).map((cat) => <Categoria name={cat} total={savings[Object.keys(savings)[0]][cat]["monto"]} veces={savings[Object.keys(savings)[0]][cat]["transaccion"]}/>) : <p> js </p>}
      
        </CategoriaContainer>


         <ContadorCategoriaContainer> 
         <p className='text-center md:text-2xl font-semibold py-5 p-4 my-0 text-[#FC6DFB]'> Plan de Ahorro</p>
         <div className=' w-full flex text-center justify-end md:text-base sm:text-base sm:gap-4 gap-5 '>
            <h1 className='text-s w-full  md:w-1/2  text-black font-semibold py-3.5 px-4 mx-1 rounded pointer-events-none' > Nuevas Transacciones</h1>
            <h1 className='text-s w-full  md:w-1/2  text-black font-semibold py-3.5 px-4 mx-1 rounded pointer-events-none' >Promedio de Dinero </h1>
            <h1 className='text-s w-full  md:w-1/2  text-black font-semibold py-3.5 px-4 mx-1 rounded pointer-events-none' > Escoge tu cantidad de transacciones </h1>
          </div> 

          {

          savingMods != null ? Object.keys(savingMods).map((cat) =>  <div className='bg-white w-full py-4 flex'>
    <button className= "bg-[#77B6E9] text-xs w-full  md:w-1/2  text-white py-3.5 px-2 mx-1 rounded  pointer-events-none"> {cat}  </button>
    {/*<button className="hover:bg-black pointer-events-auto px-2 py-2 rounded" onClick={handleDecrement}>-</button>*/}
    {/*<button className= "bg-blue-500 text-xs w-full  md:w-1/7 text-white   py-2 px-4 mx-1 rounded  pointer-events-none flex gap-x-0"> */}
            {/*props.total*/}
    {/*<button className="hover:bg-black pointer-events-auto px-2 py-2 rounded" onClick={handleIncrement}>+</button>*/}
    <button className= "bg-[#9ECCFC] text-xs w-full md:w-1/4  text-white  py-2 px-2 mx-1 rounded  pointer-events-none "> {savingMods[cat]["monto"]}  </button>
    <input class="border md:w-1/4 border-gray-300 rounded-lg px-1 py-2 mx-1 pointer-events-auto text-center" type="number" placeholder="Transacciones" value={savingMods[cat]["transaccion"]} onChange={(e) => handleInputChange(cat, e)}/>
    
    </div>
      ) : <p> js </p>}
      
        </ContadorCategoriaContainer>
        
      </div>

      <FooterDos total={(realTotal- savedTotal)/ savingGoal}/>


    </div>

  )
}

export default SegundaPantalla
