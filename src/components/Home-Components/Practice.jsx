import "../../../src/style/Style.css";
import hammer from "../../assets/hammer.png";
import daripalla from "../../assets/daripalla.png";
import house from "../../assets/house.png";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import practiceDesign from "../../assets/practiceDesign.png";
import practiceStyle from "../../assets/practice-design.png";
import practiceStyleWhite from "../../assets/practiceStyleWhite.png";

import practiceRound from "../../assets/practice-round-design.png";
import practiceCivil from "../../assets/Practicecivil.png";
import practiceEmployee from "../../assets/Practiceemployee.png";
import practiceEducation from "../../assets/Practiceeducation.png";
import practiceCorporate from "../../assets/Practicecorporate.png";
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Practice = () => {
  let swiperRef = useRef(null);

  return (
    <div className="bg-gradient-to-r from-[#0C0C15] to-[#3F4069] min-h-fit work-sans text-white relative">
      <div className="hidden 3xl:block absolute top-0">
        <img className="brightness-50" src={practiceDesign} alt="..." />
      </div>
      <div className="hidden 3xl:block absolute bottom-0">
        <img className="" src={practiceRound} alt="..." />
      </div>

      <div className="max-w-[1320px] mx-auto w-full md:py-[62px] pt-[29px] pb-[38px] lg:px-5 xl:px-5 md:px-7 smaller:px-8 small:px-4">
        {/* text */}
        <div className="small:px-0 tiny:px-3 eb-garamond">
          <div className="sm:text-start text-center">
            <p className="text-xl font-medium text-[#D4AF37]">Service</p>

            <h1 className="lg:text-5xl md:text-3xl text-[25px] font-medium lg:leading-[62px] md:leading-[10px] md:my-6">
              Our Practice Area
            </h1>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-base sm:text-start text-center work-sans">
              Our legal services protect your rights and deliver results with 
              <br className=""/>
               personalized expertise.
            </p>
            {/* slider navigation buttons */}
            <div className="hidden md:block">
              <div className="flex items-center gap-5">
                <div
                  onClick={() => swiperRef.current.slidePrev()}
                  className="w-[50px] h-[50px] rounded-full border hover:bg-[#B68C5A] flex justify-center items-center"
                >
                  <MdChevronLeft className="text-white text-2xl " />
                </div>
                <div
                  onClick={() => swiperRef.current.slideNext()}
                  className="w-[50px] h-[50px] rounded-full border hover:bg-[#B68C5A] flex justify-center items-center"
                >
                  <MdChevronRight className="text-white text-2xl " />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:mt-14 mt-[27px] work-sans ">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={4}
            spaceBetween={24}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            // modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="relative">
              <div className="min-h-[340px] max-w-[312px] mx-auto bg-white group hover:bg-[#B68C5A] text-black flex flex-col justify-between items-center px-4 py-4 text-center rounded-[10px] hover:text-white relative">
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
                    src={daripalla}
                    alt=""
                  />
                </div>
                <p className="text-xl font-semibold">Law Family</p>
                <p className="text-base line-clamp-4">
                  Law Family Dedicated attorneys offering expert legal counsel
                  with care, integrity and support.
                </p>

                <div className="h-10 w-10 rounded-full bg-amber-100 hover:bg-white  flex justify-center items-center">
                  <MdOutlineArrowRightAlt className="text-[#B68C5A] text-2xl"></MdOutlineArrowRightAlt>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <div className="min-h-[340px]  bg-white group hover:bg-[#B68C5A] text-black flex flex-col justify-between items-center px-4 py-4 text-center  rounded-[10px] hover:text-white relative">
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
                    src={hammer}
                    alt=""
                  />
                </div>
                <p className="text-xl font-semibold">Law Criminal</p>
                <p className="text-base">
                  Law Criminal Expert defense protecting rights with integrity
                  and precision.
                </p>

                <div className="h-10 w-10 rounded-full bg-amber-100 hover:bg-white  flex justify-center items-center">
                  <MdOutlineArrowRightAlt className="text-[#B68C5A] text-2xl"></MdOutlineArrowRightAlt>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <div className="min-h-[340px] bg-white group hover:bg-[#B68C5A] text-black flex flex-col justify-between items-center px-4 py-4 text-center  rounded-[10px] hover:text-white relative">
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
                <p className="text-xl font-semibold">Law Real-Estate</p>
                <p className="text-base ">
                  Real Estate Law Expert guidance ensuring secure transactions
                  with integrity.
                </p>

                <div className="h-10 w-10 rounded-full bg-amber-100 hover:bg-white  flex justify-center items-center">
                  <MdOutlineArrowRightAlt className="text-[#B68C5A] text-2xl"></MdOutlineArrowRightAlt>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <div className="min-h-[340px] bg-white group hover:bg-[#B68C5A] text-black flex flex-col justify-between items-center px-4 py-4 text-center  rounded-[10px] hover:text-white relative">
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
                <p className="text-base">
                  Real Estate Law Expert guidance ensuring secure transactions
                  with integrity.
                </p>

                <div className="h-10 w-10 rounded-full bg-amber-100 hover:bg-white  flex justify-center items-center">
                  <MdOutlineArrowRightAlt className="text-[#B68C5A] text-2xl"></MdOutlineArrowRightAlt>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <div className="min-h-[340px] bg-white group hover:bg-[#B68C5A] text-black flex flex-col justify-between items-center px-4 py-4 text-center  rounded-[10px] hover:text-white relative">
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
                <p className="text-xl font-semibold">Civil Law</p>
                <p className="text-base ">
                  Resolving disputes and protecting rights with expertise,
                  integrity, and dedication.
                </p>

                <div className="h-10 w-10 rounded-full bg-amber-100 hover:bg-white  flex justify-center items-center">
                  <MdOutlineArrowRightAlt className="text-[#B68C5A] text-2xl"></MdOutlineArrowRightAlt>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <div className="min-h-[340px] bg-white group hover:bg-[#B68C5A] text-black flex flex-col justify-between items-center px-4 py-4 text-center  rounded-[10px] hover:text-white relative">
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
                <p className="text-xl font-semibold">Employee Law</p>
                <p className="text-base line-clamp-4">
                  Protecting workplace rights with expertise, integrity,
                  dedication, and personalized legal solutions.
                </p>

                <div className="h-10 w-10 rounded-full bg-amber-100 hover:bg-white  flex justify-center items-center">
                  <MdOutlineArrowRightAlt className="text-[#B68C5A] text-2xl"></MdOutlineArrowRightAlt>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <div className="min-h-[340px] bg-white group hover:bg-[#B68C5A] text-black flex flex-col justify-between items-center px-4 py-4 text-center  rounded-[10px] hover:text-white relative">
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
                <p className="text-xl font-semibold">Education Law</p>
                <p className="text-base line-clamp-4">
                  Advocating for students' rights with expertise, integrity, and
                  personalized legal support.
                </p>

                <div className="h-10 w-10 rounded-full bg-amber-100 hover:bg-white  flex justify-center items-center">
                  <MdOutlineArrowRightAlt className="text-[#B68C5A] text-2xl"></MdOutlineArrowRightAlt>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <div className="min-h-[340px] bg-white group hover:bg-[#B68C5A] text-black flex flex-col justify-between items-center px-4 py-4 text-center  rounded-[10px] hover:text-white relative">
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

                <div className="h-10 w-10 rounded-full bg-amber-100 hover:bg-white  flex justify-center items-center">
                  <MdOutlineArrowRightAlt className="text-[#B68C5A] text-2xl"></MdOutlineArrowRightAlt>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="md:hidden block mt-6">
          <div className="flex justify-center items-center gap-5">
            <div
              onClick={() => swiperRef.current.slidePrev()}
              className="w-[50px] h-[50px] rounded-full border bg-white hover:bg-[#B68C5A] flex justify-center items-center"
            >
              <MdChevronLeft className="hover:text-white text-black text-2xl " />
            </div>
            <div
              onClick={() => swiperRef.current.slideNext()}
              className="w-[50px] h-[50px] rounded-full border bg-white hover:bg-[#B68C5A] flex justify-center items-center"
            >
              <MdChevronRight className="hover:text-white text-black text-2xl " />
            </div>
          </div>
        </div>
        <div className="flex md:justify-end justify-center md:mt-[50px] mt-[38px]">
          <button className="bg-[#C7A87D] lg:px-7 px-3 lg:py-3 py-2 rounded-lg font-medium whitespace-nowrap lg:w-[191px] lg:text-lg text-base flex items-center gap-1 text-white">
            See all Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default Practice;
