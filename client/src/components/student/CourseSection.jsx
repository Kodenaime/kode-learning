import React from 'react'
import { Link } from 'react-router-dom'

const CourseSection = () => {
  return (
    <div className='py-16 md:px-40 px-8'>
      <h2 className='text-3xl font-medium text-gray-800'>Learn An In-Demand Skill Today</h2>
      <p className='text-sm md:text-base text-gray-500 mt-3'>Discover our top-rated courses across various categories. Advance your career today, our courses are crafted to deliver results. </p>

      <Link className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'
      to={'/course-list'} onClick={() => scrollTo(0,0)} >All Courses</Link>
    </div>
  )
}

export default CourseSection