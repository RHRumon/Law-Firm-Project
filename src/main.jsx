import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Home from "./components/Home-Routes/Home.jsx";
// import About from './components/About-Components/About_Route.jsx';
import About_Route from "./components/About-Components/About_Route.jsx";
import Service_Route from "./components/Service-Components/Service_Route.jsx";
import Service_Details_Route from "./components/Service-2-Components/Service_Details_Route.jsx";
import Case_Study_Route from "./components/Case-Study-Component/Case_Study_Route.jsx";
import Case_Study2_Route from "./components/Case-Study-2-Components/Case_Study2_Route.jsx";

import TeamDetail_Routes from "./components/Team_Details/TeamDetail_Routes.jsx";
import Team_Routes from "./components/Team/Team_Routes.jsx";
import User_Dashboard from "./components/Dashboard/User-Dashboard/User_Dashboard.jsx";
import User_Attorney_Dash from "./components/Dashboard/User-Attorney/User_Attorney_Dash.jsx";
// import Case_History_UserDash from "./components/Dashboard/User-Case-History/Case_History_DetailsUserDash.jsx";
import Case_History_DetailsUserDash from "./components/Dashboard/User-Case-History/Case_History_DetailsUserDash.jsx";
import User_Appointment_Details from "./components/Dashboard/User-Appointment-Details/User_Appointment_Details.jsx";
import Attorney_DashBoard from "./components/Dashboard/Attorney-DashBoard/Attorney_DashBoard.jsx";

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
        element: <About_Route></About_Route>,
      },
      {
        path: "/service",
        element: <Service_Route></Service_Route>,
      },
      {
        path: "/serviceDetails",
        element: <Service_Details_Route></Service_Details_Route>,
      },
      {
        path: "/caseStudy",
        element: <Case_Study_Route></Case_Study_Route>,
      },
      {
        path: "/caseDetails",
        element: <Case_Study2_Route></Case_Study2_Route>,
      },
      {
        path: "/team",
        element: <Team_Routes></Team_Routes>
      },     
      {
        path: "/teamDetails",
        element: <TeamDetail_Routes></TeamDetail_Routes>
      },
      {
        path:"/userDashboard",
        element: <User_Dashboard></User_Dashboard>
        // children:[
        //   {
        //      path:"attorney",
        //      element:<User_Attorney_Dash></User_Attorney_Dash>,
        //   }
        // ]
      },
      {
         path:"/userAttorney",
         element:<User_Attorney_Dash></User_Attorney_Dash>
      },
      {
         path:"/caseHistoryDetails",
         element:<Case_History_DetailsUserDash></Case_History_DetailsUserDash>
      },
      {
        path:"/userAppointmentDetails",
        element:<User_Appointment_Details></User_Appointment_Details>
      },
      {
        path:"/attorneyDashboard",
        element:<Attorney_DashBoard></Attorney_DashBoard>
      }


    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
