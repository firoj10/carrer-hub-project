import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';

import Blog from './components/Blog/Blog';

import JobDetails from './components/JobDetails/JobDetails';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Statistics from './components/Statistics/Statistics';





const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('/products.json')
      },
      
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "/appliedjobs",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "/jobdetails/:id",
        element: <JobDetails></JobDetails>,
      },
     
    ], 
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
