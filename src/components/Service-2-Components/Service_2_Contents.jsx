import "../../../src/style/Style.css";
import { AiOutlineFilePdf } from "react-icons/ai";

import serviceDetailsImage from "../../assets/ServiceDetailsImage.png";
import { useEffect, useState } from "react";
import Service_2_LawInfo from "./Service_2_LawInfo";

const Service_2_Contents = () => {

  let [infos, setInfos] = useState([]);

  useEffect(()=> {
    fetch("Data_service_2.json")
    .then(res => res.json())
    .then(data => setInfos(data))
  },[])
  
  console.log(infos);
  

  return (
    <div className="min-h-fit work-sans text-white relative">
      <div className="max-w-[1320px] mx-auto w-full lg:pt-[106px] lg:pb-[180px] pt-[29px] pb-[38px] xl:px-5 md:px-7 smaller:px-8 small:px-4 tiny:px-2 text-black eb-garamond">
        <img src={serviceDetailsImage} alt="" />

        <div className="md:mt-[56px] mt-[28px] lg:mb-14">
          <h1 className="lg:text-5xl md:text-[32px] text-[25px] font-medium text-[#242628] lg:leading-[62px] md:mb-6">
            Law Family
          </h1>
          <p className="text-base md:leading-[27px] text-[#3A3D3F] work-sans">
            Dedicated to providing comprehensive legal services for all
            family-related matters, including divorce, child custody, child
            support, spousal support, adoption, prenuptial agreements, and
            domestic disputes. We understand the emotional and personal
            challenges involved, which is why we approach every case with care,
            empathy, and a commitment to achieving the best possible outcome for
            you and your family. With a focus on integrity and personalized
            solutions, our team works tirelessly to protect your rights and
            ensure a fair resolution in even the most complex situations.
          </p>
        </div>

        <div className="text-[#242628]">
          <div className="lg:mt-0 mt-6">
            <h1 className="lg:text-[32px] md:text-[25px] text-[22px] font-medium text-[#242628] lg:leading-[41px] ">
              Key Areas of Family Law:
            </h1>
          </div>
 
          <div>
            {
               infos.map((info, idx) => <Service_2_LawInfo
               key={idx}
               info={info}
               ></Service_2_LawInfo>)
            }
          </div>
         
        </div>

        <div className="lg:mt-14 mt-6 ">
          <h1 className="lg:text-[32px] md:text-[25px] text-[22px] font-medium text-[#242628] lg:leading-[41px] md:mb-6">
            Why Family Law Matters:
          </h1>
          <p className="text-base md:leading-[27px] text-[#3A3D3F] work-sans">
            Family law is not just about legal proceedings; it’s about
            addressing deeply personal and emotional matters. A family lawyer
            acts as both an advocate and a counselor, helping clients navigate
            their challenges with empathy and precision. They aim to secure the
            best outcomes while minimizing emotional and financial strain.
          </p>
        </div>
        <div className="lg:mt-14 mt-6 ">
          <h1 className="lg:text-[32px] md:text-[25px] text-[22px] font-medium text-[#242628] lg:leading-[41px] md:mb-6">
            How We Handle Family Law Cases:
          </h1>
          <p className="text-base md:leading-[27px] text-[#3A3D3F] work-sans">
            At LawStick, we approach every family law case with the utmost care
            and professionalism. Our goal is to provide personalized,
            compassionate legal counsel while safeguarding your rights and
            interests. We understand the sensitive nature of these cases and are
            committed to resolving them efficiently and equitably, ensuring a
            better future for you and your family.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service_2_Contents;
