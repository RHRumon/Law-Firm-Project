import React from "react";

const Info_TeamDetails = ({ teamDetail }) => {
  let { number, title, description1, image } = teamDetail;

  return (
    <div className="flex big-mid:flex-row flex-col justify-between items-start big-mid:items-center md:mt-[40px] mt-[18px]">
      <div className="pl-2">
        <h1 className="header-2 mb-[0.75rem] md:mb-[1.5rem]">
          {number}. {title}
        </h1>
        <ul className="list-disc pl-6 space-y-2 work-sans text-base">
          <li>{description1}</li>
        </ul>
      </div>
    </div>
  );
};

export default Info_TeamDetails;
