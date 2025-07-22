import React from 'react'
import { assets } from '../../assets/assets'

const Companies = () => {
  return (
    <div className='pt-16'>
      <p className='text-base text-gray-500'>Learn Form Leading Experts</p>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16 md:mt-10 mt-5">
        <img src={assets.microsoft_logo} alt="Microsoft Logo" className='w-20 md:w-28' />
        <img src={assets.google_logo} alt="Google Logo" className='w-20 md:w-28' />
        <img src={assets.stanford_logo} alt="Stanford Logo" className='w-20 md:w-28' />
        <img src={assets.cambridge_logo} alt="Cambridge Logo" className='w-20 md:w-28' />
        <img src={assets.adobe_logo} alt="Adobe Logo" className='w-20 md:w-28' />
      </div>
    </div>
  )
}

export default Companies