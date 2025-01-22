import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

import "../../style/Style.css";
import { useState } from "react";

const Navbar = () => {
  let [socialDropDown, setSocialDropDown] = useState(false);

  let socialToggle = () => {
    setSocialDropDown((prev) => !prev);
  };

  return (
    <div className="bg-[#734A35] text-white text-sm py-2 work-sans">
      <div className="max-w-[1320px] mx-auto w-full flex justify-between items-center xl:px-5 md:px-7 smaller:px-8 small:px-4 tiny:px-2">
        {/* 1st div */}
        <div>
          <div className="lg:block hidden">
            <div className="flex items-center gap-9">
              <span className="mr-4 flex items-center gap-1">
                <IoLocationOutline />
                82 East Hill, Colchester, Essex, England
              </span>
              <span>info@appstick.co.uk</span>
            </div>
          </div>

          <div className="block lg:hidden relative">
            <button
              className="peer flex items-center gap-1"
              aria-expanded="false"
              aria-controls="dropdown-menu"
            >
              <IoLocationOutline />
            </button>
            <div
              id="dropdown-menu"
              className="absolute left-0 mt-2 hidden w-64 p-3 bg-gray-700 rounded-md shadow-lg transition-all duration-300 ease-in-out opacity-0 peer-focus:opacity-100 peer-focus:block"
            >
              <p>Location: 82 East Hill, Colchester, Essex, England.</p>
              <p>Email: info@appstick.co.uk</p>
            </div>
          </div>
        </div>
        {/* 2nd div */}
        <div className="flex gap-2 items-center">
        <div>
          <span className="whitespace-nowrap">Mon-Saturday, 09am - 05pm</span>
        </div>
          
            <div
              className={`drop_down_social flex flex-col md:flex-row  md:static items-center md:gap-5 gap-3 absolute right-0 transition-all duration-500 ${
                socialDropDown ? "top-8 bg-indigo-500 w-2/5 py-2 z-10 " : "-top-full w-3/5 "
              } `}
            >
              <a href=""><FaFacebookF /></a>
              <a href=""><FaTwitter /></a>
              <a href=""><FaLinkedinIn /></a>
            </div>
          
          <div onClick={() => socialToggle()} className="md:hidden block toggleSocial">
            <IoShareSocialOutline></IoShareSocialOutline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// <div className="bg-[#734A35]">
//   <div className="navbar text-white max-w-7xl mx-auto">
//     <div className="navbar-start ">
//       <div className="dropdown">
//         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h8m-8 6h16"
//             />
//           </svg>
//         </div>
//         <ul
//           tabIndex={0}
//           className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow border border-red-500 bg-gray-400"
//         >
//           <li>
//             <a className="mr-4 flex items-center gap-1">
//               <IoLocationOutline />
//               82 East Hill, Colchester, Essex, England
//             </a>
//           </li>

//           <li>
//             <a>info@appstick.co.uk</a>
//           </li>
//         </ul>
//       </div>
//       <div className="md:block hidden">
//       <div className="flex gap-2 items-center md:whitespace-normal whitespace-pre">
//         <a className="mr-4 flex items-center gap-1">
//           <IoLocationOutline />
//           82 East Hill, Colchester, Essex, England
//         </a>
//         <a>info@appstick.co.uk</a>
//       </div>
//       </div>
//     </div>

//     <div className="navbar-end">
//       <div className="flex items-center gap-5">
//         <span className="">Mon-Saturday, 09am - 05pm</span>
//         <FaFacebookF />
//         <FaTwitter />
//         <FaLinkedinIn />
//       </div>
//     </div>
//   </div>
// </div>
