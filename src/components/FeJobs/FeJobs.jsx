import React from 'react';
import { Link } from 'react-router-dom';

const FeJobs = ({feJobs}) => {
    const {id, img,name, JobTitle, address}= feJobs;
    console.log('ooooooooooo',id)
    return (
        <div>
        <div className=''>
     <img
       src={img}
       alt='book cover'
       className=''
     />
     <p>{name}</p>
     <p>{JobTitle}</p>
     <p>{address}</p>
     
     <Link to={`/jobdetails/${id}`}><button className='btn-primary'>View Details</button></Link>
    

    </div>
    </div>
    );
};

export default FeJobs;