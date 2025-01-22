import "../../../src/style/Style.css";
import { AiOutlineFilePdf } from "react-icons/ai";

import serviceDetailsImage from "../../assets/ServiceDetailsImage.png";

const Service_2_Contents = () => {
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

          {/* 1 */}
          <div className="flex big-mid:flex-row flex-col justify-between items-start big-mid:items-center md:mt-[40px] mt-[18px]">
            <div className="pl-2">
              <h1 className="font-medium lg:text-2xl md:text-[21px] text-[20px] leading-[31px] flex items-center gap-1 md:mb-6 mb-3">
                1. Divorce and Separation:
              </h1>
              <ul class="list-disc pl-6 space-y-2 work-sans text-base">
                <li>
                  Handling All Aspects Of Marriage Dissolution, Including
                  Division Of Assets, Debts, And Property.
                </li>
                <li>
                  Resolving Alimony (Spousal Support) Disputes And Ensuring Fair
                  Settlements.
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
          {/* 2 */}
          <div className="flex big-mid:flex-row flex-col justify-between items-start big-mid:items-center md:mt-[40px] mt-[32px]">
            <div className="pl-2">
              <h1 className="font-medium lg:text-2xl md:text-[21px] text-[20px] leading-[31px] flex items-center gap-1 md:mb-6 mb-3">
                2. Child Custody and Support
              </h1>
              <ul class="list-disc pl-6 space-y-2 work-sans text-base">
                <li>
                  Establishing custody arrangements that prioritize the child's
                  well-being and stability.
                </li>
                <li>
                  Determining child support agreements based on legal guidelines
                  and financial considerations.
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
          {/* 3 */}
          <div className="flex big-mid:flex-row flex-col justify-between items-start big-mid:items-center md:mt-[40px] mt-[32px]">
            <div className="pl-2">
              <h1 className="font-medium lg:text-2xl md:text-[21px] text-[20px] leading-[31px] flex items-center gap-1 md:mb-6 mb-3">
                3. Adoption
              </h1>
              <ul class="list-disc pl-6 space-y-2 work-sans text-base">
                <li>
                  Assisting families with the legal process of adopting a child,
                  whether domestically or internationally.
                </li>
                <li>
                  Ensuring all necessary legal requirements and documentation
                  are met.
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
          {/* 4 */}
          <div className="flex big-mid:flex-row flex-col justify-between items-start big-mid:items-center md:mt-[40px] mt-[32px]">
            <div className="pl-2">
              <h1 className="font-medium lg:text-2xl md:text-[21px] text-[20px] leading-[31px] flex items-center gap-1 md:mb-6 mb-3">
                4. Prenuptial and Postnuptial Agreements
              </h1>
              <ul class="list-disc pl-6 space-y-2 work-sans text-base">
                <li>
                  Drafting agreements that protect individual assets and
                  establish terms in the event of divorce.
                </li>
                <li>
                  Offering guidance to ensure agreements are legally enforceable
                  and fair.
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
          {/* 5 */}
          <div className="flex big-mid:flex-row flex-col justify-between items-start big-mid:items-center md:mt-[40px] mt-[32px]">
            <div className="pl-2">
              <h1 className="font-medium lg:text-2xl md:text-[21px] text-[20px] leading-[31px] flex items-center gap-1 md:mb-6 mb-3">
                5. Domestic Violence and Protective Orders
              </h1>
              <ul class="list-disc pl-6 space-y-2 work-sans text-base">
                <li>
                  Advocating for clients in abusive situations by securing
                  restraining orders and other legal protections.
                </li>
                <li>
                  Ensuring the safety and security of victims and their
                  families.
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
          {/* 6 */}
          <div className="flex big-mid:flex-row flex-col justify-between items-start big-mid:items-center md:mt-[40px] mt-[32px]">
            <div className="pl-2">
              <h1 className="font-medium lg:text-2xl md:text-[21px] text-[20px] leading-[31px] flex items-center gap-1 md:mb-6 mb-3">
                6. Guardianship and Conservatorship
              </h1>
              <ul class="list-disc pl-6 space-y-2 work-sans text-base">
                <li>
                  Assisting in legal guardianship arrangements for minors or
                  incapacitated adults.
                </li>
                <li>
                  Managing conservatorships to oversee financial and personal
                  affairs.
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
          {/* 7 */}
          <div className="flex big-mid:flex-row flex-col justify-between items-start big-mid:items-center md:mt-[40px] mt-[32px]">
            <div className="pl-2">
              <h1 className="font-medium lg:text-2xl md:text-[21px] text-[20px] leading-[31px] flex items-center gap-1 md:mb-6 mb-3">
                7. Paternity Cases:
              </h1>
              <ul class="list-disc pl-6 space-y-2 work-sans text-base">
                <li>
                  Establishing legal paternity to secure parental rights and
                  obligations.
                </li>
                <li>
                  Addressing disputes regarding custody and child support.
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
