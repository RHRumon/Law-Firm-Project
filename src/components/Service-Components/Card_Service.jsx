import { MdOutlineArrowRightAlt } from "react-icons/md";
import practiceDesign from "../../assets/practiceDesign.png";
import practiceStyle from "../../assets/practice-design.png";
import practiceStyleWhite from "../../assets/practiceStyleWhite.png";
import { Link } from "react-router-dom";


const Card_Service = ({card}) => {

    let { image, title, description } = card;

    return (
        <div className="flex justify-center items-center border shadow-xl rounded-[10px] group hover:bg-[#B68C5A] hover:text-white relative">
            <div className="max-w-[312px] min-h-[340px] flex flex-col justify-between items-center px-2 py-5 text-center">
              <img
                className="absolute bottom-0 right-0 group-hover:hidden"
                src={practiceStyle}
                alt=""
              />
              <img
                className="absolute bottom-0 right-0 hidden group-hover:block"
                src={practiceStyleWhite}
                alt=""
              />

              <div className="flex-none md:w-[60px] md:h-[60px] w-11 h-11 rounded-full bg-red-100 flex justify-center items-center">
                <img
                  className="md:w-11 md:h-11 w-7 h-7"
                  src={image}
                  alt=""
                />
              </div>
              <p className="text-xl font-semibold line-clamp-1">{title}</p>
              <p className="text-base line-clamp-4">
                {description}
              </p>

              <Link to={`/serviceDetails`}>
                <div className="h-10 w-10 rounded-full bg-amber-100 hover:bg-white flex justify-center items-center">
                  <MdOutlineArrowRightAlt className="text-[#B68C5A] text-2xl"></MdOutlineArrowRightAlt>
                </div>
              </Link>
            </div>
          </div>
    );
};

export default Card_Service;