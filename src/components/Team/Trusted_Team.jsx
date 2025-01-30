import "../../../src/style/Style.css";
import company from "../../assets/Company logo.png";
import company1 from "../../assets/Company logo (1).png";
import company2 from "../../assets/Company logo (2).png";
import company3 from "../../assets/Company logo (3).png";
import company4 from "../../assets/Company logo (4).png";
import company5 from "../../assets/Company logo (5).png";

const Trusted_Team = () => {
    return (
          <div className="max-w-[1320px] mx-auto w-full xl:py-[75px] md:py-[62px] py-[29px] work-sans  eb-garamond">
              <div className="flex justify-center">
                <div className="md:w-[326px] w-[277px]">
                  <p className="font-semibold md:text-2xl text-[20px] text-[#242628] border-b-2 border-b-[#B68C5A] h-11">
                    Trusted by 100k+ Trusted Client
                  </p>
                </div>
              </div>
              <div className="mt-[50px] mb-14 px-2 xl:block hidden">
                <div className="flex justify-between ">
                  <img src={company} alt="" />
                  <img src={company1} alt="" />
                  <img src={company2} alt="" />
                  <img src={company3} alt="" />
                  <img src={company4} alt="" />
                  <img src={company5} alt="" />
                </div>
              </div>
              <div className="mt-[50px] mb-14 px-2 xl:hidden block">
                <div className="flex lg:gap-60 md:gap-24 sm:gap-7 smaller:gap-12 xs:gap-7 justify-center">
                  <img
                    className="lg:w-[135px] lg:h-[48px] sm:w-[111px] sm:h-[41px] w-[74px] h-[30px]"
                    src={company}
                    alt=""
                  />
                  <img
                    className="lg:w-[135px] lg:h-[48px] sm:w-[111px] sm:h-[41px] w-[74px] h-[30px]"
                    src={company1}
                    alt=""
                  />
                  <img
                    className="lg:w-[135px] lg:h-[48px] sm:w-[111px] sm:h-[41px] w-[74px] h-[30px]"
                    src={company2}
                    alt=""
                  />
                </div>
                <div className="flex lg:gap-60 md:gap-24 sm:gap-7 smaller:gap-12 xs:gap-7 justify-center mt-5">
                  <img
                    className="lg:w-[135px] lg:h-[48px] sm:w-[111px] sm:h-[41px] w-[74px] h-[30px]"
                    src={company3}
                    alt=""
                  />
                  <img
                    className="lg:w-[135px] lg:h-[48px] sm:w-[111px] sm:h-[41px] w-[74px] h-[30px]"
                    src={company4}
                    alt=""
                  />
                  <img
                    className="lg:w-[135px] lg:h-[48px] sm:w-[111px] sm:h-[41px] w-[74px] h-[30px]"
                    src={company5}
                    alt=""
                  />
                </div>
              </div>
            </div>
    );
};

export default Trusted_Team;