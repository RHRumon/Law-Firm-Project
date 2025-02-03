const Case_info = ({ Case }) => {

    let {Case_Type, CaseShortDescription,Case_History,Case_Status,Hearing_Date} = Case;

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
          <p className="text-[#3A3D3F]">
           {CaseShortDescription}
          </p>
        </p>

        <p className="font-medium work-sans text-[#818B8F]">
          Case History:
          <br />
          <p className="text-[#3A3D3F]">
           {Case_History}
          </p>
        </p>
        <p className="font-medium work-sans">
          <span className="text-[#818B8F]">Case Status:</span> <span className="w-[88px] h-[34px] text-white bg-gray-600 text-sm work-sans font-semibold rounded-[50px] px-4 py-[9px]">{Case_Status}</span>
        </p>
        <p className="font-medium work-sans">
          <span className="text-[#818B8F]">Hearing Date:</span> {Hearing_Date}
        </p>
      </div>
    </div>
  );
};

export default Case_info;
