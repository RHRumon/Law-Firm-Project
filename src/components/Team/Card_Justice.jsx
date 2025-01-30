import React from "react";
import { Link } from "react-router-dom";
import { RxBorderSolid } from "react-icons/rx";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Card_Justice = ({ cardJustice }) => {
  let { image, name, designation } = cardJustice;

  return (
    //     <div className="max-w-[424px] max-h-[528px] mx-auto bg-white flex flex-col items-center text-black gap-3 rounded-[10px] border  lg:pb-[30px] md:pb-[19px] pb-[17px]">
    //   <div className="">
    //     <img src={image} alt="" />
    //   </div>
    //   <div className="lg:px-6 px-3 lg:space-y-8 space-y-3 lg:text-start text-center flex flex-col lg:items-start items-center">
    //     <p className="font-medium lg:text-lg text-base text-[#242628] lg:leading-[30px] text-ellipsis line-clamp-2">
    //       {title}
    //     </p>
    //     <p className="h-[70px] lg:text-base text-sm text-[#3A3D3F] text-ellipsis line-clamp-3">
    //       {description}
    //     </p>

    //     <div>
    //       <Link to={`/caseDetails`}>
    //         <button className="hover:bg-[#C7A87D] lg:px-5 px-2 lg:py-3 py-2  rounded-lg font-medium whitespace-nowrap lg:w-[191px] lg:text-lg text-base flex items-center gap-1 text-[#242628] hover:text-white border">
    //           READ MORE <RxBorderSolid className="rotate-90" />{" "}
    //           <FaLongArrowAltRight />
    //         </button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
   <Link to={`/teamDetails`}>
    <div className="max-w-[312px] max-h-[452px] mx-auto flex flex-col items-center text-center text-black space-y-6 rounded-[10px] border-2 px-4 pt-4 pb-6 shadow-lg">
      <div className="flex justify-around items-center">
        <img className="rounded-[10px]" src={image} alt="" />
      </div>

      <div>
        <p className="text-lg font-semibold text-[#B68C5A]">{name}</p>
        <p className="text-base font-medium text-[#3A3D3F] whitespace-nowrap">{designation}</p>

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
    </div></Link>
  );
};

export default Card_Justice;
