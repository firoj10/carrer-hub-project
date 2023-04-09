import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../../assets/hero.jpg'
import Statistics from '../Statistics/Statistics'

const Home = () => {
  return (
    <div className='my-container flex flex-col items-center justify-between lg:flex-row'>
    {/* Text Content */}
    <div className='mb-30 lg:max-w-lg  lg:pr-5 lg:mb-0'>
      <div className='max-w-xl mb-6 lg:mt-8'>
        
        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
          A reader lives a <br className='hidden md:block' /> thousand lives{' '}
          <span className='inline-block text-blue-400'>before he dies</span>
        </h2>
        <p className='text-base text-gray-700 md:text-lg'>
          Books are a uniquely portable magic. Books serve to show a man that
          those original thoughts of his aren’t very new after all. The man
          who does not read good books is no better than the man who can’t.
        </p>
      </div>
      <div className=''>
        
        <Link
          to='/about'
          className='btn-primary'
        >
          Learn More
        </Link>
      </div>
      <Statistics></Statistics>
    </div>
    {/* Lottie Animation */}
    <div className='relative lg:w-1/2 mt-8'>
      <div className='w-full lg:w-4/5 lg:ml-auto h-56 mt-30 sm:h-96'>
      <img
        src={heroImg}
        alt=''
        className='w-5/6 mx-auto mb-12 mt-12 rounded-lg shadow-md bg-gray-500'
      />
      </div>
    </div>
  </div>
  
  )
}

export default Home



