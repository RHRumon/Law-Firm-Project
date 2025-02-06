const Message_single = ({ message }) => {
  let { name, image, time } = message;

  return (
    <div className="flex gap-[8px] items-center w-full">
      <img className="h-10 w-10" src={image} alt={name} />
      <div className="w-full flex justify-between items-center">
        <div>
          <p className="text-sans-500-16">{name}</p>
          <p className="text-sans-500-14 text-[#818B8F]">Send you a message</p>
        </div>
        <div>
            <p>{time} min ago</p>
        </div>
      </div>
    </div>
  );
};

export default Message_single;
