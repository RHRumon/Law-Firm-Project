import "../../../src/style/Style.css";
import { AiOutlineFilePdf } from "react-icons/ai";



const Service_2_LawInfo = ({info}) => {

    let {number, title, description1, description2} = info;

    return (
        <div className="flex big-mid:flex-row flex-col justify-between items-start big-mid:items-center md:mt-[40px] mt-[18px]">
            <div className="pl-2">
              <h1 className="font-medium lg:text-2xl md:text-[21px] text-[20px] leading-[31px] flex items-center gap-1 md:mb-6 mb-3">
                {number}. {title}
              </h1>
              <ul class="list-disc pl-6 space-y-2 work-sans text-base">
                <li>
                  {description1}
                </li>
                <li>
                  {description2}
                </li>
              </ul>
            </div>

            <div className="big-mid:pl-0 pl-2 big-mid:mt-0 mt-4">
              <button className="bg-[#B68C5A] rounded-lg font-medium whitespace-nowrap lg:max-w-[228px] md:max-w-[190px] sm:max-w-[160px] max-w-[142px] lg:h-[56px] md:h-[50px] sm:h-[44px] h-[40px] lg:text-lg md:text-base sm:text-sm text-xs flex items-center justify-center md:gap-[10px] gap-[6px] text-white border lg:px-8 md:px-6 sm:px-4 px-3 lg:py-4 md:py-3 sm:py-2 py-1 work-sans">
                <AiOutlineFilePdf className="lg:h-6 lg:w-6 md:h-5 md:w-5 sm:h-4 sm:w-4 h-3 w-3" />
                Download PDF
              </button>

            </div>
          </div>
    );
};

export default Service_2_LawInfo;