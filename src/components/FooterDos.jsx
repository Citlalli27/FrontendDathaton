import React from 'react'

const FooterDos = (props) => {
  return (
    <div className='bg-white flex'>
        <button   className='bg-[#B9B8FF] border-[#6700C3] border-2  py-1 px-3 text-white der border-slate-300 rounded-md justify-mixed items-center pointer-events-none'>   Total: {props.total}  </button>
    </div>
  )
}

export default FooterDos
