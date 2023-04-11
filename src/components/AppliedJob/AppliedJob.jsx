import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJob = ({ljon }) => {
    const {JobTitle, Experiences , 
        Educational, Responsibility, Description, Email,
         Phone, Salary, address}=ljon;
    return (
        <div>
            <p>{Responsibility}</p>
            <p>{Email}</p>
          
            <Link className='btn-primary' to={'/'}> <button>View Details</button></Link>
        </div>
    );
};

export default AppliedJob;