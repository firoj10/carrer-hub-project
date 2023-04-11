import React from 'react';
import { Link } from 'react-router-dom';

const FeJobs = ({feJobs}) => {
    const {id, img,name, JobTitle, address}= feJobs;
    console.log('ooooooooooo',id)
    return (
        <div>
        <div className='p-5 bg-slate-100 rounded'>
     <img
       src={img}
       alt='book cover'
       className=''
     />
     <p className='pt-6'>{name}</p>
     <p className='pt-1'>{JobTitle}</p>
     <p className='pt-1'>{address}</p>
     
     <Link to={`/jobdetails/${id}`}><button className='bg-indigo-600 rounded mt-2 text-white p-2'>View Details</button></Link>
    

    </div>
    </div>
    );
};

export default FeJobs;