import { GiStonePile } from "react-icons/gi";
import { GiRoundStar } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import type { ReactNode } from "react";

interface BasicDetail {
  detailName: string;
  value: string;
}

function BasicDetail({ detailName, value }: BasicDetail) {
  const specifyIcon = (): ReactNode => {
    if (detailName === "location") return <FaLocationDot />;
    else if (detailName === "rock") return <GiStonePile />;
    else return <GiRoundStar />;
  };

  return (
    <div
      id="basic-detail-container"
      className="flex items-center mr-2.5 font-light text-sm"
    >
      {specifyIcon()}
      <p id="basic-detail-paragraph" className="ml-0.5">
        {value}
      </p>
    </div>
  );
}

export default BasicDetail;
