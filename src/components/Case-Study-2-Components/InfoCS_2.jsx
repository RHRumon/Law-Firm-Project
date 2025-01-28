import "../../../src/style/Style.css";

const InfoCS_2 = ({ infoCS2 }) => {
  let { number, title, description1, description2 } = infoCS2;

  return (
    <div className="flex big-mid:flex-row flex-col justify-between items-start big-mid:items-center md:mt-[40px] mt-[18px]">
      <div className="pl-2">
        <h1 className="header-2">
          {number}. {title}
        </h1>
        <ul class="list-disc pl-6 space-y-2 work-sans text-base">
          <li>{description1}</li>
          <li>{description2}</li>
        </ul>
      </div>
    </div>
  );
};

export default InfoCS_2;
