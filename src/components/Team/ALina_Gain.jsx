import "../../../src/style/Style.css";
import Alina from "../../assets/Alina.png";
import Alina2 from "../../assets/Aliana2.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useEffect, useState } from "react";
import Info_TeamDetails from "./Info_TeamDetails";

const ALina_Gain = () => {
  let [teamDetails, setTeamDetails] = useState([]);

  useEffect(() => {
    fetch("Data_Team_Details.json")
      .then((res) => res.json())
      .then((data) => setTeamDetails(data));
  }, []);
  //   console.log(teamDetails);

  return (
    <div className="relative xl:my-[150px] md:my-14 my-[29px] work-sans">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col lg:flex-row shadow-xl rounded-[20px] md:pl-10 md:pr-0 px-5 md:gap-7 gap-6 ">
          {/* image container */}
          <div className=" xl:w-[57%] xl:mx-0 w-full mx-auto order-2 flex justify-center">
            <div className="rounded-[20px]">
              <img
                className="w-[648px] lg:h-[640px] md:h-[500px] h-[355px] object-cover rounded-[20px]"
                src={Alina}
                alt="About Us"
              />
            </div>
          </div>

          {/* text container */}
          <div className="eb-garamond w-full xl:w-3/5 flex flex-col justify-center  py-5 order-1">
            <h1 className="header-1 mb-[10px]">Alina Gain</h1>
            <p className="font-medium text-lg ">Senior lawyer</p>
            <p className="text-[#3A3D3F] text-base font-normal md:leading-[27px] leading-[23px] md:mb-[28px] mb-[10px]">
              Alina Gain is a skilled attorney committed to providing expert
              legal solutions and protecting clients’ rights.
            </p>

            <div className="flex flex-col md:text-start">
              <p className="text-[#D4AF37] font-medium md:text-2xl text-lg md:mb-6 mb-3">
                Certifications and Qualifications:
              </p>
              <ul className="list-disc pl-[27px]">
                <li className="text-[#3A3D3F] text-base font-normal  md:text-start md:leading-[30px] leading-[23px] ">
                  Juris Doctor (JD): Earned from oxford university, specializing
                  in corporate or criminal law.
                </li>

                <li className="text-[#3A3D3F] text-base font-normal  md:text-start md:leading-[30px] leading-[23px]">
                  Bar Admission: Licensed to practice law in California Law
                  Association.
                </li>
                <li className="text-[#3A3D3F] text-base font-normal  md:text-start md:leading-[30px] leading-[23px]">
                  Certified Mediator: Skilled in alternative dispute resolution
                  and mediation techniques.
                </li>
                <li className="text-[#3A3D3F] text-base font-normal  md:text-start md:leading-[30px] leading-[23px]">
                  Continuing Legal Education (CLE): Regularly participates in
                  advanced legal education to stay updated on legal trends and
                  changes.
                </li>
                <li className="text-[#3A3D3F] text-base font-normal  md:text-start md:leading-[30px] leading-[23px]">
                  Professional Memberships: Member of American Bar Association,
                  State Bar Association, etc
                </li>
              </ul>
            </div>

            <div className="flex items-center mt-[26px] flex-wrap sm:gap-[116px] gap-5">
              <div className="flex items-center gap-4">
                <div className="w-[56px] h-[56px] rounded-full hover:bg-[rgb(182,140,90)] hover:text-white border flex justify-center items-center">
                  <FaXTwitter className="text-2xl"></FaXTwitter>
                </div>
                <div className="w-[56px] h-[56px] rounded-full hover:bg-[#B68C5A] hover:text-white border flex justify-center items-center">
                  <FaFacebookF className="text-2xl"></FaFacebookF>
                </div>
                <div className="w-[56px] h-[56px] rounded-full hover:bg-[#B68C5A] hover:text-white border flex justify-center items-center">
                  <FaLinkedinIn className="text-2xl"></FaLinkedinIn>
                </div>
              </div>
              <div>
                <button className="bg-[#B68C5A] text-white w-[153px] h-[56px] font-medium text-lg rounded-lg">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[56px]">
          <h1 className="semi-header mb-6">Professional Experience:</h1>
          <p className="leading-[28px] text-[#3A3D3F]">
            Alina Gain is a seasoned attorney with extensive experience in
            handling diverse legal cases, including [specific areas of law].
            Over the years, she has successfully represented clients in complex
            matters, showcasing her expertise in litigation, negotiation, and
            legal strategy. Her professional journey includes working with
            renowned law firms and contributing to high-profile cases,
            demonstrating her dedication to achieving favorable outcomes for her
            clients. Beyond her practice, Alina also provides pro bono legal
            counsel, ensuring access to justice for underserved communities.
          </p>
        </div>
        <div className="mt-[40px]">
          <h1 className="semi-header mb-6">Practice Areas:</h1>
          <p className="leading-[28px] text-[#3A3D3F]">
            Alina Gain offers expert legal services in the following areas:
          </p>

          <div className="mt-6 flex flex-col xl:flex-row">
            <div>
              {teamDetails.map((teamDetail, idx) => (
                <Info_TeamDetails
                  key={idx}
                  teamDetail={teamDetail}
                ></Info_TeamDetails>
              ))}
            </div>
            <div className="flex justify-center xl:mt-0 mt-10">
              <img
                className="xl:w-[424px] xl:h-[593px] md:w-[470px] md:h-[540px]"
                src={Alina2}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mt-[40px]">
          <div>
            <h1 className="semi-header mb-6">Legal Experience: </h1>
            <h2 className="font-medium text-xl leading-[23px] mb-4">
              Practice Area:
            </h2>
            <p className="text-[#3A3D3F]">
              Alina Gain is an experienced attorney dedicated to delivering
              expert legal solutions with integrity and precision. Specializing
              in [specific area(s) of law], she provides personalized
              representation and unwavering support to her clients, ensuring
              their rights are protected and justice is served.
            </p>
          </div>
          
          <div className="mt-6">
            <h1 className="semi-header mb-6">Legal Experience: </h1>
            <h2 className="font-medium text-xl leading-[23px] mb-4">
              Practice Area:
            </h2>
            <p className="text-[#3A3D3F]">
              Alina Gain is an experienced attorney dedicated to delivering
              expert legal solutions with integrity and precision. Specializing
              in [specific area(s) of law], she provides personalized
              representation and unwavering support to her clients, ensuring
              their rights are protected and justice is served.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ALina_Gain;
