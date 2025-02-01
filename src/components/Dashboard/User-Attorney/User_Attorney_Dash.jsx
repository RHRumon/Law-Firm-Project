import profileImage from "../../../assets/sidebar_image.png";
import { MdOutlineDashboard } from "react-icons/md";
import { GiClawHammer } from "react-icons/gi";
import { MdHistory } from "react-icons/md";
import { VscEditSession } from "react-icons/vsc";
import { TbFiles } from "react-icons/tb";
import { TbMessages } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { HiOutlineLogout } from "react-icons/hi";

import caseStatusDashboard1 from "../../../assets/casestatusDashboard1.png";
import caseStatusDashboard2 from "../../../assets/casestatusDashboard2.png";
import caseStatusDashboard3 from "../../../assets/casestatusDashboard3.png";
import caseStatusDashboard4 from "../../../assets/casestatusDashboard4.png";
import hearingPic from "../../../assets/hearing.png";
import userPic from "../../../assets/userPhoto.png";
import { useEffect, useState } from "react";
// import { TfiLayoutSidebarLeft } from "react-icons/tfi";
import { RiMenuUnfold3Fill } from "react-icons/ri";

import { Button, Drawer, Radio, Space } from "antd";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import exattorney from "../../../assets/exAttorney.png";
import Attorney from "./Attorney";

const User_Attorney_Dash = () => {
  let [active, setActive] = useState("Dashboard");
  let [attornies, setAttornies] = useState([]);
  let handleClick = (name) => {
    setActive(name);
  };

   useEffect(() => {
      fetch("Data_Team_Details.json")
        .then((res) => res.json())
        .then((data) => setAttornies(data));
    }, []);

  // sidebar
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  return (
    <div className="max-w-[1320px] mx-auto w-full">
      {/* sidebar starts */}
      <div className="block lg:hidden big-mid:px-6 sm:px-8 px-[22px] mt-[30px] ">
        <Space>
          <Radio.Group value={placement} onChange={onChange}></Radio.Group>

          <RiMenuUnfold3Fill
            className="h-[40px] w-[40px] flex justify-center"
            onClick={showDrawer}
          />
        </Space>
        <Drawer
          title={<span className="text-3xl eb-garamond">LawStick</span>}
          placement={placement}
          closable={false}
          onClose={onClose}
          open={open}
          key={placement}
          className="tiny:max-w-[280px] small:max-w-[350px] smaller:max-w-[445px]"
        >
          <div className="border rounded-[20px] pb-7 shadow-lg">
            <div className=" bg-[#EDEDED] rounded-t-[20px]">
              <div className="flex justify-center items-center gap-[10px] py-[34px]">
                <div className="rounded-full p-[3px] border border-black">
                  <img
                    className="rounded-full"
                    src={profileImage}
                    alt="profile"
                  />
                </div>
                <div>
                  <h3 className="font-medium mb-[2px]">Martha Ulison</h3>
                  <p className="text-gray-500 text-sm">ulison@email.com</p>
                </div>
              </div>
            </div>
            <div className="mt-5 px-4">
              <nav className="space-y-[27px]">
                {/* 1 */}
                <a
                  onClick={() => handleClick("Dashboard")}
                  className="flex items-center gap-[15px] cursor-pointer"
                  href="#"
                >
                  <MdOutlineDashboard
                    className={`h-6 w-6 ${
                      active === "Dashboard"
                        ? "text-[#B68C5A]"
                        : "text-[#242628]"
                    }`}
                  />
                  <span
                    className={`sidebar-title ${
                      active === "Dashboard"
                        ? "text-[#B68C5A]"
                        : "text-[#242628]"
                    }`}
                  >
                    Dashboard
                  </span>
                </a>
                {/* 2 */}
                <a
                  onClick={() => handleClick("Attorney")}
                  className="flex items-center gap-[15px] cursor-pointer"
                  href="#"
                >
                  <GiClawHammer
                    className={`h-6 w-6 ${
                      active === "Attorney"
                        ? "text-[#B68C5A]"
                        : "text-[#242628]"
                    }`}
                  />
                  <span
                    className={`sidebar-title ${
                      active === "Attorney"
                        ? "text-[#B68C5A]"
                        : "text-[#242628]"
                    }`}
                  >
                    Attorney
                  </span>
                </a>
                {/* 3 */}
                <a
                  onClick={() => handleClick("Case History")}
                  className="flex items-center gap-[15px] cursor-pointer"
                  href="#"
                >
                  <MdHistory
                    className={`h-6 w-6 ${
                      active === "Case History"
                        ? "text-[#B68C5A]"
                        : "text-[#242628]"
                    }`}
                  />
                  <span
                    className={`sidebar-title ${
                      active === "Case History"
                        ? "text-[#B68C5A]"
                        : "text-[#242628]"
                    }`}
                  >
                    Case History
                  </span>
                </a>
                {/* 4 */}
                <a
                  onClick={() => handleClick("Appointment")}
                  className="flex items-center gap-[15px] cursor-pointer"
                  href="#"
                >
                  <VscEditSession
                    className={`h-6 w-6 ${
                      active === "Appointment"
                        ? "text-[#B68C5A]"
                        : "text-[#242628]"
                    }`}
                  />
                  <span
                    className={`sidebar-title ${
                      active === "Appointment"
                        ? "text-[#B68C5A]"
                        : "text-[#242628]"
                    }`}
                  >
                    Appointment
                  </span>
                </a>
                {/* 5 */}
                <a
                  onClick={() => handleClick("Files")}
                  className="flex items-center gap-[15px] cursor-pointer"
                  href="#"
                >
                  <TbFiles
                    className={`h-6 w-6 ${
                      active === "Files" ? "text-[#B68C5A]" : "text-[#242628]"
                    }`}
                  />
                  <span
                    className={`sidebar-title ${
                      active === "Files" ? "text-[#B68C5A]" : "text-[#242628]"
                    }`}
                  >
                    Files
                  </span>
                </a>
                {/* 6 */}
                <a
                  onClick={() => handleClick("Message")}
                  className="flex items-center gap-[15px] cursor-pointer"
                  href="#"
                >
                  <TbMessages
                    className={`h-6 w-6 ${
                      active === "Message" ? "text-[#B68C5A]" : "text-[#242628]"
                    }`}
                  />
                  <span
                    className={`sidebar-title ${
                      active === "Message" ? "text-[#B68C5A]" : "text-[#242628]"
                    }`}
                  >
                    Message
                  </span>
                </a>
                {/* 7 */}
                <a
                  onClick={() => handleClick("Settings")}
                  className="flex items-center gap-[15px] cursor-pointer"
                  href="#"
                >
                  <MdOutlineSettings
                    className={`h-6 w-6 ${
                      active === "Settings"
                        ? "text-[#B68C5A]"
                        : "text-[#242628]"
                    }`}
                  />
                  <span
                    className={`sidebar-title ${
                      active === "Settings"
                        ? "text-[#B68C5A]"
                        : "text-[#242628]"
                    }`}
                  >
                    Settings
                  </span>
                </a>
              </nav>
            </div>

            <div className="mt-[50px] px-4">
              <nav className="space-y-[27px]">
                <a
                  onClick={() => handleClick("Help & Info")}
                  className="flex items-center gap-[15px] cursor-pointer"
                  href="#"
                >
                  <IoIosInformationCircleOutline
                    className={`h-6 w-6 ${
                      active === "Help & Info"
                        ? "text-[#B68C5A]"
                        : "text-[#242628]"
                    }`}
                  />
                  <span
                    className={`sidebar-title ${
                      active === "Help & Info"
                        ? "text-[#B68C5A]"
                        : "text-[#242628]"
                    }`}
                  >
                    Help & Info
                  </span>
                </a>
                <a
                  onClick={() => handleClick("Logout")}
                  className="flex items-center gap-[15px] cursor-pointer"
                  href="#"
                >
                  <HiOutlineLogout
                    className={`h-6 w-6 ${
                      active === "Logout" ? "text-[#B68C5A]" : "text-[#242628]"
                    }`}
                  />
                  <span
                    className={`sidebar-title ${
                      active === "Logout" ? "text-[#B68C5A]" : "text-[#242628]"
                    }`}
                  >
                    Logout
                  </span>
                </a>
              </nav>
            </div>
          </div>
        </Drawer>
      </div>

      {/* sidebar ends */}

      <div className="grid grid-cols-12 gap-6 lg:mt-[100px] mt-[50px] mb-[160px] xl:px-5 md:px-7 smaller:px-8 small:px-4 tiny:px-2">
        <div className="hidden lg:block col-span-3 border rounded-[20px] pb-[113px] shadow-md">
          <div className=" bg-[#EDEDED] rounded-t-[20px]">
            <div className="flex justify-center items-center gap-[10px] py-[34px]">
              <div className="rounded-full p-[3px] border border-black">
                <img
                  className="rounded-full"
                  src={profileImage}
                  alt="profile"
                />
              </div>
              <div>
                <h3 className="font-medium mb-[2px]">Martha Ulison</h3>
                <p className="text-gray-500 text-sm">ulison@email.com</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <nav className="space-y-[27px]">
              {/* 1 */}

              <a
                onClick={() => handleClick("Dashboard")}
                className="flex items-center gap-[15px] cursor-pointer"
                href="#"
              >
                <MdOutlineDashboard
                  className={`h-6 w-6 ${
                    active === "Dashboard" ? "text-[#B68C5A]" : "text-[#242628]"
                  }`}
                />
                <span
                  className={`sidebar-title ${
                    active === "Dashboard" ? "text-[#B68C5A]" : "text-[#242628]"
                  }`}
                >
                  Dashboard
                </span>
              </a>

              {/* 2 */}
              <a
                onClick={() => handleClick("Attorney")}
                className="flex items-center gap-[15px] cursor-pointer"
              >
                <GiClawHammer
                  className={`h-6 w-6 ${
                    active === "Attorney" ? "text-[#B68C5A]" : "text-[#242628]"
                  }`}
                />
                <span
                  className={`sidebar-title ${
                    active === "Attorney" ? "text-[#B68C5A]" : "text-[#242628]"
                  }`}
                >
                  Attorney
                </span>
              </a>

              {/* 3 */}
              <a
                onClick={() => handleClick("Case History")}
                className="flex items-center gap-[15px] cursor-pointer"
                href="#"
              >
                <MdHistory
                  className={`h-6 w-6 ${
                    active === "Case History"
                      ? "text-[#B68C5A]"
                      : "text-[#242628]"
                  }`}
                />
                <span
                  className={`sidebar-title ${
                    active === "Case History"
                      ? "text-[#B68C5A]"
                      : "text-[#242628]"
                  }`}
                >
                  Case History
                </span>
              </a>
              {/* 4 */}
              <a
                onClick={() => handleClick("Appointment")}
                className="flex items-center gap-[15px] cursor-pointer"
                href="#"
              >
                <VscEditSession
                  className={`h-6 w-6 ${
                    active === "Appointment"
                      ? "text-[#B68C5A]"
                      : "text-[#242628]"
                  }`}
                />
                <span
                  className={`sidebar-title ${
                    active === "Appointment"
                      ? "text-[#B68C5A]"
                      : "text-[#242628]"
                  }`}
                >
                  Appointment
                </span>
              </a>
              {/* 5 */}
              <a
                onClick={() => handleClick("Files")}
                className="flex items-center gap-[15px] cursor-pointer"
                href="#"
              >
                <TbFiles
                  className={`h-6 w-6 ${
                    active === "Files" ? "text-[#B68C5A]" : "text-[#242628]"
                  }`}
                />
                <span
                  className={`sidebar-title ${
                    active === "Files" ? "text-[#B68C5A]" : "text-[#242628]"
                  }`}
                >
                  Files
                </span>
              </a>
              {/* 6 */}
              <a
                onClick={() => handleClick("Message")}
                className="flex items-center gap-[15px] cursor-pointer"
                href="#"
              >
                <TbMessages
                  className={`h-6 w-6 ${
                    active === "Message" ? "text-[#B68C5A]" : "text-[#242628]"
                  }`}
                />
                <span
                  className={`sidebar-title ${
                    active === "Message" ? "text-[#B68C5A]" : "text-[#242628]"
                  }`}
                >
                  Message
                </span>
              </a>
              {/* 7 */}
              <a
                onClick={() => handleClick("Settings")}
                className="flex items-center gap-[15px] cursor-pointer"
                href="#"
              >
                <MdOutlineSettings
                  className={`h-6 w-6 ${
                    active === "Settings" ? "text-[#B68C5A]" : "text-[#242628]"
                  }`}
                />
                <span
                  className={`sidebar-title ${
                    active === "Settings" ? "text-[#B68C5A]" : "text-[#242628]"
                  }`}
                >
                  Settings
                </span>
              </a>
            </nav>
          </div>

          <div className="mt-[80px] flex justify-center ">
            <nav className="space-y-[27px]">
              <a
                onClick={() => handleClick("Help & Info")}
                className="flex items-center gap-[15px] cursor-pointer"
                href="#"
              >
                <IoIosInformationCircleOutline
                  className={`h-6 w-6 ${
                    active === "Help & Info"
                      ? "text-[#B68C5A]"
                      : "text-[#242628]"
                  }`}
                />
                <span
                  className={`sidebar-title ${
                    active === "Help & Info"
                      ? "text-[#B68C5A]"
                      : "text-[#242628]"
                  }`}
                >
                  Help & Info
                </span>
              </a>
              <a
                onClick={() => handleClick("Logout")}
                className="flex items-center gap-[15px] cursor-pointer"
                href="#"
              >
                <HiOutlineLogout
                  className={`h-6 w-6 ${
                    active === "Logout" ? "text-[#B68C5A]" : "text-[#242628]"
                  }`}
                />
                <span
                  className={`sidebar-title ${
                    active === "Logout" ? "text-[#B68C5A]" : "text-[#242628]"
                  }`}
                >
                  Logout
                </span>
              </a>
            </nav>
          </div>
        </div>

        <div className="lg:col-span-9 col-span-12 border rounded-[20px] shadow-lg xl:pb-0 pb-[20px]">
          <h1 className="dashboard-title md:py-[38px] py-[17px] big-mid:px-12 sm:px-8 px-[22px] border-b-2">
            Attorney
          </h1>

          <div className="lg:px-10 px-5 mt-10">
            <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 ">
              {/* 1 */}
              {/* <div className="lg:w-[285px] w-full h-[324px] px-6 py-8 border rounded-[10px] shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="rounded-full flex justify-center items-center">
                    <img
                      className="h-[70px] w-[70px]"
                      src={exattorney}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p class="font-semibold text-lg leading-[21px] text-[#242628] work-sans">
                      Alina Gain
                    </p>
                    <p className="font-medium work-sans text-[#818B8F]">Criminal Lawyer</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="mb-3 font-medium work-sans">Experience: <span>4 Year</span></p>
                  <p>Qualification: Juris Doctor JD: Oxford University</p>
                </div>
                <div className="mt-10 flex justify-between items-center">
                  <button className="bg-[#C7A87D] hover:bg-[#B68C5A] w-[123px] h-[43px] lg:px-[22px] px-5 py-4 rounded-lg font-medium whitespace-nowrap text-base flex items-center gap-1 text-white work-sans">
                    Book Now
                  </button>
                  <p className="text-[#B68C5A] font-semibold text-lg work-sans">$120.00</p>
                </div>
              </div> */}
              {
                 attornies.map((attorney, idx) => <Attorney key={idx} attorney={attorney}></Attorney>)
              }
            </div>

            <div className="grid xl:grid-cols-2 grid-cols-1  gap-[22px] big-mid:mt-[60px] mt-[50px]">
              <div>
                <h1 className="font-medium text-2xl mb-6">Upcoming Hearing</h1>
                <div className="flex items-center gap-8 h-[180px] bg-[#EDEEF1] hover:bg-[#20C997] text-black hover:text-white rounded-[10px] px-[28px] py-[28px]">
                  <div>
                    <div className="rounded-full sm:h-[60px] sm:w-[60px] h-[40px] w-[40px] flex justify-center items-center bg-white">
                      <img
                        className="sm:h-9 sm:w-9 h-6 w-6"
                        src={hearingPic}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="font-medium sm:max-h-none max-h-[128px] overflow-y-auto">
                    <p className="sm:text-lg text-base">Date: 19 Dec 2024</p>
                    <p>Lawyer: Arthur Canal Doyle</p>
                    <p>Location: One First Street, NE, in Washington, DC</p>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="font-medium text-2xl mb-6">Recent Message</h1>
                <div className="flex items-center gap-8 h-[180px] bg-[#EDEEF1] hover:bg-[#20C997] text-black hover:text-white rounded-[10px] px-[28px] py-[28px]">
                  <div>
                    <div className="rounded-full sm:h-[80px] sm:w-[80px] h-[60px] w-[60px] flex justify-center items-center ">
                      <img
                        className="sm:h-[80px] sm:w-[80px] h-[60px] w-[60px]"
                        src={userPic}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="sm:max-h-none max-h-[128px] overflow-y-auto font-medium text-lg ">
                    <p className="font-semibold text-lg  work-sans">
                      Arthur Canal Doyle
                    </p>
                    <p className="simple-text">Send you a message</p>
                    <p className="simple-text text-[#818B8F]">1 min ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_Attorney_Dash;
