import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Navbar2 from "../Navbar/Navbar2";
import DashBoardNavbar from "../Navbar/DashBoardNavbar";
import Attorney_Navbar from "../Navbar/Attorney_Navbar";

const Root = () => {

  const location = useLocation();

  let isDashboard = location.pathname.startsWith('/userDashboard') || 
                  location.pathname.startsWith('/userAttorney') || 
                  location.pathname.startsWith('/caseHistoryDetails') || 
                  location.pathname.startsWith('/userAppointmentDetails');
                  
  let isAttorneyNavbar = location.pathname.startsWith('/attorneyDashboard')||
                        location.pathname.startsWith('/caseRequestDetails');

  return (
    <div>
      <Navbar/>
  
      {
        isAttorneyNavbar? (<Attorney_Navbar/>) : isDashboard ? (<DashBoardNavbar/>) : (<Navbar2/>)
      }
      
      <div>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
};

export default Root;
