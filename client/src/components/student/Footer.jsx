import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-900 md:px-36 text-left w-full mt-10' >
      <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30' >
        <div>
          <img src={assets.logos} alt="logo" />
          <p>Join the more than 2,000 creators and students who use Kode-learning to share and increase their knowledge. Easily create and enroll courses your favorite courses with our powerful yet simple tools.</p>
        </div>
        <div></div>
        <div></div>
      </div>
      <p>Copy 2025 &copy; Kode-Learning. All Rights Reserved</p>
    </footer>
  )
}

export default Footer