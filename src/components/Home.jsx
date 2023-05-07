import React from 'react'
import Graficas from './Graficas'
import Header from './Header'
import FooterHome from './FooterHome'
import CantidadHome from './CantidadHome'



const Home = () => {


  return (
    <div>
      <Header />
      <CantidadHome/>
      <Graficas />
      <FooterHome />
    </div>
  )
}

export default Home
