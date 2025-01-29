import aboutImage from "../../assets/aboutIMG.png";
import "../../../src/style/Style.css";


const Fairness = () => {
  return (
    <div className="relative  xl:my-[150px] md:my-14 my-[29px] ">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col lg:flex-row  lg:gap-14 md:gap-7 gap-6 ">
          {/* image container */}
          <div className="hidden xl:flex w-full lg:w-2/5 justify-center items-center order-2">
            <div className="md:max-w-[564px]  rounded-[20px]">
              <img
                className="w-full h-auto object-cover rounded-[20px]"
                src={aboutImage}
                alt="About Us"
              />
            </div>
          </div>

          {/* text container */}
          <div className="eb-garamond w-full xl:w-3/5 flex flex-col justify-center lg:px-5 xl:px-5 md:px-7 smaller:px-8 small:px-4 tiny:px-2 order-1">
            <h1 className="header-1 mb-[10px]">
              We Strive For Justice And Envision <br /> A Future Of
              <span className="text-[#D4AF37]"> Fairness</span>.
            </h1>
            <p className="text-[#3A3D3F] text-base font-normal text-center md:text-start md:leading-[27px] leading-[23px] md:mb-[28px] mb-[10px]">
              At Lawstick, we are dedicated to promoting justice, ensuring
              fairness, and building <br className="hidden md:block" /> a future
              rooted in integrity and trust. Our mission drives us to deliver
              expert legal <br className="hidden md:block" /> solutions while
              upholding the highest ethical standards.
            </p>

            <div className="flex flex-col  text-center md:text-start">
              <p className="text-[#D4AF37] font-medium md:text-2xl text-lg md:mb-6 mb-3">
                Our Aspiration
              </p>
              <p className="text-[#3A3D3F] text-base font-normal text-center md:text-start md:leading-[27px] leading-[23px] md:mb-[28px] mb-[10px]">
                Our aspiration is to champion justice, fairness, and integrity.
                We aim to protect individual rights, deliver expert legal
                solutions, and build trust with our clients. Through dedication
                and ethical principles, we strive to create a more just and
                equitable society.
              </p>
              <p className="text-[#D4AF37] font-medium md:text-2xl text-lg md:mb-6 mb-3">
                Our Commitment
              </p>
              <p className="text-[#3A3D3F] text-base font-normal text-center md:text-start md:leading-[27px] leading-[23px] md:mb-[28px] mb-[10px]">
                Our commitment is to provide unwavering legal support with
                integrity, expertise, and dedication. We are dedicated to
                protecting your rights, ensuring fair outcomes, and delivering
                personalized solutions tailored to your unique needs. At
                Lawstick, we stand by our clients every step of the way
              </p>
            </div>

            <div className="flex md:justify-start justify-center ">
              <button className="bg-[#C7A87D] px-5 py-3 text-white rounded-lg font-medium whitespace-nowrap lg:w-[258px] w-[158px] flex items-center justify-center">
                Make an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fairness;
