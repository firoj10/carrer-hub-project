import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './../../../public/products.json'
import JobSingleDetails from '../JobSingleDetails/JobSingleDetails';

const JobDetails = () => {
    const {id}= useParams()

    const [jobDetail, setjobdetail]= useState([ ])

    // 3. Create out useEffect function
    useEffect(() => {
        fetch('./../../../public/products.json')
          .then((response) => response.json())
          .then((data) => {
            const job = data.find((job) => job.id.toString() === id);
            setjobdetail(job);
          });
      }, [id]);
      console.log('aaaaaaaaaaaaaaaaaaa',jobDetail);
      const {name, JobTitle, Experiences , 
         Educational, Responsibility, Description, Email,
          Phone, Salary, address}=jobDetail;
    return (
        <div className='grid md:grid-cols-6 gap-4 my-container'>
      <div className='col-start-1 col-end-3'>
<p>Job Description: {Description}</p>
<p>Job Responsibility: {Responsibility}</p>
<p>Educational Requirements: {Educational}</p>
<p>Experiences: {Experiences}</p>
      </div>
      <div className='col-end-7 col-span-2 '>
<div>
<h2>Job Details</h2>
<p>Salary: {Salary}</p>
<p>Job Title: {JobTitle}</p>
<h2>Contact Information</h2>
<p>Phone: {Phone}</p>
<p>Email: {Email}</p>
<p>Address: {address}</p>
</div>
<button className='btn-primary'>Apply Now</button>
      </div>
            
        </div>
    );
};

export default JobDetails;