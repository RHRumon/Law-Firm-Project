import { MdOutlineDashboard } from "react-icons/md";
import { GiClawHammer } from "react-icons/gi";
import { MdHistory } from "react-icons/md";
import { VscEditSession } from "react-icons/vsc";
import { TbFiles } from "react-icons/tb";
import { TbMessages } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { HiOutlineLogout } from "react-icons/hi";
import { useEffect, useState } from "react";
import { RiMenuUnfold3Fill } from "react-icons/ri";
import { Button, Drawer, Radio, Space } from "antd";
import Single_ClientInfo_Client_Detail from "./Single_ClientInfo_Client_Detail";
import Single_CaseInfo_Client_Detail from "./Single_CaseInfo_Client_Detail";
import { FaRegFilePdf } from "react-icons/fa6";
import { BsFiletypeMp4 } from "react-icons/bs";
import { RiFolderImageLine } from "react-icons/ri";

const Clients_Details_ATD = () => {
  let [active, setActive] = useState("Dashboard");
  let [clientInfo, setClientInfo] = useState([]);
  let [caseInfo, setCaseInfo] = useState([]);
  let [bookingDetails_And_Evidence, setBookingDetails_And_Evidence] = useState(
    []
  );
  let handleClick = (name) => {
    setActive(name);
  };

  useEffect(() => {
    fetch("Clients_Detail_ClientInfo.json")
      .then((res) => res.json())
      .then((data) => setClientInfo(data));
  }, []);

  useEffect(() => {
    fetch("Clients_Detail_CaseInfo.json")
      .then((res) => res.json())
      .then((data) => setCaseInfo(data));
  }, []);

  // useEffect(() => {
  //   fetch("BookingDetail_&_Evidence.json")
  //     .then((res) => res.json())
  //     .then((data) => setBookingDetails_And_Evidence(data));
  // }, []);

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
      <div className="block lg:hidden big-mid:px-6 sm:px-8 px-[22px] mt-[45px] ">
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
                    //   src={Asif}
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

      <div className="sm:mt-[40px] sm:mb-[56px] mt-5 mb-7 xl:px-0 md:px-7 smaller:px-8 small:px-4 tiny:px-2">
        <p className="text-2xl font-medium work-sans leading-[44px] text-[#242628] mb-6">
          Good Morning
          <span className="text-[38px] font-medium work-sans">, Asif</span>
        </p>
        <p className="text-sans-400-16 text-[#3A3D3F] leading-[27px]">
          Here’s a quick overview of your performance. <br />
          Let’s make today another successful day!
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6 lg:mt-0 mt-[50px] mb-[160px] xl:px-0 md:px-7 smaller:px-8 small:px-4 tiny:px-2">
        <div className="hidden lg:block col-span-3 border rounded-[20px] pb-[113px] shadow-md">
          <div className=" bg-[#EDEDED] rounded-t-[20px]">
            <div className="flex justify-center items-center gap-[10px] py-[34px]">
              <div className="rounded-full p-[3px] border border-black">
                <img
                  className="rounded-full"
                  //   src={profileImage}
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
          <div className="flex justify-start border-b-2 md:py-[38px] py-[17px] big-mid:px-10 sm:px-8 px-[22px] ">
            <h1 className="dashboard-title">Client’s</h1>
          </div>

          <div className="md:px-10 px-5 md:mt-10 mt-6 md:mb-[117px] mb-10">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              {/* 1 */}
              <div>
                {clientInfo.map((client, idx) => (
                  <Single_ClientInfo_Client_Detail key={idx} client={client} />
                ))}
              </div>
              {/* 2 */}
              <div>
                {caseInfo.map((Case, idx) => (
                  <Single_CaseInfo_Client_Detail key={idx} Case={Case} />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 border mt-6 rounded-[20px] px-6 py-6">
                <h1 className="text-sans-500 text-2xl">Evidence</h1>
              <div className="flex flex-col sm:flex-row sm:gap-[30px]">
                <div>
                  <button className="border-none text-[#C7A87D] font-medium work-sans flex gap-2 items-center mb-4">
                    <span className="text-black">1. </span>
                    <FaRegFilePdf /> Download Pdf
                  </button>
                  <button className="border-none text-[#C7A87D] font-medium work-sans flex gap-2 items-center sm:mb-0 mb-4">
                    <span className="text-black">2. </span> <FaRegFilePdf />{" "}
                    Download Pdf
                  </button>
                </div>
                <div>
                  <button className="border-none text-[#C7A87D] font-medium work-sans flex gap-2 items-center mb-4">
                    <span className="text-black">3. </span> <BsFiletypeMp4 />
                    Download Pdf
                  </button>
                  <button className="border-none text-[#C7A87D] font-medium work-sans flex gap-2 items-center">
                    <span className="text-black">4. </span>{" "}
                    <RiFolderImageLine />
                    Download Pdf
                  </button>
                </div>
              </div>
            </div>

            {/*  */}

            {/* <div className="border border-purple-500 grid md:grid-cols-2 grid-cols-1 gap-4">
                {bookingDetails_And_Evidence.map((bookEvid, index) => (
                  <Single_Booking key={index} bookEvid={bookEvid} />
                ))}
              </div> */}

            {/* <div className="flex gap-5 mt-[50px]">
                <button className="sm:w-[150px] sm:h-14 w-[89px] h-11 textpurple-500 sm:text-lg text-sm rounded-[8px] bg-[#EDEDED] whitespace-nowrap">
                  Complete
                </button>
                <button className="md:w-[219px] sm:h-14 sm:w-[191px] w-[146px] h-11 textpurple-500 sm:text-lg text-sm rounded-[8px] bg-[#C7A87D] text-white whitespace-nowrap px-8 flex justify-center items-center">
                  Send Me Request
                </button>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients_Details_ATD;
