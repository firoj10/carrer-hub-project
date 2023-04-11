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


console.log(localJob.Educational)




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




    return (
        <div>
            {
                localJob.map(ljon =>(<AppliedJob
                key={localJob.id}
                ljon ={ljon }
                ></AppliedJob>))
            }
             </div>
    );
};

export default AppliedJobs;