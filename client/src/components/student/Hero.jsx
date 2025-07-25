import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
      <h1 className='big-heading2 relative font-bold text-gray-800 max-w-3xl mx-auto'>Empowering Minds, One Course at a Time - 
        <span className='text-blue-600'> Learn Without Borders.</span> 
        <img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0' /> 
      </h1>
      <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>We are in the business of transforming lives join us today, elevate your skills with interactive learning, supportive community and expert guidance.</p>
      <p className='md:hidden text-gray-500 max-w-sm max-auto'>Join us today, elevate your skills with interactive learning, supportive community and expert guidance.</p>
      <SearchBar />
    </div>
  )
}

export default Hero