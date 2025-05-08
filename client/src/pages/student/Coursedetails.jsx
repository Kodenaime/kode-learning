import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/student/Loading'
import { assets } from '../../assets/assets'

const CourseDetails = () => {

  const { id } = useParams()
  const [courseData, setCourseData] = useState(null)
  const {allCourses, calculateRating} = useContext(AppContext)

  const fetchCourse = async () => {
    const findCourse = allCourses.find(course => course._id === id)
    setCourseData(findCourse);
  }

  useEffect (() => {
    fetchCourse()
  },[])

  return courseData ? (
    <>
      <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left'>

        <div className='max-w-xl z-10 text-gray-500'>
          <h1 className='big-heading1'>{ courseData.courseTitle }</h1>
          <p dangerouslySetInnerHTML={{__html: courseData.courseDescription.slice(0,200) }} 
          className='pt-4 md:text-base text-sm' ></p>
         
          {/* // ratings for the ciurse */}
          <div className="flex items-center space-x-2 pt-3 pb-1 text-sm">
            <p>{calculateRating(courseData)}</p>
            <div className='flex'>
              {[...Array(5)].map((_, i) => (<img key={i} src={i < Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank} className='w-3.5 h-3.5' />))} 
            </div>
            <p className='text-blue-600'>({courseData.courseRatings.length} {courseData.courseRatings.length > 1 ? 'ratings' : 'rating'}) </p>

            <p>{ courseData.enrolledStudents.length } { courseData.enrolledStudents.length > 1 ? 'students' : 'student'} </p>
          </div>
          {/* instructor details  */}
          <p className='text-sm'>Course by <span className='text-blue-600 underline'>Kode</span></p>
        </div>

        <div>

        </div>

      </div>
    </>
  )
  : <Loading />
}

export default CourseDetails