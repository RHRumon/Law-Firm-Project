import "../../../src/style/Style.css";
import { AiOutlineFilePdf } from "react-icons/ai";
import caseStudy2Image from "../../assets/Case_Study_2_Image.png";

import { useEffect, useState } from "react";
import InfoCS_2 from "./InfoCS_2";


const CS_2_ImageAndTexts = () => {

    let [info_CS2, setInfo_CS2] = useState([]);

    useEffect(()=>{
        fetch("Data_CS_2.json")
        .then(res => res.json())
        .then(data => setInfo_CS2(data))
    },[])

    return (
        <div className="min-h-fit work-sans text-white relative">
        <div className="max-w-[1320px] mx-auto w-full lg:pt-[106px] lg:pb-[180px] pt-[29px] pb-[38px] xl:px-5 md:px-7 smaller:px-8 small:px-4 tiny:px-2 text-black eb-garamond">
          <img src={caseStudy2Image} alt="" />
  
          <div className="md:mt-[56px] mt-[28px] lg:mb-14">
            <h1 className="lg:text-5xl md:text-[32px] text-[25px] font-medium text-[#242628] lg:leading-[62px] md:mb-6">
            The Anatomy Of A Civil Claim: Case Study And <br />
            Legal Implications
            </h1>
            <p className="text-base md:leading-[27px] text-[#3A3D3F] work-sans">
            Purpose of the Study: Outline the goal of understanding civil claims and their legal ramifications.
            </p>
            <p className="text-base md:leading-[27px] text-[#3A3D3F] work-sans mt-6"> The primary purpose of this study is to explore the framework, procedures, and implications of civil claims in the legal system. By examining the nuances of civil litigation, this study seeks to provide a comprehensive understanding of how individuals and entities resolve disputes in a non-criminal context.</p>
          </div>

           <div>
             {
                info_CS2.map((infoCS2, idx) => <InfoCS_2 
                key={idx}
                infoCS2={infoCS2}></InfoCS_2>)
             }
           </div>
  
        </div>
      </div>
    );
};

export default CS_2_ImageAndTexts;