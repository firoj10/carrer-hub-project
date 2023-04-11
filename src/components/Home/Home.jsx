import React, { useEffect, useState } from 'react'
import { Link,  useLoaderData } from 'react-router-dom'
import heroImg from '../../assets/hero.jpg'

import JobList from '../JobList/JobList'

import FeJobs from '../FeJobs/FeJobs'

const Home = () => {
   
    const   featuredBobs = useLoaderData()
   


    const [jobListLoder, setDogImage] = useState([]);

    ;
  useEffect(() => {
    fetch("/joblist.json")
    .then(response => response.json())
    .then(data => setDogImage(data))
  },[])



  return (
    <>
    <div className='my-container flex flex-col items-center justify-between lg:flex-row'>
   ;
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
         Get Started
        </Link>
      </div>
   
    </div>
  ;
    <div className='relative lg:w-1/2 mt-8'>
      <div className='w-full lg:w-4/5 lg:ml-auto h-56 mt-30 sm:h-96'>
      <img
        src={heroImg}
        alt=''
        className='w-full mx-auto mb-12 mt-12 rounded-lg  bg-white'
      />
      </div>
    </div>
  
  </div>
  <div className='my-container'>
      <div className='grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2'>
</div>
    </div>
<div className='text-center'>
<h2 className='font-medium text-3xl'> Job Category List</h2>

</div>
    <div className='my-container '>
      <div className='product-container '>
    {
    jobListLoder && 
    jobListLoder.map(jobli=>(<JobList
    key={jobli.id}
    jobli={jobli}
    ></JobList>))
    }
    </div>
    </div>
    <div className='text-center mt-20 pt-20'>
<h2 className='font-medium text-3xl'> Featured Jobs</h2>
    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
</div>
    <div className='my-container '>
      <div className='product-container '>
{
  featuredBobs &&
  featuredBobs.map(feJobs=>(<FeJobs
    key={feJobs.id}
    feJobs={feJobs}
  ></FeJobs>))
}

      </div>
    </div>
  </>
  
  )
}

export default Home



