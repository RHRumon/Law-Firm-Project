import "../../../src/style/Style.css";

import news1 from "../../assets/news-1.png";
import news2 from "../../assets/news-2.png";
import news3 from "../../assets/news-3.png";

import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";

const NewsBlog = () => {

  let sliderRef = useRef(null);

  return (
    <div className=" min-h-fit work-sans text-black">
      <div className="max-w-[1320px] mx-auto w-full lg:py-[62px] md:py-[57px] py-[27px] xl:px-5 md:px-7 smaller:px-8 small:px-4 tiny:px-2">
        <div className="lg:space-y-4 eb-garamond sm:text-start text-center">
          <p className="md:text-xl text-[19px] font-medium text-[#D4AF37]">News & Blog</p>
          <h1 className="lg:text-5xl md:text-3xl text-2xl font-medium md:leading-[62px] leading-[43px]">
            Our Latest Blog & News
          </h1>
          <p className="text-base ">
            Stay informed with our latest blogs and news, featuring expert
            insights,
            <br className="hidden md:inline" />
            updates, and valuable legal advice
          </p>
        </div>

        <div className="mt-14 work-sans">
          <Swiper
          onSwiper={(swiper) => sliderRef.current = swiper}
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
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            // modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="max-w-[424px] max-h-[426px] mx-auto bg-white flex flex-col items-center text-black gap-3 rounded-[10px] border  lg:pb-0 pb-3 relative">
                <div className="absolute top-[32px] left-[32px] bg-gray-300 rounded-[10px] h-[37px] w-[135px] flex justify-center items-center">
                  <p className="text-base font-medium">Weapon Crime</p>
                </div>
                {/* div 1 */}
                <div className="">
                  <img src={news1} alt="" />
                </div>
                {/* div 2 */}
                <div className="lg:px-6 px-3 lg:space-y-5 space-y-2 lg:text-start text-center flex flex-col ">
                  <p className="font-medium lg:text-lg text-base text-[#B68C5A]  ">
                    Expert Defense for Weapon Crime Charges
                  </p>
                  <p className="font-medium text-base text-[#3A3D3F]">
                    Update May 03 2023
                  </p>
                  <div className="flex justify-between items-center">
                    <p>
                      By{" "}
                      <span className="text-[#B68C5A] underline">
                         Nicholas Jon
                      </span>
                    </p>
                    <div className="flex gap-1 items-center text-[#B68C5A]">
                      <p className="font-medium lg:text-xl text-base">
                        Read More
                      </p>
                      <MdOutlineKeyboardDoubleArrowRight className="h-8 w-6 " />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-[424px] max-h-[426px] bg-white flex flex-col items-center text-black gap-3 rounded-[10px] border  lg:pb-0 pb-3 relative">
                <div className="absolute top-[32px] left-[32px] bg-gray-300 rounded-[10px] h-[37px] w-[135px] flex justify-center items-center">
                  <p className="text-base font-medium">Real Estate</p>
                </div>
                {/* div 1 */}
                <div className="">
                  <img src={news2} alt="" />
                </div>
                {/* div 2 */}
                <div className="lg:px-6 px-3 lg:space-y-5 space-y-2 lg:text-start text-center flex flex-col ">
                  <p className="font-medium lg:text-lg text-base text-[#B68C5A]  ">
                    Expert Defense for Weapon Crime Charges
                  </p>
                  <p className="font-medium text-base text-[#3A3D3F]">
                    Update May 03 2023
                  </p>
                  <div className="flex justify-between items-center">
                    <p>
                      By{" "}
                      <span className="text-[#B68C5A] underline">
                        Nicholas Jon
                      </span>
                    </p>
                    <div className="flex gap-1 items-center text-[#B68C5A]">
                      <p className="font-medium lg:text-xl md:text-lg text-base">
                        Read More
                      </p>
                      <MdOutlineKeyboardDoubleArrowRight className="h-8 w-6 " />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-[424px] max-h-[426px] bg-white flex flex-col items-center text-black gap-3 rounded-[10px] border  lg:pb-0 pb-3 relative">
                <div className="absolute top-[32px] left-[32px] bg-gray-300 rounded-[10px] h-[37px] w-[135px] flex justify-center items-center">
                  <p className="text-base font-medium">Civil Crime</p>
                </div>
                {/* div 1 */}
                <div className="">
                  <img src={news3} alt="" />
                </div>
                {/* div 2 */}
                <div className="lg:px-6 px-3 lg:space-y-5 space-y-2 lg:text-start text-center flex flex-col ">
                  <p className="font-medium lg:text-lg text-base text-[#B68C5A]  ">
                    Expert Defense for Weapon Crime Charges
                  </p>
                  <p className="font-medium text-base text-[#3A3D3F]">
                    Update May 03 2023
                  </p>
                  <div className="flex justify-between items-center">
                    <p>
                      By{" "}
                      <span className="text-[#B68C5A] underline">
                        Nicholas Jon
                      </span>
                    </p>
                    <div className="flex gap-1 items-center text-[#B68C5A]">
                      <p className="font-medium lg:text-xl md:text-lg text-base">
                        Read More
                      </p>
                      <MdOutlineKeyboardDoubleArrowRight className="h-8 w-6 " />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-[424px] max-h-[426px] bg-white flex flex-col items-center text-black gap-3 rounded-[10px] border  lg:pb-0 pb-3 relative">
                <div className="absolute top-[32px] left-[32px] bg-gray-300 rounded-[10px] h-[37px] w-[135px] flex justify-center items-center">
                  <p className="text-base font-medium">Weapon Crime</p>
                </div>
                {/* div 1 */}
                <div className="">
                  <img src={news1} alt="" />
                </div>
                {/* div 2 */}
                <div className="lg:px-6 px-3 lg:space-y-5 space-y-2 lg:text-start text-center flex flex-col ">
                  <p className="font-medium lg:text-lg text-base text-[#B68C5A]  ">
                    Expert Defense for Weapon Crime Charges
                  </p>
                  <p className="font-medium text-base text-[#3A3D3F]">
                    Update May 03 2023
                  </p>
                  <div className="flex justify-between items-center">
                    <p>
                      By{" "}
                      <span className="text-[#B68C5A] underline">
                        Nicholas Jon
                      </span>
                    </p>
                    <div className="flex gap-1 items-center text-[#B68C5A]">
                      <p className="font-medium lg:text-xl md:text-lg text-base">
                        Read More
                      </p>
                      <MdOutlineKeyboardDoubleArrowRight className="h-8 w-6 " />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-[424px] max-h-[426px] bg-white flex flex-col items-center text-black gap-3 rounded-[10px] border  lg:pb-0 pb-3 relative">
                <div className="absolute top-[32px] left-[32px] bg-gray-300 rounded-[10px] h-[37px] w-[135px] flex justify-center items-center">
                  <p className="text-base font-medium">Real Estate</p>
                </div>
                {/* div 1 */}
                <div className="">
                  <img src={news2} alt="" />
                </div>
                {/* div 2 */}
                <div className="lg:px-6 px-3 lg:space-y-5 space-y-2 lg:text-start text-center flex flex-col ">
                  <p className="font-medium lg:text-lg text-base text-[#B68C5A]  ">
                    Expert Defense for Weapon Crime Charges
                  </p>
                  <p className="font-medium text-base text-[#3A3D3F]">
                    Update May 03 2023
                  </p>
                  <div className="flex justify-between items-center">
                    <p>
                      By{" "}
                      <span className="text-[#B68C5A] underline">
                        Nicholas Jon
                      </span>
                    </p>
                    <div className="flex gap-1 items-center text-[#B68C5A]">
                      <p className="font-medium lg:text-xl md:text-lg text-base">
                        Read More
                      </p>
                      <MdOutlineKeyboardDoubleArrowRight className="h-8 w-6 " />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-[424px] max-h-[426px] bg-white flex flex-col items-center text-black gap-3 rounded-[10px] border  lg:pb-0 pb-3 relative">
                <div className="absolute top-[32px] left-[32px] bg-gray-300 rounded-[10px] h-[37px] w-[135px] flex justify-center items-center">
                  <p className="text-base font-medium">Civil Crime</p>
                </div>
                {/* div 1 */}
                <div className="">
                  <img src={news3} alt="" />
                </div>
                {/* div 2 */}
                <div className="lg:px-6 px-3 lg:space-y-5 space-y-2 lg:text-start text-center flex flex-col ">
                  <p className="font-medium lg:text-lg text-base text-[#B68C5A]  ">
                    Expert Defense for Weapon Crime Charges
                  </p>
                  <p className="font-medium text-base text-[#3A3D3F]">
                    Update May 03 2023
                  </p>
                  <div className="flex justify-between items-center">
                    <p>
                      By{" "}
                      <span className="text-[#B68C5A] underline">
                        Nicholas Jon
                      </span>
                    </p>
                    <div className="flex gap-1 items-center text-[#B68C5A]">
                      <p className="font-medium lg:text-xl md:text-lg text-base">
                        Read More
                      </p>
                      <MdOutlineKeyboardDoubleArrowRight className="h-8 w-6 " />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex justify-center text-center mt-[50px]">
          <div className="flex gap-4">
            <div onClick={() => sliderRef.current.slidePrev()} className="w-[50px] h-[50px] rounded-full border bg-white hover:bg-[#B68C5A] flex justify-center items-center">
              <MdChevronLeft className="hover:text-white text-black text-2xl " />
            </div>
            <div onClick={() => sliderRef.current.slideNext()} className="w-[50px] h-[50px] rounded-full border bg-white hover:bg-[#B68C5A] flex justify-center items-center">
              <MdChevronRight className="hover:text-white text-black text-2xl " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBlog;
