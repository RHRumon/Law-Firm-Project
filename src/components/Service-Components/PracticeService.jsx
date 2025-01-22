import "../../../src/style/Style.css";
import hammer from "../../assets/hammer.png";
import daripalla from "../../assets/daripalla.png";
import house from "../../assets/house.png";
import practiceCivil from "../../assets/Practicecivil.png";
import practiceEmployee from "../../assets/Practiceemployee.png";
import practiceEducation from "../../assets/Practiceeducation.png";
import practiceCorporate from "../../assets/Practicecorporate.png";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import practiceDesign from "../../assets/practiceDesign.png";
import practiceStyle from "../../assets/practice-design.png";
import practiceStyleWhite from "../../assets/practiceStyleWhite.png";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const PracticeService = () => {
  let swiperRef = useRef(null);

  return (
    <div className="min-h-fit work-sans text-white relative">
      <div className="max-w-[1320px] mx-auto w-full md:pt-[109px] md:pb-[150px] pt-[29px] pb-[38px]  xl:px-5 md:px-7 smaller:px-8 small:px-4 tiny:px-2 text-black">
        <div className="lg:space-y-4 eb-garamond">
          <p className="text-xl font-medium text-[#D4AF37]">Service</p>

          <h1 className="lg:text-5xl md:text-3xl text-2xl font-medium lg:leading-[62px] md:leading-[47px]">
            Our Practice Area
          </h1>

          <div className="">
            <p className="text-base ">
              Our legal services protect your rights and deliver results with
              <span className="hidden md:inline">
                <br />
              </span>
              personalized expertise.
            </p>
          </div>
        </div>

        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-14 work-sans ">
          {/* 1 */}

          <div className="flex justify-center items-center border shadow-xl rounded-[10px] group hover:bg-[#B68C5A] hover:text-white relative">
            <div className="max-w-[312px] min-h-[340px] flex flex-col justify-between items-center px-2 py-5 text-center">
              <img
                className="absolute bottom-0 right-0 group-hover:hidden"
                src={practiceStyle}
                alt=""
              />
              <img
                className="absolute bottom-0 right-0 hidden group-hover:block"
                src={practiceStyleWhite}
                alt=""
              />

              <div className="flex-none md:w-[60px] md:h-[60px] w-11 h-11 rounded-full bg-red-100 flex justify-center items-center">
                <img
                  className="md:w-11 md:h-11 w-7 h-7"
                  src={daripalla}
                  alt=""
                />
              </div>
              <p className="text-xl font-semibold line-clamp-1">Law Family</p>
              <p className="text-base line-clamp-4">
                Law Family Dedicated attorneys offering expert legal counsel
                with care, integrity, and support.
              </p>

              <Link to={`/serviceDetails`}>
                <div className="h-10 w-10 rounded-full bg-amber-100 hover:bg-white flex justify-center items-center">
                  <MdOutlineArrowRightAlt className="text-[#B68C5A] text-2xl"></MdOutlineArrowRightAlt>
                </div>
              </Link>
            </div>
          </div>

          {/* 2 */}
          <div className="flex justify-center items-center border shadow-xl rounded-[10px] group  hover:bg-[#B68C5A] hover:text-white relative">
            <div className="max-w-[312px] min-h-[340px] flex flex-col justify-between items-center px-2 py-5 text-center">
              <img
                className="absolute bottom-0 right-0 group-hover:hidden"
                src={practiceStyle}
                alt=""
              />
              <img
                className="absolute bottom-0 right-0 group-hover:block"
                src={practiceStyleWhite}
                alt=""
              />
              <div className="flex-none md:w-[60px] md:h-[60px] w-11 h-11 rounded-full bg-red-100 flex justify-center items-center">
                <img className="md:w-11 md:h-11 w-7 h-7" src={hammer} alt="" />
              </div>
              <p className="text-xl font-semibold line-clamp-1">Law Criminal</p>
              <p className="text-base line-clamp-4">
                Law Criminal Expert defense protecting rights with integrity and
                precision.
              </p>

              <Link to={`/serviceDetails`}>
                <div className="h-10 w-10 rounded-full bg-amber-100 hover:bg-white flex justify-center items-center">
                  <MdOutlineArrowRightAlt className="text-[#B68C5A] text-2xl"></MdOutlineArrowRightAlt>
                </div>
              </Link>
            </div>
          </div>

          {/* 3 */}
          <div className="flex justify-center items-center border shadow-xl rounded-[10px] group  hover:bg-[#B68C5A] hover:text-white relative">
            <div className="max-w-[312px] min-h-[340px] flex flex-col justify-between items-center px-2 py-5 text-center">
              <img
                className="absolute bottom-0 right-0 group-hover:hidden"
                src={practiceStyle}
                alt=""
              />
              <img
                className="absolute bottom-0 right-0 group-hover:block"
                src={practiceStyleWhite}
                alt=""
              />
              <div className="flex-none md:w-[60px] md:h-[60px] w-11 h-11 rounded-full bg-red-100 flex justify-center items-center">
                <img className="md:w-11 md:h-11 w-7 h-7" src={house} alt="" />
              </div>
              <p className="text-xl font-semibold line-clamp-1">
                Law Real-Estate
              </p>
              <p className="text-base line-clamp-4">
                Real Estate Law Expert guidance ensuring secure transactions
                with integrity.
              </p>

              <Link to={`/serviceDetails`}>
                <div className="h-10 w-10 rounded-full bg-amber-100 hover:bg-white flex justify-center items-center">
                  <MdOutlineArrowRightAlt className="text-[#B68C5A] text-2xl"></MdOutlineArrowRightAlt>
                </div>
              </Link>
            </div>
          </div>

          {/* 4 */}
          <div className="flex justify-center items-center border shadow-xl rounded-[10px] group  hover:bg-[#B68C5A] hover:text-white relative">
            <div className="max-w-[312px] min-h-[340px] flex flex-col justify-between items-center px-2 py-5 text-center">
              <img
                className="absolute bottom-0 right-0 group-hover:hidden"
                src={practiceStyle}
                alt=""
              />
              <img
                className="absolute bottom-0 right-0 group-hover:block"
                src={practiceStyleWhite}
                alt=""
              />
              <div className="flex-none md:w-[60px] md:h-[60px] w-11 h-11 rounded-full bg-red-100 flex justify-center items-center">
                <img className="md:w-11 md:h-11 w-7 h-7" src={house} alt="" />
              </div>
              <p className="text-xl font-semibold line-clamp-1">
                Law Professional Advice
              </p>
              <p className="text-base line-clamp-4">
                Real Estate Law Expert guidance ensuring secure transactions
                with integrity.
              </p>

              <Link to={`/serviceDetails`}>
                <div className="h-10 w-10 rounded-full bg-amber-100 hover:bg-white flex justify-center items-center">
                  <MdOutlineArrowRightAlt className="text-[#B68C5A] text-2xl"></MdOutlineArrowRightAlt>
                </div>
              </Link>
            </div>
          </div>

          {/* 5 */}
          <div className="flex justify-center items-center border shadow-xl rounded-[10px] group  hover:bg-[#B68C5A] hover:text-white relative">
            <div className="max-w-[312px] min-h-[340px] flex flex-col justify-between items-center px-2 py-5 text-center">
              <img
                className="absolute bottom-0 right-0 group-hover:hidden"
                src={practiceStyle}
                alt=""
              />
              <img
                className="absolute bottom-0 right-0 group-hover:block"
                src={practiceStyleWhite}
                alt=""
              />

              <div className="flex-none md:w-[60px] md:h-[60px] w-11 h-11 rounded-full bg-red-100 flex justify-center items-center">
                <img
                  className="md:w-11 md:h-11 w-7 h-7"
                  src={practiceCivil}
                  alt=""
                />
              </div>
              <p className="text-xl font-semibold line-clamp-1">Civil Law</p>
              <p className="text-base line-clamp-4">
                Resolving disputes and protecting rights with expertise,
                integrity, and dedication.
              </p>

              <Link to={`/serviceDetails`}>
                <div className="h-10 w-10 rounded-full bg-amber-100 hover:bg-white flex justify-center items-center">
                  <MdOutlineArrowRightAlt className="text-[#B68C5A] text-2xl"></MdOutlineArrowRightAlt>
                </div>
              </Link>
            </div>
          </div>

          {/* 6 */}
          <div className="flex justify-center items-center border shadow-xl group rounded-[10px] hover:bg-[#B68C5A] hover:text-white relative">
            <div className="max-w-[312px] min-h-[340px] flex flex-col justify-between items-center px-2 py-5 text-center">
              <img
                className="absolute bottom-0 right-0 group-hover:hidden"
                src={practiceStyle}
                alt=""
              />
              <img
                className="absolute bottom-0 right-0 group-hover:block"
                src={practiceStyleWhite}
                alt=""
              />
              <div className="flex-none md:w-[60px] md:h-[60px] w-11 h-11 rounded-full bg-red-100 flex justify-center items-center">
                <img
                  className="md:w-11 md:h-11 w-7 h-7"
                  src={practiceEmployee}
                  alt=""
                />
              </div>
              <p className="text-xl font-semibold line-clamp-1">Employ Law</p>
              <p className="text-base line-clamp-4">
                Protecting workplace rights with expertise, integrity,
                dedication, and personalized legal solutions.
              </p>

              <Link to={`/serviceDetails`}>
                <div className="h-10 w-10 rounded-full bg-amber-100 hover:bg-white flex justify-center items-center">
                  <MdOutlineArrowRightAlt className="text-[#B68C5A] text-2xl"></MdOutlineArrowRightAlt>
                </div>
              </Link>
            </div>
          </div>

          {/* 7 */}
          <div className="flex justify-center items-center border shadow-xl group rounded-[10px] hover:bg-[#B68C5A] hover:text-white relative">
            <div className="max-w-[312px] min-h-[340px] flex flex-col justify-between items-center px-2 py-5 text-center">
              <img
                className="absolute bottom-0 right-0 group-hover:hidden"
                src={practiceStyle}
                alt=""
              />
              <img
                className="absolute bottom-0 right-0 group-hover:block"
                src={practiceStyleWhite}
                alt=""
              />
              <div className="flex-none md:w-[60px] md:h-[60px] w-11 h-11 rounded-full bg-red-100 flex justify-center items-center">
                <img
                  className="md:w-11 md:h-11 w-7 h-7"
                  src={practiceEducation}
                  alt=""
                />
              </div>
              <p className="text-xl font-semibold line-clamp-1">
                Education Law
              </p>
              <p className="text-base line-clamp-4">
                Advocating for students' rights with expertise, integrity, and
                personalized legal support.
              </p>

              <Link to={`/serviceDetails`}>
                <div className="h-10 w-10 rounded-full bg-amber-100 hover:bg-white flex justify-center items-center">
                  <MdOutlineArrowRightAlt className="text-[#B68C5A] text-2xl"></MdOutlineArrowRightAlt>
                </div>
              </Link>
            </div>
          </div>

          {/* 8 */}
          <div className="flex justify-center items-center border shadow-xl group rounded-[10px] hover:bg-[#B68C5A] hover:text-white relative">
            <div className="max-w-[312px] min-h-[340px] flex flex-col justify-between items-center px-2 py-5 text-center">
              <img
                className="absolute bottom-0 right-0 group-hover:hidden"
                src={practiceStyle}
                alt=""
              />
              <img
                className="absolute bottom-0 right-0 group-hover:block"
                src={practiceStyleWhite}
                alt=""
              />
              <div className="flex-none md:w-[60px] md:h-[60px] w-11 h-11 rounded-full bg-red-100 flex justify-center items-center">
                <img
                  className="md:w-11 md:h-11 w-7 h-7"
                  src={practiceCorporate}
                  alt=""
                />
              </div>
              <p className="text-xl font-semibold line-clamp-1">
                Corporate Security Law
              </p>
              <p className="text-base line-clamp-4">
                Safeguarding businesses with expert legal guidance, integrity,
                and proactive risk management.
              </p>

              <Link to={`/serviceDetails`}>
                <div className="h-10 w-10 rounded-full bg-amber-100 hover:bg-white flex justify-center items-center">
                  <MdOutlineArrowRightAlt className="text-[#B68C5A] text-2xl"></MdOutlineArrowRightAlt>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeService;
