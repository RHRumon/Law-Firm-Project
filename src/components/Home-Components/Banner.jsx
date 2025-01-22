import "../../style/Style.css";
import ban_Image from "../../assets/ban-image.png";
import new_ban_bg from "../../assets/banner-bg-image.png";
import banner_bg_line from "../../assets/banner-bg-line.png";
import res_BG_Img from "../../assets/About-bg-image.png";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#0C0C15] to-[#3F4069] min-h-fit work-sans text-white pt-[89px]">

      <div className="relative">

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat xl:hidden brightness-50"
          style={{ backgroundImage: `url(${res_BG_Img})` }}
        ></div>

        <div className="max-w-[1320px] mx-auto w-full xl:px-5 md:px-7 smaller:px-8 small:px-4 relative">

          <div className="grid grid-cols-1 xl:grid-cols-2 xl:px-0 big-mid:px-[20px] px-3 gap-3 xl:py-0">
            {/* Text grid */}
            <div className="flex flex-col justify-center text-center xl:text-start w-full md:py-16 py-10 ">
              <p className="md:text-lg sm:text-base text-[13px] font-medium md:mb-[13px]">
                Dependable Legal Support with Unwavering Dedication
              </p>
              <h1 className="xl:text-[64px] lg:text-[54px] md:text-5xl text-[28px] font-normal eb-garamond xl:leading-[76px] lg:leading-[60px] md:leading-[50px] leading-9 md:py-0 py-2">
                Committed to Excellence,
                <br />
                Dedicated to
                <span className="text-[#D4AF37]">Your Justice</span>
              </h1>
              <p className="text-base font-normal md:mt-[13px]">
                We deliver tailored legal solutions with precision and
                expertise, prioritizing your case to achieve <br className="xl:hidden block"/> the best outcomes. 
                With years of experience, we ensure your case receives the
                attention it deserves.
              </p>
              <div className=" lg:mt-10 md:mt-5 mt-3">
                <button className="bg-[#C7A87D] md:px-5 px-2 md:py-3 py-2 text-white rounded-lg font-medium whitespace-nowrap md:text-base text-sm">
                  Get Appointed
                </button>
              </div>
            </div>

            {/* Image grid */}
            <div className="hidden xl:block">
              <div
                className="bg-cover bg-center bg-no-repeat h-[660px] relative flex items-center justify-center"
                style={{ backgroundImage: `url(${new_ban_bg})` }}
              >
                <img
                  className="absolute bottom-0 hidden big-mid:block"
                  src={ban_Image}
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
