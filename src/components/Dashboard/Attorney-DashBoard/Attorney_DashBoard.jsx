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
import { useEffect, useState } from "react";
import { RiMenuUnfold3Fill } from "react-icons/ri";
import { Button, Drawer, Radio, Space } from "antd";
import { Modal } from "antd";
import modalPic from "../../../assets/modal_pic.png";

// apex chart
import Chart from "react-apexcharts";
import { curveCardinal } from "d3-shape";

// progress bar
import Clients_progress from "./Clients_progress";
import Next_Apntmnrt_Single_AD from "./Next_Apntmnrt_Single_AD";
import Message_single from "./Message_single";

const cardinal = curveCardinal.tension(0.2);

const Attorney_DashBoard = () => {
  // area charts info starts
  const series = [
    {
      name: "STOCK ABC",
      data: [
        [1510704000000, 1], // 15 Nov
        [1510790400000, 2], // 16 Nov
        [1510876800000, 3], // 17 Nov
        [1510963200000, 4], // 18 Nov
        [1511049600000, 5], // 19 Nov
        [1511136000000, 6], // 20 Nov
        [1511222400000, 7], // 21 Nov
      ],
    },
  ];
  const options = {
    chart: {
      type: "area",
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#007BFF"],
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0.3,
        opacityFrom: 0.7,
        opacityTo: 0.2,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        format: "dd MMM",
      },
    },
    yaxis: {
      opposite: false,
      labels: {
        formatter: (value) => value.toFixed(0), // Remove decimals
      },
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
    },
    legend: {
      horizontalAlign: "left",
    },
  };
  // area charts info ends

  // Pi chart function starts
  const options2 = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        startAngle: -100,
        endAngle: 100,
        hollow: {
          size: "0%", // Adjusts the thickness of the bars
        },
        track: {
          show: true,
          background: "#eee",
          strokeWidth: "100%",
          margin: 15,
        },
        dataLabels: {
          show: false,
        },
      },
    },
    colors: ["#F4A100", "#28A745", "#007BFF"],
    labels: ["Apples", "Oranges", "Bananas"],
  };
  // Pi chart function ends

  // modal starts
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // modal ends
  const series2 = [80, 60, 40];

  // Pi chart Ends

  let [active, setActive] = useState("Dashboard");

  let handleClick = (name) => {
    setActive(name);
  };

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
  // sidebar ends

  //
  let [clients, setClients] = useState([]);
  useEffect(() => {
    fetch("Clients_Case_Atrny_Dshbrd.json")
      .then((res) => res.json())
      .then((data) => setClients(data));
  }, []);

  //
  let [nextAppointment, setNextAppointment] = useState([]);
  useEffect(() => {
    fetch("Next_Apntmnrt_Single_AD.json")
      .then((res) => res.json())
      .then((data) => setNextAppointment(data));
  }, []);

  let [messages, setMessages] = useState([]);
  useEffect(() => {
    fetch("Messages_Attorney.json")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

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

      <div className="sm:mt-[40px] sm:mb-[56px] mt-5 mb-7 xl:px-0 md:px-7 smaller:px-8 small:px-4 tiny:px-2">
        <p className="text-2xl font-medium work-sans leading-[44px] text-[#242628]">
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
            Dashboard
          </h1>

          <div className="lg:px-10 px-5 mt-10 mb-10">
            <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 ">
              {/* 1 */}
              <div className="lg:w-[208px] w-full h-[132px] p-6 border rounded-[10px] shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="rounded-full h-10 w-10 bg-gray-400 flex justify-center items-center text-white">
                    <img
                      className="h-6 w-6"
                      src={caseStatusDashboard1}
                      alt=""
                    />
                  </div>
                  <p class="font-medium text-[#242628] work-sans whitespace-nowrap">
                    Ongoing Case
                  </p>
                </div>
                <p class="case-numbers text-[#6C757D] ml-10">01</p>
              </div>
              {/* 2 */}
              <div className="lg:w-[208px] w-full h-[132px] p-6 border rounded-[10px] shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="rounded-full h-10 w-10 bg-blue-700 flex justify-center items-center text-white">
                    <img
                      className="h-6 w-6"
                      src={caseStatusDashboard2}
                      alt=""
                    />
                  </div>
                  <p class="font-medium text-[#242628] work-sans whitespace-nowrap">
                    Ongoing Case
                  </p>
                </div>
                <p class="case-numbers text-blue-700 ml-10">01</p>
              </div>
              {/* 3 */}
              <div className="lg:w-[208px] w-full h-[132px] p-6 border rounded-[10px] shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="rounded-full h-10 w-10 bg-green-700 flex justify-center items-center text-white">
                    <img
                      className="h-6 w-6"
                      src={caseStatusDashboard3}
                      alt=""
                    />
                  </div>
                  <p class="font-medium text-[#242628] work-sans whitespace-nowrap">
                    Ongoing Case
                  </p>
                </div>
                <p class="case-numbers text-green-700 ml-10">01</p>
              </div>
              {/* 4 */}
              <div className="lg:w-[208px] w-full h-[132px] p-6 border rounded-[10px] shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="rounded-full h-10 w-10 bg-orange-500 flex justify-center items-center text-white">
                    <img
                      className="h-6 w-6"
                      src={caseStatusDashboard4}
                      alt=""
                    />
                  </div>
                  <p class="font-medium text-[#242628] work-sans whitespace-nowrap">
                    Ongoing Case
                  </p>
                </div>
                <p class="case-numbers text-orange-500 ml-10">01</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-12 gap-6">
              {/* First inner div */}
              <div className="xl:col-span-3 sm:col-span-6 col-span-12 py-6 px-3 border rounded-[10px] shadow-lg">
                <p className="text-sans-500-16">Case Overview</p>

                <Chart
                  options={options2}
                  series={series2}
                  type="radialBar"
                  width="100%"
                  height="100%"
                />
              </div>

              {/* Second inner div */}
              <div className="xl:col-span-3 sm:col-span-6 col-span-12 border px-4 py-6 rounded-[10px] shadow-lg">
                <p className="text-sans-500-16 mb-4">Upcoming Hearing</p>

                <div className="mb-4">
                  <p className="case-numbers text-blue-700 flex flex-col gap-[8px]">
                    10{" "}
                    <span className="text-sans-500-16 text-[#818B8F]">
                      December
                    </span>
                  </p>
                </div>

                <div>
                  <p className="text-sans-500-16 mb-3">Case Description</p>
                  <p className="work-sans text-sm text-[#3A3D3F]">
                    Disputes over individual rights, responsibilities, and
                    private relations.
                  </p>
                </div>
              </div>

              {/* Third inner div */}
              <div className="xl:col-span-6 col-span-12 px-[17px] py-6 border rounded-[10px] shadow-lg">
                <p className="text-sans-500-16 mb-[28px]">Case Request level</p>
                {/* charts starts */}
                <div className="overflow-x-auto sm:overflow-x-hidden ">
                  <div className="min-w-[600px] sm:w-full ">
                    <Chart
                      options={options}
                      series={series}
                      type="area"
                      height={188}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* progress starts */}
            <div className="mt-6 grid grid-cols-12 gap-6">
              {/* First inner div */}
              <div className="xl:col-span-3 sm:col-span-6 col-span-12 border px-4 py-4 rounded-[10px] shadow-lg h-[276px]">
                <p className="text-sans-500-16 mb-4">Clients</p>

                <div className="overflow-y-auto max-h-[200px]">
                  <div className="flex flex-col gap-4">
                    {clients.map((client, idx) => (
                      <Clients_progress key={idx} client={client} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Second inner div */}
              <div className="xl:col-span-3 sm:col-span-6 col-span-12 border px-4 py-4 rounded-[10px] shadow-lg h-[276px]">
                <p className="text-sans-500-16 mb-4">Next Appointment’s</p>

                <div className="overflow-y-auto max-h-[200px] ">
                  <div className="flex flex-col gap-4 ">
                    {nextAppointment.map((singleAppointment, idx) => (
                      <Next_Apntmnrt_Single_AD
                        key={idx}
                        singleAppointment={singleAppointment}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Third inner div */}
              <div className="xl:col-span-6 col-span-12 px-4 py-4 border rounded-[10px] shadow-lg h-[276px]">
                <p className="text-sans-500-16 mb-[28px]">Message</p>

                <div className="overflow-y-auto max-h-[200px] ">
                  <div className="flex flex-col gap-4 ">
                    {messages.map((message, idx) => (
                      <Message_single key={idx} message={message} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* modal Appoinment starts */}
        <div>
          <Button type="primary" onClick={showModal}>
            Open Modal
          </Button>
          <Modal
            // title="Basic Modal"
            open={isModalOpen}
            onOk={handleOk}
            // width={489}
            // height={638}
            // Style={{ height: "638px", overflow: "auto" }}
            footer={null}
            onCancel={handleCancel}
          >
            <div className="max-w-[489px] min-h-[638px] text-[#242628]">
              <div className="text-center pt-[21px] md:mb-10 mb-5">
                <h1 className="font-medium text-2xl eb-garamond mb-6">
                  Appointment Time Is Complete
                </h1>
                <p className="eb-garamond font-medium text-lg">
                  Now You Can Receive Case Request
                </p>
              </div>
              <div className="md:px-24 sm:px-11 px-0">
                <div className="border border-[#E0E0E0] rounded-[10px] px-6 py-8 h-[324px] md:mb-10 mb-5">
                  <div className="flex items-center gap-3 mb-6">
                    <img
                      className="sm:h-[70px] sm:w-[70px] h-[50px] w-[50px]"
                      src={modalPic}
                      alt=""
                    />
                    <div className="flex flex-col sm:gap-3 gap-1">
                      <p className="work-sans font-semibold text-lg">Alina Gain</p>
                      <p className="text-sans-400-16 text-[#818B8F]">alinagain@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-sans-500-16">
                      <span
                        className="text-[#818B8F]">Case Type:
                      </span>{" "}
                      Murder
                    </p>
                    <p className="text-sans-500-16">
                      <span
                        className="text-[#818B8F]">Case Description:
                      </span>{" "}
                      This case involves Party A and Party B, concerning the alleged murder of Victim's Name. 
                    </p>
                  </div>
                </div>
                
              </div>
              <div className="md:px-10 flex sm:flex-row flex-col sm:justify-center justify-start gap-4">
                  <button className="sm:w-[174px] sm:h-[56px] w-[125px] h-[37px] border text-sans-500 sm:text-lg text-sm rounded-[8px] bg-[#EDEDED] hover:bg-[#C7A87D] hover:text-white">View Details</button>
                  <button className="sm:w-[219px] sm:h-[56px] w-[188px] h-[37px] border text-sans-500 sm:text-lg text-sm rounded-[8px] bg-[#EDEDED] hover:bg-[#C7A87D] hover:text-white">Send Me Request</button>
              </div>
            </div>
          </Modal>
        </div>
        {/* modal Appoinment ends */}
      </div>
    </div>
  );
};

export default Attorney_DashBoard;
