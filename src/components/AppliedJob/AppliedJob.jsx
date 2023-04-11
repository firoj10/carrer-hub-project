import React from 'react';
import { Link } from 'react-router-dom';

const  AppliedJob = ({ljon }) => {
    const {JobTitle, name, Salary,loc,  address, img, locimg, takimg}=ljon;
    return (
        <div className=' mt-6 bg-slate-100 flex justify-between items-center my-container'>
         <div className='flex gap-20 '>
         <div>
          <img src={img} alt="" />
          </div>
            <div>
           <p>{name}</p>
           <p>{JobTitle}</p>
           <p className='flex  '>
                <button className='pr-2 pl-2 m-1 outline  outline-1'>Remote</button>
                <button className='pr-2 pl-2 m-1 outline  outline-1'>Full Time</button>
            </p>
          
           <div className='flex'>
           <p>
           <span>{loc}</span>
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
           </p>
           
           
           </div>


            </div>
         </div>
            <div className=''>
            
            <Link className='btn-primary' to={'/'}> <button>View Details</button></Link>
            </div>
           
        </div>
    );
};

export default AppliedJob;