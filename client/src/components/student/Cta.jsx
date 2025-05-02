import React from 'react'
import { assets } from '../../assets/assets'

const Cta = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
      <h1 className='text-xl md:text-4xl text-gray-800 font-semi-bold' >Make real impact, upskil your career today.</h1>
      <p className='text-gray-500 sm:text-sm' >Our range of solutions has something to offer all businesses and organizations. <br />   Whether you’re a non-profit or a commercial entity, we can tailor a plan for your needs.</p>
      <div className='flex items-center font-medium gap-6 mt-4'>
        <button className='px-10 py-3 rounded-md text-white bg-blue-600 cursor-pointer' >Get Started</button>
        <button className='flex items-center gap-2 bg-orange-500 rounded-md px-10 py-3 cursor-pointer' >Learn More <img src={assets.arrow_icon} alt="arrow icon" /> </button>
      </div>
    </div>
  )
}

export default Cta