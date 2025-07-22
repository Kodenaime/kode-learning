import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'

import Home from './pages/student/Home'
import CourseList from './pages/student/CourseList'
import CourseDetails from './pages/student/Coursedetails'
import Enrollments from './pages/student/Enrollments'
import Player from './pages/student/Player'
import Loading from './components/student/Loading'
 
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import AddCourse from './pages/educator/AddCourse'
import Courses from './pages/educator/Courses'
import Students from './pages/educator/Students'
import Navbar from './components/student/Navbar'
import Footer from './components/student/Footer'

const App = () => { 

  const educatorRoute = useMatch('/educator/*')
  
  return (
    <div className='text-default min-h-screen bg-white'>
      {
        !educatorRoute && <Navbar />
      }      
      <Routes>

        <Route path='/' element={<Home />}/>
        <Route path='/course-list' element={<CourseList />}/>
        <Route path='/course-list/:input' element={<CourseList />}/>
        <Route path='/course/:id' element={<CourseDetails />}/>
        <Route path='/enrollments' element={<Enrollments />}/>
        <Route path='/player/:courseId' element={<Player />}/>
        <Route path='/loading/:path' element={<Loading />}/>

        <Route path='/educator' element={<Educator />} >
          <Route path='/educator' element={<Dashboard />} />
          <Route path='add-course' element={<AddCourse />} />
          <Route path='courses' element={<Courses />} />
          <Route path='students' element={<Students />} />
        </Route>

      </Routes>
      <Footer />
    </div>
  )
}

export default App

// https://youtube.com/shorts/lGmpSq-kckA?si=QigAtbMgOVBEQ1sa