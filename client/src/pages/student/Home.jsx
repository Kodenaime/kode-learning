import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CourseSection from '../../components/student/CourseSection'
import Testimonials from '../../components/student/Testimonials'
import Cta from '../../components/student/Cta'
import Footer from '../../components/student/Footer'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero />
      <Companies />
      <CourseSection />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  )
}

export default Home