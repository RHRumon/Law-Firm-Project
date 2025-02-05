import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Navbar2 from "../Navbar/Navbar2";
import DashBoardNavbar from "../Navbar/DashBoardNavbar";

const Root = () => {

  const location = useLocation();

  let isDashboard = location.pathname.startsWith('/userDashboard') || location.pathname.startsWith('/userAttorney') || location.pathname.startsWith('/caseHistoryDetails') || location.pathname.startsWith('/userAppointmentDetails' || location.pathname.startsWith('/attorneyDashboard') );


  return (
    <div>
      <Navbar></Navbar>
      {
        isDashboard? <DashBoardNavbar></DashBoardNavbar> : <Navbar2></Navbar2>
      }
      
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
