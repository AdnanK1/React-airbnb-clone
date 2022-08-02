import React from 'react'
import Airbnb from '../images/Airbnb_Logo.png'

export const Navbar = () => {
  return (
    <nav>
        <img className='logo' src={Airbnb} alt='airbnb'/>
    </nav>
  )
}
