import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'

const Testimonials = () => {
  return (
    <div className='pb-14 px-8 md:px-0' >
      <h2 className='text-3xl font-medium text-gray-800' >Testimonials</h2>
      <p className='md:text-base text-gray-500 mt-3 ' >At Kode-Learning, learner success is our priority. <br />  Hear directly from our students, professionals, and corporate partners who have transformed their skills, careers, and businesses through our courses. <br /> Their experiences showcase the impact, support, and results you can expect when you learn with us </p>
      <div className='second-grid' >
        {
          dummyTestimonial.map((item, index) => (
            <div key={index} className='text-sm text-left border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden' >
              <div className='flex items-center gap-4 bg-gray-500/10 px-5 py-4' >
                <img className='h-12 w-12 rounded-full' src={item.image} alt={item.name} />
                <div>
                  <h1 className='text-lg font-medium text-gray-800'>{ item.name }</h1>
                  <p className='text-gray-800/80'>{ item.role }</p>
                </div>
             
              </div>
              <div className='p-4 pb-7'>
                  <div className='flex gap-0.5'>
                    {[...Array(5)].map((_, i) => (
                      <img key={i}  src={i < Math.floor(item.rating) ? assets.star : assets.star_blank} alt='star' className='h-5' />
                    ))}
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