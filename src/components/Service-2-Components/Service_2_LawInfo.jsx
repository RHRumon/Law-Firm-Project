import jsPDF from "jspdf";
import "../../../src/style/Style.css";
import { AiOutlineFilePdf } from "react-icons/ai";



const Service_2_LawInfo = ({info}) => {

    let {number, title, description1, description2} = info;

    const handleDownloadPDF = () => {
      const doc = new jsPDF();
      doc.text("Hello, its a example of pdf", 8, 8);
      doc.save("example.pdf");
    };

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
              <button onClick={() => handleDownloadPDF()} className="primary-btn">
                <AiOutlineFilePdf className="lg:h-6 lg:w-6 md:h-5 md:w-5 sm:h-4 sm:w-4 h-3 w-3" />
                Download PDF
              </button>

            </div>
          </div>
    );
};

export default Service_2_LawInfo;