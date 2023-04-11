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



            const {JobTitle, Exp , 
                Educational, Responsibility, Description, Email,
                 Phone, Salary, address,mesimg,phnimg, takimg, locimg, jobimg, }=jobDetail;


    return (
        <div className='grid gap-8 m-7 mb-8 md:grid-cols-2  my-container'>
      <div className='col-start-1 col-end-3'>
<p className=''>
<span className='font-bold'>Job Description:</span>
<span>{Description}</span>
  </p>
<p className=''>
<span className='font-bold'>Job Responsibility</span>
<span>{Responsibility}</span>
  </p>
<p className=''>
<span className='font-bold'>Educational Requirements:</span>
<span>{Educational}</span>
  </p>
<p className=''>
<span className='font-bold'>Experiences:</span>
<span>{Exp}</span>
  </p>

      </div>
      <div className='col-end-7 col-span-2 '>
<div className='p-10 bg-indigo-100 rounded-lg'>
{/* <h2 className='pt-3'>Job Details</h2>
<hr className='bg-indigo-700 border-b border-indigo-500 mt-4 mb-3' />
<p className='p-1'>Salary: {Salary}</p>
<p className='p-1'>Job Title: {JobTitle}</p>


<p className='p-1'>Phone: {Phone}</p>
<p className='p-1'>Email: {Email}</p> */}

<h2 className='pt-3 font-bold'>Job Details</h2>
<hr className='bg-indigo-700 border-b border-indigo-500 mt-4 mb-3' />
<p className='flex pt-2'>
<img src={takimg} alt="" />
<span className='font-bold'>Salary:</span>
<span>{ Salary}</span>
</p>
<p className='flex pt-2'>
<img src={mesimg} alt="" />
<span className='font-bold'>JobTitle :</span>
<span>{ JobTitle}</span>
</p>

<h2 className='pt-3 font-bold'>Contact Information</h2>
<hr className='bg-indigo-700 mt-3 mb-3 border-b border-indigo-500 ' />
<p className='flex pt-2'>
<img src={jobimg} alt="" />
<span className='font-bold'>Email :</span>
<span>{ Email}</span>
</p>
<p className='flex pt-2'>
<img src={phnimg} alt="" />
<span className='font-bold'>Phone :</span>
<span>{ Phone}</span>
</p>
<p className='flex pt-2'>
<img src={locimg} alt="" />
<span className='font-bold'>Address :</span>
<span>{ address}</span>
</p>
</div>
<Link to={'/appliedjobs'}><button  onClick={()=>handleAddToCart(jobDetail) } className='btn-primary '>Apply Now</button></Link>
      </div>
            
        </div>
    );
};

export default JobDetails;