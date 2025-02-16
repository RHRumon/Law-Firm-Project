import "../../../src/style/Style.css";
import counseling_image from "../../assets/Bg_counseling.png";

const Counseling = () => {
  return (
    <div className="max-w-[1320px] mx-auto w-full lg:pt-[75px] lg:pb-[180px] md:py-[64px] py-[27px] xl:px-5 md:px-7 smaller:px-8 small:px-4 work-sans">
      <div
        className="min-h-[456px] rounded-[20px]  flex flex-col items-center justify-center text-center text-white p-6 relative overflow-hidden"
        style={{
          backgroundImage: `url(${counseling_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >

        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-[20px]"></div>

        <div className="relative z-10 max-w-[500px] mx-auto flex flex-col justify-center items-center">
          <h1 className="lg:text-[38px] md:text-3xl text-2xl font-medium lg:leading-[49px] eb-garamond">
            Do you need expert legal <br />
            counseling?
          </h1>
          <p className="font-medium md:leading-[27px] work-sans md:mt-6">
            Expert Legal Counseling To Guide You Through Complex Matters
            With Professionalism And Care.
          </p>
          <button className="primary-btn mt-4">Get Appointed</button>
        </div>
      </div>
    </div>
  );
};

export default Counseling;