import "../../../src/style/Style.css";
import React, { useEffect, useState } from "react";
// import Card from "./Card";
import { FaArrowRightLong } from "react-icons/fa6";
import Card_Justice from "./Card_Justice";

const Justice_Team = () => {


    const [cards, setCards] = useState([]);
      const [currentPage, setCurrentPage] = useState(1);
      const cardsPerPage = 8;
    
      useEffect(() => {
        fetch("Data_Team.json")
          .then((res) => res.json())
          .then((data) => {
            setCards(data);
          });
      }, []);

    //   console.log("hahaha", cards);
      
    
      // Calculate the range of cards to display for the current page
      const indexOfLastCard = currentPage * cardsPerPage; // 1 * 6 = 6
      const indexOfFirstCard = indexOfLastCard - cardsPerPage; // 6 - 6 = 0
      const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
    
      // Calculate total number of pages
      const totalPages = Math.ceil(cards.length / cardsPerPage);
    
      // Handler to change page
      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };


    return (
        <div className="min-h-fit work-sans text-black">
        <div className="max-w-[1320px] mx-auto w-full xl:pt-[100px] xl:pb-[75px] md:py-16 py-[29px] xl:px-5 md:px-7 smaller:px-8 small:px-4">
          <div className=" eb-garamond text-center sm:text-start">
            <h1 className="header-1 mb-[10px]">The Face Of Justice</h1>
            <p className="text-base">
              {/* Learn how we achieve results through expertise, dedication, and
              tailored
              <br className="hidden md:inline" />
              solutions to meet client goals. */}
              Meet our dedicated legal team, committed to providing expert advice and <br />
              achieving the best outcomes for our clients
            </p>
          </div>
  
          <div className="lg:mt-[40px] mt-[28px] work-sans">
            {/* Cards */}
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
              {currentCards.map((cardJustice, idx) => (
                <Card_Justice key={idx} cardJustice={cardJustice}></Card_Justice>
              ))}
            </div>
  
            {/* Pagination */}
            <div className="flex justify-center mt-[50px] space-x-2 items-center gap-2">
              {Array.from({ length: totalPages }, (_, idx) => (
                <button
                  key={idx + 1}
                  onClick={() => handlePageChange(idx + 1)}
                  className={`px-4 py-2 rounded-full font-semibold text-lg h-10 w-10 ${
                    currentPage === idx + 1
                      ? "bg-[#C7A87D] text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
  
              <FaArrowRightLong className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Justice_Team;