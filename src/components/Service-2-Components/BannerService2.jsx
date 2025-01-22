import "../../style/Style.css";
import about_hero_bg from "../../assets/About-bg-image.png";
import { TbArrowNarrowRight } from "react-icons/tb";

const BannerService2 = () => {
  return (
    <div
      style={{ backgroundImage: `url(${about_hero_bg})` }}
      className="bg-gradient-to-r from-[#0C0C15] to-[#3F4069] min-h-fit work-sans text-white bg-cover bg-center bg-no-repeat md:h-[480px] h-[250px] flex items-center justify-center"
    >
      <div className="max-w-[1320px] mx-auto w-full text-center">
        <h1 className="lg:text-5xl md:text-4xl text-[30px] font-semibold eb-garamond md:mt-0 mt-[37px]">
          Service
        </h1>
        <p className="flex justify-center items-center gap-2 md:mt-6 text-lg font-medium">
          Home <TbArrowNarrowRight className="text-yellow-300 h-6 w-6" />{" "}
          Service
        </p>
      </div>
    </div>
  );
};

export default BannerService2;


// import "../../style/Style.css";
// import about_hero_bg from "../../assets/About-bg-image.png";
// import { TbArrowNarrowRight } from "react-icons/tb";

// const BannerService2 = () => {
//   return (
//     <div
//       style={{ backgroundImage: `url(${about_hero_bg})` }}
//       className="relative bg-cover bg-center bg-no-repeat md:h-[480px] h-[250px] flex items-center justify-center text-white"
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       {/* Content */}
//       <div className="relative max-w-[1320px] mx-auto w-full text-center">
//         <h1 className="lg:text-5xl md:text-4xl text-[30px] font-semibold eb-garamond md:mt-0 mt-[37px]">
//           Service
//         </h1>
//         <p className="flex justify-center items-center gap-2 md:mt-6 text-lg font-medium">
//           Home <TbArrowNarrowRight className="text-yellow-300 h-6 w-6" /> Service
//         </p>
//       </div>
//     </div>
//   );
// };

// export default BannerService2;

