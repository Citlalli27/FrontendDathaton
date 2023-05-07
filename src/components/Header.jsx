import React from 'react';
import foto from "../assets/logo.png"

function Header() {
  return (
    <div className='bg-[#333333] h-full mx-auto' >
        <img className='mx-12 w-[100px] md:w-[300px] sm:w-[230px] w-[200px] p-4 left-4'src={foto} alt=''/>
    </div>
  );
}

export default Header;


