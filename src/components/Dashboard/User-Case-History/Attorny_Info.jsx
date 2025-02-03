const Attorny_Info = ({ attorney }) => {

    let {image,name, designation,email,phone,experience,qualification} = attorney;

  return (
    <div className="border rounded-[20px] md:px-10 px-5 md:py-10 py-5 min-h-[649px]">
      <h1 className="font-medium text-2xl leading-[28px] text-[#242628] work-sans mb-10">
        Attorney Info
      </h1>
      <div className="flex items-center gap-3 mb-8">
        <img className="lg:h-[100px] lg:w-[100px] md:w-[69px] md:h-[64px] h-[48px] w-[48px]" src={image} alt="" />
        <div className="">
          <p className="font-medium text-lg text-[#242628] work-sans">
            {name}
          </p>
          <p className="font-medium work-sans text-[#818B8F]">
            {designation}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <p className="font-medium work-sans whitespace-nowrap">
          <span className="text-[#818B8F]">Email:</span> { email}
        </p>
        <p className="font-medium work-sans">
          <span className="text-[#818B8F]">Phone:</span> { phone}
        </p>
        <p className="font-medium work-sans">
          <span className="text-[#818B8F]">Experience:</span> { experience}
        </p>
        <p className="font-medium work-sans">
          <span className="text-[#818B8F] leading-[27px]">Qualification:</span>{" "}
          {qualification}
        </p>
      </div>
    </div>
  );
};

export default Attorny_Info;
