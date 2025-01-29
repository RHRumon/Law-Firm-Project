import "../../../src/style/Style.css";
import justice1 from "../../assets/justiceIMG-1.png";
import justice2 from "../../assets/justiceIMG-2.png";
import justice3 from "../../assets/justiceIMG-3.png";
import justice4 from "../../assets/justiceIMG-4.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const JusticeAB = () => {
  return (
        <div className=" min-h-fit work-sans text-black ">
    
          <div className="max-w-[1320px] mx-auto w-full xl:py-[150px] md:py-[62px] py-[29px] xl:px-5 md:px-7 smaller:px-8 small:px-4 tiny:px-2">
    
            <div className="lg:space-y-4 eb-garamond text-center">
              <p className="text-xl font-medium text-[#D4AF37]">Team</p>
              <h1 className="header-1 mb-[10px]">
                The Face Of Justice
              </h1>
              <p className="text-base lato leading-[25px] ">
                Meet our dedicated legal team, committed to providing expert advice
                and
                <span className="hidden md:inline">
                  <br />
                </span>
                achieving the best outcomes for our clients personalized expertise.
              </p>
            </div>
    
            <div className="xl:mt-[72px] lg:mt-14 mt-[2rem] work-sans">
              <Swiper
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
                <SwiperSlide>
                  <div className="max-w-[312px] max-h-[452px] mx-auto flex flex-col items-center text-center text-black space-y-6 rounded-[10px] border-2 px-4 pt-4 pb-6 shadow-lg">
                    <div className="flex justify-around items-center">
                      <img className="rounded-[10px]" src={justice1} alt="" />
                    </div>
    
                    <div>
                      <p className="text-lg font-semibold text-[#B68C5A]">
                        William Johnson
                      </p>
                      <p className="text-base font-medium text-[#3A3D3F]">
                        Senior Lawyer
                      </p>
    
                      <div className="flex justify-center gap-4 mt-6">
                        <div className="h-8 w-8 border border-[#1B3A57] rounded-full flex justify-center items-center hover:text-[#B68C5A] hover:border-[#B68C5A]">
                          <FaFacebookF />
                        </div>
                        <div className="h-8 w-8 border border-[#1B3A57] rounded-full flex justify-center items-center hover:text-[#B68C5A] hover:border-[#B68C5A]">
                          <FaTwitter />
                        </div>
                        <div className="h-8 w-8 border border-[#1B3A57] rounded-full flex justify-center items-center hover:text-[#B68C5A] hover:border-[#B68C5A]">
                          <FaInstagram />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="max-w-[312px] max-h-[452px] mx-auto flex flex-col items-center text-center text-black space-y-6 rounded-[10px] border-2 px-4 pt-4 pb-6 shadow-lg">
                    <div className="rounded-full bg-red-100 flex justify-around items-center  ">
                      <img className="rounded-[10px]" src={justice2} alt="" />
                    </div>
    
                    <div>
                      <p className="text-lg font-semibold text-[#B68C5A]">
                        Alina Gain
                      </p>
                      <p className="text-base font-medium text-[#3A3D3F]">
                        Senior Lawyer
                      </p>
    
                      <div className="flex justify-center gap-4 mt-6">
                        <div className="h-8 w-8 border border-[#1B3A57] rounded-full flex justify-center items-center hover:text-[#B68C5A] hover:border-[#B68C5A]">
                          <FaFacebookF />
                        </div>
                        <div className="h-8 w-8 border border-[#1B3A57] rounded-full flex justify-center items-center hover:text-[#B68C5A] hover:border-[#B68C5A]">
                          <FaTwitter />
                        </div>
                        <div className="h-8 w-8 border border-[#1B3A57] rounded-full flex justify-center items-center hover:text-[#B68C5A] hover:border-[#B68C5A]">
                          <FaInstagram />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="max-w-[312px] max-h-[452px] mx-auto flex flex-col items-center text-center text-black space-y-6 rounded-[10px] border-2 px-4 pt-4 pb-6 shadow-lg">
                    <div className="rounded-full bg-red-100 flex justify-around items-center  ">
                      <img className="rounded-[10px]" src={justice3} alt="" />
                    </div>
    
                    <div>
                      <p className="text-lg font-semibold text-[#B68C5A]">
                        William Johnson
                      </p>
                      <p className="text-base font-medium text-[#3A3D3F]">
                        Senior Lawyer
                      </p>
    
                      <div className="flex justify-center gap-4 mt-6">
                        <div className="h-8 w-8 border border-[#1B3A57] rounded-full flex justify-center items-center hover:text-[#B68C5A] hover:border-[#B68C5A]">
                          <FaFacebookF />
                        </div>
                        <div className="h-8 w-8 border border-[#1B3A57] rounded-full flex justify-center items-center hover:text-[#B68C5A] hover:border-[#B68C5A]">
                          <FaTwitter />
                        </div>
                        <div className="h-8 w-8 border border-[#1B3A57] rounded-full flex justify-center items-center hover:text-[#B68C5A] hover:border-[#B68C5A]">
                          <FaInstagram />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="max-w-[312px] max-h-[452px] mx-auto flex flex-col items-center text-center text-black space-y-6 rounded-[10px] border-2 px-4 pt-4 pb-6 shadow-lg">
                    <div className="rounded-full bg-red-100 flex justify-around items-center  ">
                      <img className="rounded-[10px]" src={justice4} alt="" />
                    </div>
    
                    <div>
                      <p className="text-lg font-semibold text-[#B68C5A]">
                        Alex Gain
                      </p>
                      <p className="text-base font-medium text-[#3A3D3F]">
                        Senior Lawyer
                      </p>
    
                      <div className="flex justify-center gap-4 mt-6">
                        <div className="h-8 w-8 border border-[#1B3A57] rounded-full flex justify-center items-center hover:text-[#B68C5A] hover:border-[#B68C5A]">
                          <FaFacebookF />
                        </div>
                        <div className="h-8 w-8 border border-[#1B3A57] rounded-full flex justify-center items-center hover:text-[#B68C5A] hover:border-[#B68C5A]">
                          <FaTwitter />
                        </div>
                        <div className="h-8 w-8 border border-[#1B3A57] rounded-full flex justify-center items-center hover:text-[#B68C5A] hover:border-[#B68C5A]">
                          <FaInstagram />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="max-w-[312px] max-h-[452px] mx-auto flex flex-col items-center text-center text-black space-y-6 rounded-[10px] border-2 px-4 pt-4 pb-6 shadow-lg">
                    <div className="rounded-full bg-red-100 flex justify-around items-center  ">
                      <img className="rounded-[10px]" src={justice1} alt="" />
                    </div>
    
                    <div>
                      <p className="text-lg font-semibold text-[#B68C5A]">
                        William Johnson
                      </p>
                      <p className="text-base font-medium text-[#3A3D3F]">
                        Senior Lawyer
                      </p>
    
                      <div className="flex justify-center gap-4 mt-6">
                        <div className="h-8 w-8 border border-[#1B3A57] rounded-full flex justify-center items-center hover:text-[#B68C5A] hover:border-[#B68C5A]">
                          <FaFacebookF />
                        </div>
                        <div className="h-8 w-8 border border-[#1B3A57] rounded-full flex justify-center items-center hover:text-[#B68C5A] hover:border-[#B68C5A]">
                          <FaTwitter />
                        </div>
                        <div className="h-8 w-8 border border-[#1B3A57] rounded-full flex justify-center items-center hover:text-[#B68C5A] hover:border-[#B68C5A]">
                          <FaInstagram />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="max-w-[312px] max-h-[452px] mx-auto flex flex-col items-center text-center text-black space-y-6 rounded-[10px] border-2 px-4 pt-4 pb-6 shadow-lg">
                    <div className="rounded-full bg-red-100 flex justify-around items-center ">
                      <img className="rounded-[10px]" src={justice2} alt="" />
                    </div>
    
                    <div>
                      <p className="text-lg font-semibold text-[#B68C5A]">
                        William Johnson
                      </p>
                      <p className="text-base font-medium text-[#3A3D3F]">
                        Senior Lawyer
                      </p>
    
                      <div className="flex justify-center gap-4 mt-6">
                        <div className="h-8 w-8 border border-[#1B3A57] rounded-full flex justify-center items-center hover:text-[#B68C5A] hover:border-[#B68C5A]">
                          <FaFacebookF />
                        </div>
                        <div className="h-8 w-8 border border-[#1B3A57] rounded-full flex justify-center items-center hover:text-[#B68C5A] hover:border-[#B68C5A]">
                          <FaTwitter />
                        </div>
                        <div className="h-8 w-8 border border-[#1B3A57] rounded-full flex justify-center items-center hover:text-[#B68C5A] hover:border-[#B68C5A]">
                          <FaInstagram />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="max-w-[312px] max-h-[452px] mx-auto flex flex-col items-center text-center text-black space-y-6 rounded-[10px] border-2 px-4 pt-4 pb-6 shadow-lg">
                    <div className="rounded-full bg-red-100 flex justify-around items-center  ">
                      <img className="rounded-[10px]" src={justice3} alt="" />
                    </div>
    
                    <div>
                      <p className="text-lg font-semibold text-[#B68C5A]">
                        William Johnson
                      </p>
                      <p className="text-base font-medium text-[#3A3D3F]">
                        Senior Lawyer
                      </p>
    
                      <div className="flex justify-center gap-4 mt-6">
                        <div className="h-8 w-8 border border-[#1B3A57] rounded-full flex justify-center items-center hover:text-[#B68C5A] hover:border-[#B68C5A]">
                          <FaFacebookF />
                        </div>
                        <div className="h-8 w-8 border border-[#1B3A57] rounded-full flex justify-center items-center hover:text-[#B68C5A] hover:border-[#B68C5A]">
                          <FaTwitter />
                        </div>
                        <div className="h-8 w-8 border border-[#1B3A57] rounded-full flex justify-center items-center hover:text-[#B68C5A] hover:border-[#B68C5A]">
                          <FaInstagram />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="max-w-[312px] max-h-[452px] mx-auto flex flex-col items-center text-center text-black space-y-6 rounded-[10px] border-2 px-4 pt-4 pb-6 shadow-lg">
                    <div className="rounded-full bg-red-100 flex justify-around items-center  ">
                      <img className="rounded-[10px]" src={justice4} alt="" />
                    </div>
    
                    <div>
                      <p className="text-lg font-semibold text-[#B68C5A]">
                        William Johnson
                      </p>
                      <p className="text-base font-medium text-[#3A3D3F]">
                        Senior Lawyer
                      </p>
    
                      <div className="flex justify-center gap-4 mt-6">
                        <div className="h-8 w-8 border border-[#1B3A57] rounded-full flex justify-center items-center hover:text-[#B68C5A] hover:border-[#B68C5A]">
                          <FaFacebookF />
                        </div>
                        <div className="h-8 w-8 border border-[#1B3A57] rounded-full flex justify-center items-center hover:text-[#B68C5A] hover:border-[#B68C5A]">
                          <FaTwitter />
                        </div>
                        <div className="h-8 w-8 border border-[#1B3A57] rounded-full flex justify-center items-center hover:text-[#B68C5A] hover:border-[#B68C5A]">
                          <FaInstagram />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      );
};

export default JusticeAB;
