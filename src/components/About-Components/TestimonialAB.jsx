import "../../../src/style/Style.css";
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import Test1 from "../../assets/Testi-1.png";
import Test2 from "../../assets/Testi-2.png";
import { FaStar } from "react-icons/fa";
import coma from "../../assets/coma.png";
import TLeft from "../../assets/testi-left.png";
import TRight from "../../assets/testi-right.png";

import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const TestimonialAB = () => {
  let sliderRef = useRef(null);

   return (
      <div className="bg-gradient-to-r from-[#0C0C15] to-[#3F4069] min-h-fit work-sans text-white relative">
        <div className="hidden 3xl:block absolute bottom-0">
          <img className="brightness-50" src={TLeft} alt="..." />
        </div>
        <div className="hidden 3xl:block absolute right-0">
          <img className="brightness-50" src={TRight} alt="..." />
        </div>
  
        <div className="max-w-[1320px] mx-auto w-full lg:py-[130px] md:py-[80px] py-[29px] xl:px-5 md:px-7 smaller:px-8 small:px-4 tiny:px-2">
          <div className="flex flex-col md:flex-row w-full lg:gap-12 md:gap-7 gap-5">
            {/* grid 1 */}
            <div className="w-full md:w-2/3  work-sans md:order-1 order-2">
              <Swiper
                onSwiper={(swiper) => (sliderRef.current = swiper)}
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
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                }}
                // modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide className="relative py-3 ">
                  <img
                    className="absolute top-[0.25rem] right-[2.25rem] z-50"
                    src={coma}
                    alt=""
                  />
  
                  <div
                    className="max-w-[424px] min-h-[319px] mx-auto bg-white flex flex-col text-black lg:space-y-6 space-y-2 rounded-[10px]"
                  >
                    <div>
                      <div className="flex gap-3 items-center py-6 px-5 ">
                        <img src={Test1} alt="" />
                        <div>
                          <p className="text-lg font-semibold whitespace-nowrap">
                            Jordan Air
                          </p>
                          <p className="text-base font-medium">Civil Law</p>
                        </div>
                      </div>
                      <hr />
                    </div>
  
                    <div className=" px-5 md:space-y-2 md:pb-3 ">
                      <p className="text-[#3A3D3F] text-ellipsis line-clamp-6">
                        I couldn’t have asked for better representation. The team
                        was professional, thorough, and dedicated to my case. They
                        ensured my rights were protected and achieved a favorable
                        outcome.
                      </p>
                      <div className="flex gap-1 md:mt-0 mt-2">
                        <FaStar className="text-yellow-400 text-xl" />
                        <FaStar className="text-yellow-400 text-xl" />
                        <FaStar className="text-yellow-400 text-xl" />
                        <FaStar className="text-yellow-400 text-xl" />
                        <FaStar className="text-gray-500 text-xl" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="relative py-3 ">
                  <img
                    className="absolute top-[0.25rem] right-[2.25rem] z-50"
                    src={coma}
                    alt=""
                  />
                  <div
                    className="md:max-w-[424px] min-h-[319px] bg-white  flex flex-col text-black lg:space-y-6
                  space-y-2 rounded-[10px] "
                  >
                    <div>
                      <div className="flex gap-3 items-center py-6 px-5 ">
                        <img src={Test2} alt="" />
                        <div>
                          <p className="text-lg font-semibold ">Justin Biber</p>
                          <p className="text-base font-medium whitespace-nowrap">
                            Real Estate Law
                          </p>
                        </div>
                      </div>
                      <hr />
                    </div>
  
                    <div className=" px-5 md:space-y-2 md:pb-3 ">
                      <p className="text-[#3A3D3F] overflow-hidden text-ellipsis line-clamp-6">
                        I couldn’t have asked for better representation. The team
                        was professional, thorough, and dedicated to my case. They
                        ensured my rights were protected and achieved a favorable
                        outcome.
                      </p>
                      <div className="flex gap-1 md:mt-0 mt-2">
                        <FaStar className="text-yellow-400 text-xl" />
                        <FaStar className="text-yellow-400 text-xl" />
                        <FaStar className="text-yellow-400 text-xl" />
                        <FaStar className="text-yellow-400 text-xl" />
                        <FaStar className="text-gray-500 text-xl" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="relative py-3 ">
                  <img
                    className="absolute top-[0.25rem] right-[2.25rem] z-50"
                    src={coma}
                    alt=""
                  />
                  <div
                    className="md:max-w-[424px] min-h-[319px] bg-white  flex flex-col text-black lg:space-y-6
                  space-y-2 rounded-[10px]  "
                  >
                    <div>
                      <div className="flex gap-3 items-center py-6 px-5 ">
                        <img src={Test1} alt="" />
                        <div>
                          <p className="text-lg font-semibold whitespace-nowrap">
                            Jordan Air
                          </p>
                          <p className="text-base font-medium">Civil Law</p>
                        </div>
                      </div>
                      <hr />
                    </div>
  
                    <div className=" px-5 md:space-y-2 md:pb-3 ">
                      <p className="text-[#3A3D3F] overflow-hidden text-ellipsis line-clamp-6">
                        I couldn’t have asked for better representation. The team
                        was professional, thorough, and dedicated to my case. They
                        ensured my rights were protected and achieved a favorable
                        outcome.
                      </p>
                      <div className="flex gap-1 md:mt-0 mt-2">
                        <FaStar className="text-yellow-400 text-xl" />
                        <FaStar className="text-yellow-400 text-xl" />
                        <FaStar className="text-yellow-400 text-xl" />
                        <FaStar className="text-yellow-400 text-xl" />
                        <FaStar className="text-gray-500 text-xl" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="relative py-3 ">
                  <img
                    className="absolute top-[0.25rem] right-[2.25rem] z-50"
                    src={coma}
                    alt=""
                  />
                  <div
                    className="md:max-w-[424px] min-h-[319px] bg-white  flex flex-col text-black lg:space-y-6
                  space-y-2 rounded-[10px] "
                  >
                    <div>
                      <div className="flex gap-3 items-center py-6 px-5 ">
                        <img src={Test1} alt="" />
                        <div>
                          <p className="text-lg font-semibold whitespace-nowrap">
                            Jordan Air
                          </p>
                          <p className="text-base font-medium">Civil Law</p>
                        </div>
                      </div>
                      <hr />
                    </div>
  
                    <div className=" px-5 md:space-y-2 md:pb-3 ">
                      <p className="text-[#3A3D3F] overflow-hidden text-ellipsis line-clamp-6">
                        I couldn’t have asked for better representation. The team
                        was professional, thorough, and dedicated to my case. They
                        ensured my rights were protected and achieved a favorable
                        outcome.
                      </p>
                      <div className="flex gap-1 md:mt-0 mt-2">
                        <FaStar className="text-yellow-400 text-xl" />
                        <FaStar className="text-yellow-400 text-xl" />
                        <FaStar className="text-yellow-400 text-xl" />
                        <FaStar className="text-yellow-400 text-xl" />
                        <FaStar className="text-gray-500 text-xl" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="relative py-3 ">
                  <img
                    className="absolute top-[0.25rem] right-[2.25rem] z-50"
                    src={coma}
                    alt=""
                  />
                  <div
                    className="md:max-w-[424px] min-h-[319px] bg-white  flex flex-col text-black lg:space-y-6
                  space-y-2 rounded-[10px] "
                  >
                    <div>
                      <div className="flex gap-3 items-center py-6 px-5 ">
                        <img src={Test1} alt="" />
                        <div>
                          <p className="text-lg font-semibold whitespace-nowrap">
                            Jordan Air
                          </p>
                          <p className="text-base font-medium">Civil Law</p>
                        </div>
                      </div>
                      <hr />
                    </div>
  
                    <div className=" px-5 md:space-y-2 md:pb-3 ">
                      <p className="text-[#3A3D3F] overflow-hidden text-ellipsis line-clamp-6">
                        I couldn’t have asked for better representation. The team
                        was professional, thorough, and dedicated to my case. They
                        ensured my rights were protected and achieved a favorable
                        outcome.
                      </p>
                      <div className="flex gap-1 md:mt-0 mt-2">
                        <FaStar className="text-yellow-400 text-xl" />
                        <FaStar className="text-yellow-400 text-xl" />
                        <FaStar className="text-yellow-400 text-xl" />
                        <FaStar className="text-yellow-400 text-xl" />
                        <FaStar className="text-gray-500 text-xl" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="relative py-3 ">
                  <img
                    className="absolute top-[0.25rem] right-[2.25rem] z-50"
                    src={coma}
                    alt=""
                  />
                  <div
                    className="md:max-w-[424px] min-h-[319px] bg-white  flex flex-col text-black lg:space-y-6
                  space-y-2 rounded-[10px] "
                  >
                    <div>
                      <div className="flex gap-3 items-center py-6 px-5 ">
                        <img src={Test1} alt="" />
                        <div>
                          <p className="text-lg font-semibold whitespace-nowrap">
                            Jordan Air
                          </p>
                          <p className="text-base font-medium">Civil Law</p>
                        </div>
                      </div>
                      <hr />
                    </div>
  
                    <div className=" px-5 md:space-y-2 md:pb-3 ">
                      <p className="text-[#3A3D3F] overflow-hidden text-ellipsis line-clamp-6">
                        I couldn’t have asked for better representation. The team
                        was professional, thorough, and dedicated to my case. They
                        ensured my rights were protected and achieved a favorable
                        outcome.
                      </p>
                      <div className="flex gap-1 md:mt-0 mt-2">
                        <FaStar className="text-yellow-400 text-xl" />
                        <FaStar className="text-yellow-400 text-xl" />
                        <FaStar className="text-yellow-400 text-xl" />
                        <FaStar className="text-yellow-400 text-xl" />
                        <FaStar className="text-gray-500 text-xl" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
  
              
              <div className="md:hidden block mt-[20px]">
                <div className="flex md:justify-start justify-center gap-4">
                  <div
                    onClick={() => sliderRef.current.slidePrev()}
                    className="w-[50px] h-[50px] rounded-full border bg-white hover:bg-[#B68C5A] flex justify-center items-center"
                  >
                    <MdChevronLeft className="hover:text-white text-black text-2xl " />
                  </div>
                  <div
                    onClick={() => sliderRef.current.slideNext()}
                    className="w-[50px] h-[50px] rounded-full border bg-white hover:bg-[#B68C5A] flex justify-center items-center"
                  >
                    <MdChevronRight className="hover:text-white text-black text-2xl " />
                  </div>
                </div>
              </div>
              
            </div>
           
  
            {/* grid 2 */}
            <div className="w-full md:w-1/3 flex justify-center flex-col lg:gap-[23px] md:gap-[26px] gap-[8px] md:text-start text-center md:order-2 order-1">
              <p className="text-[#D4AF37] font-medium md:text-xl text-lg">Testimonials</p>
  
              <h1 className="xl:text-5xl md:text-3xl text-2xl font-medium xl:leading-[57px] lg:leading-[40px] md:leading-7 eb-garamond">
                What Our Client Say
                <span className="text-[#D4AF37]"> About Us</span>
              </h1>
  
              <p className="text-white text-base font-normal ">
                Our clients' words reflect trust, expertise, and exceptional
                results.
              </p>
              <div className="hidden md:block">
                <div className="flex md:justify-start justify-center gap-4">
                  <div
                    onClick={() => sliderRef.current.slidePrev()}
                    className="w-[50px] h-[50px] rounded-full border bg-white hover:bg-[#B68C5A] flex justify-center items-center"
                  >
                    <MdChevronLeft className="hover:text-white text-black text-2xl " />
                  </div>
                  <div
                    onClick={() => sliderRef.current.slideNext()}
                    className="w-[50px] h-[50px] rounded-full border bg-white hover:bg-[#B68C5A] flex justify-center items-center"
                  >
                    <MdChevronRight className="hover:text-white text-black text-2xl " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TestimonialAB;
