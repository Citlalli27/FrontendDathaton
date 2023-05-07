import React, {useState} from 'react'

const ConteoCategoria = (props) => {
  
  const datos = props.datos;

  const [inputValue, setInputValue] = useState();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleIncrement = () => {
    setInputValue((prevValue) => prevValue + 1);
  };

  const handleDecrement = () => {
    setInputValue((prevValue) => prevValue - 1);
  };

  const handleClearInput = () => {
    setInputValue(0);
  };

  return (
    <div className='bg-white w-full py-4 flex'>
    <button className= "bg-[#77B6E9] text-xs w-full  md:w-1/2  text-white py-3.5 px-2 mx-1 rounded  pointer-events-none"> {props.name}  </button>
    {/*<button className="hover:bg-black pointer-events-auto px-2 py-2 rounded" onClick={handleDecrement}>-</button>*/}
    {/*<button className= "bg-blue-500 text-xs w-full  md:w-1/7 text-white   py-2 px-4 mx-1 rounded  pointer-events-none flex gap-x-0"> */}
            {/*props.total*/}
    {/*<button className="hover:bg-black pointer-events-auto px-2 py-2 rounded" onClick={handleIncrement}>+</button>*/}
    <button className= "bg-[#77B6E9] text-xs w-full md:w-1/4  text-white  py-2 px-2 mx-1 rounded  pointer-events-none "> {props.total}  </button>
    <input class="border md:w-1/4 border-gray-300 rounded-lg px-1 py-2 mx-1 pointer-events-auto text-center" type="number" placeholder="Transacciones" value={props.veces} onChange={handleInputChange}/>
    
    </div>
  )
  
}

export default ConteoCategoria
