import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobsList = () => {
  const jobsDetails = useLoaderData()
  console.log(jobsDetails)
  const {category, picture} = jobsDetails;
    return (
      <div>

      </div>
    );
};

export default JobsList;