import React from 'react'
import { useNavigate } from 'react-router-dom';

const FooterHome = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-white flex'>
        <button onClick={() => navigate("/segundapantalla")}  className='bg-[#B9B8FF] border-[#6700C3] border-2 bottom-5 right-10 py-1 px-3  text-white der border-slate-300 rounded-md fixed'>   ¡Accede a tu plan de ahorro personalizado!   </button>
    </div>
  )
}

export default FooterHome
