import { RxBorderSolid } from "react-icons/rx";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  let { image, title, description } = card;

  return (
    <div className="max-w-[424px] max-h-[528px] mx-auto bg-white flex flex-col items-center text-black gap-3 rounded-[10px] border  lg:pb-[30px] md:pb-[19px] pb-[17px]">
      <div className="">
        <img src={image} alt="" />
      </div>
      <div className="lg:px-6 px-3 lg:space-y-8 space-y-3 lg:text-start text-center flex flex-col lg:items-start items-center">
        <p className="font-medium lg:text-lg text-base text-[#242628] lg:leading-[30px] text-ellipsis line-clamp-2">
          {title}
        </p>
        <p className="h-[70px] lg:text-base text-sm text-[#3A3D3F] text-ellipsis line-clamp-3">
          {description}
        </p>

        <div>
          <Link to={`/caseDetails`}>
            <button className="hover:bg-[#C7A87D] lg:px-5 px-2 lg:py-3 py-2  rounded-lg font-medium whitespace-nowrap lg:w-[191px] lg:text-lg text-base flex items-center gap-1 text-[#242628] hover:text-white border">
              READ MORE <RxBorderSolid className="rotate-90" />{" "}
              <FaLongArrowAltRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
