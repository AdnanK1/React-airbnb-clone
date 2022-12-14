import React from 'react'
import Photo from "../images/photo-grid.png"

export const Hero = () => {
  return (
    <section className='hero'>
        <img className='hero-img' src={Photo} alt="PhotoGrid" />
        <h1 className='hero-header'>Online Experiences</h1>
        <p className='hero-text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}
