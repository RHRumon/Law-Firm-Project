import "../../../src/style/Style.css";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Card_Service from "./Card_Service";

const PracticeService = () => {
  // let swiperRef = useRef(null);

  let [cards, setCards] = useState([]);


  useEffect(() => {
      fetch("cardService.json")
        .then((res) => res.json())
        .then((data) => {
          setCards(data);
        });
    }, []);

  console.log(cards);
  

  return (
    <div className="min-h-fit work-sans text-white relative">
      <div className="max-w-[1320px] mx-auto w-full md:pt-[109px] md:pb-[150px] pt-[29px] pb-[38px]  xl:px-5 md:px-7 smaller:px-8 small:px-4 tiny:px-2 text-black">
        <div className="lg:space-y-4 eb-garamond">
          <p className="text-xl font-medium text-[#D4AF37]">Service</p>

          <h1 className="header-1 mb-[10px]">
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

        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-14 work-sans">
            {
               cards.map((card, idx) => <Card_Service 
               key={idx}
               card={card}
               ></Card_Service>)
            }
        </div>
      </div>
    </div>
  );
};

export default PracticeService;
