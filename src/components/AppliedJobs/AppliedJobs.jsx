import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../utilities/fakedb';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    
const [applyJob, setApplyjob]=useState([])
const [localJob, setLocaljob]=useState([])
    useEffect(() => {
        fetch('/products.json')
          .then((response) => response.json())
          .then((data) =>setApplyjob(data) );
      }, []);
useEffect(()=>{

    const storedCart = getShoppingCart();
    const savedCart = [];

    for(const id in storedCart){
    
        const addedProduct = applyJob.find(product => product.id === id);
   
          if (addedProduct){
          savedCart.push(addedProduct);
          }
    }

    setLocaljob(savedCart);
},[applyJob])


const [filter, setFilter] = useState('all');
  
const handleFilterClick = (value) => {
  setFilter(value);
};

const filteredTasks = localJob.filter((ljon) => {
  if (filter === 'all') {
    return true;
  } else if (filter === 'completed') {
    return ljon.completed;
  } else if (filter === 'incomplete') {
    return !ljon.completed;
  }
});

    return (
        <div className='pt-20'>
             <div className='text-right my-container '>
       
        <button className='btn-primary p-2 ml-5'  onClick={() => handleFilterClick('completed')}>Remote Jobs</button>
        <button  className='btn-primary p-2 ml-5' onClick={() => handleFilterClick('incomplete')}>Ontime Jobs</button>
      </div>
            {
                filteredTasks.map(ljon =>(<AppliedJob
                key={localJob.id}
                ljon ={ljon }
                ></AppliedJob>))
            }
             </div>
    );
};

export default AppliedJobs;