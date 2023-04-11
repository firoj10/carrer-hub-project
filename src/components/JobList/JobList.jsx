import React from 'react';
;

const JobList = ({jobli }) => {
 console.log(jobli.id)
    return (
        <div>
           <div className=''>
        <img
          src={jobli.picture}
          alt='book cover'
          className=''
        />
        <p>{jobli.category}</p>
        <p>{jobli.jobdurection}</p>
       

       </div>
       </div>
      
         
        
      
    );
};

export default JobList;





