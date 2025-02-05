import { Button } from "antd";
import { FaRegFilePdf } from "react-icons/fa6";


const Case_Info_Apoinmnt_Dtls = ({ caseInfo }) => {
  let { Case_Type, CaseShortDescription, Case_History, Appointment, Evidence } =
    caseInfo;

  return (
    <div className="border rounded-[20px] md:px-10 px-5 md:py-10 py-5 min-h-[649px]">
      <h1 className="font-medium text-2xl leading-[28px] text-[#242628] work-sans md:mb-10 mb-5">
        Case Info
      </h1>

      <div className="flex flex-col gap-6">
        <p className="font-medium work-sans">
          <span className="text-[#818B8F]">Case Type:</span> {Case_Type}
        </p>
        <p className="font-medium work-sans text-[#818B8F]">
          Case Short Description:
          <br />
          <p className="text-[#3A3D3F]">{CaseShortDescription}</p>
        </p>

        <p className="font-medium work-sans text-[#818B8F]">
          Case History:
          <br />
          <p className="text-[#3A3D3F]">{Case_History}</p>
        </p>
        <p className="font-medium work-sans">
          <span className="text-[#818B8F]">Appointment:</span>{" "}
          <span className="work-sans font-semibold ">
            {Appointment}
          </span>
        </p>
        <p className="font-medium work-sans flex items-center">
          <span className="text-[#818B8F]">Evidence:</span> 
          <Button className="border-none text-[#C7A87D] font-medium work-sans"><FaRegFilePdf /> Download Pdf
          </Button>
        </p>
      </div>
    </div>
  );
};

export default Case_Info_Apoinmnt_Dtls;
