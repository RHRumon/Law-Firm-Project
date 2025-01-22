import aboutImage from "../../assets/aboutIMG.png";
import "../../../src/style/Style.css";
import hammer from "../../assets/hammer.png";
import daripalla from "../../assets/daripalla.png";
import result from "../../assets/result.png";
import success from "../../assets/success.png";
import justiceStatu from "../../assets/justice-statu.png";
import aboutRotateImage from "../../assets/aboutPageRotateImage.png";

import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";

import { useRef, useState } from "react";

const AboutUsAB = () => {
  let videoRef = useRef(null); // reference for the video element
  let [isPlaying, setIsPlaying] = useState(false);

  let handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className=" big-lg:py-[150px] md:py-10 py-3">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col lg:flex-row  lg:gap-14 md:gap-7 gap-6 my-14">
          {/* image container */}
          <div className="hidden xl:flex w-full lg:w-2/5 justify-center items-center relative">
            <div className="md:max-w-[452px] rounded-[20px]">
              <img
                className="w-full h-auto object-cover rounded-[20px] "
                src={aboutRotateImage}
                alt="About Us"
              />
            </div>

            <div className="absolute top-[246px] right-[-64px] bg-[#B68C5A] h-[280px] w-[263px] flex justify-center items-center">
              <div className="right-[-56px] bottom-[92px] h-[256px] w-[239px] border-2 border-yellow-400 ">
                {/* <video
                  ref={videoRef} 
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  loop
                  muted
                >
                  <source src={ABvideo} type="video/mp4" />
                </video> */}
                <div className="absolute top-[6rem] left-[6rem] flex items-center justify-center h-[78px] w-[78px] rounded-full border border-[#B68C5A]">
                  <div
                    onClick={handlePlayPause}
                    className="h-[66px] w-[66px] rounded-full border border-[#B68C5A] flex items-center justify-center"
                  >
                    <div className=" h-14 w-14 rounded-full p-3 bg-[#B68C5A] flex items-center justify-center">
                      {isPlaying ? (
                        <FaPause className="h-[17px] w-[17px] text-white"></FaPause>
                      ) : (
                        <FaPlay className="h-[17px] w-[17px] text-white" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* text container */}
          <div className="eb-garamond w-full xl:w-3/5 flex flex-col justify-center lg:px-5 xl:px-5 md:px-7 smaller:px-8 small:px-4 tiny:px-2">
            <div className="text-center sm:text-start xl:px-5 md:px-7 smaller:px-8 small:px-4">
              <p className="md:text-xl text-lg font-medium text-[#D4AF37]">
                About Us
              </p>
              <h1 className="md:my-6 my-1 xl:text-5xl lg:text-4xl md:text-3xl text-[25px] md:font-medium xl:leading-[57px] lg:leading-[47px] leading-[30px]">
                We fight for fairness and stand <br />
                against <span className="text-[#D4AF37]">injustice</span>.
              </h1>
              <p className="text-[#3A3D3F] md:text-base text-sm font-normal  mb-10">
                At Lawstick, we are committed to fighting for fairness and
                protecting your rights. <br className="hidden xl:block" /> With
                unwavering integrity and dedication, our experienced team works
                tirelessly <br className="hidden xl:block" /> to deliver
                justice.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 work-sans mb-[50px] xl:px-5 md:px-7 smaller:px-8 small:px-4">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-none md:w-[60px] md:h-[60px] w-11 h-11 rounded-full bg-red-100 flex justify-center items-center">
                    <img
                      className="md:w-11 md:h-11 w-7 h-7"
                      src={hammer}
                      alt="Hammer"
                    />
                  </div>

                  <div>
                    <p className="text-[#B68C5A] text-lg font-semibold">
                      Experience Attorney
                    </p>
                    <p className="text-[#3A3D3F] md:text-base text-sm">
                      Experienced attorneys committed to your success.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-none md:w-[60px] md:h-[60px] w-11 h-11 rounded-full bg-red-100 flex justify-center items-center">
                    <img
                      className="md:w-11 md:h-11 w-7 h-7"
                      src={result}
                      alt="Result"
                    />
                  </div>
                  <div>
                    <p className="text-[#B68C5A] text-lg font-semibold">
                      Short Time Result
                    </p>
                    <p className="text-[#3A3D3F] md:text-base text-sm">
                      Experienced attorneys delivering swift results.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-none md:w-[60px] md:h-[60px] w-11 h-11 rounded-full bg-red-100 flex justify-center items-center">
                    <img
                      className="md:w-11 md:h-11 w-7 h-7"
                      src={daripalla}
                      alt="Daripalla"
                    />
                  </div>
                  <div>
                    <p className="text-[#B68C5A] text-lg font-semibold">
                      162 Successful Cases
                    </p>
                    <p className="text-[#3A3D3F] md:text-base text-sm">
                      162 Successful Cases Expertise delivering exceptional
                      results.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-none md:w-[60px] md:h-[60px] w-11 h-11 rounded-full bg-red-100 flex justify-center items-center">
                    <img
                      className="md:w-11 md:h-11 w-7 h-7"
                      src={success}
                      alt="Success"
                    />
                  </div>
                  <div>
                    <p className="text-[#B68C5A] text-lg font-semibold">
                      90% Success Rate
                    </p>
                    <p className="text-[#3A3D3F] md:text-base text-sm">
                      Experienced attorneys with a proven success rate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex sm:justify-start justify-center xl:px-5 md:px-7 smaller:px-8 small:px-4">
              <button className="bg-[#C7A87D] px-5 py-3 text-white rounded-lg font-medium whitespace-nowrap w-[158px]">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsAB;
