import "../../../src/style/Style.css";
import { AiOutlineFilePdf } from "react-icons/ai";
import caseStudy2Image from "../../assets/Case_Study_2_Image.png";

import { useEffect, useState } from "react";
import InfoCS_2 from "./InfoCS_2";

const CS_2_ImageAndTexts = () => {
  let [info_CS2, setInfo_CS2] = useState([]);

  useEffect(() => {
    fetch("Data_CS_2.json")
      .then((res) => res.json())
      .then((data) => setInfo_CS2(data));
  }, []);

  return (
    <div className="min-h-fit work-sans text-white relative">
      <div className="max-w-[1320px] mx-auto w-full xl:mb-[60px] md:mb-14 mb-[29px] xl:px-5 md:px-7 smaller:px-8 small:px-4 tiny:px-2 text-black">
        {/* xl:mb-[150px] md:mb-14 mb-[29px] */}
        <img src={caseStudy2Image} alt="" />

        <div className="md:mt-[56px] mt-[28px] md:mb-14 lg:mb-[56px] ">
          <h1 className="header-1-banner mb-[10px] md:mb-[1.5rem] lg:mb-[56px]">
            The Anatomy Of A Civil Claim: Case Study And <br />
            Legal Implications
          </h1>
          <p className="text-base md:leading-[27px] text-[#3A3D3F] ">
            Purpose of the Study: Outline the goal of understanding civil claims
            and their legal ramifications.
          </p>
          <p className="text-base md:leading-[27px] text-[#3A3D3F] mt-6">
            {" "}
            The primary purpose of this study is to explore the framework,
            procedures, and implications of civil claims in the legal system. By
            examining the nuances of civil litigation, this study seeks to
            provide a comprehensive understanding of how individuals and
            entities resolve disputes in a non-criminal context.
          </p>
        </div>

        <div>
          {info_CS2.map((infoCS2, idx) => (
            <InfoCS_2 key={idx} infoCS2={infoCS2}></InfoCS_2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CS_2_ImageAndTexts;
