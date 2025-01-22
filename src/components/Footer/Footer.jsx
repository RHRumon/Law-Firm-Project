import "../../../src/style/Style.css";
import footerLogo from "../../assets/logo.png";
import footerCircle from "../../assets/footer-circle.png";
import footerDesign1 from "../../assets/footer design-1.png";
import footerDesign2 from "../../assets/foote design-2.png";
import footerLine from "../../assets/footer-line.png";
import footerLine2 from "../../assets/footer-line-2.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { HiMiniChevronDown } from "react-icons/hi2";
import { HiMiniChevronUp } from "react-icons/hi2";

import { useState } from "react";

const Footer = () => {
  let [active, setActive] = useState(false);
  let [selectedLanguage, setSelectedLanguage] = useState("English");
  let languages = ["English", "French", "Spanish"];

  let handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setActive(false);
  };

  return (
    <div
      className="bg-gradient-to-r from-[#0C0C15] to-[#3F4069]
     relative"
    >
      <img
        className="absolute bottom-0 left-0 hidden 3xl:block "
        src={footerDesign1}
        alt=""
      />
      <img
        className="absolute bottom-0 right-0 hidden 3xl:block "
        src={footerDesign2}
        alt=""
      />
      <img
        className="absolute bottom-0 right-0 hidden 3xl:block "
        src={footerLine}
        alt=""
      />
      <img
        className="absolute bottom-0 right-0 hidden 3xl:block "
        src={footerLine2}
        alt=""
      />

      <div className="max-w-[1320px] mx-auto w-full py-[62px] text-white xl:px-5 md:px-7 smaller:px-8 small:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 work-sans lg:gap-[152px] gap-6 md:mb-[69px] mb-10">
          {/* 1st */}
          <div className="md:text-start text-center ">
            <img className="mx-auto md:mx-0" src={footerLogo} alt="" />
            <p className="mt-10 leading-7">
              Reach out for expert guidance and personalized solutions to meet
              your needs.
            </p>
            <div className="flex md:justify-start justify-center mt-6 gap-4 ">
              <a className="hover:text-[#B68C5A]" href="">
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a className="hover:text-[#B68C5A]" href="">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a className="hover:text-[#B68C5A]" href="">
                <FaYoutube className="h-6 w-6" />
              </a>
              <a className="hover:text-[#B68C5A]" href="">
                <AiFillInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          {/* 2nd */}
          <div className="flex flex-col md:text-start text-center">
            <h1 className="font-medium text-2xl mb-[10px] whitespace-nowrap">Quick Links</h1>
            <div className="md:mt-10 mt-5 flex flex-col leading-9 content-end">
              <a className="hover:text-[#B68C5A]" href="">
                Home
              </a>
              <a className="hover:text-[#B68C5A]" href="">
                About
              </a>
              <a className="hover:text-[#B68C5A]" href="">
                Service
              </a>
              <a className="hover:text-[#B68C5A]" href="">
                Case Study
              </a>
              <a className="hover:text-[#B68C5A]" href="">
                Contact Us
              </a>
            </div>
          </div>
          {/* 3rd */}
          <div className="flex flex-col md:text-start text-center">
            <h1 className="font-medium text-2xl mb-[10px]">Support</h1>
            <div className="md:mt-10 mt-5 flex flex-col leading-9 content-end">
              <a className="hover:text-[#B68C5A]" href="">
                FAQ’S
              </a>
              <a className="hover:text-[#B68C5A]" href="">
                Privacy Policy
              </a>
              <a className="hover:text-[#B68C5A]" href="">
                Terms & Condition
              </a>
            </div>
          </div>
          {/* 4rth */}
          <div className="md:text-start text-center">
            <h1 className="font-medium text-2xl">Address</h1>
            <p className="md:mt-[52px] mt-6 mb-6 leading-7">
              85 KDA Outer Bypass road, Shonadanga, Khulna
            </p>
            <p className="mb-[20px] brightness-50">Language</p>
            <div className="relative flex md:justify-start justify-center">
              {/* btn */}
              <button
                onClick={() => setActive((prev) => !prev)}
                className="px-2 lg:py-3 py-2 rounded-lg font-medium whitespace-nowrap w-[144px] lg:text-lg text-base flex items-center justify-center gap-1 text-black border bg-white"
              >
                <img src={footerCircle} alt="" />
                {selectedLanguage}
                {active ? (
                  <HiMiniChevronUp className="h-[1.75rem] w-[20px]"></HiMiniChevronUp>
                ) : (
                  <HiMiniChevronDown className="h-[1.75rem] w-[20px]" />
                )}
              </button>
              {/* dropdown */}

              {active && (
                <div className="absolute top-full bg-white text-black px-2 py-2 rounded-lg w-[144px] z-10">
                  {languages.map((language) => (
                    <div
                      onClick={() => handleLanguageSelect(language)}
                      className="py-1 px-2 cursor-pointer hover:bg-blue-100"
                    >
                      {language}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-5 md:justify-between">
          <p className="text-center md:text-left">
            2024 © All rights reserved by <br className="sm:hidden block" />
            LawStick
          </p>
          <p className="text-center md:text-left">
            Privacy Policy | Terms & Conditions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
