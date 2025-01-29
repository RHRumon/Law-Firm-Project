import { HiMiniChevronDown } from "react-icons/hi2";
import navLogo from "../../assets/logo.png";
import { FaRegChartBar } from "react-icons/fa6";
import { useState } from "react";
import "../../style/Style.css";
import { Link, useLocation } from "react-router-dom";
import { Dropdown } from "antd";

import { FaAngleDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar2 = () => {
  const location = useLocation();
  let [active, setActive] = useState(false);

  let [categorySelect, setCategorySelect] = useState("Home");

  let handleClick = (category) => {
    setCategorySelect(category);
  };

  const dropdownContent = (
    <div className="bg-white shadow-sm flex flex-col items-start w-[100px] h-fit">
      <Link
        to="/blog"
        className={`${
          location?.pathname === "/blog"
            ? "bg-primary text-white"
            : "bg-white text-textColor"
        } hover:bg-primary hover:text-white text-lg  ps-[20px] block py-[10px] w-full`}
      >
        Blog
      </Link>

      <Link
        to="/faq"
        className={`${
          location?.pathname === "/term"
            ? "bg-primary text-white"
            : "bg-white text-textColor"
        } hover:bg-primary hover:text-white text-lg  ps-[20px] block py-[10px] w-full`}
      >
        Faq
      </Link>

      <Link
        to="/contact"
        className={`${
          location?.pathname === "/contact"
            ? "bg-primary text-white"
            : "bg-white text-textColor"
        } hover:bg-primary hover:text-white text-lg  ps-[20px] block py-[10px] w-full`}
      >
        Contact
      </Link>
      <Link
        to="/team"
        className={`${
          location?.pathname === "/team"
            ? "bg-primary text-white"
            : "bg-white text-textColor"
        } hover:bg-primary hover:text-white text-lg  ps-[20px] block py-[10px] w-full`}
      >
        Team
      </Link>
    </div>
  );

  return (
    <div className="absolute top-0 left-0 w-full work-sans text-white  mt-[36px] ">
      <header className="py-3 border-b border-b-amber-900">
        <nav className="flex justify-between items-center xl:px-5 md:px-7 smaller:px-8 small:px-4 tiny:px-2 max-w-[1320px] mx-auto w-full relative">
          {/* 1st */}
          <a href="">
            <img
              className="xl:w-[56px] xl:h-[62px] md:w-[45px] md:h-[49px] w-[29px] h-[32px]"
              src={navLogo}
              alt=""
            />
          </a>
          {/* 2nd */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <div
                className={`flex gap-9 text-lg font-medium transition-all  w-full items-center`}
              >
                <ul className="flex items-center gap-8">
                  <div>
                    <Link to={`/`}>
                      <li
                        onClick={() => handleClick("Home")}
                        className={`hover:text-[#B68C5A] ${
                          categorySelect === "Home" ? "text-[#B68C5A]" : ""
                        }`}
                      >
                        Home
                      </li>
                    </Link>
                  </div>
                  <div>
                    <Link to={`/about`}>
                      <li
                        onClick={() => handleClick("About")}
                        className={`hover:text-[#B68C5A] ${
                          categorySelect === "About" ? "text-[#B68C5A]" : ""
                        }`}
                      >
                        About
                      </li>
                    </Link>
                  </div>
                  <div>
                    <Link to={`/service`}>
                      <li
                        onClick={() => handleClick("Service")}
                        className={`hover:text-[#B68C5A] ${
                          categorySelect === "Service" ? "text-[#B68C5A]" : ""
                        }`}
                      >
                        Service
                      </li>
                    </Link>
                  </div>
                  <div>
                    <Link to={`/caseStudy`}>
                      <li
                        onClick={() => handleClick("Case Study")}
                        className={`hover:text-[#B68C5A] ${
                          categorySelect === "Case Study"
                            ? "text-[#B68C5A]"
                            : ""
                        }`}
                      >
                        Case Study
                      </li>
                    </Link>
                  </div>
                  <li
                    onClick={() => handleClick("Contact Us")}
                    className={`hover:text-[#B68C5A] ${
                      categorySelect === "Contact Us" ? "text-[#B68C5A]" : ""
                    }`}
                  >
                    Contact Us
                  </li>
                  {/* <li
                    onClick={() => handleClick("Page")}
                    className={`hover:text-[#B68C5A] flex items-center gap-1 ${
                      categorySelect === "Page" ? "text-[#B68C5A]" : ""
                    }`}
                  >
                    Page <HiMiniChevronDown />
                  </li> */}
                  <li className={`hover:text-primary cursor-pointer`}>
                    <Dropdown overlay={dropdownContent} trigger={["hover"]}>
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="flex items-center gap-2"
                      >
                        Pages
                        <FaAngleDown className="text-sm" />
                      </a>
                    </Dropdown>
                  </li>
                </ul>
              </div>
            </div>
            {/* Right Section */}
            <div className="flex items-center gap-3">
              <div className="lg:block hidden hover:scale-90">
                <button className="bg-[#C7A87D] px-5 py-3 text-white rounded-lg font-medium whitespace-nowrap">
                  Get Appointed
                </button>
              </div>

              {/*droppings*/}
              <div className="relative">
                <div
                  onClick={() => setActive((prev) => !prev)}
                  className="block lg:hidden toggle-icon"
                >
                  <FaRegChartBar className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
          {active && (
            <div className="absolute top-full left-0 z-10 bg-sky-300 w-full md:px-[57px] px-7 py-5 border-2 border-yellow-300 text-black">
              <ul className="flex flex-col items-center gap-8">
                <div>
                  <Link to={`/`}>
                    <li
                      onClick={() => handleClick("Home")}
                      className={`hover:text-[#B68C5A] ${
                        categorySelect === "Home" ? "text-[#B68C5A]" : ""
                      }`}
                    >
                      Home
                    </li>
                  </Link>
                </div>
                <div>
                  <Link to={`/about`}>
                    <li
                      onClick={() => handleClick("About")}
                      className={`hover:text-[#B68C5A] ${
                        categorySelect === "About" ? "text-[#B68C5A]" : ""
                      }`}
                    >
                      About
                    </li>
                  </Link>
                </div>
                <div>
                  <Link to={`/service`}>
                    <li
                      onClick={() => handleClick("Service")}
                      className={`hover:text-[#B68C5A] ${
                        categorySelect === "Service" ? "text-[#B68C5A]" : ""
                      }`}
                    >
                      Service
                    </li>
                  </Link>
                </div>
                <div>
                  <Link to={`/caseStudy`}>
                    <li
                      onClick={() => handleClick("Case Study")}
                      className={`hover:text-[#B68C5A] ${
                        categorySelect === "Case Study" ? "text-[#B68C5A]" : ""
                      }`}
                    >
                      Case Study
                    </li>
                  </Link>
                </div>
                <li
                  onClick={() => handleClick("Contact Us")}
                  className={`hover:text-[#B68C5A] ${
                    categorySelect === "Contact Us" ? "text-[#B68C5A]" : ""
                  }`}
                >
                  Contact Us
                </li>
                <li
                  onClick={() => handleClick("Page")}
                  className={`hover:text-[#B68C5A] flex items-center gap-1 ${
                    categorySelect === "Page" ? "text-[#B68C5A]" : ""
                  }`}
                >
                  Page <HiMiniChevronDown />
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Navbar2;
