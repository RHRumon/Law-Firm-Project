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
import Client_Info_Single from "./Client_Info_Single";
import Case_Information_Single from "./Case_Information_Single";
// import Asif from "../../../../assets/Asif.png";

const Case_Request_Details_ATD = () => {
  let [active, setActive] = useState("Dashboard");
  let [clientInfo, setClientInfo] = useState([]);
  let [caseInfo, setCaseInfo] = useState([]);
  let handleClick = (name) => {
    setActive(name);
  };

  useEffect(() => {
    fetch("Case_Req_ClientInfo_ATD.json")
      .then((res) => res.json())
      .then((data) => setClientInfo(data));
  }, []);

  useEffect(() => {
    fetch("Case_Req_CaseInfo_ATD.json")
      .then((res) => res.json())
      .then((data) => setCaseInfo(data));
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
                  <img className="rounded-full" 
                //   src={Asif}
                   alt="profile" />
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
            <h1 className="dashboard-title">Case Request</h1>
          </div>

          <div className="md:px-10 px-5 md:mt-10 mt-6 md:mb-[117px] mb-10">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
              {/* 1 */}
              <div>
                {
                    clientInfo.map((client,idx) => <Client_Info_Single key={idx} client={client}/>)
                }
              </div>
              {/* 2 */}
              <div>
                {/* {caseInfo.map((Case, idx) => (
                  <Case_info key={idx} Case={Case} />
                ))} */}
                {
                    caseInfo.map((Case,idx) => <Case_Information_Single key={idx} Case={Case}/>)
                }
              </div>
            </div>

            <div className="flex gap-5 mt-[50px]">
                <button className="sm:w-[130px] sm:h-14 w-[89px] h-11 text-sans-500 sm:text-lg text-base rounded-[8px] bg-[#EDEDED]">Decline</button>
                <button className="sm:w-[130px] sm:h-14 w-[89px] h-11 text-sans-500 sm:text-lg text-base rounded-[8px] bg-[#C7A87D] text-white">Accept</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case_Request_Details_ATD;
