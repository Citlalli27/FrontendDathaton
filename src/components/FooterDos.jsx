import React from 'react'

const FooterDos = (props) => {
  return (
    <div className='bg-[#DEE1E5] text-center md:text-2xl font-semibold py-10 px-40'>
        <button   className='bg-[#E53EE3] border-[#E53EE3] border-2  py-1 px-3 text-white der border-slate-300 rounded-md pointer-events-none'>   Haz completado el: {props.total * 100} % de tu objetivo de ahorro  </button>
    </div>
  )
}

export default FooterDos
