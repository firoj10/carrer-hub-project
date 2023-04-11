import React from 'react';
import { Area, AreaChart, CartesianGrid,  Tooltip, XAxis, YAxis } from 'recharts';


const Statistics = () => {





    const data = [
        {
          "name": "assignment 1",
          "Obtain Mark": 60,
         
        },
        {
            "name": "assignment 2",
            "Obtain Mark": 60,
         
        },
        {
            "name": "assignment 3",
            "Obtain Mark": 57,
        
        },
        {
            "name": "assignment 4",
            "Obtain Mark": 60,
        
        },
        {
            "name": "assignment 5",
            "Obtain Mark": 58,
         
        },
        {
            "name": "assignment 6",
            "Obtain Mark": 60,
         
        },
        {
            "name": "assignment 7",
            "Obtain Mark": 60,
       
        }
      ]



    return (
      <div className='width-1/2  mx-auto p-auto'>
      
  
        <AreaChart
         width={1000} 
         height={400}
          data={data}
  margin={{
     top: 100,
      right: 0,
       left: 0, 
       bottom: 0 
 
       }}>
        <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>

  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="Obtain Mark" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />

</AreaChart>

</div>
    );
};

export default Statistics;




{/* <defs>
<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
</linearGradient>
<linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
</linearGradient>
</defs> */}