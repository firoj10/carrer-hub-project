import React, { useEffect, useState } from 'react';
import { Link,  useParams } from 'react-router-dom';


import { addToDb, getShoppingCart } from '../utilities/fakedb';

const JobDetails = () => {
    const {id}= useParams()
    const [jobDetail, setjobdetail]= useState([])
    const [products, setProducts]=useState([]);
    const [cart, setCart]=useState([]);

   
    

    useEffect(() => {
        fetch('/products.json')
          .then((response) => response.json())
          .then((data) => {
            const job = data.find((job) => job.id.toString() === id);
            setjobdetail(job);
          });
      }, [id]);
 
     

      useEffect(()=>{
      
        const storedCart = getShoppingCart();
        const savedCart = [];
       
        for(const id in storedCart){
       
            const addedProduct = products.find(product => product.id === id);
       
              if (addedProduct){
              const quantity = storedCart[id];
              addedProduct.quantity = quantity
         
              savedCart.push(addedProduct);
              }
        }

        setCart(savedCart);
    },[products])


          const handleAddToCart = (product) =>{

                    const newCart = [...cart, product];

        
            setCart(newCart);
               addToDb(product.id)
            }



            const {JobTitle, Experiences , 
                Educational, Responsibility, Description, Email,
                 Phone, Salary, address}=jobDetail;


    return (
        <div className='grid md:grid-cols-6 gap-4 my-container'>
      <div className='col-start-1 col-end-3'>
<p>Job Description: {Description}</p>
<p>Job Responsibility: {Responsibility}</p>
<p>Educational Requirements: {Educational}</p>
<p>Experiences: {Experiences}</p>
      </div>
      <div className='col-end-7 col-span-2 '>
<div>
<h2>Job Details</h2>
<p>Salary: {Salary}</p>
<p>Job Title: {JobTitle}</p>
<h2>Contact Information</h2>
<p>Phone: {Phone}</p>
<p>Email: {Email}</p>
<p>Address: {address}</p>
</div>
<Link to={'/appliedjobs'}><button  onClick={()=>handleAddToCart(jobDetail) } className='btn-primary'>Apply Now</button></Link>
      </div>
            
        </div>
    );
};

export default JobDetails;