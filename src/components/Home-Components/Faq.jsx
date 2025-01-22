import "../../../src/style/Style.css";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { LuPlus } from "react-icons/lu";
import { useState } from "react";

const Faq = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [isOpen2, setIsOpen2] = useState(false);
  let [isOpen3, setIsOpen3] = useState(false);
  let [isOpen4, setIsOpen4] = useState(false);
  let [isOpen5, setIsOpen5] = useState(false);
  let [isOpen6, setIsOpen6] = useState(false);


  return (
    <div className="min-h-fit work-sans text-black ">
      <div className="max-w-[1320px] mx-auto w-full lg:py-[75px] md:py-[64px] py-[27px] xl:px-5 md:px-7 smaller:px-8 small:px-4">
        {/* 1st */}
        <div className="lg:space-y-4 eb-garamond text-center">
          <p className="text-xl font-medium text-[#D4AF37]">FAQ’S</p>
          <h1 className="lg:text-5xl md:text-3xl text-2xl font-medium leading-[62px]">
            Frequently Asked Questions
          </h1>
          <p className="text-base ">
            Find answers to common questions about our services and processes.
          </p>
        </div>
        {/* 2nd div */}
        <div className="md:mt-14 mt-7 text-white ">
  
          <div className="relative text-black">
              <div
                onClick={() => setIsOpen((prev) => !prev)}
                className={`md:px-7 px-3 md:py-5 py-[7px] flex gap-4 md:items-center items-start border rounded-lg text-lg font-medium  cursor-pointer ${
                  isOpen ? "rounded-b-none bg-[#B68C5A] text-white" : ""
                }`}
              >
                {!isOpen ? (
                  <LuPlus className="h-6 w-6" />
                ) : (
                  <TfiLayoutLineSolid className="h-6 w-6" />
                )}
                <p className="">What services does Lawstick provide?</p>
              </div>

              
              {isOpen && (
                <div className="absolute top-full left-0 w-full z-50 text-black border rounded-b-lg bg-white md:px-[57px] px-7 py-5 ">
                  <p className="text-[#3A3D3F]">
                    We offer expertise across a broad range of legal areas,
                    including civil law for disputes and rights protection,
                    criminal law for strong defense, real estate law for secure
                    transactions, and corporate law for business support. Our
                    dedicated team delivers tailored legal solutions with
                    integrity.
                  </p>
                </div>
              )}
            </div>

          <div className="text-black mt-4 flex flex-col gap-4 ">
            {/* 2 */}
            <div className="relative">
              <div
                onClick={() => setIsOpen2((prev) => !prev)}
                className={`md:px-7 px-3 md:py-5 py-[7px] flex gap-4 md:items-center items-start border  rounded-lg text-lg font-medium cursor-pointer ${
                  isOpen2 ? "rounded-b-none bg-[#B68C5A] text-white" : ""
                }`}
              >
                {!isOpen2 ? (
                  <LuPlus className="h-6 w-6" />
                ) : (
                  <TfiLayoutLineSolid className="h-6 w-6" />
                )}
                <p className="">What should I bring to my first meeting?</p>
              </div>

              {/* Dropdown Content (conditionally rendered) */}
              {isOpen2 && (
                <div className="absolute top-full left-0 w-full z-50 text-black border rounded-b-lg bg-white md:px-[57px] px-7 py-5 ">
                  <p className="text-[#3A3D3F]">
                    We offer expertise across a broad range of legal areas,
                    including civil law for disputes and rights protection,
                    criminal law for strong defense, real estate law for secure
                    transactions, and corporate law for business support. Our
                    dedicated team delivers tailored legal solutions with
                    integrity.
                  </p>
                </div>
              )}
            </div>

            {/* 3 */}
            <div className="relative">
              <div
                onClick={() => setIsOpen3((prev) => !prev)}
                className={`md:px-7 px-3 md:py-5 py-[7px] flex gap-4 md:items-center items-start border rounded-lg text-lg font-medium   cursor-pointer ${isOpen3 ? 'rounded-b-none bg-[#B68C5A] text-white' : ''}`}
              >
                {isOpen3 ? (
                  <TfiLayoutLineSolid className="h-6 w-6"></TfiLayoutLineSolid>
                ) : (
                  <LuPlus className="h-6 w-6" />
                )}
                <p className="">
                  How does Lawstick handle client confidentiality?
                </p>
              </div>

              {isOpen3 && (
                <div className="absolute top-full left-0 w-full z-50 text-black border rounded-b-lg bg-white md:px-[57px] px-7 py-5 ">
                  <p className="text-[#3A3D3F]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium dolor distinctio consectetur commodi adipisci
                    eligendi, ad quis fuga voluptate saepe ipsum ut veniam earum
                    et accusantium, eum cumque, nulla culpa!
                  </p>
                </div>
              )}
            </div>
            {/* 4 */}
            <div className="relative">
              <div
                onClick={() => setIsOpen4((prev) => !prev)}
                className={`md:px-7 px-3 md:py-5 py-[7px] flex gap-4 md:items-center items-start border rounded-lg text-lg font-medium   cursor-pointer ${isOpen4 ? 'rounded-b-none bg-[#B68C5A] text-white' : ''}`}
              >
                {isOpen4 ? (
                  <TfiLayoutLineSolid className="h-6 w-6"></TfiLayoutLineSolid>
                ) : (
                  <LuPlus className="h-6 w-6" />
                )}
                <p className="">
                How long does it take to resolve a case?
                </p>
              </div>

              {isOpen4 && (
                <div className="absolute top-full left-0 w-full z-50 text-black border rounded-b-lg bg-white md:px-[57px] px-7 py-5 ">
                  <p className="text-[#3A3D3F]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium dolor distinctio consectetur commodi adipisci
                    eligendi, ad quis fuga voluptate saepe ipsum ut veniam earum
                    et accusantium, eum cumque, nulla culpa!
                  </p>
                </div>
              )}
            </div>
            {/* 5 */}
            <div className="relative">
              <div
                onClick={() => setIsOpen5((prev) => !prev)}
                className={`md:px-7 px-3 md:py-5 py-[7px] flex gap-4 md:items-center items-start border rounded-lg text-lg font-medium   cursor-pointer ${isOpen5 ? 'rounded-b-none bg-[#B68C5A] text-white' : ''}`}
              >
                {isOpen5 ? (
                  <TfiLayoutLineSolid className="h-6 w-6"></TfiLayoutLineSolid>
                ) : (
                  <LuPlus className="h-6 w-6" />
                )}
                <p className="">
                What are your fees and payment terms?
                </p>
              </div>

              {isOpen5 && (
                <div className="absolute top-full left-0 w-full z-50 text-black border rounded-b-lg bg-white md:px-[57px] px-7 py-5 ">
                  <p className="text-[#3A3D3F]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium dolor distinctio consectetur commodi adipisci
                    eligendi, ad quis fuga voluptate saepe ipsum ut veniam earum
                    et accusantium, eum cumque, nulla culpa!
                  </p>
                </div>
              )}
            </div>
            {/* 6 */}
            <div className="relative">
              <div
                onClick={() => setIsOpen6((prev) => !prev)}
                className={`md:px-7 px-3 md:py-5 py-[7px] flex gap-4 md:items-center items-start border rounded-lg text-lg font-medium  cursor-pointer ${isOpen6 ? 'rounded-b-none bg-[#B68C5A] text-white' : ''}`}
              >
                {isOpen6 ? (
                  <TfiLayoutLineSolid className="h-6 w-6"></TfiLayoutLineSolid>
                ) : (
                  <LuPlus className="h-6 w-6" />
                )}
                <p className="">
                Do you handle cases outside your listed practice areas?
                </p>
              </div>

              {isOpen6 && (
                <div className="absolute top-full left-0 w-full z-50 text-black border rounded-b-lg bg-white md:px-[57px] px-7 py-5 ">
                  <p className="text-[#3A3D3F]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium dolor distinctio consectetur commodi adipisci
                    eligendi, ad quis fuga voluptate saepe ipsum ut veniam earum
                    et accusantium, eum cumque, nulla culpa!
                  </p>
                </div>
              )}
            </div>

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
