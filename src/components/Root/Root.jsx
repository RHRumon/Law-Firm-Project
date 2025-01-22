import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Navbar2 from "../Navbar/Navbar2";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Navbar2></Navbar2>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
