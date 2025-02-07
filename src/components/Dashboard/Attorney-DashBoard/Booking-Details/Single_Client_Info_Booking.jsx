import React from 'react';

const Single_Client_Info_Booking = ({client}) => {

    let { image, name, email, phone,Present_Address,Permanent_Address,DOB,Postal_Code,Country} = client;

    return (
        <div className="border rounded-[20px] lg:px-10 px-5 lg:py-10 py-5 min-h-[548px]">
      <h1 className="font-medium text-2xl leading-[28px] text-[#242628] work-sans mb-10">
      Client Info
      </h1>
      <div className="flex items-center gap-3 mb-8">
        <img
          className="xl:h-[100px] xl:w-[100px] lg:h-[58px] lg:w-[58px] md:w-[69px] md:h-[64px] h-[48px] w-[48px]"
          src={image}
          alt=""
        />
        <div className="">
          <p className="font-medium text-lg text-[#242628] work-sans">{name}</p>
          <p className="font-medium work-sans text-[#818B8F]">{email}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-sans-500-16 whitespace-nowrap">
          <span className="text-[#818B8F]">Phone:</span> {phone}
        </p>
        <p className="text-sans-500-16">
          <span className="text-[#818B8F]">Present Address:</span> {Present_Address}
        </p>
        <p className="text-sans-500-16">
          <span className="text-[#818B8F]">Permanent Address:</span> {Permanent_Address}
        </p>
        <p className="text-sans-500-16">
          <span className="text-[#818B8F] leading-[27px]">Date Of Birth:</span>{" "}
          {DOB}
        </p>
        <p className="text-sans-500-16">
          <span className="text-[#818B8F] leading-[27px]">Postal Code:</span>{" "}
          {Postal_Code}
        </p>
        <p className="text-sans-500-16">
          <span className="text-[#818B8F] leading-[27px]">Country:</span>{" "}
          {Country}
        </p>
      </div>
    </div>
    );
};

export default Single_Client_Info_Booking;