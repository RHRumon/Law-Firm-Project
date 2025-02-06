import { Button } from "antd";
import { FaRegFilePdf } from "react-icons/fa6";

const Case_Information_Single = ({ Case }) => {
  let { Case_Type, CaseShortDescription, Related_Case_Document } = Case;

  return (
    <div className="border rounded-[20px] lg:px-10 px-5 lg:pt-10 lg:pb-[58px]  py-5 min-h-[548px]">
      <h1 className="font-medium text-2xl leading-[28px] text-[#242628] work-sans md:mb-10 mb-5">
        Case Information
      </h1>

      <div className=" ">
        <p className="font-medium work-sans mb-10">
          <span className="text-[#818B8F]">Case Type:</span> {Case_Type}
        </p>
        <p className="font-medium work-sans text-[#818B8F] flex flex-col gap-4 mb-10">
          Case Short Description:
          <br />
          <p className="text-[#3A3D3F]">{CaseShortDescription}</p>
        </p>
        <div>
          <p className="font-medium work-sans mb-6">
            <span className="text-[#818B8F]">Related Case Document:</span>{" "}
            {Related_Case_Document}
          </p>
          <button className="border-none text-[#C7A87D] font-medium work-sans flex gap-2 items-center mb-4">
            <FaRegFilePdf /> Download Pdf
          </button>
          <button className="border-none text-[#C7A87D] font-medium work-sans flex gap-2 items-center">
            <FaRegFilePdf /> Download Pdf
          </button>
        </div>
      </div>
    </div>
  );
};

export default Case_Information_Single;
