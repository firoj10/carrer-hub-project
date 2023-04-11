import React from 'react';
;

const JobList = ({jobli }) => {
 console.log(jobli.id)
    return (
        <div className='bg-indigo-100 pt-5 pb-5 rounded pl-5'>
           <div className=' ' >
        <img 
          src={jobli.picture}
          alt='book cover'
         
        />
        <p>{jobli.category}</p>
        <p>{jobli.jobdurection}</p>
       

       </div>
       </div>
      
         
        
      
    );
};

export default JobList;





