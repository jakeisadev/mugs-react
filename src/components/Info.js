import React from 'react'
import '../resources/info.css'
import coffee from '../images/coffee.png'

function Info() {
  return (
    <div className='background d-flex align-items-center justify-content-center flex-column'>
      <img src={coffee} alt="" className='animate__fadeInLeft' />
      <h1 className='mb-3 animate__fadeInRight'>Mug's Coffee</h1>
      <button className='animate__fadeInUp'>Call Now</button>
    </div>
  )
}

export default Info