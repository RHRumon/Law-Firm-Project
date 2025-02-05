const Next_Apntmnrt_Single_AD = ({ singleAppointment }) => {
  let { name, image, designation } = singleAppointment;

  return (
    <div className="flex gap-[8px] items-center w-full">
      <img className="h-10 w-10" src={image} alt={name} />
      <div className="w-full">
        <p className="text-sans-500-16">{name}</p>
        <p className="text-sans-500-14 text-[#818B8F]">{designation}</p>
      </div>
    </div>
  );
};

export default Next_Apntmnrt_Single_AD;
