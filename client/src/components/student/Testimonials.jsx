import React from 'react'
import { dummyTestimonial } from '../../assets/assets'

const Testimonials = () => {
  return (
    <div className='pb-14 px-8 md:px-0' >
      <h2 className='text-3xl font-medium text-gray-800' >Testimonials</h2>
      <p className='md:text-base text-gray-500 mt-3' >At Kode-Learning, learner success is our priority. Hear directly from our students, professionals, and corporate partners who have transformed their skills, careers, and businesses through our courses. <br /> Their experiences showcase the impact, support, and results you can expect when you learn with us </p>
      <div>
        {
          dummyTestimonial.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.name} />
              <div>
                <h1>{ item.name }</h1>
                <p>{ item.role }</p>
              </div>
              <div>
                <div>
                  {[...Array(5).map((_, i) => (
                    <img key={i}  src={i < Math.floor(item.rating) ? assets.star : assets.star_blank} alt='star' className='h-5' />
                  ))]}
                </div>
                <p className='text-gray-500 mt-5' >{ item.feedback }</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Testimonials