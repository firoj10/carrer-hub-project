import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import JobList from './components/JobList/JobList';
import Blog from './components/Blog/Blog';
import JobsList from './components/JobsList/JobsList';
import CartProductsLoder from './Loders/CartProductsLoder';
import skillsPageLoader from './Loders/CartProductsLoder';
import JobDetails from './components/JobDetails/JobDetails';





const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('products.json')
      },
      
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "jobdetails/:id",
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
