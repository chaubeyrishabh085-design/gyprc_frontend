import React from 'react'
import { Navbar, menuItems } from '../Navbar/Navbar'
import { Home } from '../../pages/Home/Home'

export const  LandingPLayouts =() => {
  return (
    <div className='container'>
        {/* <Navbar/> */}
        <Navbar menuItems={menuItems} />

        <Home/>
      
    </div>
  )
}


