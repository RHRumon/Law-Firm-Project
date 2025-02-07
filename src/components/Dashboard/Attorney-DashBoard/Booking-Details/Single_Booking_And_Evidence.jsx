import { FaRegFilePdf } from "react-icons/fa6";
import { BsFiletypeMp4 } from "react-icons/bs";
import { RiFolderImageLine } from "react-icons/ri";

const Single_Booking_And_Evidence = ({ bookEvid }) => {
  const { section1, details, section2, files } = bookEvid;

  return (
    <div className="border-2 border-green-500">
      {/* 1 */}
      <div className="border rounded-[20px] lg:px-10 px-5 lg:py-[40px] py-5 min-h-[237px] border-yellow-400">
        <h1 className="font-medium text-2xl leading-[28px] text-[#242628] work-sans md:mb-10 mb-5">
          {section1}
        </h1>

        <div>
          {details && (
            <>
              <div className="flex flex-col gap-4">
                <p className="text-sans-500-16 flex gap-1">
                  <span className="text-[#818B8F]">Date:</span> {details.Date}
                </p>
                <p className="text-sans-500-16 text-[#818B8F] flex gap-1">
                  Time Slot:
                  <br />
                  <span className="text-[#3A3D3F]">{details.Time_Slot}</span>
                </p>
                <p className="text-sans-500-16 flex gap-1">
                  <span className="text-[#818B8F] whitespace-nowrap">
                    Create Date:
                  </span>
                  <span className="">{details.Create_Date}</span>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      {/* 2 */}

      <div className="border rounded-[20px] lg:px-10 px-5 lg:py-[40px] py-5 min-h-[237px]">
        <h1 className="font-medium text-2xl leading-[28px] text-[#242628] work-sans md:mb-10 mb-5">
          {section2}
        </h1>

        <div>
          {files && (
            <div className="flex flex-col gap-4">
              <div className="flex gap-[30px]">
                <div>
                  <button className="border-none text-[#C7A87D] font-medium work-sans flex gap-2 items-center mb-4">
                    <span className="text-black">1. </span>
                    <FaRegFilePdf /> Download Pdf
                  </button>
                  <button className="border-none text-[#C7A87D] font-medium work-sans flex gap-2 items-center mb-4">
                    <span className="text-black">2. </span> <FaRegFilePdf />{" "}
                    Download Pdf
                  </button>
                </div>
                <div>
                  <button className="border-none text-[#C7A87D] font-medium work-sans flex gap-2 items-center mb-4">
                    <span className="text-black">3. </span> <BsFiletypeMp4 />
                    Download Pdf
                  </button>
                  <button className="border-none text-[#C7A87D] font-medium work-sans flex gap-2 items-center mb-4">
                    <span className="text-black">4. </span>{" "}
                    <RiFolderImageLine />
                    Download Pdf
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Single_Booking_And_Evidence;
