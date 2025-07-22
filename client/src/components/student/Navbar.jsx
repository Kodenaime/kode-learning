import React, { useContext } from 'react'

import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { AppContext } from '../../context/AppContext'

const Navbar = () => {

  const {isEducator, navigate} = useContext(AppContext)

  const isCourseListPage = location.pathname.includes('/course-list');

  const {openSignIn} = useClerk()
  const {user} = useUser()

  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`} >
      <a href='/'><img src={assets.logos} alt="Logo"  className='w-28 lg:W-32 cursor-pointer' /></a> 
      <div className='hidden md:flex items-center gap-5 text-gray-500'>
        <div className='flex items-center gap-5'>
          {
            user  && 
            <>
              <button onClick={() => {navigate('/educator')}} >{ isEducator ? 'Dashboard' : 'Educator' }</button>
              |  <Link to='/enrollments'>Enrollments</Link>
            </>
          }
        </div>
        {
          user ? <UserButton /> : <button onClick={() => openSignIn()} className='bg-orange-600 text-white px-5 py-2 rounded-lg cursor-pointer'>Join Us</button>
        }
      </div>
      {/* second navbar for smaller screens structure */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500 '>
        <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
          {
            user  && 
            <>
              <button onClick={() => {navigate('/educator')}} >{ isEducator ? 'Dashboard' : 'Educator' }</button>
              |  <Link to='/enrollments'>Enrollments</Link>
            </>
          }
        </div>
        {
          user ? <UserButton /> : <button onClick={() => openSignIn()}><img src={assets.user_icon} alt="" /></button>
        }
      </div>

    </div>
  ) 
}

export default Navbar