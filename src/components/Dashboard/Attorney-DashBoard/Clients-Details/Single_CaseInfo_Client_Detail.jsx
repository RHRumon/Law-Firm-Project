const Single_CaseInfo_Client_Detail = ({ Case }) => {
  let { Case_Type, CaseShortDescription, Case_History, Evidence } = Case;

  return (
    <div className="border rounded-[20px] lg:px-10 px-5 lg:pt-10 lg:pb-[40px]  py-5 min-h-[548px]">
      <h1 className="font-medium text-2xl leading-[28px] text-[#242628] work-sans md:mb-10 mb-5">
        Case Information
      </h1>

      <div className=" ">
        <p className="font-medium work-sans mb-[30px]">
          <span className="text-[#818B8F]">Case Type:</span> {Case_Type}
        </p>
        <p className="font-medium work-sans text-[#818B8F] flex flex-col gap-4 mb-[30px]">
          Case Short Description:
          <br />
          <span className="text-[#3A3D3F]">{CaseShortDescription}</span>
        </p>
        <p className="font-medium work-sans flex flex-col gap-4 ">
          <span className="text-[#818B8F]">Case_History:</span>{" "}
          <span className="leading-[27px]">{Case_History}</span>
        </p>
      </div>
    </div>
  );
};

export default Single_CaseInfo_Client_Detail;
