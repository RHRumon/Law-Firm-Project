import React, { useEffect, useState } from "react";
import { Button, Modal, Calendar } from "antd";
import dayjs from "dayjs";
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";
import { MdOutlineCalendarMonth } from "react-icons/md";

const Attorney = ({ attorney }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAttorneyData, setModalAttorneyData] = useState(null);
  const [viewDate, setViewDate] = useState(dayjs().format("dddd, D MMMM YYYY"));
  const [selectDate, setSelectDate] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetch("Modal_Attorney_Detail.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setModalAttorneyData(data[0]);
        }
      });
  }, []);

  const {
    Image,
    Name,
    Designation,
    Biography,
    Degree,
    Experience,
    Qualification,
  } = modalAttorneyData || {};

  let { name, designation, experience, qualification, price, image } = attorney;

  return (
    <div className="lg:w-[285px] w-full h-[324px] px-6 py-8 border rounded-[10px] shadow-lg">
      <div className="flex items-center gap-3">
        <div className="rounded-full flex justify-center items-center">
          <img className="h-[70px] w-[70px]" src={image} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-lg leading-[21px] text-[#242628] work-sans">
            {name}
          </p>
          <p className="font-medium work-sans text-[#818B8F]">{designation}</p>
        </div>
      </div>
      <div className="mt-6">
        <p className="mb-3 font-medium work-sans">
          Experience:{" "}
          <span className="font-medium work-sans text-[#818B8F]">
            {experience}
          </span>
        </p>
        <p>
          Qualification:{" "}
          <span className="font-medium work-sans text-[#818B8F]">
            {qualification}
          </span>
        </p>
      </div>
      <div className="mt-10 flex justify-between items-center">
        <button
          onClick={showModal}
          className="bg-[#C7A87D] hover:bg-[#B68C5A] w-[123px] h-[43px] lg:px-[22px] px-5 py-4 rounded-lg font-medium whitespace-nowrap text-base flex items-center gap-1 text-white work-sans"
        >
          Book Now
        </button>
        <Modal footer={null} title="" open={isModalOpen} onCancel={handleCancel} width={872}>
          <div className="max-w-[872px] w-full mx-auto grid md:grid-cols-2 grid-cols-1">
            <div className="border-r md:px-5 md:py-5 w-full">
              <h1 className="header-2 text-[#242628] mb-10">
                Book Appointment
              </h1>
              <div className="flex items-center gap-3 mb-8 border-b pb-[25px]">
                {image && <img className="h-16 w-16" src={Image} alt={name} />}
                <div>
                  <p className="font-medium text-lg text-[#242628]">{Name}</p>
                  <p className="font-medium text-[#3A3D3F]">{Designation}</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className=" max-w-[356px]">
                  <span className="font-medium">Biography:</span>{" "}
                  <span className="text-[#3A3D3F]">{Biography}</span>
                </p>
                <p>
                  <span className="font-medium">Degree:</span>{" "}
                  <span className="text-[#3A3D3F]">{Degree}</span>
                </p>
                <p>
                  <span className="font-medium">Experience:</span>{" "}
                  <span className="text-[#3A3D3F]">{Experience}</span>
                </p>
                <p>
                  <span className="font-medium">Qualification:</span>{" "}
                  <span className="text-[#3A3D3F]">{Qualification}</span>
                </p>
              </div>
            </div>

            <div className="w-full md:px-5 md:py-5 md:mt-0 mt-5">
              <h3 className="font-medium text-xl md:pb-[24px] pb-3 text-[#191930] work-sans">
                Select Available Date
              </h3>
              <div className="flex items-center gap-2 md:pb-[24px] pb-3">
                <MdOutlineCalendarMonth />

                <h3 className="font-medium text-base  work-sans text-[#242628]">
                  {viewDate}
                </h3>
              </div>
              <Calendar
                fullscreen={false}
                onChange={(e) => {
                  setViewDate(dayjs(e).format("dddd, D MMMM YYYY"));
                  setSelectDate(e);
                }}
                headerRender={({ value, onChange }) => {
                  const current = value.format("MMMM YYYY");
                  return (
                    <div className="flex justify-between items-center px-2 py-4 border-b">
                      <div className="text-base font-semibold text-[#242628] font-sans">
                        {current}
                      </div>
                      <div className="flex items-center gap-[24px]">
                        <button
                          onClick={() =>
                            onChange(value.clone().subtract(1, "month"))
                          }
                          className="hover:text-blue-600 text-textColor"
                        >
                          <TfiAngleLeft className="text-[16px]" />
                        </button>
                        <button
                          onClick={() =>
                            onChange(value.clone().add(1, "month"))
                          }
                          className="hover:text-blue-600 text-textColor"
                        >
                          <TfiAngleRight className="text-[16px]" />
                        </button>
                      </div>
                    </div>
                  );
                }}
              />
            </div>
          </div>
        </Modal>
        <p className="text-[#B68C5A] font-semibold text-lg work-sans">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default Attorney;
