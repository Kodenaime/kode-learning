import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom'

const Coursecard = ({course}) => {

  const {currency} = useContext(AppContext)

  return (
    <Link to={'/course/' + course._id} onClick={() => scrollTo(0,0,)} 
    className='border border-gray-500/30 pb-6 overflow-hidden rounded-lg'
    >
      <img src={course.courseThumbnail} alt="" className='w-full' />
      <div className="p-3 text-left">
        <h3 className='text-base font-semibold' >{ course.coursetitle }</h3>
        <p className='text-gray-500'  >{ course.educator.name }</p>
        <div className="flex items-center space-x-2">
          <p>4.5</p>
          <div>
            {[...Array(5)].map((_, i) => (<img key={i} src={assets.star} />))} 
          </div>
          <p>18</p>
        </div>
        <p>{ currency }{ (course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2) }</p>
      </div>
    </Link>
  )
}

export default Coursecard