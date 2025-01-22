import "../../../src/style/Style.css";
import caseStatus1 from "../../assets/caseStatus1.png";
import caseStatus2 from "../../assets/caseStatus2.png";
import caseStatus3 from "../../assets/caseStatus3.png";
import caseStatus4 from "../../assets/caseStatus4.png";

const CasesStatus = () => {
  return (
    <div className="bg-gradient-to-r from-[#0C0C15] to-[#3F4069]">
      <div className="3xl:max-w-[1320px] lg:max-w-7xl md:max-w-[700px] smaller:max-w-[380px] xs:max-w-[280px] mx-auto py-[57px] work-sans eb-garamond">
        {/* <div className="flex border-2 ">
          <div className="flex items-center gap-[14px] border-r">
            <div>
              <img src={caseStatus1} alt="" />
            </div>
            <div className="text-white">
              <p className="font-bold text-[32px]">162</p>
              <p className="font-medium text-xl">Successful Case</p>
            </div>
          </div>
          <div className="flex items-center gap-[14px] border-r">
            <div>
              <img src={caseStatus1} alt="" />
            </div>
            <div className="text-white">
              <p className="font-bold text-[32px]">162</p>
              <p className="font-medium text-xl">Successful Case</p>
            </div>
          </div>
          <div className="flex items-center gap-[14px] border-r">
            <div>
              <img src={caseStatus1} alt="" />
            </div>
            <div className="text-white">
              <p className="font-bold text-[32px]">162</p>
              <p className="font-medium text-xl">Successful Case</p>
            </div>
          </div>
          <div className="flex items-center gap-[14px] border-r">
            <div>
              <img src={caseStatus1} alt="" />
            </div>
            <div className="text-white">
              <p className="font-bold text-[32px]">162</p>
              <p className="font-medium text-xl">Successful Case</p>
            </div>
          </div>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7  text-center gap-8 text-white">
          {/* Item 1 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <span className="text-gold text-4xl mb-2">
                <img src={caseStatus1} alt="" />
              </span>
              <div>
              <h3 className="text-3xl font-bold">162</h3>
              <p className="text-sm">Successful Case</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block border-l border-gray-500"></div>

          {/* Item 2 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <span className="text-gold text-4xl mb-2">
                <img src={caseStatus1} alt="" />
              </span>
              <div>
              <h3 className="text-3xl font-bold">162</h3>
              <p className="text-sm">Successful Case</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block border-l border-gray-500"></div>

          {/* Item 3 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <span className="text-gold text-4xl mb-2">
                <img src={caseStatus1} alt="" />
              </span>
              <div>
              <h3 className="text-3xl font-bold">162</h3>
              <p className="text-sm">Successful Case</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block border-l border-gray-500"></div>

          {/* Item 4 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <span className="text-gold text-4xl mb-2">
                <img src={caseStatus1} alt="" />
              </span>
              <div>
              <h3 className="text-3xl font-bold">162</h3>
              <p className="text-sm">Successful Case</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CasesStatus;
