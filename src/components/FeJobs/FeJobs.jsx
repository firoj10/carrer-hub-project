import React from 'react';
import { Link } from 'react-router-dom';

const FeJobs = ({feJobs}) => {
    const {id, img,name, JobTitle, address,locimg,takimg, Salary }= feJobs;
   
    return (
      <div>
          <div>
        <div className='p-5 bg-slate-100 rounded'>
     <img
       src={img}
       alt='book cover'
       className=''
     />
     
    
     <p className='pt-1'>{JobTitle}</p>
     <p className='pt-6'>{name}</p>
     <p className='flex  '>
                <button className='pr-2 pl-2 m-1 outline  outline-1'>Remote</button>
                <button className='pr-2 pl-2 m-1 outline  outline-1'>Full Time</button>
            </p>
            <div className='flex'>
      <p className='pl-1 flex'>
        <img src={locimg} alt="" />
      <span>  {address}</span>
        </p>
      <p className='pl-4 flex'>
        <img src={takimg} alt="" />
      <span>Salay:  {Salary}</span>
        </p>
    
      </div>
     
     <Link to={`/jobdetails/${id}`}><button className='bg-indigo-600 rounded mt-2 text-white p-2'>View Details</button></Link>
    

    </div>
    </div>
   
      </div>
    );
};

export default FeJobs;