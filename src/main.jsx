import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home-Routes/Home.jsx';
import About from './components/About-Page-Routes/About_Route.jsx';
import About_Route from './components/About-Page-Routes/About_Route.jsx';
import Service_Route from './components/Service-Page-Route/Service_Route.jsx';
import Service_Details_Route from './components/Service-Details-Route/Service_Details_Route.jsx';
import Case_Study_Route from './components/Case-Study-Component/Case_Study_Route.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      
      {
         path: "/about",
         element: <About_Route></About_Route>
      },
      {
        path:"/service",
        element: <Service_Route></Service_Route>
      },
      {
         path:"/serviceDetails",
         element:<Service_Details_Route></Service_Details_Route>
      },
      {
        path:"/caseStudy",
        element:<Case_Study_Route></Case_Study_Route>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
