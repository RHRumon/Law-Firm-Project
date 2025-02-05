import { Flex, Progress } from "antd";

const Clients_progress = ({ client }) => {
  let { name, image, caseNumber } = client;

  // progress calculation
  let clientCases = caseNumber; 
  let totalCases = 6;
  let progressPercent = Math.ceil((clientCases / totalCases) * 100);
  console.log("progress:", progressPercent);

  return (
    <div className="flex gap-[8px] items-center w-full">
      <img className="h-10 w-10" src={image} alt={name} />
      <div className="w-full"> 
        <Flex vertical gap="small" className="w-full">
          <Progress percent={progressPercent} size="small" className="w-full" />
        </Flex>
        <p className="text-sans-500-14 text-[#818B8F]">{caseNumber} Cases</p>
      </div>
    </div>
  );
};

export default Clients_progress;
