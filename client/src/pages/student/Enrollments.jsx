import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const Enrollments = () => {

  const {enrolledCourses, fetchEnrolledCourses} = useContext(AppContext)

  return (
    <>
      <div className='md:px-36 px-8 pt-10'>
        <h1 className='text-2xl font-semibold'>My Enrollments</h1>
        <table className='md:table-auto table-fixed w-full overflow-hidden border'>
          <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden'>
            <tr>
              <th className='px-4 py-3 font-semibold truncate'>Course</th>
              <th className='px-4 py-3 font-semibold truncate'>Duration</th>
              <th className='px-4 py-3 font-semibold truncate'>Completed</th>
              <th className='px-4 py-3 font-semibold truncate'>Status</th>
            </tr>
          </thead>
        </table>
        <tbody>
          {
            enrolledCourses.map((course, index) => (
              <tr key={index}>
                <td>
                  <img src={course.courseThumbnail} className='w-14 sm:w-24 md:w-28' alt="" />
                  <div>
                    <p>{ course.courseTitle }</p>
                  </div>
                </td>
                <td>
                  
                </td>
              </tr>
            ))
          }
        </tbody>
    </div>
    </>
  )
}

export default Enrollments