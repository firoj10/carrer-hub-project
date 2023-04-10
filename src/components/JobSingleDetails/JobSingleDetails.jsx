import React from 'react';

const JobSingleDetails = ({user}) => {
    const {id, JobTitle, name, address, Salary, Phone, Email}= user;
    return (
        <div className='border'>
           <p>{JobTitle}</p>
           <p>{address}</p>
           <p>{name}</p>
           <p>{Salary}</p>
           <p>{Phone}</p>
           <p>{Email}</p>
        



        </div>
    );
};

export default JobSingleDetails;


